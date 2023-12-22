import{M as i,C as x,J as g}from"./index-93cd4fa0.js";import{P as C}from"./index-c8d55b3e.js";import{ah as d,V as R,M as c}from"./antd-c4849d31.js";import{d as b,f as p,a7 as y,Z as B,a8 as D,a9 as e,l as n,u as a,E as m,m as S}from"./vue-f962b0e4.js";import"./index.js";import"./useWindowSizeFn-01ffbee2.js";import"./useContentViewHeight-8b859986.js";import"./onMountedOrActivated-affa4888.js";const h='{"name":"BeJson","url":"http://www.xxx.com","page":88,"isNonProfit":true,"address":{"street":"科技园路.","city":"江苏苏州","country":"中国"},"links":[{"name":"Google","url":"http://www.xxx.com"},{"name":"Baidu","url":"http://www.xxx.com"},{"name":"SoSo","url":"http://www.xxx.com"}]}',j=`
(() => {
  var htmlRoot = document.getElementById('htmlRoot');
  var theme = window.localStorage.getItem('__APP__DARK__MODE__');
  if (htmlRoot && theme) {
    htmlRoot.setAttribute('data-theme', theme);
    theme = htmlRoot = null;
  }
})();
  `,k=`
<!DOCTYPE html>
<html lang="en" id="htmlRoot">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="renderer" content="webkit" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"
    />
    <title><%= title %></title>
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
    <div id="app">
    </div>
  </body>
</html>
  `,V=b({__name:"index",setup(E){const r=d.Button,v=d.Group,l=p(i.JSON),o=p(h),f=s=>{const t=s.target.value;if(t===i.JSON){o.value=h;return}if(t===i.HTML){o.value=k;return}if(t===i.JS){o.value=j;return}};function _(){a(l)==="application/json"?c.info({title:"编辑器当前值",content:S(g,{data:JSON.parse(o.value)})}):c.info({title:"编辑器当前值",content:o.value})}return(s,t)=>{const w=y("a-button");return B(),D(a(C),{title:"代码编辑器组件示例",contentFullHeight:"",fixedHeight:"",contentBackground:""},{extra:e(()=>[n(a(R),{size:"middle"},{default:e(()=>[n(w,{onClick:_,type:"primary"},{default:e(()=>[m("获取数据")]),_:1}),n(a(v),{"button-style":"solid",value:l.value,"onUpdate:value":t[0]||(t[0]=u=>l.value=u),onChange:f},{default:e(()=>[n(a(r),{value:"application/json"},{default:e(()=>[m(" json数据 ")]),_:1}),n(a(r),{value:"htmlmixed"},{default:e(()=>[m(" html代码 ")]),_:1}),n(a(r),{value:"javascript"},{default:e(()=>[m(" javascript代码 ")]),_:1})]),_:1},8,["value"])]),_:1})]),default:e(()=>[n(a(x),{value:o.value,"onUpdate:value":t[1]||(t[1]=u=>o.value=u),mode:l.value},null,8,["value","mode"])]),_:1})}}});export{V as default};
