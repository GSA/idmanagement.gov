#!/usr/bin/env python3
"""Sign only reviewed PDFs, preserving originals and verifying before replacement."""
import concurrent.futures,hashlib,json,os,shutil,subprocess,time
from datetime import datetime,timezone
from pathlib import Path
from io import BytesIO
from pypdf import PdfReader
from pypdf.generic import IndirectObject,DictionaryObject,ArrayObject,StreamObject
from pdf_embed import sign
ROOT=Path(__file__).resolve().parents[2]
OUT=ROOT.parent
WORK=ROOT/'.c2pa-work/pdf-signing'
TOOL=ROOT/'.c2pa-work/bin/c2patool/c2patool'
KEY=Path(os.environ.get('C2PA_PDF_PRIVATE_KEY',ROOT/'.c2pa-work/bin/c2patool/sample/ps256.pem'))
CERT=Path(os.environ.get('C2PA_PDF_SIGN_CERT',ROOT/'.c2pa-work/bin/c2patool/sample/ps256.pub'))
def digest(data):return hashlib.sha256(data).hexdigest()
def inspect(path):
 r=subprocess.run([str(TOOL),str(path)],capture_output=True,text=True,timeout=120)
 if r.returncode:raise ValueError(r.stderr.strip())
 model=json.loads(r.stdout)
 codes={x['code'] for x in model['validation_results']['activeManifest']['success']}
 failures=model.get('validation_status',[])
 if not {'claimSignature.validated','assertion.dataHash.match'}<=codes or any(x['code']!='signingCredential.untrusted' for x in failures):raise ValueError('C2PA signature or binding verification failed')
 return model

def snapshot(value,seen=None):
 if seen is None:seen=set()
 if isinstance(value,IndirectObject):
  key=(value.idnum,value.generation)
  if key in seen:return ['ref',*key]
  seen.add(key);return ['object',*key,snapshot(value.get_object(),seen)]
 if isinstance(value,DictionaryObject):
  result={str(k):snapshot(v,seen) for k,v in sorted(value.items()) if k not in ('/Length','/Filter','/DecodeParms') or not isinstance(value,StreamObject)}
  if isinstance(value,StreamObject):result['streamSha256']=digest(value.get_data())
  return result
 if isinstance(value,(ArrayObject,list)):return [snapshot(v,seen) for v in value]
 if isinstance(value,bytes):return ['bytes',value.hex()]
 return str(value)

def verify_preservation(original,signed):
 assert signed.startswith(original),'Original PDF prefix changed'
 a=PdfReader(BytesIO(original));b=PdfReader(BytesIO(signed))
 assert not a.is_encrypted
 assert not a.get_fields(),'Unexpected form/signature field'
 assert not a.trailer['/Root'].get('/Perms'),'Unexpected certification permissions'
 assert len(a.pages)==len(b.pages)
 assert dict(a.metadata or {})==dict(b.metadata or {}),'Metadata changed'
 for k,v in a.trailer['/Root'].items():
  if k not in ('/Names','/AF'):
   assert snapshot(v)==snapshot(b.trailer['/Root'].raw_get(k)),f'Catalog structure changed: {k}'
 for k,v in a.trailer['/Root'].get('/Names',{}).get_object().items() if a.trailer['/Root'].get('/Names') else []:
  if k!='/EmbeddedFiles':assert snapshot(v)==snapshot(b.trailer['/Root']['/Names'].raw_get(k)),f'Names changed: {k}'
 for name in a.attachments:assert a.attachments[name]==b.attachments[name],f'Attachment changed: {name}'
 return len(a.pages)

def process(item):
 path=ROOT/item['path']; original=path.read_bytes();before=digest(original)
 result={'path':item['path'],'sourceSha256':before}
 try:
  if before!=item['unsignedSha256']:
   model=inspect(path)
   return {**result,'status':'already-current','outputSha256':before,'activeManifest':model['active_manifest']}
  output=WORK/(digest(item['path'].encode())+'.pdf')
  signed=sign(original,KEY.read_bytes(),CERT.read_bytes());output.write_bytes(signed)
  model=inspect(output);pages=verify_preservation(original,signed)
  backup=OUT/'C2PA_PDF_ORIGINALS'/item['path'];backup.parent.mkdir(parents=True,exist_ok=True)
  if backup.exists():assert digest(backup.read_bytes())==before
  else:shutil.copy2(path,backup)
  # Copy into a neighboring temporary file, then atomically replace only verified output.
  temporary=path.with_name('.'+path.name+'.c2pa-tmp');shutil.copy2(output,temporary);temporary.chmod(path.stat().st_mode);temporary.replace(path)
  return {**result,'status':'signed-and-verified','outputSha256':digest(signed),'sourceBytes':len(original),'outputBytes':len(signed),'pages':pages,'preservation':'Original bytes, catalog structure (including tags/page content), metadata and attachments preserved','activeManifest':model['active_manifest']}
 except Exception as e:return {**result,'status':'failed-signing','sourceUnchanged':digest(path.read_bytes())==before,'error':str(e)}

if __name__=='__main__':
 WORK.mkdir(parents=True,exist_ok=True)
 candidates=json.loads((ROOT/'scripts/c2pa/pdf-candidates.json').read_text())
 with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
  rows=[]
  for r in pool.map(process,candidates):
   rows.append(r)
   if len(rows)%10==0:print(f'PDF signing: {len(rows)}/{len(candidates)}',flush=True)
 counts={s:sum(r['status']==s for r in rows) for s in {r['status'] for r in rows}}
 report={'generatedAt':datetime.now(timezone.utc).isoformat(),'toolVersion':'c2pie 0.1.1; pypdf 6.18.1; c2patool 0.27.22 validation','certificateSha256':digest(CERT.read_bytes()),'testCredential':True,'counts':counts,'attempted':len(rows),'results':rows}
 text=json.dumps(report,indent=2)+'\n';(OUT/'C2PA_PDF_SIGNING_REPORT.json').write_text(text);(ROOT/'reports/c2pa-pdf-signing-report.json').write_text(text)
 lines=['# PDF C2PA signing report','',report['generatedAt'],'',str(counts),'','Uses a development RSA-PSS certificate; cryptographic validity does not imply public trust. c2pie signs the manifests; a custom incremental pypdf writer preserves document structure. Default c2pie embedding is not used because the pilot lost accessibility tags.','', 'Original unsigned files are backed up in C2PA_PDF_ORIGINALS beside this report.','', '| PDF | Result | SHA-256 | Detail |','| --- | --- | --- | --- |']
 lines += [f'| `{r["path"]}` | {r["status"]} | `{r.get("outputSha256",r["sourceSha256"])}` | {r.get("error",r.get("preservation","Existing C2PA signature verified"))} |' for r in rows]
 (OUT/'C2PA_PDF_SIGNING_REPORT.md').write_text('\n'.join(lines)+'\n');print(counts,flush=True)
 if any(r['status']=='failed-signing' for r in rows):raise SystemExit(1)
