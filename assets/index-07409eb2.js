var u=(s,a,e)=>new Promise((m,i)=>{var o=r=>{try{t(e.next(r))}catch(c){i(c)}},p=r=>{try{t(e.throw(r))}catch(c){i(c)}},t=r=>r.done?m(r.value):Promise.resolve(r.value).then(o,p);t((e=e.apply(s,a)).next())});import{P as w}from"./index-c8d55b3e.js";import{_ as h}from"./BasicForm.vue_vue_type_script_setup_true_lang-a006a9ee.js";import"./BasicForm.vue_vue_type_style_index_0_lang-81a6c1be.js";import"./componentMap-e184fd7f.js";import{u as P}from"./useForm-c2beaf68.js";import{d as b,a7 as g,Z as x,a8 as y,a9 as l,$ as f,l as d,u as n,E as _}from"./vue-f962b0e4.js";import"./index.js";import"./antd-c4849d31.js";import"./useContentViewHeight-8b859986.js";import"./useWindowSizeFn-01ffbee2.js";import"./onMountedOrActivated-affa4888.js";import"./FormItem.vue_vue_type_script_lang-ff9da6df.js";import"./helper-b57cb88d.js";import"./index-07f03dcb.js";import"./useFormItem-d384df64.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-a3762521.js";import"./uuid-31b8b5a4.js";import"./useSortable-b9fa3fd2.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-ac301f97.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-be00dfae.js";import"./copyTextToClipboard-f517f61a.js";import"./index-7065f858.js";import"./index-3344c44f.js";const C=[{field:"passwordOld",label:"当前密码",component:"InputPassword",required:!0},{field:"passwordNew",label:"新密码",component:"StrengthMeter",componentProps:{placeholder:"新密码"},rules:[{required:!0,message:"请输入新密码"}]},{field:"confirmPassword",label:"确认密码",component:"InputPassword",dynamicRules:({values:s})=>[{required:!0,validator:(a,e)=>e?e!==s.passwordNew?Promise.reject("两次输入的密码不一致!"):Promise.resolve():Promise.reject("密码不能为空")}]}],v={class:"py-8 bg-white flex flex-col justify-center items-center"},N={class:"flex justify-center"},X=b({name:"ChangePassword",__name:"index",setup(s){const[a,{validate:e,resetFields:m}]=P({size:"large",baseColProps:{span:24},labelWidth:100,showActionButtonGroup:!1,schemas:C});function i(){return u(this,null,function*(){try{const o=yield e(),{passwordOld:p,passwordNew:t}=o}catch(o){}})}return(o,p)=>{const t=g("a-button");return x(),y(n(w),{title:"修改当前用户密码",content:"修改成功后会自动退出当前登录！"},{default:l(()=>[f("div",v,[d(n(h),{onRegister:n(a)},null,8,["onRegister"]),f("div",N,[d(t,{onClick:n(m)},{default:l(()=>[_(" 重置 ")]),_:1},8,["onClick"]),d(t,{class:"!ml-4",type:"primary",onClick:i},{default:l(()=>[_(" 确认 ")]),_:1})])])]),_:1})}}});export{X as default};
