import{_}from"./BasicTable.vue_vue_type_script_setup_true_lang-2432b4ff.js";import"./TableImg.vue_vue_type_style_index_0_lang-180d5827.js";import"./componentMap-e184fd7f.js";import{u as w}from"./useTable-f40a9a65.js";import{getBasicColumns as g,getFormConfig as R}from"./tableData-fdce3f7b.js";import{d as h}from"./table-b1f4ce3d.js";import{d as K,r as b,a7 as k,Z as i,a8 as C,a9 as o,E as m,l as n,u as a,_ as p,F as x,$ as S,a0 as F}from"./vue-f962b0e4.js";import{$ as T}from"./antd-c4849d31.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-a006a9ee.js";import"./FormItem.vue_vue_type_script_lang-ff9da6df.js";import"./index.js";import"./helper-b57cb88d.js";import"./BasicForm.vue_vue_type_style_index_0_lang-81a6c1be.js";import"./index-07f03dcb.js";import"./useWindowSizeFn-01ffbee2.js";import"./useForm-c2beaf68.js";import"./uuid-31b8b5a4.js";import"./sortable.esm-4ae27e0b.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-a3762521.js";import"./useFormItem-d384df64.js";import"./onMountedOrActivated-affa4888.js";import"./useSortable-b9fa3fd2.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-ac301f97.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-be00dfae.js";import"./copyTextToClipboard-f517f61a.js";import"./index-7065f858.js";import"./index-3344c44f.js";import"./select-10be400c.js";const B={key:1},ae=K({__name:"FormTable",setup(V){const e=b({selectedRowKeys:[]}),[c,{getForm:$}]=w({title:"开启搜索区域",api:h,columns:g(),useSearchForm:!0,formConfig:R(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id",rowSelection:{type:"checkbox",selectedRowKeys:e.selectedRowKeys,onSelect:u,onSelectAll:f}});function d(){}function u(s,r){if(r){e.selectedRowKeys.push(s.id);return}const t=e.selectedRowKeys.indexOf(s.id);t!==-1&&e.selectedRowKeys.splice(t,1)}function f(s,r,t){const l=t.map(y=>y.id);s?e.selectedRowKeys.push(...l):e.selectedRowKeys.splice(0)}return(s,r)=>{const t=k("a-button");return i(),C(a(_),{onRegister:a(c)},{"form-custom":o(()=>[m(" custom-slot ")]),headerTop:o(()=>[n(a(T),{type:"info","show-icon":""},{message:o(()=>[e.selectedRowKeys.length>0?(i(),p(x,{key:0},[S("span",null,"已选中"+F(e.selectedRowKeys.length)+"条记录(可跨页)",1),n(t,{type:"link",onClick:r[0]||(r[0]=l=>e.selectedRowKeys.splice(0)),size:"small"},{default:o(()=>[m("清空")]),_:1})],64)):(i(),p("span",B,"未选中任何项目"))]),_:1})]),toolbar:o(()=>[n(t,{type:"primary",onClick:d},{default:o(()=>[m("获取表单数据")]),_:1})]),_:1},8,["onRegister"])}}});export{ae as default};
