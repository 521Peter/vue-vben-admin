import{u as d,i}from"./mock-api-d87b85f1.js";import{P as g}from"./index-c8d55b3e.js";import{b3 as l,V as p,B as t,N as f,h as m}from"./antd-c4849d31.js";import{d as s,l as e,E as u}from"./vue-f962b0e4.js";import"./index.js";import"./useContentViewHeight-8b859986.js";import"./useWindowSizeFn-01ffbee2.js";import"./onMountedOrActivated-affa4888.js";const C=s({setup(){const{data:a,loading:n,run:r,cancel:o}=d(i,{pollingInterval:1e3,pollingWhenHidden:!1});return()=>e(f,{title:"默认用法"},{default:()=>[e(l,null,{default:()=>[e(l.Paragraph,null,{default:()=>[u("通过设置"),e(l.Text,{type:"danger"},{default:()=>[u(" options.pollingInterval ")]}),u("，进入轮询模式，useRequest 会定时触发 service 执行。")]}),e(l.Paragraph,null,{default:()=>[e(l.Text,{code:!0},{default:()=>["const { data, run, cancel } = useRequest(imitateApi, { pollingInterval: 3000 });"]})]})]}),e("div",null,[e("div",null,[u("Username: "),n.value?"Loading":a.value]),e(p,null,{default:()=>[e(t,{onClick:()=>r()},{default:()=>[u("start")]}),e(t,{type:"dashed",onClick:o},{default:()=>[u("stop")]})]})])]})}}),E=s({setup(){const{data:a,loading:n,run:r,cancel:o}=d(i,{manual:!0,pollingInterval:3e3,pollingErrorRetryCount:3,pollingWhenHidden:!1,onError:c=>{m.error(c.message)}});return()=>e(f,{title:"轮询错误重试",class:"mt-2"},{default:()=>[e(l,null,{default:()=>[e(l.Paragraph,null,{default:()=>[u("通过"),e(l.Text,{type:"danger"},{default:()=>[u(" options.pollingErrorRetryCount ")]}),u("轮询错误重试次数。")]}),e(l.Paragraph,null,{default:()=>[e(l.Text,{code:!0},{default:()=>["const { data, run, cancel } = useRequest(imitateApi, { pollingInterval: 3000,  pollingErrorRetryCount: 3 });"]})]})]}),e("div",null,[e("div",null,[u("Username: "),n.value?"Loading":a.value]),e(p,null,{default:()=>[e(t,{onClick:()=>r("lutz",!1)},{default:()=>[u("start")]}),e(t,{type:"dashed",onClick:o},{default:()=>[u("stop")]})]})])]})}}),x=s({setup(){return()=>e(g,null,{default:()=>[e(C,null,null),e(E,null,null)]})}});export{x as default};
