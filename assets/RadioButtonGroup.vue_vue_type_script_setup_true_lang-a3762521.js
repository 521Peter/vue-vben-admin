import{u as v}from"./useFormItem-d384df64.js";import{k as g,ah as l}from"./antd-c4849d31.js";import{d as k,f as _,c as b,Z as o,a8 as i,a9 as p,_ as B,aa as y,u as t,E as C,a0 as R,F as S,ac as h,k as x}from"./vue-f962b0e4.js";import{q as A}from"./index.js";const $=k({name:"RadioButtonGroup",__name:"RadioButtonGroup",props:{value:{type:[String,Number,Boolean]},options:{type:Array,default:()=>[]}},setup(c){const n=c,d=A(),u=_([]),[r]=v(n,"value","change",u),m=b(()=>{const{options:a}=n;return!a||(a==null?void 0:a.length)===0?[]:a.some(e=>g(e))?a.map(e=>({label:e,value:e})):a});function f(...a){u.value=a}return(a,s)=>(o(),i(t(l).Group,h(t(d),{value:t(r),"onUpdate:value":s[0]||(s[0]=e=>x(r)?r.value=e:null),"button-style":"solid"}),{default:p(()=>[(o(!0),B(S,null,y(m.value,e=>(o(),i(t(l).Button,{key:`${e.value}`,value:e.value,disabled:e.disabled,onClick:F=>f(e)},{default:p(()=>[C(R(e.label),1)]),_:2},1032,["value","disabled","onClick"]))),128))]),_:1},16,["value"]))}});export{$ as _};
