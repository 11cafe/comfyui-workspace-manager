import{f as L,l as J,o as Z,j as n,g as Y,h as Q,r as u,K as ie,F as ce,B as E,U as re,M as ae,L as he,N as xe,O as ue,R as de,Q as ge}from"./input.js";import{W as fe,h as M,F as j,a9 as je,I as w,B as X,k as q,T as z,o as C,w as V,z as D,a1 as ee,j as we,H as _,i as ve,aa as se,x as T,ab as ye,y as pe}from"./App-iYdfaemK.js";import{I as be,i as Ie,a as Ce,b as ke,g as Pe,S as ze,M as Me}from"./MediaPreview-c-q3SlNr.js";import{I as Oe,C as ne}from"./chunk-JARCRF6W-0DtH-iR8.js";import{V as te}from"./chunk-NTCQBYKE-OvCbiyrg.js";import"/scripts/app.js";import"/scripts/api.js";var F=L(function(e,t){const l=J("Link",e),{className:o,isExternal:i,...c}=Z(e);return n.jsx(Y.a,{target:i?"_blank":void 0,rel:i?"noopener":void 0,ref:t,className:Q("chakra-link",o),...c,__css:l})});F.displayName="Link";function Se(s,e=[]){const t=Object.assign({},s);for(const l of e)l in t&&delete t[l];return t}var _e=["h","minH","height","minHeight"],B=L((s,e)=>{const t=J("Textarea",s),{className:l,rows:o,...i}=Z(s),c=fe(i),d=o?Se(t,_e):t;return n.jsx(Y.textarea,{ref:e,rows:o,...c,className:Q("chakra-textarea",l),__css:d})});B.displayName="Textarea";var Fe=M("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]]),Ne=M("chevron-left","IconChevronLeft",[["path",{d:"M15 6l-6 6l6 6",key:"svg-0"}]]),oe=M("copy","IconCopy",[["path",{d:"M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z",key:"svg-0"}],["path",{d:"M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1",key:"svg-1"}]]),Te=M("pin-filled","IconPinFilled",[["path",{d:"M15.113 3.21l.094 .083l5.5 5.5a1 1 0 0 1 -1.175 1.59l-3.172 3.171l-1.424 3.797a1 1 0 0 1 -.158 .277l-.07 .08l-1.5 1.5a1 1 0 0 1 -1.32 .082l-.095 -.083l-2.793 -2.792l-3.793 3.792a1 1 0 0 1 -1.497 -1.32l.083 -.094l3.792 -3.793l-2.792 -2.793a1 1 0 0 1 -.083 -1.32l.083 -.094l1.5 -1.5a1 1 0 0 1 .258 -.187l.098 -.042l3.796 -1.425l3.171 -3.17a1 1 0 0 1 1.497 -1.26z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),Ee=M("pin","IconPin",[["path",{d:"M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4",key:"svg-0"}],["path",{d:"M9 15l-4.5 4.5",key:"svg-1"}],["path",{d:"M14.5 4l5.5 5.5",key:"svg-2"}]]);const Be=({setMediaAct:s,media:e,currentNum:t})=>{const[l,o]=u.useState(0);u.useEffect(()=>{t!==void 0&&o(t)},[t]);const i=r=>{const h=(l+r+e.length)%e.length;o(h),s&&s(e[h])},c={width:"100%",height:"100%"},d={enter:r=>({x:r>0?500:-500,opacity:1}),center:{x:0,opacity:1},exit:r=>({x:r<0?500:-500,opacity:1})};return n.jsxs(j,{justifyContent:"center",alignItems:"center",position:"relative",width:c.width,height:c.height,overflow:"hidden",children:[n.jsx(ie,{custom:l,children:e.map((r,h)=>n.jsx(ce.div,{custom:h-l,variants:d,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},style:{position:"absolute",cursor:"pointer",width:"100%",height:"100%",display:h===l?"block":"none"},onClick:()=>{window.open(r.imageUrl)},children:je(r.imageUrl)?n.jsx(Oe,{src:r.imageUrl,alt:`image-${r.id}`,width:"100%",height:"100%",objectFit:"contain"}):n.jsx("video",{style:{objectFit:"contain"},width:"100%",height:"100%",src:r.imageUrl,loop:!0,autoPlay:!0,muted:!0,children:n.jsx("track",{kind:"captions"})})},r.id))}),n.jsx(w,{size:"sm",color:"white",bgColor:"whiteAlpha.400","aria-label":"Previous image",icon:n.jsx(Ne,{}),onClick:()=>i(-1),position:"absolute",left:"0",zIndex:"2"}),n.jsx(w,{size:"sm",color:"white",bgColor:"whiteAlpha.400","aria-label":"Next image",icon:n.jsx(be,{}),onClick:()=>i(1),position:"absolute",right:"0",zIndex:"2"})]})};function Ae(s){const e=s.split(".").pop();return fetch(s).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.blob()}).then(async t=>{const l=s.split("/").pop()??"",o=new File([t],l);if(Ie(s))return Ce(o);if(e==="webp")return ke(o);const i=await Pe(o),c=JSON.parse(i==null?void 0:i.prompt),d=JSON.parse(i==null?void 0:i.workflow);return{prompt:c,workflow:d}})}const S=s=>{if(typeof s=="string")return s};function N(s){navigator.clipboard.writeText(s).then(function(){}).catch(function(e){console.error("Unable to copy to clipboard: ",e)})}function le(s,e){var h,g,f,y,v,p,b,k,a,x,A,K,$,G,U,m,H,R;const t=S((y=(f=s==null?void 0:s[(g=(h=e==null?void 0:e.inputs)==null?void 0:h.model)==null?void 0:g[0]])==null?void 0:f.inputs)==null?void 0:y.ckpt_name)??S((b=(p=s==null?void 0:s[((v=Object.keys(s))==null?void 0:v.find(O=>{var I,P;return(P=(I=s[O])==null?void 0:I.inputs)==null?void 0:P.ckpt_name}))??""])==null?void 0:p.inputs)==null?void 0:b.ckpt_name)??"",l=S((A=(x=s==null?void 0:s[(a=(k=e==null?void 0:e.inputs)==null?void 0:k.positive)==null?void 0:a[0]])==null?void 0:x.inputs)==null?void 0:A.text),o=S((U=(G=s==null?void 0:s[($=(K=e==null?void 0:e.inputs)==null?void 0:K.negative)==null?void 0:$[0]])==null?void 0:G.inputs)==null?void 0:U.text),i=["seed","sampler_name","scheduler","steps","cfg"].reduce((O,I)=>{var P,W;return(P=e==null?void 0:e.inputs)!=null&&P[I]?{...O,[I]:(W=e==null?void 0:e.inputs)==null?void 0:W[I]}:O},{}),c=(R=s==null?void 0:s[(H=(m=e==null?void 0:e.inputs)==null?void 0:m.latent_image)==null?void 0:H[0]])==null?void 0:R.inputs,d=c==null?void 0:c.width,r=c==null?void 0:c.height;return{ckptName:t,positive:l,negative:o,...i,width:d,height:r}}const Ke=s=>{var o;const{prompt:e,workflow:t}=s;console.log(t);const l=e==null?void 0:e[((o=Object.keys(e))==null?void 0:o.find(i=>e[i].class_type==="KSampler"))??""];return le(e,l)},$e=({metaData:s})=>{const e=Ke(s);return n.jsxs(te,{spacing:2,align:"stretch",children:[n.jsx(X,{children:n.jsx(E,{size:"sm",onClick:()=>N(JSON.stringify(e)),children:"Copy all"})}),Object.keys(e??{}).map(t=>{var l,o;return n.jsxs(j,{gap:2,children:[n.jsxs(j,{gap:1,alignItems:"center",flexBasis:"200px",children:[t,n.jsx(w,{size:"xm",onClick:()=>N((e==null?void 0:e[t])??""),"aria-label":"copy text",icon:n.jsx(oe,{}),variant:"ghost"})]}),(l=e==null?void 0:e[t])!=null&&l.length&&((o=e==null?void 0:e[t])==null?void 0:o.length)>300?n.jsx(B,{readOnly:!0,value:e==null?void 0:e[t]}):n.jsx(q,{readOnly:!0,value:e==null?void 0:e[t]})]},`meta${t}`)})]})},Ge=s=>{var e,t,l;return((l=(t=(e=Object.keys(s==null?void 0:s.prompt))==null?void 0:e.filter)==null?void 0:t.call(e,o=>{var i,c;return((c=(i=s==null?void 0:s.prompt)==null?void 0:i[o])==null?void 0:c.class_type)==="KSampler"}))==null?void 0:l.length)>1},Ue=s=>{const{prompt:e}=s,t=Object.keys(e);return(t==null?void 0:t.filter(o=>{var i;return((i=e==null?void 0:e[o])==null?void 0:i.class_type)==="KSampler"})).reduce((o,i,c)=>{const d=e==null?void 0:e[i],r=le(e,d),h=Object.keys(r).reduce((g,f)=>({...g,[`${f}_${c+1}`]:r==null?void 0:r[f]}),{});return{...o,...h}},{})},me=({metaData:s})=>{var t;const e=Ue(s);return n.jsxs(te,{spacing:2,align:"stretch",children:[n.jsx(X,{children:n.jsx(E,{size:"sm",onClick:()=>N(JSON.stringify(e)),children:"Copy all"})}),(t=Object.keys(e??{}))==null?void 0:t.filter(l=>!!(e!=null&&e[l])).map(l=>{var o,i;return n.jsxs(j,{gap:2,children:[n.jsxs(j,{gap:1,alignItems:"center",flexBasis:"200px",children:[l,n.jsx(w,{size:"xm",onClick:()=>N((e==null?void 0:e[l])??""),"aria-label":"copy text",icon:n.jsx(oe,{}),variant:"ghost"})]}),(o=e==null?void 0:e[l])!=null&&o.length&&((i=e==null?void 0:e[l])==null?void 0:i.length)>300?n.jsx(B,{readOnly:!0,value:e==null?void 0:e[l]}):n.jsx(q,{readOnly:!0,value:e==null?void 0:e[l]})]},`meta${l}`)})]})},He=({media:s})=>{const[e,t]=u.useState(),l=async o=>{try{const i=await Ae(`/workspace/view_media?filename=${o.localPath}`);t(i)}catch(i){console.log(i)}};return u.useEffect(()=>{s&&l(s)},[s]),n.jsxs(j,{overflowY:"auto",mb:4,direction:"column",gap:2,flex:1,children:[n.jsxs(ze,{alignItems:"center",columns:2,spacing:2,children:[n.jsxs(j,{alignItems:"center",gap:1,children:[n.jsx(z,{children:s==null?void 0:s.localPath}),n.jsx(C,{label:"Donwload image from gallery",children:n.jsx(F,{href:`/workspace/view_media?filename=${s==null?void 0:s.localPath}`,download:s==null?void 0:s.localPath,children:n.jsx(w,{size:"sm",icon:n.jsx(V,{size:19}),"aria-label":"donwload image from gallery"})})})]}),n.jsxs(j,{gap:1,alignItems:"center",children:[n.jsx(z,{children:"Create Time:"}),n.jsx(z,{children:D((s==null?void 0:s.createTime)??0,!0)})]})]}),(()=>{if(!s||!e)return null;const o={metaData:e,media:s};return Ge(e)&&n.jsx(me,{...o})||n.jsx($e,{...o})})()]})},Re=({mediaList:s,media:e})=>{const[t,l]=u.useState();return u.useEffect(()=>{e&&l(e)},[e]),n.jsxs(j,{gap:3,h:"100%",children:[n.jsx(j,{flex:1,children:n.jsx(Be,{media:s.map(o=>({id:o.id,imageUrl:`/workspace/view_media?filename=${o.localPath}`})),currentNum:s==null?void 0:s.findIndex(o=>o.id===(t==null?void 0:t.id)),setMediaAct:o=>l(s==null?void 0:s.find(i=>i.id===o.id))})}),n.jsx(He,{media:t})]})},We=({media:s,isSelecting:e,selectedID:t,onClickMedia:l,onRefreshImagesList:o,coverPath:i,setCoverPath:c})=>{const{curFlowID:r,loadFilePath:h}=u.useContext(ee),{showDialog:g}=re();if(s.localPath==null)return null;const f=i!=null&&i===s.localPath;if(r==null)return null;const y=n.jsxs(F,{isExternal:!0,onClick:()=>l(s),position:"relative",children:[e&&n.jsx(ne,{isChecked:t.includes(s.id),position:"absolute",top:2,left:2}),n.jsx(Me,{mediaLocalPath:s.localPath,size:180,onBrokenLink:()=>{},autoPlay:!0})]});return n.jsxs(we,{width:180,mb:2,children:[n.jsx(C,{label:D(s.createTime,!0),children:y}),n.jsx(C,{label:s.localPath,children:n.jsx(z,{color:"GrayText",noOfLines:1,children:s.localPath})}),n.jsxs(_,{hidden:e,gap:0,children:[n.jsx(C,{label:"Set as cover",children:n.jsx(w,{size:"sm",variant:"ghost",icon:f?n.jsx(Te,{size:19}):n.jsx(Ee,{size:19}),"aria-label":"set as cover",onClick:()=>{var v;(v=T)==null||v.updateFlow(r,{coverMediaPath:s.localPath}),c(s.localPath)}})}),n.jsx(E,{flexGrow:1,onClick:()=>g("How do you want to load this workflow?",[{label:"Load in new workflow",onClick:()=>{h(s.localPath)},colorScheme:"teal"},{label:"Overwrite current workflow",onClick:()=>h(s.localPath,!0),colorScheme:"red"}]),size:"sm",children:"Load"}),n.jsx(C,{label:"Donwload image from gallery",children:n.jsx(F,{href:`/workspace/view_media?filename=${s.localPath}`,download:s.localPath,children:n.jsx(w,{size:"sm",variant:"ghost",icon:n.jsx(V,{size:19}),"aria-label":"donwload image from gallery"})})}),n.jsx(C,{label:"Remove image from gallery",children:n.jsx(w,{size:"sm",variant:"ghost",icon:n.jsx(ve,{size:19}),"aria-label":"remove image from gallery",colorScheme:"red",onClick:async()=>{var p,b;confirm("Are you sure to remove this image from gallery? (won't delete image on your disk)")&&(await((p=se)==null?void 0:p.delete(s.id)),f&&(await((b=T)==null?void 0:b.updateFlow(r,{coverMediaPath:void 0})),c("")),o())}})})]})]})},Le=We;function De({onclose:s}){const{curFlowID:e}=u.useContext(ee),[t,l]=u.useState(""),[o,i]=u.useState([]),[c,d]=u.useState(!1),[r,h]=u.useState(""),[g,f]=u.useState([]),[y,v]=u.useState(),p=async()=>{var x;if(e==null)return;const a=await((x=se)==null?void 0:x.listByWorkflowID(e));f(a??[])};if(u.useEffect(()=>{var a;p(),e&&((a=T)==null||a.get(e).then(x=>{x&&(l(x.name),x!=null&&x.coverMediaPath&&h(x==null?void 0:x.coverMediaPath))}))},[]),e==null)return null;const b=a=>{if(c){o.includes(a.id)?i(o.filter(x=>x!==a.id)):i([...o,a.id]);return}v(a)},k=g.length>0&&o.length===g.length;return n.jsxs(ae,{isOpen:!0,onClose:s,blockScrollOnMount:!0,children:[n.jsx(he,{}),n.jsxs(xe,{width:"90%",maxWidth:"90vw",height:"90vh",children:[n.jsxs(ue,{children:[n.jsx(_,{gap:2,mb:2,children:n.jsxs(ye,{size:"md",mr:2,children:[!!y&&n.jsx(w,{onClick:()=>v(void 0),variant:"ghost",mr:1,"aria-label":"back",icon:n.jsx(Fe,{})}),"Gallery - ",t]})}),c&&n.jsxs(_,{gap:3,children:[n.jsx(ne,{isChecked:k,onChange:()=>{i(k?[]:g.map(a=>a.id))},children:"All"}),n.jsxs(z,{fontSize:16,children:[o.length," Selected"]}),n.jsx(w,{size:"sm",icon:n.jsx(pe,{size:19}),onClick:()=>d(!1),"aria-label":"cancel"})]})]}),n.jsx(de,{}),n.jsx(ge,{overflowY:"auto",children:y?n.jsx(Re,{mediaList:g,media:y}):n.jsx(_,{wrap:"wrap",children:g.map(a=>n.jsx(Le,{selectedID:o,media:a,isSelecting:c,onClickMedia:b,onRefreshImagesList:p,coverPath:r,setCoverPath:h},a.id))})})]})]})}export{De as default};