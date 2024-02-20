"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9379],{2374:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(4848),a=t(8453),s=t(1470),o=t(9365);const l={},u="Procedure Call Packet (Row as Array)",c={id:"examples/typescript/procedure-call/row-as-array",title:"Procedure Call Packet (Row as Array)",description:"",source:"@site/docs/examples/typescript/procedure-call/01-row-as-array.mdx",sourceDirName:"examples/typescript/procedure-call",slug:"/examples/typescript/procedure-call/row-as-array",permalink:"/node-mysql2/zh-CN/docs/examples/typescript/procedure-call/row-as-array",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/examples/typescript/procedure-call/01-row-as-array.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"examples",previous:{title:"Procedure Call Packet",permalink:"/node-mysql2/zh-CN/docs/examples/typescript/procedure-call/index"},next:{title:"Row Data Packet",permalink:"/node-mysql2/zh-CN/docs/examples/typescript/row-data/index"}},i={},d=[];function p(e){const n={code:"code",h1:"h1",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"procedure-call-packet-row-as-array",children:"Procedure Call Packet (Row as Array)"}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(o.A,{value:"index.ts",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"/**\n * The types are explicity for learning purpose\n * By extending the `RowDataPacket`, you can use your Interface in `query` and `execute`\n */\n\nimport mysql, {\n  ConnectionOptions,\n  ProcedureCallPacket,\n  ResultSetHeader,\n  RowDataPacket,\n} from 'mysql2/promise';\n\ninterface User extends RowDataPacket {\n  /** id */\n  0: number;\n  /** name */\n  1: string;\n}\n\nconst isResultSetHeader = (data: unknown): data is ResultSetHeader => {\n  if (!data || typeof data !== 'object') return false;\n\n  const keys = [\n    'fieldCount',\n    'affectedRows',\n    'insertId',\n    'info',\n    'serverStatus',\n    'warningStatus',\n    'changedRows',\n  ];\n\n  return keys.every((key) => key in data);\n};\n\n(async () => {\n  const access: ConnectionOptions = {\n    host: '',\n    user: '',\n    password: '',\n    database: '',\n    rowsAsArray: true,\n  };\n\n  const conn = await mysql.createConnection(access);\n\n  /** Deleting the `users` table, if it exists */\n  await conn.query<ResultSetHeader>('DROP TABLE IF EXISTS `users`;');\n\n  /** Creating a minimal user table */\n  await conn.query<ResultSetHeader>(\n    'CREATE TABLE `users` (`id` INT(11) AUTO_INCREMENT, `name` VARCHAR(50), PRIMARY KEY (`id`));'\n  );\n\n  /** Inserting some users */\n  const [inserted] = await conn.execute<ResultSetHeader>(\n    'INSERT INTO `users`(`name`) VALUES(?), (?), (?), (?);',\n    ['Josh', 'John', 'Marie', 'Gween']\n  );\n\n  console.log('Inserted:', inserted.affectedRows);\n\n  /** Deleting the `getUsers` procedure, if it exists */\n  await conn.query<ResultSetHeader>('DROP PROCEDURE IF EXISTS getUsers');\n\n  /** Creating a procedure to get the users */\n  await conn.query<ResultSetHeader>(`\n    CREATE PROCEDURE getUsers()\n    BEGIN\n      SELECT * FROM users ORDER BY name ASC;\n    END\n  `);\n\n  /** Getting users */\n  // highlight-start\n  const [procedureResult] =\n    await conn.query<ProcedureCallPacket<User[]>>('CALL getUsers()');\n\n  procedureResult.forEach((users) => {\n    /** By perform a `SELECT` or `SHOW`, The last item of `procedureResult` always be a `ResultSetHeader` */\n    if (isResultSetHeader(users)) {\n      console.log('----------------');\n      console.log('Affected Rows:', users.affectedRows);\n    } else {\n      users.forEach((user) => {\n        console.log('----------------');\n        console.log('id:  ', user[0]);\n        console.log('name:', user[1]);\n      });\n    }\n  });\n  // highlight-end\n\n  await conn.end();\n})();\n\n/** Output\n *\n * Inserted: 4\n * ----------------\n * id:   4\n * name: Gween\n * ----------------\n * id:   2\n * name: John\n * ----------------\n * id:   1\n * name: Josh\n * ----------------\n * id:   3\n * name: Marie\n * ----------------\n * Affected Rows: 0\n */\n"})})})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var s=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>R});var r=t(6540),a=t(4164),s=t(3104),o=t(6347),l=t(205),u=t(7485),c=t(1682),i=t(9466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=f({queryString:t,groupId:a}),[h,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,i.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),y=(()=>{const e=c??h;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{y&&u(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function w(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),i=e=>{const n=e.currentTarget,t=u.indexOf(n),a=l[t].value;a!==r&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:d,onClick:i,...s,className:(0,a.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function x(e){const n=h(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,g.jsx)(w,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function R(e){const n=(0,b.A)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(6540);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);