var _=(F,v,l)=>new Promise((u,c)=>{var r=o=>{try{m(l.next(o))}catch(d){c(d)}},b=o=>{try{m(l.throw(o))}catch(d){c(d)}},m=o=>o.done?u(o.value):Promise.resolve(o.value).then(r,b);m((l=l.apply(F,v)).next())});import{P as $}from"./index-c8d55b3e.js";import{C as w,d as V,a as K}from"./index.js";import{_ as P}from"./BasicForm.vue_vue_type_script_setup_true_lang-a006a9ee.js";import"./BasicForm.vue_vue_type_style_index_0_lang-81a6c1be.js";import"./componentMap-e184fd7f.js";import{u as T}from"./useForm-c2beaf68.js";import{Y as g,o as B}from"./antd-c4849d31.js";import{d as x,f as h,a7 as D,q as R,n as M,Z as k,a8 as N,a9 as i,$ as S,l as n,E as y,u as f,_ as j,F as E,aa as W,ac as q}from"./vue-f962b0e4.js";import"./useContentViewHeight-8b859986.js";import"./useWindowSizeFn-01ffbee2.js";import"./onMountedOrActivated-affa4888.js";import"./FormItem.vue_vue_type_script_lang-ff9da6df.js";import"./helper-b57cb88d.js";import"./index-07f03dcb.js";import"./useFormItem-d384df64.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-a3762521.js";import"./uuid-31b8b5a4.js";import"./useSortable-b9fa3fd2.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-ac301f97.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-be00dfae.js";import"./copyTextToClipboard-f517f61a.js";import"./index-7065f858.js";import"./index-3344c44f.js";const A={class:"mb-4"},de=x({name:"TabsFormDemo",__name:"TabsForm",setup(F){const v=g.TabPane,{createMessage:l}=K(),u=h("tabs2"),c=h(!1),r=[],b={showActionButtonGroup:!1,labelWidth:100},m={};for(let a=1;a<=5;++a){const e=`tabs${a}`,s=[],p={};for(let t=1;t<=8;++t)s.push({field:`${e}.field${t}`,label:`${e}-field${t}`,component:"Input",colProps:{span:24}}),p[`field${t}`]=`field: ${e}.field${t}, default value`;m[e]=p,r.push({key:e,tab:e,forceRender:!0,Form:T(Object.assign({schemas:s},b))})}function o(){return _(this,null,function*(){for(const a of r){const{resetFields:e}=a.Form[1];yield e()}})}function d(){return _(this,null,function*(){let a="";c.value=!0;try{const e={};for(const s of r){a=s.key;const{validate:p,getFieldsValue:t}=s.Form[1];yield p(),V(e,t())}l.success("提交成功！请打开控制台查看")}catch(e){u.value=a}finally{c.value=!1}})}function C(){return _(this,null,function*(){for(const a of r){const{setFieldsValue:e}=a.Form[1];yield e(m)}})}return(a,e)=>{const s=D("a-button"),p=R("loading");return M((k(),N(f($),{title:"标签页+多级field表单"},{default:i(()=>[S("div",A,[n(s,{onClick:o,class:"mr-2"},{default:i(()=>[y(" 重置表单 ")]),_:1}),n(s,{onClick:C,class:"mr-2"},{default:i(()=>[y(" 设置默认值 ")]),_:1}),n(s,{onClick:d,class:"mr-2",type:"primary"},{default:i(()=>[y(" 提交表单 ")]),_:1})]),n(f(w),{title:"标签页+多级field表单"},{default:i(()=>[n(f(g),{activeKey:u.value,"onUpdate:activeKey":e[0]||(e[0]=t=>u.value=t)},{default:i(()=>[(k(),j(E,null,W(r,t=>n(f(v),q({key:t.key},f(B)(t,["Form","key"])),{default:i(()=>[n(f(P),{onRegister:t.Form[0]},null,8,["onRegister"])]),_:2},1040)),64))]),_:1},8,["activeKey"])]),_:1})]),_:1})),[[p,c.value]])}}});export{de as default};
