"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[981],{4807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"examples/index","title":"Introduction","description":"To explore the examples, please use the sidebar navigation on desktop or access the menu on mobile devices.","source":"@site/docs/examples/00-index.mdx","sourceDirName":"examples","slug":"/examples","permalink":"/node-mysql2/zh-CN/docs/examples","draft":false,"unlisted":false,"editUrl":"https://github.com/sidorares/node-mysql2/tree/master/website/docs/examples/00-index.mdx","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"slug":"/examples","title":"Introduction"},"sidebar":"examples","next":{"title":"createConnection","permalink":"/node-mysql2/zh-CN/docs/examples/connections/create-connection"}}');var s=n(4848),a=n(8453),l=(n(5537),n(9329),n(80));const o={slug:"/examples",title:"Introduction"},i="Examples",u={},c=[{value:"Examples using MySQL server API",id:"examples-using-mysql-server-api",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.s,{title:"Examples"}),"\n",(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"examples",children:"Examples"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["To explore the examples, please use the ",(0,s.jsx)(t.strong,{children:"sidebar navigation"})," on desktop or access the ",(0,s.jsx)(t.strong,{children:"menu"})," on mobile devices."]})}),"\n",(0,s.jsx)(t.h2,{id:"examples-using-mysql-server-api",children:"Examples using MySQL server API"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/sidorares/mysql-pg-proxy",children:"MySQL-pg-proxy"})," - MySQL to Postgres proxy server."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/sidorares/mysqlite.js",children:"MySQLite.js"})," - MySQL server with JS-only (emscripten compiled) sqlite backend."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/eugeneware/sql-engine",children:"SQL-engine"})," - MySQL server with LevelDB backend."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/sidorares/mysql-osquery-proxy",children:"MySQL-osquery-proxy"})," - Connect to ",(0,s.jsx)(t.a,{href:"https://osquery.io/",children:"facebook osquery"})," using MySQL client"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/implydata/plyql",children:"PlyQL"})," - Connect to ",(0,s.jsx)(t.a,{href:"https://druid.io/",children:"Druid"})," using MySQL client"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9329:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var r=n(4164);const s={tabItem:"tabItem_Ymn6"};var a=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:n,children:t})}},5537:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),s=n(4164),a=n(5627),l=n(6347),o=n(372),i=n(604),u=n(1861),c=n(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,d]=m({queryString:n,groupId:s}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),x=(()=>{const e=u??f;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),s=o[n].value;s!==r&&(u(t),l(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,v.jsx)(g,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},80:(e,t,n)=>{n.d(t,{s:()=>a});var r=n(7143),s=n(4848);const a=e=>{let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(6540);const s={},a=r.createContext(s);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);