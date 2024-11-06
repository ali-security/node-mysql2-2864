"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[124],{6674:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"examples/typescript/basic-custom-class","title":"Basic Custom Class","description":"","source":"@site/docs/examples/typescript/basic-custom-class.mdx","sourceDirName":"examples/typescript","slug":"/examples/typescript/basic-custom-class","permalink":"/node-mysql2/pt-BR/docs/examples/typescript/basic-custom-class","draft":false,"unlisted":false,"editUrl":"https://github.com/sidorares/node-mysql2/tree/master/website/docs/examples/typescript/basic-custom-class.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"examples","previous":{"title":"Server","permalink":"/node-mysql2/pt-BR/docs/examples/tests/server"},"next":{"title":"Procedure Call Packet","permalink":"/node-mysql2/pt-BR/docs/examples/typescript/procedure-call/index"}}');var r=t(4848),a=t(8453),o=t(1470),i=t(9365);const l={},u="Basic Custom Class",c={},d=[];function p(e){const n={code:"code",h1:"h1",header:"header",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"basic-custom-class",children:"Basic Custom Class"})}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(i.A,{value:"index.ts",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"/**\n * The types are explicity for learning purpose\n */\n\nimport { PoolOptions } from 'mysql2/promise';\nimport { MySQL } from './db.js';\n\ninterface User extends RowDataPacket {\n  id: number;\n  name: string;\n}\n\nconst access: PoolOptions = {\n  host: '',\n  user: '',\n  password: '',\n  database: '',\n};\n\n(async () => {\n  const mysql = new MySQL(access);\n\n  /** Deleting the `users` table, if it exists */\n  await mysql.queryResult('DROP TABLE IF EXISTS `users`;');\n\n  /** Creating a minimal user table */\n  await mysql.queryResult(\n    'CREATE TABLE `users` (`id` INT(11) AUTO_INCREMENT, `name` VARCHAR(50), PRIMARY KEY (`id`));'\n  );\n\n  /** Inserting some users */\n  const [inserted] = await mysql.executeResult(\n    'INSERT INTO `users`(`name`) VALUES(?), (?), (?), (?);',\n    ['Josh', 'John', 'Marie', 'Gween']\n  );\n\n  console.log('Inserted:', inserted.affectedRows);\n\n  /** Getting users */\n  const [users] = await mysql.queryRows(\n    'SELECT * FROM `users` ORDER BY `name` ASC;'\n  );\n\n  users.forEach((user: User) => {\n    console.log('-----------');\n    console.log('id:  ', user.id);\n    console.log('name:', user.name);\n  });\n\n  await mysql.connection.end();\n})();\n\n/** Output\n *\n * Inserted: 4\n * -----------\n * id:   4\n * name: Gween\n * -----------\n * id:   2\n * name: John\n * -----------\n * id:   1\n * name: Josh\n * -----------\n * id:   3\n * name: Marie\n */\n"})})}),(0,r.jsx)(i.A,{value:"db.ts",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"/**\n * The types are explicity for learning purpose\n */\n\nimport {\n  createPool,\n  PoolOptions,\n  Pool,\n  ResultSetHeader,\n  RowDataPacket,\n} from 'mysql2/promise';\n\nexport class MySQL {\n  private conn: Pool;\n  private credentials: PoolOptions;\n\n  constructor(credentials: PoolOptions) {\n    this.credentials = credentials;\n    this.conn = createPool(this.credentials);\n  }\n\n  /** A random method to simulate a step before to get the class methods */\n  private ensureConnection() {\n    if (!this?.conn) this.conn = createPool(this.credentials);\n  }\n\n  /** For `SELECT` and `SHOW` */\n  get queryRows() {\n    this.ensureConnection();\n    return this.conn.query.bind(this.conn)<RowDataPacket[]>;\n  }\n\n  /** For `SELECT` and `SHOW` with `rowAsArray` as `true` */\n  get queryRowsAsArray() {\n    this.ensureConnection();\n    return this.conn.query.bind(this.conn)<RowDataPacket[][]>;\n  }\n\n  /** For `INSERT`, `UPDATE`, etc. */\n  get queryResult() {\n    this.ensureConnection();\n    return this.conn.query.bind(this.conn)<ResultSetHeader>;\n  }\n\n  /** For multiple `INSERT`, `UPDATE`, etc. with `multipleStatements` as `true` */\n  get queryResults() {\n    this.ensureConnection();\n    return this.conn.query.bind(this.conn)<ResultSetHeader[]>;\n  }\n\n  /** For `SELECT` and `SHOW` */\n  get executeRows() {\n    this.ensureConnection();\n    return this.conn.execute.bind(this.conn)<RowDataPacket[]>;\n  }\n\n  /** For `SELECT` and `SHOW` with `rowAsArray` as `true` */\n  get executeRowsAsArray() {\n    this.ensureConnection();\n    return this.conn.execute.bind(this.conn)<RowDataPacket[][]>;\n  }\n\n  /** For `INSERT`, `UPDATE`, etc. */\n  get executeResult() {\n    this.ensureConnection();\n    return this.conn.execute.bind(this.conn)<ResultSetHeader>;\n  }\n\n  /** For multiple `INSERT`, `UPDATE`, etc. with `multipleStatements` as `true` */\n  get executeResults() {\n    this.ensureConnection();\n    return this.conn.execute.bind(this.conn)<ResultSetHeader[]>;\n  }\n\n  /** Expose the Pool Connection */\n  get connection() {\n    return this.conn;\n  }\n}\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var s=t(4164);const r={tabItem:"tabItem_Ymn6"};var a=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,o),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>R});var s=t(6540),r=t(4164),a=t(3104),o=t(6347),i=t(205),l=t(7485),u=t(1682),c=t(679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=p(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[u,d]=h({queryString:t,groupId:r}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,c.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),y=(()=>{const e=u??b;return m({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=t(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function g(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),r=i[t].value;r!==s&&(u(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.A)("tabs__item",y.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,x.jsx)(g,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function R(e){const n=(0,f.A)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(6540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);