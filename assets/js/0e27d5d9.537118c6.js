"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5271],{3988:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>u,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"examples/typescript/row-data/index","title":"Row Data Packet","description":"","source":"@site/docs/examples/typescript/row-data/00-index.mdx","sourceDirName":"examples/typescript/row-data","slug":"/examples/typescript/row-data/index","permalink":"/node-mysql2/docs/examples/typescript/row-data/index","draft":false,"unlisted":false,"editUrl":"https://github.com/sidorares/node-mysql2/tree/master/website/docs/examples/typescript/row-data/00-index.mdx","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{},"sidebar":"examples","previous":{"title":"Procedure Call Packet (Row as Array)","permalink":"/node-mysql2/docs/examples/typescript/procedure-call/row-as-array"},"next":{"title":"Row Data Packet (Row as Array)","permalink":"/node-mysql2/docs/examples/typescript/row-data/row-as-array"}}');var r=t(4848),s=t(8453),o=t(5537),l=t(9329);const u={},i="Row Data Packet",c={},d=[];function p(e){const n={code:"code",h1:"h1",header:"header",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"row-data-packet",children:"Row Data Packet"})}),"\n",(0,r.jsx)(o.A,{children:(0,r.jsx)(l.A,{value:"index.ts",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"/**\n * The types are explicity for learning purpose\n * By extending the `RowDataPacket`, you can use your Interface in `query` and `execute`\n */\n\nimport mysql, {\n  ConnectionOptions,\n  ResultSetHeader,\n  RowDataPacket,\n} from 'mysql2/promise';\n\ninterface User extends RowDataPacket {\n  id: number;\n  name: string;\n}\n\n(async () => {\n  const access: ConnectionOptions = {\n    host: '',\n    user: '',\n    password: '',\n    database: '',\n  };\n\n  const conn = await mysql.createConnection(access);\n\n  /** Deleting the `users` table, if it exists */\n  await conn.query<ResultSetHeader>('DROP TABLE IF EXISTS `users`;');\n\n  /** Creating a minimal user table */\n  await conn.query<ResultSetHeader>(\n    'CREATE TABLE `users` (`id` INT(11) AUTO_INCREMENT, `name` VARCHAR(50), PRIMARY KEY (`id`));'\n  );\n\n  /** Inserting some users */\n  const [inserted] = await conn.execute<ResultSetHeader>(\n    'INSERT INTO `users`(`name`) VALUES(?), (?), (?), (?);',\n    ['Josh', 'John', 'Marie', 'Gween']\n  );\n\n  console.log('Inserted:', inserted.affectedRows);\n\n  /** Getting users */\n  const [users] = await conn.query<User[]>(\n    'SELECT * FROM `users` ORDER BY `name` ASC;'\n  );\n\n  users.forEach((user) => {\n    console.log('-----------');\n    console.log('id:  ', user.id);\n    console.log('name:', user.name);\n  });\n\n  await conn.end();\n})();\n\n/** Output\n *\n * Inserted: 4\n * -----------\n * id:   4\n * name: Gween\n * -----------\n * id:   2\n * name: John\n * -----------\n * id:   1\n * name: Josh\n * -----------\n * id:   3\n * name: Marie\n */\n"})})})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var a=t(4164);const r={tabItem:"tabItem_Ymn6"};var s=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>I});var a=t(6540),r=t(4164),s=t(5627),o=t(6347),l=t(372),u=t(604),i=t(1861),c=t(8749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,i.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=p(e),[o,u]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[i,d]=f({queryString:t,groupId:r}),[h,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),w=(()=>{const e=i??h;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{w&&u(w)}),[w]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(9136);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(4848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=u.indexOf(n),r=l[t].value;r!==a&&(i(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{u.push(e)},onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",w.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function g(e){const n=h(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",w.tabList),children:[(0,y.jsx)(x,{...n,...e}),(0,y.jsx)(v,{...n,...e})]})}function I(e){const n=(0,b.A)();return(0,y.jsx)(g,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var a=t(6540);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);