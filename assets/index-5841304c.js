import{B as n}from"./componentMap-e184fd7f.js";import{a as l}from"./index.js";import{_ as c}from"./BasicForm.vue_vue_type_script_setup_true_lang-a006a9ee.js";import"./BasicForm.vue_vue_type_style_index_0_lang-81a6c1be.js";import{u as f}from"./useForm-c2beaf68.js";import{P as u}from"./index-c8d55b3e.js";import{u as t}from"./upload-94aa82ef.js";import{d,Z as g,a8 as _,a9 as h,l as e,u as o}from"./vue-f962b0e4.js";import{$ as a}from"./antd-c4849d31.js";import"./useFormItem-d384df64.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-a3762521.js";import"./index-07f03dcb.js";import"./useWindowSizeFn-01ffbee2.js";import"./uuid-31b8b5a4.js";import"./useSortable-b9fa3fd2.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-ac301f97.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-be00dfae.js";import"./copyTextToClipboard-f517f61a.js";import"./index-7065f858.js";import"./index-3344c44f.js";import"./FormItem.vue_vue_type_script_lang-ff9da6df.js";import"./helper-b57cb88d.js";import"./useContentViewHeight-8b859986.js";import"./onMountedOrActivated-affa4888.js";const H=d({__name:"index",setup(x){const i=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:t}}],{createMessage:m}=l(),[s]=f({labelWidth:120,schemas:i,actionColOptions:{span:16}});function p(r){m.info(`已上传文件${JSON.stringify(r)}`)}return(r,C)=>(g(),_(o(u),{title:"上传组件示例"},{default:h(()=>[e(o(a),{message:"基础示例"}),e(o(n),{maxSize:20,maxNumber:10,onChange:p,api:o(t),class:"my-5",accept:["image/*"]},null,8,["api"]),e(o(a),{message:"嵌入表单,加入表单校验"}),e(o(c),{onRegister:o(s),class:"my-5"},null,8,["onRegister"])]),_:1}))}});export{H as default};
