import{r as h,j as b}from"./input.js";import{app as o}from"/scripts/app.js";import{a7 as y,j as E,aq as C,ar as T,E as u,p as W,as as _,C as i,at as A,B as D}from"./App-6ewA_AYf.js";import{u as w}from"./useDebounceFn-ld478fd0.js";import"/scripts/api.js";function N(){const{isDirty:k,setIsDirty:l,setRoute:d,saveCurWorkflow:v}=h.useContext(y),f=E();h.useEffect(()=>{const s=t=>{var r;if(document.visibilityState==="hidden")return;const e=_(t);if(e)switch(t.preventDefault(),window.dispatchEvent(new CustomEvent(T,{detail:{shortcutType:e}})),e){case u.SAVE:v();break;case u.SAVE_AS:d("saveAsModal");break;case u.openSpotlightSearch:d("spotlightSearch");break}else(r=t.target)!=null&&r.matches("input, textarea")&&Object.keys(o.canvas.selected_nodes??{}).length&&c()},a=o.canvas.onAfterChange;o.graph.onAfterChange=function(){a==null||a.apply(this,arguments),c()};const n=o.graph.onConfigure;return o.graph.onConfigure=function(){n==null||n.apply(this,arguments),setTimeout(()=>{var e,r;C(o.graph.serialize(),JSON.parse(((r=(e=i)==null?void 0:e.curWorkflow)==null?void 0:r.json)??"{}"))||c()},1e3)},document.addEventListener("click",t=>{Object.keys(o.canvas.selected_nodes??{}).length&&(o.canvas.node_over!=null||o.canvas.node_capturing_input!=null||o.canvas.node_widget!=null)&&c()}),document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[]);const g=async()=>{var a,n,t,e;if(!((n=(a=i)==null?void 0:a.curWorkflow)!=null&&n.id))return;const s=JSON.stringify(o.graph.serialize());s!=null&&await((t=i)==null?void 0:t.updateFlow(i.curWorkflow.id,{json:s})),(e=A)==null||e.create({workflowID:i.curWorkflow.id,isAutoSave:!0,json:s}),l(!1),f({position:"bottom-left",duration:1e3,render:()=>b.jsx(D,{color:"white",p:3,children:"Auto saved"})})},[m,j]=w(g,1e3),S=async()=>{var a,n,t,e,r,p;if((n=(a=i)==null?void 0:a.curWorkflow)!=null&&n.saveLock)return;const s=await((t=W)==null?void 0:t.getSetting("autoSave"));if(!s){!k&&l(!0);return}(r=(e=i)==null?void 0:e.curWorkflow)!=null&&r.id&&s&&(await((p=i)==null?void 0:p.latestVersionCheck())?m():f({title:"Your changes cannot be saved!",description:"You are working on an outdated version. This workflow is changed by another tab. Please refresh to get the latest version.",status:"warning",isClosable:!0,duration:null}))},[c,x]=w(S,500);return null}export{N as default};
