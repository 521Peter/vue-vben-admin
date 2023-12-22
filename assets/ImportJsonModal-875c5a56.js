var y=Object.defineProperty,M=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var h=(e,o,a)=>o in e?y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,c=(e,o)=>{for(var a in o||(o={}))I.call(o,a)&&h(e,a,o[a]);if(_)for(var a of _(o))J.call(o,a)&&h(e,a,o[a]);return e},i=(e,o)=>M(e,E(o));import{u as U}from"./useFormDesignState-4fbefc60.js";import{f as g,g as j}from"./index-a6bcf19a.js";import{C as D,M as F}from"./index-93cd4fa0.js";import{a as S,c as k}from"./index.js";import{aq as w,M as O}from"./antd-c4849d31.js";import{d as B,r as N,G as $,a7 as r,Z as x,a8 as T,a9 as n,l,E as u,$ as C,a2 as V,a3 as A}from"./vue-f962b0e4.js";import"./useWindowSizeFn-01ffbee2.js";const K=B({name:"ImportJsonModal",components:{CodeEditor:D,Upload:w,Modal:O},setup(){const{createMessage:e}=S(),o=N({visible:!1,json:`{
  "schemas": [
    {
      "component": "input",
      "label": "输入框",
      "field": "input_2",
      "span": 24,
      "props": {
        "type": "text"
      }
    }
  ],
  "layout": "horizontal",
  "labelLayout": "flex",
  "labelWidth": 100,
  "labelCol": {},
  "wrapperCol": {}
}`,jsonData:{schemas:{},config:{}},handleSetSelectItem:null}),{formDesignMethods:a}=U(),p=()=>{o.visible=!1},m=()=>{o.visible=!0},d=()=>{try{const s=JSON.parse(o.json);s.schemas&&g(s.schemas,t=>{j(t)}),a.setFormConfig(i(c({},s),{activeKey:1,currentItem:{component:""}})),p(),e.success("导入成功")}catch(s){e.error("导入失败，数据格式不对")}};return i(c({handleImportJson:d,beforeUpload:s=>{const t=new FileReader;return t.readAsText(s),t.onload=function(){o.json=this.result,d()},!1},handleCancel:p,showModal:m},$(o)),{MODE:F})}});const L=e=>(V("data-v-62ebfefa"),e=e(),A(),e),R=L(()=>C("p",{class:"hint-box"},"导入格式如下:",-1)),q={class:"v-json-box"};function z(e,o,a,p,m,d){const f=r("CodeEditor"),s=r("a-button"),t=r("Upload"),b=r("Modal");return x(),T(b,{title:"JSON数据",open:e.visible,onOk:e.handleImportJson,onCancel:e.handleCancel,cancelText:"关闭",destroyOnClose:!0,wrapClassName:"v-code-modal",style:{top:"20px"},width:850},{footer:n(()=>[l(s,{onClick:e.handleCancel},{default:n(()=>[u("取消")]),_:1},8,["onClick"]),l(t,{class:"upload-button",beforeUpload:e.beforeUpload,showUploadList:!1,accept:"application/json"},{default:n(()=>[l(s,{type:"primary"},{default:n(()=>[u("导入json文件")]),_:1})]),_:1},8,["beforeUpload"]),l(s,{type:"primary",onClick:e.handleImportJson},{default:n(()=>[u("确定")]),_:1},8,["onClick"])]),default:n(()=>[R,C("div",q,[l(f,{value:e.json,"onUpdate:value":o[0]||(o[0]=v=>e.json=v),ref:"myEditor",mode:e.MODE.JSON},null,8,["value","mode"])])]),_:1},8,["open","onOk","onCancel"])}const ee=k(K,[["render",z],["__scopeId","data-v-62ebfefa"]]);export{ee as default};
