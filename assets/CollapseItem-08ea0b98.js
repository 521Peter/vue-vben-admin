import{d as u}from"./vuedraggable.umd-54b3b98d.js";import{y as f,f as g,c as _}from"./index.js";import{d as h,r as C,a7 as r,Z as b,_ as v,l as d,a9 as I,$,E as y,a0 as A,ac as k,a1 as S}from"./vue-f962b0e4.js";import"./antd-c4849d31.js";const D=h({name:"CollapseItem",components:{draggable:u,Icon:f},props:{list:{type:[Array],default:()=>[]},handleListPush:{type:Function,default:null}},setup(e,{emit:s}){const{prefixCls:o}=g("form-design-collapse-item"),n=C({});return{prefixCls:o,state:n,handleStart:(t,a)=>{s("start",a[t.oldIndex].component)},handleAdd:t=>{},cloneItem:t=>e.handleListPush(t)}}});const B=["onDragstart","onClick"];function N(e,s,o,n,i,c){const l=r("Icon"),t=r("draggable");return b(),v("div",{class:S(e.prefixCls)},[d(t,k({tag:"ul","model-value":e.list},{group:{name:"form-draggable",pull:"clone",put:!1},sort:!1,clone:e.cloneItem,animation:180,ghostClass:"moving"},{"item-key":"type",onStart:s[0]||(s[0]=a=>e.handleStart(a,e.list)),onAdd:e.handleAdd}),{item:I(({element:a,index:p})=>[$("li",{class:"bs-box text-ellipsis",onDragstart:m=>e.$emit("add-attrs",e.list,p),onClick:m=>e.$emit("handle-list-push",a)},[d(l,{icon:a.icon},null,8,["icon"]),y(" "+A(a.label),1)],40,B)]),_:1},16,["model-value","onAdd"])],2)}const L=_(D,[["render",N],["__scopeId","data-v-9ac1f6bb"]]);export{L as default};
