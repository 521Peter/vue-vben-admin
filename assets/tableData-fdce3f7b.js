import{o as d}from"./select-10be400c.js";import{z as r}from"./antd-c4849d31.js";import{f as o,l as n,E as i}from"./vue-f962b0e4.js";import"./index.js";function f(){return[{title:"ID",dataIndex:"id",fixed:"left",width:200},{title:"姓名",dataIndex:"name",width:150,filters:[{text:"Male",value:"male"},{text:"Female",value:"female"}]},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:150,sorter:!0,defaultHidden:!0},{title:"开始时间",width:150,sorter:!0,dataIndex:"beginTime"},{title:"结束时间",width:150,sorter:!0,dataIndex:"endTime"}]}function w(){return[{title:"ID",width:150,dataIndex:"id",sorter:!0,sortOrder:"ascend"},{title:"姓名",dataIndex:"name",width:120},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:80}]}function p(){const t=o("姓名:");return[{title:"ID",dataIndex:"id",width:200},{title:"姓名",customHeaderRender(){return n(r,{placeholder:"输入值 更新 自定义title",size:"small",value:t.value,"onUpdate:value":e=>t.value=e},null)},dataIndex:"name",width:120},{title:"地址",dataIndex:"address",sorter:!0,children:[{title:"编号",customHeaderRender(e){return n("div",null,[i("_ "),n("span",{style:"background: #f00; color: #fff;"},[t.value]),i(" _"),e.customTitle])},dataIndex:"no",width:120,filters:[{text:"Male",value:"male",children:[]},{text:"Female",value:"female",children:[]}]},{title:"开始时间",dataIndex:"beginTime",width:120},{title:"结束时间",dataIndex:"endTime",width:120}]}]}function x(){return[{title:"ID",dataIndex:"id",helpMessage:"headerHelpMessage方式1",width:200},{dataIndex:"name",width:120},{dataIndex:"address",width:120,sorter:!0},{title:"编号",dataIndex:"no",width:120,filters:[{text:"Male",value:"male",children:[]},{text:"Female",value:"female",children:[]}]},{title:"开始时间",dataIndex:"beginTime",width:120},{title:"结束时间",dataIndex:"endTime",width:120}]}const l=(t,e)=>({colSpan:e===9?0:1});function g(){return[{title:"ID",dataIndex:"id",width:300,customCell:(t,e)=>({colSpan:e===9?6:1})},{title:"姓名",dataIndex:"name",width:300,customCell:l},{title:"地址",dataIndex:"address",colSpan:2,width:120,sorter:!0,customCell:(t,e)=>({rowSpan:e===2?2:1,colSpan:e===3||e===9?0:1})},{title:"编号",dataIndex:"no",colSpan:0,filters:[{text:"Male",value:"male",children:[]},{text:"Female",value:"female",children:[]}],customCell:l},{title:"开始时间",dataIndex:"beginTime",width:200,customCell:l},{title:"结束时间",dataIndex:"endTime",width:200,customCell:l}]}const s=(t=6)=>{const e=[];for(let a=0;a<t;a++)e.push({field:`field${a}`,label:`字段${a}`,component:"Input",colProps:{xl:12,xxl:8}});return e};function I(){return{labelWidth:100,schemas:[...s(5),{field:"field11",label:"Slot示例",slot:"custom",colProps:{xl:12,xxl:8}}]}}function T(){return(()=>{const t=[];for(let e=0;e<40;e++)t.push({id:`${e}`,name:"John Brown",age:`1${e}`,no:`${e+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()});return t})()}function v(){return(()=>{const t=[];for(let e=0;e<40;e++)t.push({id:`${e}`,name:"John Brown",age:`1${e}`,no:`${e+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString(),children:[{id:`l2-${e}`,name:"John Brown",age:`1${e}`,no:`${e+10}`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:new Date().toLocaleString(),endTime:new Date().toLocaleString()}]});return t})()}const k=[{title:"序号",type:"seq",fixed:"left",width:"50",align:"center"},{title:"固定列",field:"name",width:150,showOverflow:"tooltip",fixed:"left"},{title:"自适应列",field:"address"},{title:"自定义列(自定义导出)",field:"no",width:200,showOverflow:"tooltip",align:"center",slots:{default:({row:t})=>{const e=`自定义${t.no}`;return[n("div",{class:"text-red-500"},[e])]}},exportMethod:({row:t})=>`自定义${t.no}导出`},{title:"自定义编辑",width:150,field:"name1",align:"center",editRender:{name:"AInput",placeholder:"请点击输入"}},{title:"开始时间",width:150,field:"beginTime",showOverflow:"tooltip",align:"center"},{title:"结束时间",width:150,field:"endTime",showOverflow:"tooltip",align:"center"},{width:160,title:"操作",align:"center",slots:{default:"action"},fixed:"right"}],b=[{field:"field0",title:"field0",itemRender:{name:"AInput"},span:6},{field:"field1",title:"field1",itemRender:{name:"AApiSelect",props:{api:d,resultField:"list",labelField:"name",valueField:"id"}},span:6},{span:12,align:"right",className:"!pr-0",itemRender:{name:"AButtonGroup",children:[{props:{type:"primary",content:"查询",htmlType:"submit"},attrs:{class:"mr-2"}},{props:{type:"default",htmlType:"reset",content:"重置"}}]}}];export{s as getAdvanceSchema,f as getBasicColumns,T as getBasicData,w as getBasicShortColumns,x as getCustomHeaderColumns,I as getFormConfig,g as getMergeHeaderColumns,p as getMultipleHeaderColumns,v as getTreeTableData,k as vxeTableColumns,b as vxeTableFormSchema};
