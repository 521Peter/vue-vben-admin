var m=(u,s,t)=>new Promise((c,n)=>{var p=e=>{try{o(t.next(e))}catch(l){n(l)}},d=e=>{try{o(t.throw(e))}catch(l){n(l)}},o=e=>e.done?c(e.value):Promise.resolve(e.value).then(p,d);o((t=t.apply(u,s)).next())});import{P as x}from"./index-c8d55b3e.js";import{l as y}from"./index.js";import{t as k}from"./account-57e5abfe.js";import{N as _}from"./antd-c4849d31.js";import{d as C,a7 as h,Z as T,a8 as S,a9 as a,l as r,u as i,E as f,$ as w}from"./vue-f962b0e4.js";import"./useContentViewHeight-8b859986.js";import"./useWindowSizeFn-01ffbee2.js";import"./onMountedOrActivated-affa4888.js";const N=w("span",null,null,-1),H=C({name:"TestSessionTimeout",__name:"index",setup(u){const s=_.Grid,t=y();function c(){return m(this,null,function*(){t.setToken(void 0),t.setSessionTimeout(!0)})}function n(){return m(this,null,function*(){try{yield k()}catch(p){}})}return(p,d)=>{const o=h("a-button");return T(),S(i(x),{title:"登录过期示例",content:"用户登录过期示例，不再跳转登录页，直接生成页面覆盖当前页面，方便保持过期前的用户状态！"},{default:a(()=>[r(i(_),{title:"请点击下面的按钮访问测试接口",extra:"所访问的接口会返回Token过期响应"},{default:a(()=>[r(i(s),{style:{width:"50%","text-align":"center"}},{default:a(()=>[r(o,{type:"primary",onClick:c},{default:a(()=>[f("HttpStatus == 401")]),_:1})]),_:1}),r(i(s),{style:{width:"50%","text-align":"center"}},{default:a(()=>[N,r(o,{class:"ml-4",type:"primary",onClick:n},{default:a(()=>[f("Response.code == 401")]),_:1})]),_:1})]),_:1})]),_:1})}}});export{H as default};
