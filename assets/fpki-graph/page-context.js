(() => {
  const shell=document.getElementById('fpki-graph-shell'), frame=document.getElementById('fpki-map-frame'), button=document.getElementById('fpki-expand');
  if(!shell||!frame||!button)return;
  let expanded=false, lastHeight=700, scrollPosition=0, currentSearch=location.search;
  const widgetURL=new URL(frame.dataset.widgetSrc,location.href);widgetURL.search=location.search;
  if(frame.src!==widgetURL.href)frame.src=widgetURL.href;
  function commitState(source,search,replace=false){
    if(source!==frame.contentWindow||typeof search!=='string')return;
    const p=new URLSearchParams(search),safe=new URLSearchParams();
    for(const k of ['ca','view'])if(p.has(k))safe.set(k,p.get(k));
    const url=location.pathname+'?'+safe+location.hash;
    if(url!==location.pathname+location.search+location.hash)history[replace?'replaceState':'pushState']({},'',url);
    currentSearch=location.search;
  }
  // Commit navigation synchronously so browser Back sees the current selection.
  window.fpkiCommitState=commitState;
  function presentation(){
    if(expanded){
      const vv=window.visualViewport;
      shell.style.setProperty('--visible-height',(vv?.height||innerHeight)+'px');
      shell.style.setProperty('--visible-top',(vv?.offsetTop||0)+'px');
    }
    frame.contentWindow?.postMessage({type:'fpki-presentation',expanded,width:frame.clientWidth,height:frame.clientHeight},location.origin);
  }
  function toggle(){
    if(!expanded){
      scrollPosition=scrollY; shell.close(); shell.classList.add('is-expanded');
      expanded=true; document.documentElement.classList.add('graph-expanded'); shell.showModal();
      button.textContent='Return to page ↙';
    }else{
      expanded=false; shell.close(); shell.classList.remove('is-expanded'); shell.show();
      document.documentElement.classList.remove('graph-expanded'); frame.style.height=lastHeight+'px';
      button.textContent='Expand graph ↗'; window.scrollTo({top:scrollPosition,behavior:'instant'});
    }
    button.setAttribute('aria-expanded',String(expanded));button.focus({preventScroll:true});
    requestAnimationFrame(presentation);
  }
  button.addEventListener('click',toggle);
  shell.addEventListener('cancel',event=>{event.preventDefault();if(expanded)toggle();});
  addEventListener('message',event=>{
    if(event.origin!==location.origin||event.source!==frame.contentWindow||!event.data)return;
    const d=event.data;
    if(d.type==='fpki-height'&&Number.isFinite(d.height)){
      lastHeight=Math.max(560,Math.min(3000,Math.ceil(d.height)));
      if(!expanded&&Math.abs(frame.clientHeight-lastHeight)>1)frame.style.height=lastHeight+'px';
    }
    if(d.type==='fpki-ready')presentation();
    if(d.type==='fpki-close-expanded'&&expanded)toggle();
    if(d.type==='fpki-state')commitState(event.source,d.search,!!d.replace);
  });
  addEventListener('popstate',()=>{
    if(location.search!==currentSearch){currentSearch=location.search;frame.contentWindow?.postMessage({type:'fpki-restore',search:location.search},location.origin);}
  });
  new ResizeObserver(()=>requestAnimationFrame(presentation)).observe(frame);
  window.visualViewport?.addEventListener('resize',presentation);
  addEventListener('resize',presentation);
})();
