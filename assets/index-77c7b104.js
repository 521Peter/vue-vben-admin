var ae=Object.defineProperty,pe=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var K=(e,t,n)=>t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$=(e,t)=>{for(var n in t||(t={}))ue.call(t,n)&&K(e,n,t[n]);if(V)for(var n of V(t))ve.call(t,n)&&K(e,n,t[n]);return e},N=(e,t)=>pe(e,ce(t));import{P as he}from"./index-c8d55b3e.js";import{f as me}from"./index.js";import{d as we,a7 as fe,Z as ge,a8 as ye,a9 as Z,l as xe,E as be,u as Ce}from"./vue-f962b0e4.js";import"./useContentViewHeight-8b859986.js";import"./useWindowSizeFn-01ffbee2.js";import"./onMountedOrActivated-affa4888.js";import"./antd-c4849d31.js";let F={};function q(e={}){F=$({animate:!0,allowClose:!0,overlayOpacity:.7,smoothScroll:!1,disableActiveInteraction:!1,showProgress:!1,stagePadding:10,stageRadius:5,popoverOffset:10,showButtons:["next","previous","close"],disableButtons:[],overlayColor:"#000"},e)}function l(e){return e?F[e]:F}function I(e,t,n,i){return(e/=i/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}function J(e){const t='a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';return e.flatMap(n=>{const i=n.matches(t),o=Array.from(n.querySelectorAll(t));return[...i?[n]:[],...o]}).filter(n=>getComputedStyle(n).pointerEvents!=="none"&&Le(n))}function Q(e){if(!e||Ee(e))return;const t=l("smoothScroll");e.scrollIntoView({behavior:!t||_e(e)?"auto":"smooth",inline:"center",block:"center"})}function _e(e){if(!e||!e.parentElement)return;const t=e.parentElement;return t.scrollHeight>t.clientHeight}function Ee(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function Le(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}let z={};function b(e,t){z[e]=t}function d(e){return e?z[e]:z}function j(){z={}}let O={};function R(e,t){O[e]=t}function B(e){var t;(t=O[e])==null||t.call(O)}function Pe(){O={}}function ke(e,t,n,i){let o=d("__activeStagePosition");const a=o||n.getBoundingClientRect(),h=i.getBoundingClientRect(),m=I(e,a.x,h.x-a.x,t),s=I(e,a.y,h.y-a.y,t),v=I(e,a.width,h.width-a.width,t),r=I(e,a.height,h.height-a.height,t);o={x:m,y:s,width:v,height:r},te(o),b("__activeStagePosition",o)}function ee(e){if(!e)return;const t=e.getBoundingClientRect(),n={x:t.x,y:t.y,width:t.width,height:t.height};b("__activeStagePosition",n),te(n)}function $e(){const e=d("__activeStagePosition"),t=d("__overlaySvg");if(!e||!t)return;const n=window.innerWidth,i=window.innerHeight;t.setAttribute("viewBox",`0 0 ${n} ${i}`)}function Be(e){const t=Ae(e);document.body.appendChild(t),ie(t,n=>{n.target.tagName==="path"&&B("overlayClick")}),b("__overlaySvg",t)}function te(e){const t=d("__overlaySvg");if(!t){Be(e);return}const n=t.firstElementChild;if((n==null?void 0:n.tagName)!=="path")throw new Error("no path element found in stage svg");n.setAttribute("d",ne(e))}function Ae(e){const t=window.innerWidth,n=window.innerHeight,i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.classList.add("driver-overlay","driver-overlay-animated"),i.setAttribute("viewBox",`0 0 ${t} ${n}`),i.setAttribute("xmlSpace","preserve"),i.setAttribute("xmlnsXlink","http://www.w3.org/1999/xlink"),i.setAttribute("version","1.1"),i.setAttribute("preserveAspectRatio","xMinYMin slice"),i.style.fillRule="evenodd",i.style.clipRule="evenodd",i.style.strokeLinejoin="round",i.style.strokeMiterlimit="2",i.style.zIndex="10000",i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%";const o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("d",ne(e)),o.style.fill=l("overlayColor")||"rgb(0,0,0)",o.style.opacity=`${l("overlayOpacity")}`,o.style.pointerEvents="auto",o.style.cursor="auto",i.appendChild(o),i}function ne(e){const t=window.innerWidth,n=window.innerHeight,i=l("stagePadding")||0,o=l("stageRadius")||0,a=e.width+i*2,h=e.height+i*2,m=Math.min(o,a/2,h/2),s=Math.floor(Math.max(m,0)),v=e.x-i+s,r=e.y-i,p=a-s*2,c=h-s*2;return`M${t},0L0,0L0,${n}L${t},${n}L${t},0Z
    M${v},${r} h${p} a${s},${s} 0 0 1 ${s},${s} v${c} a${s},${s} 0 0 1 -${s},${s} h-${p} a${s},${s} 0 0 1 -${s},-${s} v-${c} a${s},${s} 0 0 1 ${s},-${s} z`}function Se(){const e=d("__overlaySvg");e&&e.remove()}function He(){const e=document.getElementById("driver-dummy-element");if(e)return e;let t=document.createElement("div");return t.id="driver-dummy-element",t.style.width="0",t.style.height="0",t.style.pointerEvents="none",t.style.opacity="0",t.style.position="fixed",t.style.top="50%",t.style.left="50%",document.body.appendChild(t),t}function U(e){const{element:t}=e;let n=typeof t=="string"?document.querySelector(t):t;n||(n=He()),Te(n,e)}function Me(){const e=d("__activeElement"),t=d("__activeStep");e&&(ee(e),$e(),se(e,t))}function Te(e,t){const n=Date.now(),i=d("__activeStep"),o=d("__activeElement")||e,a=!o||o===e,h=e.id==="driver-dummy-element",m=o.id==="driver-dummy-element",s=l("animate"),v=t.onHighlightStarted||l("onHighlightStarted"),r=(t==null?void 0:t.onHighlighted)||l("onHighlighted"),p=(i==null?void 0:i.onDeselected)||l("onDeselected"),c=l(),w=d();!a&&p&&p(m?void 0:o,i,{config:c,state:w}),v&&v(h?void 0:e,t,{config:c,state:w});const g=!a&&s;let f=!1;Re(),b("previousStep",i),b("previousElement",o),b("activeStep",t),b("activeElement",e);const u=()=>{if(d("__transitionCallback")!==u)return;const y=Date.now()-n,E=400-y<=400/2;t.popover&&E&&!f&&g&&(X(e,t),f=!0),l("animate")&&y<400?ke(y,400,o,e):(ee(e),r&&r(h?void 0:e,t,{config:l(),state:d()}),b("__transitionCallback",void 0),b("__previousStep",i),b("__previousElement",o),b("__activeStep",t),b("__activeElement",e)),window.requestAnimationFrame(u)};b("__transitionCallback",u),window.requestAnimationFrame(u),Q(e),!g&&t.popover&&X(e,t),o.classList.remove("driver-active-element","driver-no-interaction"),o.removeAttribute("aria-haspopup"),o.removeAttribute("aria-expanded"),o.removeAttribute("aria-controls"),l("disableActiveInteraction")&&e.classList.add("driver-no-interaction"),e.classList.add("driver-active-element"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded","true"),e.setAttribute("aria-controls","driver-popover-content")}function De(){var e;(e=document.getElementById("driver-dummy-element"))==null||e.remove(),document.querySelectorAll(".driver-active-element").forEach(t=>{t.classList.remove("driver-active-element","driver-no-interaction"),t.removeAttribute("aria-haspopup"),t.removeAttribute("aria-expanded"),t.removeAttribute("aria-controls")})}function A(){const e=d("__resizeTimeout");e&&window.cancelAnimationFrame(e),b("__resizeTimeout",window.requestAnimationFrame(Me))}function We(e){var t;if(!d("isInitialized")||!(e.key==="Tab"||e.keyCode===9))return;const n=d("__activeElement"),i=(t=d("popover"))==null?void 0:t.wrapper,o=J([...i?[i]:[],...n?[n]:[]]),a=o[0],h=o[o.length-1];if(e.preventDefault(),e.shiftKey){const m=o[o.indexOf(document.activeElement)-1]||h;m==null||m.focus()}else{const m=o[o.indexOf(document.activeElement)+1]||a;m==null||m.focus()}}function oe(e){var t;((t=l("allowKeyboardControl"))==null||t)&&(e.key==="Escape"?B("escapePress"):e.key==="ArrowRight"?B("arrowRightPress"):e.key==="ArrowLeft"&&B("arrowLeftPress"))}function ie(e,t,n){const i=(o,a)=>{const h=o.target;e.contains(h)&&((!n||n(h))&&(o.preventDefault(),o.stopPropagation(),o.stopImmediatePropagation()),a==null||a(o))};document.addEventListener("pointerdown",i,!0),document.addEventListener("mousedown",i,!0),document.addEventListener("pointerup",i,!0),document.addEventListener("mouseup",i,!0),document.addEventListener("click",o=>{i(o,t)},!0)}function Ne(){window.addEventListener("keyup",oe,!1),window.addEventListener("keydown",We,!1),window.addEventListener("resize",A),window.addEventListener("scroll",A)}function Ie(){window.removeEventListener("keyup",oe),window.removeEventListener("resize",A),window.removeEventListener("scroll",A)}function Re(){const e=d("popover");e&&(e.wrapper.style.display="none")}function X(e,t){var n,i;let o=d("popover");o&&document.body.removeChild(o.wrapper),o=Oe(),document.body.appendChild(o.wrapper);const{title:a,description:h,showButtons:m,disableButtons:s,showProgress:v,nextBtnText:r=l("nextBtnText")||"Next &rarr;",prevBtnText:p=l("prevBtnText")||"&larr; Previous",progressText:c=l("progressText")||"{current} of {total}"}=t.popover||{};o.nextButton.innerHTML=r,o.previousButton.innerHTML=p,o.progress.innerHTML=c,a?(o.title.innerHTML=a,o.title.style.display="block"):o.title.style.display="none",h?(o.description.innerHTML=h,o.description.style.display="block"):o.description.style.display="none";const w=m||l("showButtons"),g=v||l("showProgress")||!1,f=(w==null?void 0:w.includes("next"))||(w==null?void 0:w.includes("previous"))||g;o.closeButton.style.display=w.includes("close")?"block":"none",f?(o.footer.style.display="flex",o.progress.style.display=g?"block":"none",o.nextButton.style.display=w.includes("next")?"block":"none",o.previousButton.style.display=w.includes("previous")?"block":"none"):o.footer.style.display="none";const u=s||l("disableButtons")||[];u!=null&&u.includes("next")&&(o.nextButton.disabled=!0,o.nextButton.classList.add("driver-popover-btn-disabled")),u!=null&&u.includes("previous")&&(o.previousButton.disabled=!0,o.previousButton.classList.add("driver-popover-btn-disabled")),u!=null&&u.includes("close")&&(o.closeButton.disabled=!0,o.closeButton.classList.add("driver-popover-btn-disabled"));const y=o.wrapper;y.style.display="block",y.style.left="",y.style.top="",y.style.bottom="",y.style.right="",y.id="driver-popover-content",y.setAttribute("role","dialog"),y.setAttribute("aria-labelledby","driver-popover-title"),y.setAttribute("aria-describedby","driver-popover-description");const E=o.arrow;E.className="driver-popover-arrow";const L=((n=t.popover)==null?void 0:n.popoverClass)||l("popoverClass")||"";y.className=`driver-popover ${L}`.trim(),ie(o.wrapper,P=>{var S,H,M;const k=P.target,T=((S=t.popover)==null?void 0:S.onNextClick)||l("onNextClick"),D=((H=t.popover)==null?void 0:H.onPrevClick)||l("onPrevClick"),W=((M=t.popover)==null?void 0:M.onCloseClick)||l("onCloseClick");if(k.classList.contains("driver-popover-next-btn"))return T?T(e,t,{config:l(),state:d()}):B("nextClick");if(k.classList.contains("driver-popover-prev-btn"))return D?D(e,t,{config:l(),state:d()}):B("prevClick");if(k.classList.contains("driver-popover-close-btn"))return W?W(e,t,{config:l(),state:d()}):B("closeClick")},P=>!(o!=null&&o.description.contains(P))&&!(o!=null&&o.title.contains(P))&&typeof P.className=="string"&&P.className.includes("driver-popover")),b("popover",o);const x=((i=t.popover)==null?void 0:i.onPopoverRender)||l("onPopoverRender");x&&x(o,{config:l(),state:d()}),se(e,t),Q(y);const C=e.classList.contains("driver-dummy-element"),_=J([y,...C?[]:[e]]);_.length>0&&_[0].focus()}function re(){const e=d("popover");if(!(e!=null&&e.wrapper))return;const t=e.wrapper.getBoundingClientRect(),n=l("stagePadding")||0,i=l("popoverOffset")||0;return{width:t.width+n+i,height:t.height+n+i,realWidth:t.width,realHeight:t.height}}function Y(e,t){const{elementDimensions:n,popoverDimensions:i,popoverPadding:o,popoverArrowDimensions:a}=t;return e==="start"?Math.max(Math.min(n.top-o,window.innerHeight-i.realHeight-a.width),a.width):e==="end"?Math.max(Math.min(n.top-(i==null?void 0:i.realHeight)+n.height+o,window.innerHeight-(i==null?void 0:i.realHeight)-a.width),a.width):e==="center"?Math.max(Math.min(n.top+n.height/2-(i==null?void 0:i.realHeight)/2,window.innerHeight-(i==null?void 0:i.realHeight)-a.width),a.width):0}function G(e,t){const{elementDimensions:n,popoverDimensions:i,popoverPadding:o,popoverArrowDimensions:a}=t;return e==="start"?Math.max(Math.min(n.left-o,window.innerWidth-i.realWidth-a.width),a.width):e==="end"?Math.max(Math.min(n.left-(i==null?void 0:i.realWidth)+n.width+o,window.innerWidth-(i==null?void 0:i.realWidth)-a.width),a.width):e==="center"?Math.max(Math.min(n.left+n.width/2-(i==null?void 0:i.realWidth)/2,window.innerWidth-(i==null?void 0:i.realWidth)-a.width),a.width):0}function se(e,t){const n=d("popover");if(!n)return;const{align:i="start",side:o="left"}=(t==null?void 0:t.popover)||{},a=i,h=e.id==="driver-dummy-element"?"over":o,m=l("stagePadding")||0,s=re(),v=n.arrow.getBoundingClientRect(),r=e.getBoundingClientRect(),p=r.top-s.height;let c=p>=0;const w=window.innerHeight-(r.bottom+s.height);let g=w>=0;const f=r.left-s.width;let u=f>=0;const y=window.innerWidth-(r.right+s.width);let E=y>=0;const L=!c&&!g&&!u&&!E;let x=h;if(h==="top"&&c?E=u=g=!1:h==="bottom"&&g?E=u=c=!1:h==="left"&&u?E=c=g=!1:h==="right"&&E&&(u=c=g=!1),h==="over"){const C=window.innerWidth/2-s.realWidth/2,_=window.innerHeight/2-s.realHeight/2;n.wrapper.style.left=`${C}px`,n.wrapper.style.right="auto",n.wrapper.style.top=`${_}px`,n.wrapper.style.bottom="auto"}else if(L){const C=window.innerWidth/2-(s==null?void 0:s.realWidth)/2,_=10;n.wrapper.style.left=`${C}px`,n.wrapper.style.right="auto",n.wrapper.style.bottom=`${_}px`,n.wrapper.style.top="auto"}else if(u){const C=Math.min(f,window.innerWidth-(s==null?void 0:s.realWidth)-v.width),_=Y(a,{elementDimensions:r,popoverDimensions:s,popoverPadding:m,popoverArrowDimensions:v});n.wrapper.style.left=`${C}px`,n.wrapper.style.top=`${_}px`,n.wrapper.style.bottom="auto",n.wrapper.style.right="auto",x="left"}else if(E){const C=Math.min(y,window.innerWidth-(s==null?void 0:s.realWidth)-v.width),_=Y(a,{elementDimensions:r,popoverDimensions:s,popoverPadding:m,popoverArrowDimensions:v});n.wrapper.style.right=`${C}px`,n.wrapper.style.top=`${_}px`,n.wrapper.style.bottom="auto",n.wrapper.style.left="auto",x="right"}else if(c){const C=Math.min(p,window.innerHeight-s.realHeight-v.width);let _=G(a,{elementDimensions:r,popoverDimensions:s,popoverPadding:m,popoverArrowDimensions:v});n.wrapper.style.top=`${C}px`,n.wrapper.style.left=`${_}px`,n.wrapper.style.bottom="auto",n.wrapper.style.right="auto",x="top"}else if(g){const C=Math.min(w,window.innerHeight-(s==null?void 0:s.realHeight)-v.width);let _=G(a,{elementDimensions:r,popoverDimensions:s,popoverPadding:m,popoverArrowDimensions:v});n.wrapper.style.left=`${_}px`,n.wrapper.style.bottom=`${C}px`,n.wrapper.style.top="auto",n.wrapper.style.right="auto",x="bottom"}L?n.arrow.classList.add("driver-popover-arrow-none"):ze(a,x,e)}function ze(e,t,n){const i=d("popover");if(!i)return;const o=n.getBoundingClientRect(),a=re(),h=i.arrow,m=a.width,s=window.innerWidth,v=o.width,r=o.left,p=a.height,c=window.innerHeight,w=o.top,g=o.height;h.className="driver-popover-arrow";let f=t,u=e;t==="top"?(r+v<=0?(f="right",u="end"):r+v-m<=0&&(f="top",u="start"),r>=s?(f="left",u="end"):r+m>=s&&(f="top",u="end")):t==="bottom"?(r+v<=0?(f="right",u="start"):r+v-m<=0&&(f="bottom",u="start"),r>=s?(f="left",u="start"):r+m>=s&&(f="bottom",u="end")):t==="left"?(w+g<=0?(f="bottom",u="end"):w+g-p<=0&&(f="left",u="start"),w>=c?(f="top",u="end"):w+p>=c&&(f="left",u="end")):t==="right"&&(w+g<=0?(f="bottom",u="start"):w+g-p<=0&&(f="right",u="start"),w>=c?(f="top",u="start"):w+p>=c&&(f="right",u="end")),f?(h.classList.add(`driver-popover-arrow-side-${f}`),h.classList.add(`driver-popover-arrow-align-${u}`)):h.classList.add("driver-popover-arrow-none")}function Oe(){const e=document.createElement("div");e.classList.add("driver-popover");const t=document.createElement("div");t.classList.add("driver-popover-arrow");const n=document.createElement("header");n.id="driver-popover-title",n.classList.add("driver-popover-title"),n.style.display="none",n.innerText="Popover Title";const i=document.createElement("div");i.id="driver-popover-description",i.classList.add("driver-popover-description"),i.style.display="none",i.innerText="Popover description is here";const o=document.createElement("button");o.type="button",o.classList.add("driver-popover-close-btn"),o.setAttribute("aria-label","Close"),o.innerHTML="&times;";const a=document.createElement("footer");a.classList.add("driver-popover-footer");const h=document.createElement("span");h.classList.add("driver-popover-progress-text"),h.innerText="";const m=document.createElement("span");m.classList.add("driver-popover-navigation-btns");const s=document.createElement("button");s.type="button",s.classList.add("driver-popover-prev-btn"),s.innerHTML="&larr; Previous";const v=document.createElement("button");return v.type="button",v.classList.add("driver-popover-next-btn"),v.innerHTML="Next &rarr;",m.appendChild(s),m.appendChild(v),a.appendChild(h),a.appendChild(m),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(a),{wrapper:e,arrow:t,title:n,description:i,footer:a,previousButton:s,nextButton:v,closeButton:o,footerButtons:m,progress:h}}function qe(){var e;const t=d("popover");t&&((e=t.wrapper.parentElement)==null||e.removeChild(t.wrapper))}function Fe(e={}){q(e);function t(){l("allowClose")&&v()}function n(){const r=d("activeIndex"),p=l("steps")||[];if(typeof r=="undefined")return;const c=r+1;p[c]?s(c):v()}function i(){const r=d("activeIndex"),p=l("steps")||[];if(typeof r=="undefined")return;const c=r-1;p[c]?s(c):v()}function o(r){(l("steps")||[])[r]?s(r):v()}function a(){var r;if(d("__transitionCallback"))return;const p=d("activeIndex"),c=d("__activeStep"),w=d("__activeElement");if(typeof p=="undefined"||typeof c=="undefined"||typeof d("activeIndex")=="undefined")return;const g=((r=c.popover)==null?void 0:r.onPrevClick)||l("onPrevClick");if(g)return g(w,c,{config:l(),state:d()});i()}function h(){var r;if(d("__transitionCallback"))return;const p=d("activeIndex"),c=d("__activeStep"),w=d("__activeElement");if(typeof p=="undefined"||typeof c=="undefined")return;const g=((r=c.popover)==null?void 0:r.onNextClick)||l("onNextClick");if(g)return g(w,c,{config:l(),state:d()});n()}function m(){d("isInitialized")||(b("isInitialized",!0),document.body.classList.add("driver-active",l("animate")?"driver-fade":"driver-simple"),Ne(),R("overlayClick",t),R("escapePress",t),R("arrowLeftPress",a),R("arrowRightPress",h))}function s(r=0){var p,c,w,g,f,u,y,E;const L=l("steps");if(!L){v();return}if(!L[r]){v();return}b("__activeOnDestroyed",document.activeElement),b("activeIndex",r);const x=L[r],C=L[r+1],_=L[r-1],P=((p=x.popover)==null?void 0:p.doneBtnText)||l("doneBtnText")||"Done",S=l("allowClose"),H=typeof((c=x.popover)==null?void 0:c.showProgress)!="undefined"?(w=x.popover)==null?void 0:w.showProgress:l("showProgress"),M=(((g=x.popover)==null?void 0:g.progressText)||l("progressText")||"{{current}} of {{total}}").replace("{{current}}",`${r+1}`).replace("{{total}}",`${L.length}`),k=((f=x.popover)==null?void 0:f.showButtons)||l("showButtons"),T=["next","previous",...S?["close"]:[]].filter(de=>!(k!=null&&k.length)||k.includes(de)),D=((u=x.popover)==null?void 0:u.onNextClick)||l("onNextClick"),W=((y=x.popover)==null?void 0:y.onPrevClick)||l("onPrevClick"),le=((E=x.popover)==null?void 0:E.onCloseClick)||l("onCloseClick");U(N($({},x),{popover:$({showButtons:T,nextBtnText:C?void 0:P,disableButtons:[..._?[]:["previous"]],showProgress:H,progressText:M,onNextClick:D||(()=>{C?s(r+1):v()}),onPrevClick:W||(()=>{s(r-1)}),onCloseClick:le||(()=>{v()})},(x==null?void 0:x.popover)||{})}))}function v(r=!0){const p=d("__activeElement"),c=d("__activeStep"),w=d("__activeOnDestroyed"),g=l("onDestroyStarted");if(r&&g){const y=!p||(p==null?void 0:p.id)==="driver-dummy-element";g(y?void 0:p,c,{config:l(),state:d()});return}const f=(c==null?void 0:c.onDeselected)||l("onDeselected"),u=l("onDestroyed");if(document.body.classList.remove("driver-active","driver-fade","driver-simple"),Ie(),qe(),De(),Se(),Pe(),j(),p&&c){const y=p.id==="driver-dummy-element";f&&f(y?void 0:p,c,{config:l(),state:d()}),u&&u(y?void 0:p,c,{config:l(),state:d()})}w&&w.focus()}return{isActive:()=>d("isInitialized")||!1,refresh:A,drive:(r=0)=>{m(),s(r)},setConfig:q,setSteps:r=>{j(),q(N($({},l()),{steps:r}))},getConfig:l,getState:d,getActiveIndex:()=>d("activeIndex"),isFirstStep:()=>d("activeIndex")===0,isLastStep:()=>{const r=l("steps")||[],p=d("activeIndex");return p!==void 0&&p===r.length-1},getActiveStep:()=>d("activeStep"),getActiveElement:()=>d("activeElement"),getPreviousElement:()=>d("previousElement"),getPreviousStep:()=>d("previousStep"),moveNext:n,movePrevious:i,moveTo:o,hasNextStep:()=>{const r=l("steps")||[],p=d("activeIndex");return p!==void 0&&r[p+1]},hasPreviousStep:()=>{const r=l("steps")||[],p=d("activeIndex");return p!==void 0&&r[p-1]},highlight:r=>{m(),U(N($({},r),{popover:r.popover?$({showButtons:[],showProgress:!1,progressText:""},r.popover):void 0}))},destroy:()=>{v(!1)}}}const Je=we({__name:"index",setup(e){const{prefixVar:t}=me("");function n(){Fe({showProgress:!0,steps:[{popover:{title:"Welcome",description:"Hello World! 👋"}},{element:`.${t}-layout-header-trigger`,popover:{title:"Collapse Button",description:"This is the menu collapse button."}},{element:`.${t}-layout-header-action`,popover:{title:"User Action",description:"This is the user function area."}}]}).drive()}return(i,o)=>{const a=fe("a-button");return ge(),ye(Ce(he),{title:"引导页",content:"用于给用户的指引操作"},{default:Z(()=>[xe(a,{type:"primary",onClick:n},{default:Z(()=>[be("开始")]),_:1})]),_:1})}}});export{Je as default};
