import{b as Z,f as R,j as s,g as z,e as L,r as m,m as le,q as Ce,ab as Q,I as qt,L as ut,G as dt,ac as at,ad as se,k as ht,o as Oe,d as Te,x as Jt,E as Zt,n as Qt,V as en,h as tn,M as nn,N as an,O as sn,Q as on,R as rn,S as ln}from"./input.js";import{ai as cn,aj as mt,$ as un,h as he,F as b,ak as dn,I as O,n as hn,al as mn,B as fn,l as q,m as H,z as ft,a9 as xt,am as xn,a6 as gt,k as gn,H as ie,i as vn,a8 as vt,A as De,an as yn,C as bn}from"./App-QUpV9agO.js";import{c as Ae,p as Sn,r as st,v as ot,I as wn,N as pn,a as Pn,d as jn,e as kn,f as In,S as Cn,M as Tn,b as An}from"./MediaPreview-GeHSh-Vo.js";import{I as Mn,C as Be,G as _n}from"./chunk-JARCRF6W-lqcdSPNH.js";import{S as En}from"./chunk-3RSXBRAN-Rf54635q.js";import{L as Re}from"./chunk-K7XRJ7NL-DRLDc1uk.js";import"/scripts/app.js";import"/scripts/api.js";import"./index-pz0vT7Or.js";const yt=1/60*1e3,Nn=typeof performance<"u"?()=>performance.now():()=>Date.now(),bt=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(Nn()),yt);function Dn(e){let t=[],n=[],a=0,o=!1,l=!1;const i=new WeakSet,h={schedule:(r,c=!1,d=!1)=>{const u=d&&o,x=u?t:n;return c&&i.add(r),x.indexOf(r)===-1&&(x.push(r),u&&o&&(a=t.length)),r},cancel:r=>{const c=n.indexOf(r);c!==-1&&n.splice(c,1),i.delete(r)},process:r=>{if(o){l=!0;return}if(o=!0,[t,n]=[n,t],n.length=0,a=t.length,a)for(let c=0;c<a;c++){const d=t[c];d(r),i.has(d)&&(h.schedule(d),e())}o=!1,l&&(l=!1,h.process(r))}};return h}const Rn=40;let ze=!0,J=!1,$e=!1;const G={delta:0,timestamp:0},ee=["read","update","preRender","render","postRender"],me=ee.reduce((e,t)=>(e[t]=Dn(()=>J=!0),e),{}),zn=ee.reduce((e,t)=>{const n=me[t];return e[t]=(a,o=!1,l=!1)=>(J||Bn(),n.schedule(a,o,l)),e},{}),$n=ee.reduce((e,t)=>(e[t]=me[t].cancel,e),{});ee.reduce((e,t)=>(e[t]=()=>me[t].process(G),e),{});const On=e=>me[e].process(G),St=e=>{J=!1,G.delta=ze?yt:Math.max(Math.min(e-G.timestamp,Rn),1),G.timestamp=e,$e=!0,ee.forEach(On),$e=!1,J&&(ze=!1,bt(St))},Bn=()=>{J=!0,ze=!0,$e||bt(St)},rt=()=>G;var[Fn,fe]=Z({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[Kn,Fe]=Z({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[Vn,cs,Ln,Un]=cn(),wt=R(function(t,n){const{getButtonProps:a}=Fe(),o=a(t,n),i={display:"flex",alignItems:"center",width:"100%",outline:0,...fe().button};return s.jsx(z.button,{...o,className:L("chakra-accordion__button",t.className),__css:i})});wt.displayName="AccordionButton";function Hn(e){const{onChange:t,defaultIndex:n,index:a,allowMultiple:o,allowToggle:l,...i}=e;Yn(e),Xn(e);const h=Ln(),[r,c]=m.useState(-1);m.useEffect(()=>()=>{c(-1)},[]);const[d,u]=mt({value:a,defaultValue(){return o?n??[]:n??-1},onChange:t});return{index:d,setIndex:u,htmlProps:i,getAccordionItemProps:v=>{let w=!1;return v!==null&&(w=Array.isArray(d)?d.includes(v):d===v),{isOpen:w,onChange:S=>{if(v!==null)if(o&&Array.isArray(d)){const C=S?d.concat(v):d.filter(_=>_!==v);u(C)}else S?u(v):l&&u(-1)}}},focusedIndex:r,setFocusedIndex:c,descendants:h}}var[Gn,Ke]=Z({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function Wn(e){const{isDisabled:t,isFocusable:n,id:a,...o}=e,{getAccordionItemProps:l,setFocusedIndex:i}=Ke(),h=m.useRef(null),r=m.useId(),c=a??r,d=`accordion-button-${c}`,u=`accordion-panel-${c}`;qn(e);const{register:x,index:v,descendants:w}=Un({disabled:t&&!n}),{isOpen:y,onChange:S}=l(v===-1?null:v);Jn({isOpen:y,isDisabled:t});const C=()=>{S==null||S(!0)},_=()=>{S==null||S(!1)},V=m.useCallback(()=>{S==null||S(!y),i(v)},[v,i,y,S]),B=m.useCallback(E=>{const j={ArrowDown:()=>{const T=w.nextEnabled(v);T==null||T.node.focus()},ArrowUp:()=>{const T=w.prevEnabled(v);T==null||T.node.focus()},Home:()=>{const T=w.firstEnabled();T==null||T.node.focus()},End:()=>{const T=w.lastEnabled();T==null||T.node.focus()}}[E.key];j&&(E.preventDefault(),j(E))},[w,v]),p=m.useCallback(()=>{i(v)},[i,v]),P=m.useCallback(function(D={},j=null){return{...D,type:"button",ref:le(x,h,j),id:d,disabled:!!t,"aria-expanded":!!y,"aria-controls":u,onClick:Ce(D.onClick,V),onFocus:Ce(D.onFocus,p),onKeyDown:Ce(D.onKeyDown,B)}},[d,t,y,V,p,B,u,x]),ne=m.useCallback(function(D={},j=null){return{...D,ref:j,role:"region",id:u,"aria-labelledby":d,hidden:!y}},[d,y,u]);return{isOpen:y,isDisabled:t,isFocusable:n,onOpen:C,onClose:_,getButtonProps:P,getPanelProps:ne,htmlProps:o}}function Yn(e){const t=e.index||e.defaultIndex,n=t!=null&&!Array.isArray(t)&&e.allowMultiple;Q({condition:!!n,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`})}function Xn(e){Q({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}function qn(e){Q({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `})}function Jn(e){Q({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}function pt(e){const{isOpen:t,isDisabled:n}=Fe(),{reduceMotion:a}=Ke(),o=L("chakra-accordion__icon",e.className),l=fe(),i={opacity:n?.4:1,transform:t?"rotate(-180deg)":void 0,transition:a?void 0:"transform 0.2s",transformOrigin:"center",...l.icon};return s.jsx(qt,{viewBox:"0 0 24 24","aria-hidden":!0,className:o,__css:i,...e,children:s.jsx("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}pt.displayName="AccordionIcon";var Pt=R(function(t,n){const{children:a,className:o}=t,{htmlProps:l,...i}=Wn(t),r={...fe().container,overflowAnchor:"none"},c=m.useMemo(()=>i,[i]);return s.jsx(Kn,{value:c,children:s.jsx(z.div,{ref:n,...l,className:L("chakra-accordion__item",o),__css:r,children:typeof a=="function"?a({isExpanded:!!i.isOpen,isDisabled:!!i.isDisabled}):a})})});Pt.displayName="AccordionItem";var Zn=e=>e!=null&&parseInt(e.toString(),10)>0,lt={exit:{height:{duration:.2,ease:se.ease},opacity:{duration:.3,ease:se.ease}},enter:{height:{duration:.3,ease:se.ease},opacity:{duration:.4,ease:se.ease}}},Qn={exit:({animateOpacity:e,startingHeight:t,transition:n,transitionEnd:a,delay:o})=>{var l;return{...e&&{opacity:Zn(t)?1:0},height:t,transitionEnd:a==null?void 0:a.exit,transition:(l=n==null?void 0:n.exit)!=null?l:at.exit(lt.exit,o)}},enter:({animateOpacity:e,endingHeight:t,transition:n,transitionEnd:a,delay:o})=>{var l;return{...e&&{opacity:1},height:t,transitionEnd:a==null?void 0:a.enter,transition:(l=n==null?void 0:n.enter)!=null?l:at.enter(lt.enter,o)}}},jt=m.forwardRef((e,t)=>{const{in:n,unmountOnExit:a,animateOpacity:o=!0,startingHeight:l=0,endingHeight:i="auto",style:h,className:r,transition:c,transitionEnd:d,...u}=e,[x,v]=m.useState(!1);m.useEffect(()=>{const _=setTimeout(()=>{v(!0)});return()=>clearTimeout(_)},[]),Q({condition:Number(l)>0&&!!a,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const w=parseFloat(l.toString())>0,y={startingHeight:l,endingHeight:i,animateOpacity:o,transition:x?c:{enter:{duration:0}},transitionEnd:{enter:d==null?void 0:d.enter,exit:a?d==null?void 0:d.exit:{...d==null?void 0:d.exit,display:w?"block":"none"}}},S=a?n:!0,C=n||a?"enter":"exit";return s.jsx(ut,{initial:!1,custom:y,children:S&&s.jsx(dt.div,{ref:t,...u,className:L("chakra-collapse",r),style:{overflow:"hidden",display:"block",...h},custom:y,variants:Qn,initial:a?"exit":!1,animate:C,exit:"exit"})})});jt.displayName="Collapse";var kt=R(function(t,n){const{className:a,motionProps:o,...l}=t,{reduceMotion:i}=Ke(),{getPanelProps:h,isOpen:r}=Fe(),c=h(l,n),d=L("chakra-accordion__panel",a),u=fe();i||delete c.hidden;const x=s.jsx(z.div,{...c,__css:u.panel,className:d});return i?x:s.jsx(jt,{in:r,...o,children:x})});kt.displayName="AccordionPanel";var It=R(function({children:t,reduceMotion:n,...a},o){const l=ht("Accordion",a),i=Oe(a),{htmlProps:h,descendants:r,...c}=Hn(i),d=m.useMemo(()=>({...c,reduceMotion:!!n}),[c,n]);return s.jsx(Vn,{value:r,children:s.jsx(Gn,{value:d,children:s.jsx(Fn,{value:l,children:s.jsx(z.div,{ref:o,...h,className:L("chakra-accordion",a.className),__css:l.root,children:t})})})})});It.displayName="Accordion";var U=e=>e?"":void 0,Me=e=>e?!0:void 0,te=(...e)=>e.filter(Boolean).join(" ");function _e(...e){return function(n){e.some(a=>(a==null||a(n),n==null?void 0:n.defaultPrevented))}}function oe(e){const{orientation:t,vertical:n,horizontal:a}=e;return t==="vertical"?n:a}var ce={width:0,height:0},re=e=>e||ce;function ea(e){const{orientation:t,thumbPercents:n,thumbRects:a,isReversed:o}=e,l=y=>{var S;const C=(S=a[y])!=null?S:ce;return{position:"absolute",userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",touchAction:"none",...oe({orientation:t,vertical:{bottom:`calc(${n[y]}% - ${C.height/2}px)`},horizontal:{left:`calc(${n[y]}% - ${C.width/2}px)`}})}},i=t==="vertical"?a.reduce((y,S)=>re(y).height>re(S).height?y:S,ce):a.reduce((y,S)=>re(y).width>re(S).width?y:S,ce),h={position:"relative",touchAction:"none",WebkitTapHighlightColor:"rgba(0,0,0,0)",userSelect:"none",outline:0,...oe({orientation:t,vertical:i?{paddingLeft:i.width/2,paddingRight:i.width/2}:{},horizontal:i?{paddingTop:i.height/2,paddingBottom:i.height/2}:{}})},r={position:"absolute",...oe({orientation:t,vertical:{left:"50%",transform:"translateX(-50%)",height:"100%"},horizontal:{top:"50%",transform:"translateY(-50%)",width:"100%"}})},c=n.length===1,d=[0,o?100-n[0]:n[0]],u=c?d:n;let x=u[0];!c&&o&&(x=100-x);const v=Math.abs(u[u.length-1]-u[0]),w={...r,...oe({orientation:t,vertical:o?{height:`${v}%`,top:`${x}%`}:{height:`${v}%`,bottom:`${x}%`},horizontal:o?{width:`${v}%`,right:`${x}%`}:{width:`${v}%`,left:`${x}%`}})};return{trackStyle:r,innerTrackStyle:w,rootStyle:h,getThumbStyle:l}}function ta(e){const{isReversed:t,direction:n,orientation:a}=e;return n==="ltr"||a==="vertical"?t:!t}function na(e,t,n,a){return e.addEventListener(t,n,a),()=>{e.removeEventListener(t,n,a)}}function aa(e){const t=oa(e);return typeof t.PointerEvent<"u"&&e instanceof t.PointerEvent?e.pointerType==="mouse":e instanceof t.MouseEvent}function Ct(e){return!!e.touches}function sa(e){return Ct(e)&&e.touches.length>1}function oa(e){var t;return(t=e.view)!=null?t:window}function ra(e,t="page"){const n=e.touches[0]||e.changedTouches[0];return{x:n[`${t}X`],y:n[`${t}Y`]}}function la(e,t="page"){return{x:e[`${t}X`],y:e[`${t}Y`]}}function Tt(e,t="page"){return Ct(e)?ra(e,t):la(e,t)}function ia(e){return t=>{const n=aa(t);(!n||n&&t.button===0)&&e(t)}}function ca(e,t=!1){function n(o){e(o,{point:Tt(o)})}return t?ia(n):n}function ue(e,t,n,a){return na(e,t,ca(n,t==="pointerdown"),a)}var ua=Object.defineProperty,da=(e,t,n)=>t in e?ua(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t,n)=>(da(e,typeof t!="symbol"?t+"":t,n),n),ha=class{constructor(e,t,n){N(this,"history",[]),N(this,"startEvent",null),N(this,"lastEvent",null),N(this,"lastEventInfo",null),N(this,"handlers",{}),N(this,"removeListeners",()=>{}),N(this,"threshold",3),N(this,"win"),N(this,"updatePoint",()=>{if(!(this.lastEvent&&this.lastEventInfo))return;const h=Ee(this.lastEventInfo,this.history),r=this.startEvent!==null,c=ga(h.offset,{x:0,y:0})>=this.threshold;if(!r&&!c)return;const{timestamp:d}=rt();this.history.push({...h.point,timestamp:d});const{onStart:u,onMove:x}=this.handlers;r||(u==null||u(this.lastEvent,h),this.startEvent=this.lastEvent),x==null||x(this.lastEvent,h)}),N(this,"onPointerMove",(h,r)=>{this.lastEvent=h,this.lastEventInfo=r,zn.update(this.updatePoint,!0)}),N(this,"onPointerUp",(h,r)=>{const c=Ee(r,this.history),{onEnd:d,onSessionEnd:u}=this.handlers;u==null||u(h,c),this.end(),!(!d||!this.startEvent)&&(d==null||d(h,c))});var a;if(this.win=(a=e.view)!=null?a:window,sa(e))return;this.handlers=t,n&&(this.threshold=n),e.stopPropagation(),e.preventDefault();const o={point:Tt(e)},{timestamp:l}=rt();this.history=[{...o.point,timestamp:l}];const{onSessionStart:i}=t;i==null||i(e,Ee(o,this.history)),this.removeListeners=xa(ue(this.win,"pointermove",this.onPointerMove),ue(this.win,"pointerup",this.onPointerUp),ue(this.win,"pointercancel",this.onPointerUp))}updateHandlers(e){this.handlers=e}end(){var e;(e=this.removeListeners)==null||e.call(this),$n.update(this.updatePoint)}};function it(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ee(e,t){return{point:e.point,delta:it(e.point,t[t.length-1]),offset:it(e.point,t[0]),velocity:fa(t,.1)}}var ma=e=>e*1e3;function fa(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,a=null;const o=e[e.length-1];for(;n>=0&&(a=e[n],!(o.timestamp-a.timestamp>ma(t)));)n--;if(!a)return{x:0,y:0};const l=(o.timestamp-a.timestamp)/1e3;if(l===0)return{x:0,y:0};const i={x:(o.x-a.x)/l,y:(o.y-a.y)/l};return i.x===1/0&&(i.x=0),i.y===1/0&&(i.y=0),i}function xa(...e){return t=>e.reduce((n,a)=>a(n),t)}function Ne(e,t){return Math.abs(e-t)}function ct(e){return"x"in e&&"y"in e}function ga(e,t){if(typeof e=="number"&&typeof t=="number")return Ne(e,t);if(ct(e)&&ct(t)){const n=Ne(e.x,t.x),a=Ne(e.y,t.y);return Math.sqrt(n**2+a**2)}return 0}function At(e){const t=m.useRef(null);return t.current=e,t}function va(e,t){const{onPan:n,onPanStart:a,onPanEnd:o,onPanSessionStart:l,onPanSessionEnd:i,threshold:h}=t,r=!!(n||a||o||l||i),c=m.useRef(null),d=At({onSessionStart:l,onSessionEnd:i,onStart:a,onMove:n,onEnd(u,x){c.current=null,o==null||o(u,x)}});m.useEffect(()=>{var u;(u=c.current)==null||u.updateHandlers(d.current)}),m.useEffect(()=>{const u=e.current;if(!u||!r)return;function x(v){c.current=new ha(v,d.current,h)}return ue(u,"pointerdown",x)},[e,r,d,h]),m.useEffect(()=>()=>{var u;(u=c.current)==null||u.end(),c.current=null},[])}function ya(e,t){if(!e){t(void 0);return}t({width:e.offsetWidth,height:e.offsetHeight});const n=e.ownerDocument.defaultView??window,a=new n.ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const[l]=o;let i,h;if("borderBoxSize"in l){const r=l.borderBoxSize,c=Array.isArray(r)?r[0]:r;i=c.inlineSize,h=c.blockSize}else i=e.offsetWidth,h=e.offsetHeight;t({width:i,height:h})});return a.observe(e,{box:"border-box"}),()=>a.unobserve(e)}var ba=globalThis!=null&&globalThis.document?m.useLayoutEffect:m.useEffect;function Sa(e,t){var n,a;if(!e||!e.parentElement)return;const o=(a=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?a:window,l=new o.MutationObserver(()=>{t()});return l.observe(e.parentElement,{childList:!0}),()=>{l.disconnect()}}function wa({getNodes:e,observeMutation:t=!0}){const[n,a]=m.useState([]),[o,l]=m.useState(0);return ba(()=>{const i=e(),h=i.map((r,c)=>ya(r,d=>{a(u=>[...u.slice(0,c),d,...u.slice(c+1)])}));if(t){const r=i[0];h.push(Sa(r,()=>{l(c=>c+1)}))}return()=>{h.forEach(r=>{r==null||r()})}},[o]),n}function pa(e){return typeof e=="object"&&e!==null&&"current"in e}function Pa(e){const[t]=wa({observeMutation:!1,getNodes(){return[pa(e)?e.current:e]}});return t}function ja(e){var t;const{min:n=0,max:a=100,onChange:o,value:l,defaultValue:i,isReversed:h,direction:r="ltr",orientation:c="horizontal",id:d,isDisabled:u,isReadOnly:x,onChangeStart:v,onChangeEnd:w,step:y=1,getAriaValueText:S,"aria-valuetext":C,"aria-label":_,"aria-labelledby":V,name:B,focusThumbOnChange:p=!0,...P}=e,ne=Te(v),E=Te(w),D=Te(S),j=ta({isReversed:h,direction:r,orientation:c}),[T,ve]=mt({value:l,defaultValue:i??Ia(n,a),onChange:o}),[ye,Ve]=m.useState(!1),[be,Le]=m.useState(!1),Se=!(u||x),we=(a-n)/10,W=y||(a-n)/100,k=Ae(T,n,a),Ot=a-k+n,Ue=ot(j?Ot:k,n,a),ae=c==="vertical",I=At({min:n,max:a,step:y,isDisabled:u,value:k,isInteractive:Se,isReversed:j,isVertical:ae,eventSource:null,focusThumbOnChange:p,orientation:c}),pe=m.useRef(null),Pe=m.useRef(null),He=m.useRef(null),Bt=m.useId(),Ge=d??Bt,[We,Ye]=[`slider-thumb-${Ge}`,`slider-track-${Ge}`],Ft=m.useCallback(f=>{var g,Y;if(!pe.current)return;const A=I.current;A.eventSource="pointer";const $=pe.current.getBoundingClientRect(),{clientX:ke,clientY:Wt}=(Y=(g=f.touches)==null?void 0:g[0])!=null?Y:f,Yt=ae?$.bottom-Wt:ke-$.left,Xt=ae?$.height:$.width;let Ie=Yt/Xt;j&&(Ie=1-Ie);let X=Sn(Ie,A.min,A.max);return A.step&&(X=parseFloat(st(X,A.min,A.step))),X=Ae(X,A.min,A.max),X},[ae,j,I]),F=m.useCallback(f=>{const g=I.current;g.isInteractive&&(f=parseFloat(st(f,g.min,W)),f=Ae(f,g.min,g.max),ve(f))},[W,ve,I]),K=m.useMemo(()=>({stepUp(f=W){const g=j?k-f:k+f;F(g)},stepDown(f=W){const g=j?k+f:k-f;F(g)},reset(){F(i||0)},stepTo(f){F(f)}}),[F,j,k,W,i]),Xe=m.useCallback(f=>{const g=I.current,A={ArrowRight:()=>K.stepUp(),ArrowUp:()=>K.stepUp(),ArrowLeft:()=>K.stepDown(),ArrowDown:()=>K.stepDown(),PageUp:()=>K.stepUp(we),PageDown:()=>K.stepDown(we),Home:()=>F(g.min),End:()=>F(g.max)}[f.key];A&&(f.preventDefault(),f.stopPropagation(),A(f),g.eventSource="keyboard")},[K,F,we,I]),qe=(t=D==null?void 0:D(k))!=null?t:C,je=Pa(Pe),{getThumbStyle:Je,rootStyle:Ze,trackStyle:Qe,innerTrackStyle:et}=m.useMemo(()=>{const f=I.current,g=je??{width:0,height:0};return ea({isReversed:j,orientation:f.orientation,thumbRects:[g],thumbPercents:[Ue]})},[j,je,Ue,I]),tt=m.useCallback(()=>{I.current.focusThumbOnChange&&setTimeout(()=>{var g;return(g=Pe.current)==null?void 0:g.focus()})},[I]);Jt(()=>{const f=I.current;tt(),f.eventSource==="keyboard"&&(E==null||E(f.value))},[k,E]);function nt(f){const g=Ft(f);g!=null&&g!==I.current.value&&ve(g)}va(He,{onPanSessionStart(f){const g=I.current;g.isInteractive&&(Ve(!0),tt(),nt(f),ne==null||ne(g.value))},onPanSessionEnd(){const f=I.current;f.isInteractive&&(Ve(!1),E==null||E(f.value))},onPan(f){I.current.isInteractive&&nt(f)}});const Kt=m.useCallback((f={},g=null)=>({...f,...P,ref:le(g,He),tabIndex:-1,"aria-disabled":Me(u),"data-focused":U(be),style:{...f.style,...Ze}}),[P,u,be,Ze]),Vt=m.useCallback((f={},g=null)=>({...f,ref:le(g,pe),id:Ye,"data-disabled":U(u),style:{...f.style,...Qe}}),[u,Ye,Qe]),Lt=m.useCallback((f={},g=null)=>({...f,ref:g,style:{...f.style,...et}}),[et]),Ut=m.useCallback((f={},g=null)=>({...f,ref:le(g,Pe),role:"slider",tabIndex:Se?0:void 0,id:We,"data-active":U(ye),"aria-valuetext":qe,"aria-valuemin":n,"aria-valuemax":a,"aria-valuenow":k,"aria-orientation":c,"aria-disabled":Me(u),"aria-readonly":Me(x),"aria-label":_,"aria-labelledby":_?void 0:V,style:{...f.style,...Je(0)},onKeyDown:_e(f.onKeyDown,Xe),onFocus:_e(f.onFocus,()=>Le(!0)),onBlur:_e(f.onBlur,()=>Le(!1))}),[Se,We,ye,qe,n,a,k,c,u,x,_,V,Je,Xe]),Ht=m.useCallback((f,g=null)=>{const Y=!(f.value<n||f.value>a),A=k>=f.value,$=ot(f.value,n,a),ke={position:"absolute",pointerEvents:"none",...ka({orientation:c,vertical:{bottom:j?`${100-$}%`:`${$}%`},horizontal:{left:j?`${100-$}%`:`${$}%`}})};return{...f,ref:g,role:"presentation","aria-hidden":!0,"data-disabled":U(u),"data-invalid":U(!Y),"data-highlighted":U(A),style:{...f.style,...ke}}},[u,j,a,n,c,k]),Gt=m.useCallback((f={},g=null)=>({...f,ref:g,type:"hidden",value:k,name:B}),[B,k]);return{state:{value:k,isFocused:be,isDragging:ye},actions:K,getRootProps:Kt,getTrackProps:Vt,getInnerTrackProps:Lt,getThumbProps:Ut,getMarkerProps:Ht,getInputProps:Gt}}function ka(e){const{orientation:t,vertical:n,horizontal:a}=e;return t==="vertical"?n:a}function Ia(e,t){return t<e?e:e+(t-e)/2}var[Ca,xe]=Z({name:"SliderContext",hookName:"useSliderContext",providerName:"<Slider />"}),[Ta,ge]=Z({name:"SliderStylesContext",hookName:"useSliderStyles",providerName:"<Slider />"}),Mt=R((e,t)=>{var n;const a={...e,orientation:(n=e==null?void 0:e.orientation)!=null?n:"horizontal"},o=ht("Slider",a),l=Oe(a),{direction:i}=Zt();l.direction=i;const{getInputProps:h,getRootProps:r,...c}=ja(l),d=r(),u=h({},t);return s.jsx(Ca,{value:c,children:s.jsx(Ta,{value:o,children:s.jsxs(z.div,{...d,className:te("chakra-slider",a.className),__css:o.container,children:[a.children,s.jsx("input",{...u})]})})})});Mt.displayName="Slider";var _t=R((e,t)=>{const{getThumbProps:n}=xe(),a=ge(),o=n(e,t);return s.jsx(z.div,{...o,className:te("chakra-slider__thumb",e.className),__css:a.thumb})});_t.displayName="SliderThumb";var Et=R((e,t)=>{const{getTrackProps:n}=xe(),a=ge(),o=n(e,t);return s.jsx(z.div,{...o,className:te("chakra-slider__track",e.className),__css:a.track})});Et.displayName="SliderTrack";var Nt=R((e,t)=>{const{getInnerTrackProps:n}=xe(),a=ge(),o=n(e,t);return s.jsx(z.div,{...o,className:te("chakra-slider__filled-track",e.className),__css:a.filledTrack})});Nt.displayName="SliderFilledTrack";var Aa=R((e,t)=>{const{getMarkerProps:n}=xe(),a=ge(),o=n(e,t);return s.jsx(z.div,{...o,className:te("chakra-slider__marker",e.className),__css:a.mark})});Aa.displayName="SliderMark";function Ma(e,t=[]){const n=Object.assign({},e);for(const a of t)a in n&&delete n[a];return n}var _a=["h","minH","height","minHeight"],Dt=R((e,t)=>{const n=Qt("Textarea",e),{className:a,rows:o,...l}=Oe(e),i=un(l),h=o?Ma(n,_a):n;return s.jsx(z.textarea,{ref:t,rows:o,...i,className:L("chakra-textarea",a),__css:h})});Dt.displayName="Textarea";var Ea=he("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]]),Na=he("chevron-left","IconChevronLeft",[["path",{d:"M15 6l-6 6l6 6",key:"svg-0"}]]),Rt=he("pin-filled","IconPinFilled",[["path",{d:"M15.113 3.21l.094 .083l5.5 5.5a1 1 0 0 1 -1.175 1.59l-3.172 3.171l-1.424 3.797a1 1 0 0 1 -.158 .277l-.07 .08l-1.5 1.5a1 1 0 0 1 -1.32 .082l-.095 -.083l-2.793 -2.792l-3.793 3.792a1 1 0 0 1 -1.497 -1.32l.083 -.094l3.792 -3.793l-2.792 -2.793a1 1 0 0 1 -.083 -1.32l.083 -.094l1.5 -1.5a1 1 0 0 1 .258 -.187l.098 -.042l3.796 -1.425l3.171 -3.17a1 1 0 0 1 1.497 -1.26z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),zt=he("pin","IconPin",[["path",{d:"M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4",key:"svg-0"}],["path",{d:"M9 15l-4.5 4.5",key:"svg-1"}],["path",{d:"M14.5 4l5.5 5.5",key:"svg-2"}]]);const Da=({setMediaAct:e,media:t,currentNum:n})=>{const[a,o]=m.useState(0);m.useEffect(()=>{n!==void 0&&o(n)},[n]);const l=r=>{const c=(a+r+t.length)%t.length;o(c),e&&e(t[c])},i={width:"100%",height:"100%"},h={enter:r=>({x:r>0?500:-500,opacity:1}),center:{x:0,opacity:1},exit:r=>({x:r<0?500:-500,opacity:1})};return s.jsxs(b,{justifyContent:"center",alignItems:"center",position:"relative",width:i.width,height:i.height,overflow:"hidden",children:[s.jsx(ut,{custom:a,children:t.map((r,c)=>s.jsx(dt.div,{custom:c-a,variants:h,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},style:{position:"absolute",cursor:"pointer",width:"100%",height:"100%",display:c===a?"block":"none"},onClick:()=>{window.open(r.imageUrl)},children:dn(r.imageUrl)?s.jsx(Mn,{src:r.imageUrl,alt:`image-${r.id}`,width:"100%",height:"100%",objectFit:"contain"}):s.jsx("video",{style:{objectFit:"contain"},width:"100%",height:"100%",src:r.imageUrl,loop:!0,autoPlay:!0,muted:!0,children:s.jsx("track",{kind:"captions"})})},r.id))}),s.jsx(O,{size:"sm",color:"white",bgColor:"whiteAlpha.400","aria-label":"Previous image",icon:s.jsx(Na,{}),onClick:()=>l(-1),position:"absolute",left:"0",zIndex:"2"}),s.jsx(O,{size:"sm",color:"white",bgColor:"whiteAlpha.400","aria-label":"Next image",icon:s.jsx(wn,{}),onClick:()=>l(1),position:"absolute",right:"0",zIndex:"2"})]})},Ra=e=>s.jsxs(b,{gap:2,children:[s.jsx(b,{gap:1,alignItems:"center",flexBasis:"200px",children:e.label??e.name}),s.jsx(hn,{value:e.value,onChange:t=>{var n;return(n=e==null?void 0:e.updateMetaData)==null?void 0:n.call(e,{promptKey:e.promptKey,name:e.name,value:t.target.value})}})]}),za=e=>s.jsxs(b,{gap:1,direction:"column",children:[s.jsxs(b,{gap:2,children:[s.jsx(b,{gap:1,alignItems:"center",flexBasis:"200px",children:e.label??e.name}),s.jsxs(pn,{width:"100%",step:e==null?void 0:e.step,value:e.value,min:e==null?void 0:e.min,max:e==null?void 0:e.max,onChange:t=>{var n;return(n=e==null?void 0:e.updateMetaData)==null?void 0:n.call(e,{promptKey:e.promptKey,name:e.name,value:t})},children:[s.jsx(Pn,{}),s.jsxs(jn,{children:[s.jsx(kn,{}),s.jsx(In,{})]})]})]}),s.jsx(b,{children:s.jsxs(Mt,{step:e==null?void 0:e.step,value:Number(e.value),min:(e==null?void 0:e.min)??0,max:(e==null?void 0:e.max)??100,onChange:t=>{var n;return(n=e==null?void 0:e.updateMetaData)==null?void 0:n.call(e,{promptKey:e.promptKey,name:e.name,value:t})},children:[s.jsx(Et,{children:s.jsx(Nt,{})}),s.jsx(_t,{})]})})]}),$a=e=>{var t;return s.jsxs(b,{gap:2,children:[s.jsx(b,{gap:1,alignItems:"center",flexBasis:"200px",children:e.label??e.name}),s.jsx(En,{value:e.value,onChange:n=>{var a;return(a=e==null?void 0:e.updateMetaData)==null?void 0:a.call(e,{promptKey:e.promptKey,name:e.name,value:n.target.value})},children:(t=e==null?void 0:e.options)==null?void 0:t.map((n,a)=>s.jsx("option",{value:n,children:n},`select${e.promptKey}${e.classType}${e.name}${a}`))})]})},Oa=e=>s.jsxs(b,{gap:1,direction:"column",children:[s.jsx(b,{children:e.label??e.name}),s.jsx(Dt,{value:e.value,onChange:t=>{var n;return(n=e==null?void 0:e.updateMetaData)==null?void 0:n.call(e,{promptKey:e.promptKey,name:e.name,value:t.target.value})},rows:5})]});var M=(e=>(e.Input="Input",e.InputSlider="InputSlider",e.Select="Select",e.Textarea="Textarea",e.Checkbox="Checkbox",e.NoSupport="NoSupport",e))(M||{});const Ba=e=>s.jsxs(b,{gap:2,children:[s.jsx(b,{gap:1,alignItems:"center",flexBasis:"200px",children:e.label??e.name}),s.jsx(b,{children:"No Support"})]}),Fa=e=>s.jsxs(b,{gap:2,children:[s.jsx(b,{gap:1,alignItems:"center",flexBasis:"200px",children:e.label??e.name}),s.jsx(Be,{isChecked:!!e.value,onChange:t=>{var n;(n=e==null?void 0:e.updateMetaData)==null||n.call(e,{promptKey:e.promptKey,name:e.name,value:t.target.checked})}})]}),Ka={[M.Input]:Ra,[M.InputSlider]:za,[M.Select]:$a,[M.Textarea]:Oa,[M.Checkbox]:Fa,NoSupport:Ba},Va=mn();function La(e){var a,o,l,i,h;const t=(a=Va[e.classType])==null?void 0:a.nodeData,n={...((o=t==null?void 0:t.input)==null?void 0:o.required)??{},...((l=t==null?void 0:t.input)==null?void 0:l.optional)??{}}[e.name];return(n==null?void 0:n[0])==="STRING"?(i=n==null?void 0:n[1])!=null&&i.multiline?{type:M.Textarea}:{type:M.Input}:(n==null?void 0:n[0])==="BOOLEAN"?{type:M.Checkbox}:(n==null?void 0:n[0])==="FLOAT"?{...(n==null?void 0:n[1])??{},type:M.InputSlider}:(n==null?void 0:n[0])==="INT"?{...(n==null?void 0:n[1])??{},type:M.InputSlider}:Array.isArray(n==null?void 0:n[0])&&((h=n==null?void 0:n[0])!=null&&h.every(r=>typeof r=="string"))?{options:n==null?void 0:n[0],type:M.Select}:{type:M.NoSupport}}const $t=e=>{const t=La(e),n=Ka[t.type??"Input"];return s.jsxs(_n,{templateColumns:"max-content 1fr",gap:1,children:[s.jsx(b,{children:s.jsx(O,{onClick:()=>{var a;return(a=e==null?void 0:e.updateTopField)==null?void 0:a.call(e,{name:e.name,promptKey:e.promptKey,class_type:e.classType})},variant:"text",icon:de(e.topFields,{name:e.name,promptKey:e.promptKey,classType:e.classType})?s.jsx(Rt,{}):s.jsx(zt,{}),"aria-label":"pin"})}),s.jsx(n,{...e,...t})]})};function Ua({metaData:e,updateMetaData:t,topFields:n,updateTopField:a}){if(n.length===0)return null;const o=e.prompt;return s.jsx(s.Fragment,{children:s.jsx(b,{px:2,gap:2,direction:"column",children:n==null?void 0:n.map((l,i)=>{var d,u,x;const h=(d=o==null?void 0:o[l.promptKey])==null?void 0:d.inputs;if(!h||((u=o==null?void 0:o[l.promptKey])==null?void 0:u.class_type)!==l.class_type)return null;const c=h==null?void 0:h[l.name];return s.jsx($t,{promptKey:l.promptKey,classType:(x=o==null?void 0:o[l.promptKey])==null?void 0:x.class_type,name:l.name,value:c,updateMetaData:t,updateTopField:a,topFields:n},`formTop${l.name}${i}`)})})})}function Ha({metaData:e,updateMetaData:t,topFields:n,updateTopField:a}){const o=e.prompt,[l,i]=m.useState([]);return m.useEffect(()=>{i(Object.keys(o).map((h,r)=>r))},[o]),s.jsx(It,{index:l,onChange:h=>i(h),allowMultiple:!0,children:Object.keys(o).map(h=>{const r=o[h],c=r.inputs,d=Object.keys(c).filter(u=>!Array.isArray(c[u])&&!de(n,{name:u,promptKey:h,classType:r.class_type}));return d.length===0?null:s.jsxs(Pt,{borderWidth:1,borderRadius:8,my:2,children:[s.jsxs(wt,{children:[s.jsx(fn,{as:"span",flex:"1",textAlign:"left",children:r.class_type}),s.jsx(pt,{})]}),s.jsx(kt,{children:s.jsx(b,{px:2,gap:1,direction:"column",children:d==null?void 0:d.map(u=>{const x=c[u];return de(n,{name:u,promptKey:h,classType:r.class_type})?null:s.jsx($t,{promptKey:h,classType:r==null?void 0:r.class_type,value:x,name:u,updateMetaData:t,updateTopField:a,topFields:n,metaData:e},`form${u}`)})})})]},`AccordionItem${h}`)})})}const Ga=[{promptKey:"4",name:"ckpt_name",class_type:"CheckpointLoaderSimple"},{promptKey:"6",name:"text",class_type:"CLIPTextEncode"},{promptKey:"7",name:"text",class_type:"CLIPTextEncode"},{promptKey:"5",name:"width",class_type:"EmptyLatentImage"},{promptKey:"5",name:"height",class_type:"EmptyLatentImage"},{promptKey:"3",name:"steps",class_type:"KSampler"},{promptKey:"3",name:"sampler_name",class_type:"KSampler"},{promptKey:"3",name:"cfg",class_type:"KSampler"}],de=(e,t)=>e==null?void 0:e.some(n=>n.promptKey===(t==null?void 0:t.promptKey)&&n.name===(t==null?void 0:t.name)&&n.class_type===t.classType);function Wa({metaData:e}){const t=JSON.parse(JSON.stringify(e)),[n,a]=m.useState(Ga),[o,l]=m.useState(t),i=({promptKey:r,name:c,value:d})=>{l(u=>{var x,v,w;return{...u??{},prompt:{...(u==null?void 0:u.prompt)??{},[r]:{...((x=u==null?void 0:u.prompt)==null?void 0:x[r])??{},inputs:{...((w=(v=u.prompt)==null?void 0:v[r])==null?void 0:w.inputs)??{},[c]:d}}}}})},h=r=>{de(n,{name:r.name,promptKey:r==null?void 0:r.promptKey,classType:(r==null?void 0:r.class_type)??""})?a(c=>c.filter(d=>d.name!==r.name||d.promptKey!==r.promptKey)):a(c=>[...c,r])};return s.jsxs(b,{direction:"column",align:"stretch",children:[s.jsx(Ua,{topFields:n,metaData:o,updateMetaData:i,updateTopField:h}),s.jsx(Ha,{topFields:n,metaData:o,updateMetaData:i,updateTopField:h})]})}const Ya=({media:e})=>{const[t,n]=m.useState(),a=async o=>{try{const l=await xn(`/workspace/view_media?filename=${o.localPath}`);n(l)}catch(l){console.error(l)}};return m.useEffect(()=>{e&&a(e)},[e]),s.jsxs(b,{overflowY:"auto",mb:4,direction:"column",gap:2,flex:1,children:[s.jsxs(Cn,{alignItems:"center",columns:2,spacing:2,children:[s.jsxs(b,{alignItems:"center",gap:1,children:[s.jsx(q,{children:e==null?void 0:e.localPath}),s.jsx(H,{label:"Donwload image from gallery",children:s.jsx(Re,{href:`/workspace/view_media?filename=${e==null?void 0:e.localPath}`,download:e==null?void 0:e.localPath,children:s.jsx(O,{size:"sm",icon:s.jsx(ft,{size:19}),"aria-label":"donwload image from gallery"})})})]}),s.jsxs(b,{gap:1,alignItems:"center",children:[s.jsx(q,{children:"Create Time:"}),s.jsx(q,{children:xt((e==null?void 0:e.createTime)??0,!0)})]})]}),e&&t&&s.jsx(Wa,{metaData:t,media:e})]})},Xa=({mediaList:e,media:t})=>{const[n,a]=m.useState();return m.useEffect(()=>{t&&a(t)},[t]),s.jsxs(b,{gap:3,h:"100%",children:[s.jsx(b,{flex:1,children:s.jsx(Da,{media:e.map(o=>({id:o.id,imageUrl:`/workspace/view_media?filename=${o.localPath}`})),currentNum:e==null?void 0:e.findIndex(o=>o.id===(n==null?void 0:n.id)),setMediaAct:o=>a(e==null?void 0:e.find(l=>l.id===o.id))})}),s.jsx(Ya,{media:n})]})},qa=({media:e,isSelecting:t,selectedID:n,onClickMedia:a,onRefreshImagesList:o,coverPath:l,setCoverPath:i})=>{const{curFlowID:r,loadFilePath:c}=m.useContext(gt),{showDialog:d}=en();if(e.localPath==null)return null;const u=l!=null&&l===e.localPath;if(r==null)return null;const x=s.jsxs(Re,{isExternal:!0,onClick:()=>a(e),position:"relative",children:[t&&s.jsx(Be,{isChecked:n.includes(e.id),position:"absolute",top:2,left:2}),s.jsx(Tn,{mediaLocalPath:e.localPath,size:180,onBrokenLink:()=>{},autoPlay:!0,isPreview:!0})]});return s.jsxs(gn,{width:180,mb:2,children:[s.jsx(H,{label:xt(e.createTime,!0),children:x}),s.jsx(H,{label:e.localPath,children:s.jsx(q,{color:"GrayText",noOfLines:1,children:e.localPath})}),s.jsxs(ie,{hidden:t,gap:0,children:[s.jsx(H,{label:"Set as cover",children:s.jsx(O,{size:"sm",variant:"ghost",icon:u?s.jsx(Rt,{size:19}):s.jsx(zt,{size:19}),"aria-label":"set as cover",onClick:()=>{var v;(v=De)==null||v.updateMetaInfo(r,{coverMediaPath:e.localPath}),i(e.localPath)}})}),s.jsx(tn,{flexGrow:1,onClick:()=>d("How do you want to load this workflow?",[{label:"Load in new workflow",onClick:()=>{c(e.localPath)},colorScheme:"teal"},{label:"Overwrite current workflow",onClick:()=>c(e.localPath,!0),colorScheme:"red"}]),size:"sm",children:"Load"}),s.jsx(H,{label:"Donwload image from gallery",children:s.jsx(Re,{href:`/workspace/view_media?filename=${e.localPath}`,download:e.localPath,children:s.jsx(O,{size:"sm",variant:"ghost",icon:s.jsx(ft,{size:19}),"aria-label":"donwload image from gallery"})})}),s.jsx(H,{label:"Remove image from gallery",children:s.jsx(O,{size:"sm",variant:"ghost",icon:s.jsx(vn,{size:19}),"aria-label":"remove image from gallery",colorScheme:"red",onClick:async()=>{var w,y;confirm("Are you sure to remove this image from gallery? (won't delete image on your disk)")&&(await((w=vt)==null?void 0:w.delete(e.id)),u&&(await((y=De)==null?void 0:y.updateMetaInfo(r,{coverMediaPath:void 0})),i("")),o())}})})]})]})},Ja=qa;function us({onclose:e}){const{curFlowID:t}=m.useContext(gt),[n,a]=m.useState(""),[o,l]=m.useState([]),[i,h]=m.useState(!1),[r,c]=m.useState(""),[d,u]=m.useState([]),[x,v]=m.useState(),[w,y]=m.useState(""),S=p=>{y(p)},C=async()=>{var P;if(t==null)return;const p=await((P=vt)==null?void 0:P.listByWorkflowID(t));u(p??[])};m.useEffect(()=>{var p;C(),t&&((p=De)==null||p.get(t).then(P=>{P&&(a(P.name),P!=null&&P.coverMediaPath&&c(P==null?void 0:P.coverMediaPath))}))},[]);const _=w.length?d==null?void 0:d.filter(p=>{var P;return(P=p.workflowJSON)==null?void 0:P.includes(w??"")}):d;if(t==null)return null;const V=p=>{if(i){o.includes(p.id)?l(o.filter(P=>P!==p.id)):l([...o,p.id]);return}v(p)},B=d.length>0&&o.length===d.length;return s.jsxs(nn,{isOpen:!0,onClose:e,blockScrollOnMount:!0,children:[s.jsx(an,{}),s.jsxs(sn,{width:"90%",maxWidth:"90vw",height:"90vh",children:[s.jsxs(on,{children:[s.jsx(ie,{gap:2,mb:2,children:s.jsxs(yn,{size:"md",mr:2,children:[!!x&&s.jsx(O,{onClick:()=>v(void 0),variant:"ghost",mr:1,"aria-label":"back",icon:s.jsx(Ea,{})}),"Gallery - ",n,!x&&s.jsx(b,{gap:2,display:"inline-flex",ml:2,children:s.jsx(An,{searchValue:w,onUpdateSearchValue:S})})]})}),i&&s.jsxs(ie,{gap:3,children:[s.jsx(Be,{isChecked:B,onChange:()=>{l(B?[]:d.map(p=>p.id))},children:"All"}),s.jsxs(q,{fontSize:16,children:[o.length," Selected"]}),s.jsx(O,{size:"sm",icon:s.jsx(bn,{size:19}),onClick:()=>h(!1),"aria-label":"cancel"})]})]}),s.jsx(rn,{}),s.jsx(ln,{overflowY:"auto",children:x?s.jsx(Xa,{mediaList:d,media:x}):s.jsx(ie,{wrap:"wrap",children:_.map(p=>s.jsx(Ja,{selectedID:o,media:p,isSelecting:i,onClickMedia:V,onRefreshImagesList:C,coverPath:r,setCoverPath:c},p.id))})})]})]})}export{us as default};
