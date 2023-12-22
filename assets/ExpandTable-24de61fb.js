import{_ as s}from"./BasicTable.vue_vue_type_script_setup_true_lang-2432b4ff.js";import"./TableImg.vue_vue_type_style_index_0_lang-180d5827.js";import{a as c}from"./componentMap-e184fd7f.js";import{u as d}from"./useTable-f40a9a65.js";import{P as u}from"./index-c8d55b3e.js";import{getBasicColumns as f}from"./tableData-fdce3f7b.js";import{d as _}from"./table-b1f4ce3d.js";import{d as b,Z as a,a8 as n,a9 as e,l as g,u as o,$ as C,a0 as x,ab as B}from"./vue-f962b0e4.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-a006a9ee.js";import"./FormItem.vue_vue_type_script_lang-ff9da6df.js";import"./index.js";import"./antd-c4849d31.js";import"./helper-b57cb88d.js";import"./BasicForm.vue_vue_type_style_index_0_lang-81a6c1be.js";import"./index-07f03dcb.js";import"./useWindowSizeFn-01ffbee2.js";import"./useForm-c2beaf68.js";import"./uuid-31b8b5a4.js";import"./sortable.esm-4ae27e0b.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-a3762521.js";import"./useFormItem-d384df64.js";import"./onMountedOrActivated-affa4888.js";import"./useSortable-b9fa3fd2.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-ac301f97.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-be00dfae.js";import"./copyTextToClipboard-f517f61a.js";import"./index-7065f858.js";import"./index-3344c44f.js";import"./useContentViewHeight-8b859986.js";import"./select-10be400c.js";const to=b({__name:"ExpandTable",setup(w){const[p]=d({api:_,title:"可展开表格演示",titleHelpMessage:["已启用expandRowByClick","已启用stopButtonPropagation"],columns:f(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",fixed:"right"}});function m(i){}function l(i){}return(i,k)=>(a(),n(o(u),{title:"可展开表格",content:"TableAction组件可配置stopButtonPropagation来阻止操作按钮的点击事件冒泡，以便配合Table组件的expandRowByClick"},{default:e(()=>[g(o(s),{onRegister:o(p)},{expandedRowRender:e(({record:t})=>[C("span",null,"No: "+x(t.no),1)]),bodyCell:e(({column:t,record:r})=>[t.key==="action"?(a(),n(o(c),{key:0,stopButtonPropagation:"",actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:m.bind(null,r)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:l.bind(null,r)}}]},null,8,["actions","dropDownActions"])):B("",!0)]),_:1},8,["onRegister"])]),_:1}))}});export{to as default};
