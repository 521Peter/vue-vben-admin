var ee=Object.defineProperty,te=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var D=(s,e,o)=>e in s?ee(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,B=(s,e)=>{for(var o in e||(e={}))ne.call(e,o)&&D(s,o,e[o]);if(V)for(var o of V(e))ae.call(e,o)&&D(s,o,e[o]);return s},M=(s,e)=>te(s,oe(e));var Z=(s,e,o)=>new Promise((i,h)=>{var C=l=>{try{p(o.next(l))}catch(b){h(b)}},v=l=>{try{p(o.throw(l))}catch(b){h(b)}},p=l=>l.done?i(l.value):Promise.resolve(l.value).then(C,v);p((o=o.apply(s,e)).next())});import{f as O,m as se,c as re,n as ie,p as d,P as ce,w as U}from"./index.js";import{d as X,Z as E,_ as z,$ as A,N as _,a1 as T,u,af as q,f as w,w as G,x as j,k as le,J as ue,ag as fe,p as ge,c as y,a8 as J,ad as de,aa as pe,a9 as W,ac as he,ab as K,ai as me,aj as ye,F as He,E as _e,a0 as ve}from"./vue-f962b0e4.js";import{u as Q}from"./useContentViewHeight-8b859986.js";import{o as be}from"./onMountedOrActivated-affa4888.js";import{k as Fe,a8 as ke,o as L,a9 as $e}from"./antd-c4849d31.js";import{u as Ce}from"./useWindowSizeFn-01ffbee2.js";const Se=X({name:"PageFooter",inheritAttrs:!1,__name:"PageFooter",setup(s){const{prefixCls:e}=O("page-footer"),{getCalcContentWidth:o}=se();return(i,h)=>(E(),z("div",{class:T(u(e)),style:q({width:u(o)})},[A("div",{class:T(`${u(e)}__left`)},[_(i.$slots,"left",{},void 0,!0)],2),_(i.$slots,"default",{},void 0,!0),A("div",{class:T(`${u(e)}__right`)},[_(i.$slots,"right",{},void 0,!0)],2)],6))}});const Y=re(Se,[["__scopeId","data-v-dafa78ce"]]);function Pe(s,e,o,i,h=0,C=w(0)){const v=w(null),{footerHeightRef:p}=Q();let l={useLayoutFooter:!0};const b=c=>{l=c};function N(){j(()=>{P()})}function F(c,R="all"){var m,k,$,n;function H(t){return Number(t.replace(/[^\d]/g,""))}let f=0;const g="0px";if(c){const t=getComputedStyle(c),r=H((m=t==null?void 0:t.marginTop)!=null?m:g),a=H((k=t==null?void 0:t.marginBottom)!=null?k:g),x=H(($=t==null?void 0:t.paddingTop)!=null?$:g),I=H((n=t==null?void 0:t.paddingBottom)!=null?n:g);R==="all"?(f+=r,f+=a,f+=x,f+=I):R==="top"?(f+=r,f+=x):(f+=a,f+=I)}return f}function S(c){return c==null?null:c instanceof HTMLDivElement?c:c.$el}function P(){return Z(this,null,function*(){var n;if(!s.value)return;yield j();const c=S(u(e));if(!c)return;const{bottomIncludeBody:R}=ie(c);let H=0;o.forEach(t=>{var r,a;H+=(a=(r=S(u(t)))==null?void 0:r.offsetHeight)!=null?a:0});let f=(n=F(c))!=null?n:0;i.forEach(t=>{f+=F(S(u(t)))});let g=0;function m(t,r){if(t&&r){const a=t.parentElement;a&&(Fe(r)?a.classList.contains(r)?g+=F(a,"bottom"):(g+=F(a,"bottom"),m(a,r)):ke(r)&&r>0&&(g+=F(a,"bottom"),m(a,--r)))}}le(h)?m(c,u(h)):m(c,h);let k=R-u(p)-u(C)-H-f-g;const $=()=>{var t;(t=l.elements)==null||t.forEach(r=>{var a,x;k+=(x=(a=S(u(r)))==null?void 0:a.offsetHeight)!=null?x:0})};l.useLayoutFooter&&u(p)>0,$(),v.value=k})}return be(()=>{j(()=>{P()})}),Ce(()=>{P()},{wait:50,immediate:!0}),G(()=>[p.value],()=>{P()},{flush:"post",immediate:!0}),{redoHeight:N,setCompensation:b,contentHeight:v}}const Re=X({name:"PageWrapper",inheritAttrs:!1,__name:"PageWrapper",props:{title:d.string,dense:d.bool,ghost:d.bool,headerSticky:d.bool,headerStyle:Object,content:d.string,contentStyle:{type:Object},contentBackground:d.bool,contentFullHeight:d.bool.def(!1),contentClass:d.string,fixedHeight:d.bool,upwardSpace:d.oneOfType([d.number,d.string]).def(0)},setup(s){const e=s,o=ue(),i=fe(),h=w(null),C=w(null),v=w(null),p=w(null),{prefixCls:l}=O("page-wrapper");ge(ce,y(()=>e.fixedHeight));const b=y(()=>e.contentFullHeight),N=y(()=>e.upwardSpace),{redoHeight:F,setCompensation:S,contentHeight:P}=Pe(b,h,[C,p],[v],N);S({useLayoutFooter:!0,elements:[p]});const c=y(()=>{var n;return[l,{[`${l}--dense`]:e.dense},(n=o.class)!=null?n:{}]}),{headerHeightRef:R}=Q(),H=y(()=>{const{headerSticky:n}=e;return n?B({position:"sticky",top:`${u(R)}px`},e.headerStyle):{}}),f=y(()=>e.content||(i==null?void 0:i.headerContent)||e.title||m.value.length),g=y(()=>(i==null?void 0:i.leftFooter)||(i==null?void 0:i.rightFooter)),m=y(()=>Object.keys(L(i,"default","leftFooter","rightFooter","headerContent"))),k=y(()=>{const{contentFullHeight:n,contentStyle:t,fixedHeight:r}=e;if(!n)return B({},t);const a=`${u(P)}px`;return B(M(B({},t),{minHeight:a}),r?{height:a}:{})}),$=y(()=>{const{contentBackground:n,contentClass:t}=e;return[`${l}-content`,t,{[`${l}-content-bg`]:n}]});return G(()=>[g.value],()=>{F()},{flush:"post",immediate:!0}),(n,t)=>(E(),z("div",{class:T(c.value),ref_key:"wrapperRef",ref:h},[f.value?(E(),J(u($e),he({key:0,ghost:s.ghost,title:s.title},u(L)(n.$attrs,"class"),{style:H.value,ref_key:"headerRef",ref:C}),de({default:W(()=>[s.content?(E(),z(He,{key:0},[_e(ve(s.content),1)],64)):_(n.$slots,"headerContent",{key:1})]),_:2},[pe(m.value,r=>({name:r,fn:W(a=>[_(n.$slots,r,me(ye(a||{})))])}))]),1040,["ghost","title","style"])):K("",!0),A("div",{class:T(["overflow-hidden",$.value]),style:q(k.value),ref_key:"contentRef",ref:v},[_(n.$slots,"default")],6),g.value?(E(),J(Y,{key:1,ref_key:"footerRef",ref:p},{left:W(()=>[_(n.$slots,"leftFooter")]),right:W(()=>[_(n.$slots,"rightFooter")]),_:3},512)):K("",!0)],2))}});U(Y);const je=U(Re);export{je as P};
