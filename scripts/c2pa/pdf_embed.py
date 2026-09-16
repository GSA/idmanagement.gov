from pathlib import Path
from io import BytesIO
import hashlib
from pypdf import PdfWriter
from pypdf.generic import NameObject,ArrayObject,DictionaryObject
from c2pie.interface import *
def sign(data,key,cert):
 a=c2pie_GenerateAssertion(C2PA_AssertionTypes.creative_work,{'@context':'https://schema.org','@type':'CreativeWork','publisher':{'@type':'Organization','name':'GSA IDManagement.gov'},'description':'Published by GSA IDManagement.gov; development Content Credentials.'})
 m=c2pie_GenerateManifest([a,c2pie_GenerateHashDataAssertion(len(data),hashlib.sha256(data).digest())],key,cert)
 m.manifests[0].claim.claim_generator='GSA IDManagement.gov / c2pie 0.1.1'
 m.manifests[0].claim.set_format('application/pdf')
 length=0
 for attempt in range(10):
  m.set_hash_data_length_for_all(length); payload=m.serialize()
  writer=PdfWriter(BytesIO(data),incremental=True)
  if writer._info is not None:
   writer._info_obj = writer._add_object(DictionaryObject(writer._info))
  attachment=writer.add_attachment('content-credentials.c2pa',payload)
  attachment.associated_file_relationship=NameObject('/C2PA_Manifest')
  attachment.pdf_object['/EF']['/F'][NameObject('/Subtype')]=NameObject('/application/c2pa')
  associations=ArrayObject(list(writer.root_object.get('/AF',[])))
  associations.append(writer._add_object(attachment.pdf_object))
  writer.root_object[NameObject('/AF')]=associations
  output=BytesIO();writer.write(output);result=output.getvalue()
  assert result.startswith(data),'Original PDF bytes changed'
  actual=len(result)-len(data)
  if actual==length:return result
  length=actual
 raise ValueError('Manifest size did not converge')
