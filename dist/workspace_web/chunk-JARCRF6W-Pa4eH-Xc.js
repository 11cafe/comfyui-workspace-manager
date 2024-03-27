import{b as de,r as o,j as u,g as I,d as $,e as z,y as ue,n,s as m,m as te,a6 as W,f as ae,l as fe,o as me,H as he,h as ke}from"./input.js";import{ap as be}from"./App-6ewA_AYf.js";import{t as pe}from"./index-pz0vT7Or.js";var[Ne,ve]=de({name:"CheckboxGroupContext",strict:!1});function Ce(s){const[l,t]=o.useState(s),[a,f]=o.useState(!1);return s!==l&&(f(!0),t(s)),a}function ye(s){return u.jsx(I.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...s,children:u.jsx("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}function ge(s){return u.jsx(I.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...s,children:u.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function xe(s){const{isIndeterminate:l,isChecked:t,...a}=s,f=l?ge:ye;return t||l?u.jsx(I.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:u.jsx(f,{...a})}):null}var Ie={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};function we(s,l=[]){const t=Object.assign({},s);for(const a of l)a in t&&delete t[a];return t}function Se(s={}){const l=be(s),{isDisabled:t,isReadOnly:a,isRequired:f,isInvalid:r,id:b,onBlur:P,onFocus:A,"aria-describedby":C}=l,{defaultChecked:y,isChecked:g,isFocusable:D,onChange:R,isIndeterminate:c,name:x,value:M,tabIndex:N=void 0,"aria-label":_,"aria-labelledby":j,"aria-invalid":p,...q}=s,F=we(q,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),E=$(R),K=$(P),L=$(A),[w,T]=o.useState(!1),[v,U]=o.useState(!1),[B,X]=o.useState(!1),[G,S]=o.useState(!1);o.useEffect(()=>pe(T),[]);const h=o.useRef(null),[J,ne]=o.useState(!0),[oe,H]=o.useState(!!y),V=g!==void 0,i=V?g:oe,Q=o.useCallback(e=>{if(a||t){e.preventDefault();return}V||H(i?e.target.checked:c?!0:e.target.checked),E==null||E(e)},[a,t,i,V,c,E]);z(()=>{h.current&&(h.current.indeterminate=!!c)},[c]),ue(()=>{t&&U(!1)},[t,U]),z(()=>{const e=h.current;if(!(e!=null&&e.form))return;const d=()=>{H(!!y)};return e.form.addEventListener("reset",d),()=>{var k;return(k=e.form)==null?void 0:k.removeEventListener("reset",d)}},[]);const Y=t&&!D,Z=o.useCallback(e=>{e.key===" "&&S(!0)},[S]),ee=o.useCallback(e=>{e.key===" "&&S(!1)},[S]);z(()=>{if(!h.current)return;h.current.checked!==i&&H(h.current.checked)},[h.current]);const se=o.useCallback((e={},d=null)=>{const k=O=>{v&&O.preventDefault(),S(!0)};return{...e,ref:d,"data-active":n(G),"data-hover":n(B),"data-checked":n(i),"data-focus":n(v),"data-focus-visible":n(v&&w),"data-indeterminate":n(c),"data-disabled":n(t),"data-invalid":n(r),"data-readonly":n(a),"aria-hidden":!0,onMouseDown:m(e.onMouseDown,k),onMouseUp:m(e.onMouseUp,()=>S(!1)),onMouseEnter:m(e.onMouseEnter,()=>X(!0)),onMouseLeave:m(e.onMouseLeave,()=>X(!1))}},[G,i,t,v,w,B,c,r,a]),re=o.useCallback((e={},d=null)=>({...e,ref:d,"data-active":n(G),"data-hover":n(B),"data-checked":n(i),"data-focus":n(v),"data-focus-visible":n(v&&w),"data-indeterminate":n(c),"data-disabled":n(t),"data-invalid":n(r),"data-readonly":n(a)}),[G,i,t,v,w,B,c,r,a]),ie=o.useCallback((e={},d=null)=>({...F,...e,ref:te(d,k=>{k&&ne(k.tagName==="LABEL")}),onClick:m(e.onClick,()=>{var k;J||((k=h.current)==null||k.click(),requestAnimationFrame(()=>{var O;(O=h.current)==null||O.focus({preventScroll:!0})}))}),"data-disabled":n(t),"data-checked":n(i),"data-invalid":n(r)}),[F,t,i,r,J]),le=o.useCallback((e={},d=null)=>({...e,ref:te(h,d),type:"checkbox",name:x,value:M,id:b,tabIndex:N,onChange:m(e.onChange,Q),onBlur:m(e.onBlur,K,()=>U(!1)),onFocus:m(e.onFocus,L,()=>U(!0)),onKeyDown:m(e.onKeyDown,Z),onKeyUp:m(e.onKeyUp,ee),required:f,checked:i,disabled:Y,readOnly:a,"aria-label":_,"aria-labelledby":j,"aria-invalid":p?!!p:r,"aria-describedby":C,"aria-disabled":t,style:Ie}),[x,M,b,Q,K,L,Z,ee,f,i,Y,a,_,j,p,r,C,t,N]),ce=o.useCallback((e={},d=null)=>({...e,ref:d,onMouseDown:m(e.onMouseDown,Pe),"data-disabled":n(t),"data-checked":n(i),"data-invalid":n(r)}),[i,t,r]);return{state:{isInvalid:r,isFocused:v,isChecked:i,isActive:G,isHovered:B,isIndeterminate:c,isDisabled:t,isReadOnly:a,isRequired:f},getRootProps:ie,getCheckboxProps:se,getIndicatorProps:re,getInputProps:le,getLabelProps:ce,htmlProps:F}}function Pe(s){s.preventDefault(),s.stopPropagation()}var Ae={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},De={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},Re=W({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),_e=W({from:{opacity:0},to:{opacity:1}}),je=W({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),Fe=ae(function(l,t){const a=ve(),f={...a,...l},r=fe("Checkbox",f),b=me(l),{spacing:P="0.5rem",className:A,children:C,iconColor:y,iconSize:g,icon:D=u.jsx(xe,{}),isChecked:R,isDisabled:c=a==null?void 0:a.isDisabled,onChange:x,inputProps:M,...N}=b;let _=R;a!=null&&a.value&&b.value&&(_=a.value.includes(b.value));let j=x;a!=null&&a.onChange&&b.value&&(j=he(a.onChange,x));const{state:p,getInputProps:q,getCheckboxProps:F,getLabelProps:E,getRootProps:K}=Se({...N,isDisabled:c,isChecked:_,onChange:j}),L=Ce(p.isChecked),w=o.useMemo(()=>({animation:L?p.isIndeterminate?`${_e} 20ms linear, ${je} 200ms linear`:`${Re} 200ms linear`:void 0,fontSize:g,color:y,...r.icon}),[y,g,L,p.isIndeterminate,r.icon]),T=o.cloneElement(D,{__css:w,isIndeterminate:p.isIndeterminate,isChecked:p.isChecked});return u.jsxs(I.label,{__css:{...De,...r.container},className:ke("chakra-checkbox",A),...K(),children:[u.jsx("input",{className:"chakra-checkbox__input",...q(M,t)}),u.jsx(I.span,{__css:{...Ae,...r.control},className:"chakra-checkbox__control",...F(),children:T}),C&&u.jsx(I.span,{className:"chakra-checkbox__label",...E(),__css:{marginStart:P,...r.label},children:C})]})});Fe.displayName="Checkbox";var Ee=ae(function(l,t){const{templateAreas:a,gap:f,rowGap:r,columnGap:b,column:P,row:A,autoFlow:C,autoRows:y,templateRows:g,autoColumns:D,templateColumns:R,...c}=l,x={display:"grid",gridTemplateAreas:a,gridGap:f,gridRowGap:r,gridColumnGap:b,gridAutoColumns:D,gridColumn:P,gridRow:A,gridAutoFlow:C,gridAutoRows:y,gridTemplateRows:g,gridTemplateColumns:R};return u.jsx(I.div,{ref:t,__css:x,...c})});Ee.displayName="Grid";export{Fe as C,Ee as G,Se as u};
