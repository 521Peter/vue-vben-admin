import{u as p,i as d}from"./mock-api-d87b85f1.js";import{P as i}from"./index-c8d55b3e.js";import{h as m,b3 as u,V as f,z as c,B as C,N as B}from"./antd-c4849d31.js";import{d as l,l as e,f as F,E as r}from"./vue-f962b0e4.js";import"./index.js";import"./useContentViewHeight-8b859986.js";import"./useWindowSizeFn-01ffbee2.js";import"./onMountedOrActivated-affa4888.js";const y=l({setup(){let s=0;const t=F(""),{loading:o,run:n}=p(d,{manual:!0,retryCount:3,onError:a=>{m.error(a.message+` count: ${s++}.`)}});return()=>e(B,{title:"错误重试"},{default:()=>[e(u,null,{default:()=>[e(u.Paragraph,null,{default:()=>[r("通过设置"),e(u.Text,{type:"danger"},{default:()=>[r(" options.retryCount ")]}),r("，指定错误重试次数，则 useRequest 在失败后会进行重试。")]}),e(u.Text,{code:!0},{default:()=>["const { data, run } = useRequest(imitateApi, { retryCount: 3 });"]})]}),e(f,{class:"mt-4"},{default:()=>[e(c,{value:t.value,"onUpdate:value":a=>t.value=a,placeholder:"Please enter username"},null),e(C,{type:"primary",disabled:o.value,onClick:()=>n(t.value,!1)},{default:()=>[o.value?"Loading":"Edit"]})]})]})}}),T=l({setup(){return()=>e(i,null,{default:()=>[e(y,null,null)]})}});export{T as default};
