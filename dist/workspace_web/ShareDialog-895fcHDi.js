import{r as a,m as he,x as ae,b as fe,f as re,j as e,g as Q,h as pe,n as y,s as M,q as Y,l as ge,o as me,H as ve,ae as we,i as A,M as be,N as ke,O as xe,Q as ye,S as Ce}from"./input.js";import{aK as je,h as Se,B as Ie,K as De,ae as Pe,H as J,l as X,ac as Re,ab as ie,j as _e,p as ne,k as le,aL as Fe,o as Me,F as Ee,aM as Ne,C as q,aN as U,aO as Le,aP as We,aQ as Te,T as Oe,aR as Ve}from"./App-6ewA_AYf.js";import{app as He}from"/scripts/app.js";import{t as Ke}from"./index-pz0vT7Or.js";import{L as Be}from"./chunk-K7XRJ7NL-Vyo84f0U.js";import{I as qe}from"./IconCopy-uTFxeBO4.js";import"/scripts/api.js";function Ae(t){return t&&ae(t)&&ae(t.target)}function $e(t={}){const{onChange:p,value:c,defaultValue:s,name:d,isDisabled:h,isFocusable:u,isNative:g,...f}=t,[w,C]=a.useState(s||""),b=typeof c<"u",j=b?c:w,k=a.useRef(null),S=a.useCallback(()=>{const n=k.current;if(!n)return;let i="input:not(:disabled):checked";const I=n.querySelector(i);if(I){I.focus();return}i="input:not(:disabled)";const o=n.querySelector(i);o==null||o.focus()},[]),m=`radio-${a.useId()}`,N=d||m,R=a.useCallback(n=>{const i=Ae(n)?n.target.value:n;b||C(i),p==null||p(String(i))},[p,b]),H=a.useCallback((n={},i=null)=>({...n,ref:he(i,k),role:"radiogroup"}),[]),_=a.useCallback((n={},i=null)=>({...n,ref:i,name:N,[g?"checked":"isChecked"]:j!=null?n.value===j:void 0,onChange(o){R(o)},"data-radiogroup":!0}),[g,N,R,j]);return{getRootProps:H,getRadioProps:_,name:N,ref:k,focus:S,setValue:C,value:j,onChange:R,isDisabled:h,isFocusable:u,htmlProps:f}}var[Ge,ce]=fe({name:"RadioGroupContext",strict:!1}),de=re((t,p)=>{const{colorScheme:c,size:s,variant:d,children:h,className:u,isDisabled:g,isFocusable:f,...w}=t,{value:C,onChange:b,getRootProps:j,name:k,htmlProps:S}=$e(w),E=a.useMemo(()=>({name:k,size:s,onChange:b,colorScheme:c,value:C,variant:d,isDisabled:g,isFocusable:f}),[k,s,b,c,C,d,g,f]);return e.jsx(Ge,{value:E,children:e.jsx(Q.div,{...j(S,p),className:pe("chakra-radio-group",u),children:h})})});de.displayName="RadioGroup";var ze={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};function Ue(t={}){const{defaultChecked:p,isChecked:c,isFocusable:s,isDisabled:d,isReadOnly:h,isRequired:u,onChange:g,isInvalid:f,name:w,value:C,id:b,"data-radiogroup":j,"aria-describedby":k,...S}=t,E=`radio-${a.useId()}`,m=je(),R=!!ce()||!!j;let _=!!m&&!R?m.id:E;_=b??_;const n=d??(m==null?void 0:m.isDisabled),i=h??(m==null?void 0:m.isReadOnly),I=u??(m==null?void 0:m.isRequired),o=f??(m==null?void 0:m.isInvalid),[l,P]=a.useState(!1),[v,D]=a.useState(!1),[x,L]=a.useState(!1),[W,T]=a.useState(!1),[$,G]=a.useState(!!p),K=typeof c<"u",F=K?c:$;a.useEffect(()=>Ke(P),[]);const O=a.useCallback(r=>{if(i||n){r.preventDefault();return}K||G(r.target.checked),g==null||g(r)},[K,n,i,g]),B=a.useCallback(r=>{r.key===" "&&T(!0)},[T]),z=a.useCallback(r=>{r.key===" "&&T(!1)},[T]),ee=a.useCallback((r={},V=null)=>({...r,ref:V,"data-active":y(W),"data-hover":y(x),"data-disabled":y(n),"data-invalid":y(o),"data-checked":y(F),"data-focus":y(v),"data-focus-visible":y(v&&l),"data-readonly":y(i),"aria-hidden":!0,onMouseDown:M(r.onMouseDown,()=>T(!0)),onMouseUp:M(r.onMouseUp,()=>T(!1)),onMouseEnter:M(r.onMouseEnter,()=>L(!0)),onMouseLeave:M(r.onMouseLeave,()=>L(!1))}),[W,x,n,o,F,v,i,l]),{onFocus:oe,onBlur:se}=m??{},ue=a.useCallback((r={},V=null)=>{const te=n&&!s;return{...r,id:_,ref:V,type:"radio",name:w,value:C,onChange:M(r.onChange,O),onBlur:M(se,r.onBlur,()=>D(!1)),onFocus:M(oe,r.onFocus,()=>D(!0)),onKeyDown:M(r.onKeyDown,B),onKeyUp:M(r.onKeyUp,z),checked:F,disabled:te,readOnly:i,required:I,"aria-invalid":Y(o),"aria-disabled":Y(te),"aria-required":Y(I),"data-readonly":y(i),"aria-describedby":k,style:ze}},[n,s,_,w,C,O,se,oe,B,z,F,i,I,o,k]);return{state:{isInvalid:o,isFocused:v,isChecked:F,isActive:W,isHovered:x,isDisabled:n,isReadOnly:i,isRequired:I},getCheckboxProps:ee,getRadioProps:ee,getInputProps:ue,getLabelProps:(r={},V=null)=>({...r,ref:V,onMouseDown:M(r.onMouseDown,Qe),"data-disabled":y(n),"data-checked":y(F),"data-invalid":y(o)}),getRootProps:(r,V=null)=>({...r,ref:V,"data-disabled":y(n),"data-checked":y(F),"data-invalid":y(o)}),htmlProps:S}}function Qe(t){t.preventDefault(),t.stopPropagation()}function Je(t,p){const c={},s={};for(const[d,h]of Object.entries(t))p.includes(d)?c[d]=h:s[d]=h;return[c,s]}var Z=re((t,p)=>{var c;const s=ce(),{onChange:d,value:h}=t,u=ge("Radio",{...s,...t}),g=me(t),{spacing:f="0.5rem",children:w,isDisabled:C=s==null?void 0:s.isDisabled,isFocusable:b=s==null?void 0:s.isFocusable,inputProps:j,...k}=g;let S=t.isChecked;(s==null?void 0:s.value)!=null&&h!=null&&(S=s.value===h);let E=d;s!=null&&s.onChange&&h!=null&&(E=ve(s.onChange,d));const m=(c=t==null?void 0:t.name)!=null?c:s==null?void 0:s.name,{getInputProps:N,getCheckboxProps:R,getLabelProps:H,getRootProps:_,htmlProps:n}=Ue({...k,isChecked:S,isFocusable:b,isDisabled:C,onChange:E,name:m}),[i,I]=Je(n,we),o=R(I),l=N(j,p),P=H(),v=Object.assign({},i,_()),D={display:"inline-flex",alignItems:"center",verticalAlign:"top",cursor:"pointer",position:"relative",...u.container},x={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,...u.control},L={userSelect:"none",marginStart:f,...u.label};return e.jsxs(Q.label,{className:"chakra-radio",...v,__css:D,children:[e.jsx("input",{className:"chakra-radio__input",...l}),e.jsx(Q.span,{className:"chakra-radio__control",...o,__css:x}),w&&e.jsx(Q.span,{className:"chakra-radio__label",...P,__css:L,children:w})]})});Z.displayName="Radio";var Ye=Se("cloud","IconCloud",[["path",{d:"M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878",key:"svg-0"}]]);function Xe({options:t,value:p,onChange:c}){const[s,d]=a.useState(!1),h=a.useRef(null),u=t.find(f=>f.value===p);a.useEffect(()=>{const f=w=>{h.current&&!h.current.contains(w.target)&&d(!1)};return document.addEventListener("mousedown",f),()=>{document.removeEventListener("mousedown",f)}},[h]);const g=()=>d(!s);return e.jsxs(Ie,{position:"relative",children:[e.jsx(A,{onClick:g,rightIcon:e.jsx(De,{}),leftIcon:u==null?void 0:u.icon,children:u==null?void 0:u.label}),s&&e.jsx(Pe,{gap:4,ref:h,mt:"2",shadow:"md",borderWidth:"1px",p:"2",position:"absolute",zIndex:100,children:t.map(f=>e.jsx(A,{onClick:()=>{d(!1),c(f.value)},leftIcon:f.icon,justifyContent:"flex-start",variant:"ghost",width:"full",children:f.label},f.label))})]})}function Ze({version:t,cloudHost:p,cloudWorkflowID:c}){const s=t,d=e.jsxs(J,{spacing:4,alignItems:"center",children:[e.jsx(X,{children:s.name}),e.jsx(X,{color:"GrayText",children:Re(s.createTime,!1)}),s.cloudID&&c&&e.jsx("a",{href:p+"/workflow/"+c+"/"+s.cloudID,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:e.jsx(A,{size:"xs",colorScheme:"teal",variant:"outline",leftIcon:e.jsx(Ye,{}),rightIcon:e.jsx(ie,{size:18}),children:"Shared"})})]});return t.cloudID?e.jsx(e.Fragment,{children:d}):e.jsx(Z,{value:s.id,mb:5,children:d},s.id)}function ho({onClose:t}){var i,I;const[p,c]=a.useState("v"+eo()),[s,d]=a.useState([]),[h,u]=a.useState(!1),[g,f]=a.useState(""),[w,C]=a.useState("PRIVATE"),[b,j]=a.useState("new_version"),k=a.useRef(""),[S,E]=a.useState(),m=_e(),N=async o=>{var L,W;const l=o.data;if(o.origin!==k.current||l.type!=="share_workflow_success")return;const P=l.localWorkflowID,v=l.localVersionID,D=l.version.id,x=l.version.workflowID;x&&P&&await((L=q)==null?void 0:L.updateMetaInfo(P,{cloudID:x,cloudOrigin:o.origin,privacy:w})),v&&D&&await((W=U)==null?void 0:W.update(v,{cloudID:D,cloudOrigin:o.origin})),R(),window.open(k.current+"/workflow/"+x+"/"+D,"_blank"),u(!1)};a.useEffect(()=>(R(),window.addEventListener("message",N),()=>{window.removeEventListener("message",N)}),[]);const R=async()=>{var P,v,D;const o=await((P=ne)==null?void 0:P.getSetting("cloudHost"));o&&(f(o),k.current=o);const l=((v=q)==null?void 0:v.curWorkflow)??void 0;E(l),l!=null&&l.cloudID&&l.cloudOrigin&&Te(l).then(x=>{C(x)}),(D=U)==null||D.listByWorkflowID(l.id).then(x=>{d(x)})},H=o=>{navigator.clipboard.writeText(o).then(()=>{m({title:"Copied to clipboard",status:"success",duration:2e3,isClosable:!0})}).catch(l=>{console.error("Failed to copy text: ",l)})},_=async()=>{var G,K,F;u(!0);const o=Le(32),l=await((G=ne)==null?void 0:G.getSetting("cloudHost"));let P,v;try{if(P=We(),b==="new_version"?v=await((K=U)==null?void 0:K.add({workflowID:S.id,name:p,createTime:Date.now(),json:JSON.stringify(He.graph.serialize())})):v=await((F=U)==null?void 0:F.get(b)),!v){alert(`Failed to find version: ${b}, please try again.`),u(!1);return}}catch(O){console.error(O),u(!1),alert("Failed to share workflow, please try again.");return}const D=window.location.protocol,x=window.location.host,L=`${D}//${x}`,W=l+`/share_workflow_confirm/${o}?redirectUrl=${L}`,T=window.open(W,"Share Workflow","width=800,height=800"),$=O=>{var B;if(O.origin===l&&O.data==="child_ready"){const z=(B=q)==null?void 0:B.curWorkflow;T.postMessage({workflow:z,version:v,nodeDefs:P,privacy:w},l),window.removeEventListener("message",$)}};window.addEventListener("message",$)},n=(I=(i=q)==null?void 0:i.curWorkflow)==null?void 0:I.cloudID;return e.jsxs(be,{isOpen:!0,onClose:t,size:"lg",children:[e.jsx(ke,{}),e.jsxs(xe,{width:["98%","90%","50%"],maxWidth:"600px",children:[e.jsxs(ye,{children:['Share "',S==null?void 0:S.name,'"']}),e.jsxs(Ce,{pb:10,children:[e.jsxs(le,{gap:5,children:[n==null?e.jsx(Xe,{options:Fe,value:w,onChange:o=>{C(o)}}):e.jsx(Oe,{variant:"outline",borderRadius:"full",width:"fit-content",children:e.jsx(Ve,{privacy:w,showEmoji:!0})}),n&&e.jsxs(J,{spacing:2,color:"teal.400",children:[e.jsxs(Be,{href:g+"/workflow/"+n,isExternal:!0,children:[g+"/workflow/"+n," ",e.jsx(ie,{size:20,style:{display:"inline-block",verticalAlign:"middle"}})]}),e.jsx(A,{width:"180px",size:"sm",leftIcon:e.jsx(qe,{}),onClick:()=>{var o,l;H(g+"/workflow/"+((l=(o=q)==null?void 0:o.curWorkflow)==null?void 0:l.cloudID))},children:"Copy link"})]}),e.jsx(X,{children:"Choose a version to share:"}),e.jsx(de,{gap:4,onChange:o=>{j(o)},value:b,children:e.jsxs(le,{children:[e.jsxs(J,{mb:5,alignItems:"center",children:[e.jsx(Z,{value:"new_version"},"new_version"),e.jsx(Me,{value:p,width:"60%",onFocus:()=>{j("new_version")},onChange:o=>{c(o.target.value)}}),e.jsx(Ee,{color:"green",children:e.jsx(Ne,{colorScheme:"purple",children:"New version"})})]}),s.slice(0,4).map(o=>e.jsx(Ze,{version:o,cloudHost:g,cloudWorkflowID:n??null},o.id))]})})]}),e.jsx(J,{justifyContent:"flex-end",mt:16,children:e.jsx(A,{colorScheme:"teal",onClick:_,isDisabled:h,children:h?"Sharing":"Share"})})]})]})]})}function eo(){const t=new Date,p=t.getFullYear(),c=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${p}-${c}-${s}`}export{ho as default};
