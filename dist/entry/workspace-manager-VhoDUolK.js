const h="modulepreload",m=function(i){return"/"+i},u={},v=function(a,n,d){let c=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link");c=Promise.all(n.map(e=>{if(e=m(e),e in u)return;u[e]=!0;const o=e.endsWith(".css"),f=o?'[rel="stylesheet"]':"";if(!!d)for(let s=r.length-1;s>=0;s--){const l=r[s];if(l.href===e&&(!o||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${f}`))return;const t=document.createElement("link");if(t.rel=o?"stylesheet":h,o||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),o)return new Promise((s,l)=>{t.addEventListener("load",s),t.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})}))}return c.then(()=>a()).catch(r=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=r,window.dispatchEvent(e),!e.defaultPrevented)throw r})},E=document.body,b={childList:!0,subtree:!0},y=function(i,a){for(const n of i)n.type==="childList"&&n.addedNodes.forEach(d=>{d.nodeName==="CANVAS"&&(v(()=>import("../workspace/main--9dd-yjH.js"),__vite__mapDeps([])).then(({setupReact:c})=>{c()}),a.disconnect())})},g=new MutationObserver(y);g.observe(E,b);
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
