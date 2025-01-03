"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4845],{1630:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"examples/connections/create-connection","title":"createConnection","description":"For queries please see the Simple Queries and Prepared Statements examples.","source":"@site/docs/examples/connections/create-connection.mdx","sourceDirName":"examples/connections","slug":"/examples/connections/create-connection","permalink":"/node-mysql2/zh-CN/docs/examples/connections/create-connection","draft":false,"unlisted":false,"editUrl":"https://github.com/sidorares/node-mysql2/tree/master/website/docs/examples/connections/create-connection.mdx","tags":[{"inline":true,"label":"createConnection","permalink":"/node-mysql2/zh-CN/docs/tags/create-connection"},{"inline":true,"label":"URI","permalink":"/node-mysql2/zh-CN/docs/tags/uri"},{"inline":true,"label":"SHA1","permalink":"/node-mysql2/zh-CN/docs/tags/sha-1"},{"inline":true,"label":"RDS","permalink":"/node-mysql2/zh-CN/docs/tags/rds"},{"inline":true,"label":"SSL","permalink":"/node-mysql2/zh-CN/docs/tags/ssl"},{"inline":true,"label":"Socks","permalink":"/node-mysql2/zh-CN/docs/tags/socks"}],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"tags":["createConnection","URI","SHA1","RDS","SSL","Socks"]},"sidebar":"examples","previous":{"title":"Introduction","permalink":"/node-mysql2/zh-CN/docs/examples"},"next":{"title":"createPool","permalink":"/node-mysql2/zh-CN/docs/examples/connections/create-pool"}}');var t=s(4848),o=s(8453),c=s(1470),l=s(9365),i=s(185),a=s(4443);const d={sidebar_position:1,tags:["createConnection","URI","SHA1","RDS","SSL","Socks"]},u="createConnection",h={},m=[{value:"createConnection(connectionUri)",id:"createconnectionconnectionuri",level:2},{value:"createConnection(config)",id:"createconnectionconfig",level:2},{value:"createConnection(config) \u2014 SHA1",id:"createconnectionconfig--sha1",level:2},{value:"createConnection(config) \u2014 SSL",id:"createconnectionconfig--ssl",level:2},{value:"createConnection(config) \u2014 RDS SSL",id:"createconnectionconfig--rds-ssl",level:2},{value:"createConnection(config) \u2014 Socks",id:"createconnectionconfig--socks",level:2},{value:"Glossary",id:"glossary",level:2},{value:"ConnectionOptions",id:"connectionoptions",level:3}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"createconnection",children:"createConnection"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For queries please see the ",(0,t.jsx)(n.a,{href:"/docs/examples/queries/simple-queries",children:(0,t.jsx)(n.strong,{children:"Simple Queries"})})," and ",(0,t.jsx)(n.a,{href:"/docs/examples/queries/prepared-statements",children:(0,t.jsx)(n.strong,{children:"Prepared Statements"})})," examples."]})}),"\n",(0,t.jsx)(n.h2,{id:"createconnectionconnectionuri",children:"createConnection(connectionUri)"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"createConnection(connectionUri: string)"})}),"\n"]}),"\n",(0,t.jsxs)(c.A,{children:[(0,t.jsx)(l.A,{value:"promise.js",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\ntry {\n  // highlight-start\n  const connection = await mysql.createConnection(\n    'mysql://root:password@localhost:3306/test'\n  );\n  // highlight-end\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,t.jsx)(l.A,{value:"callback.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconst connection = mysql.createConnection(\n  'mysql://root:password@localhost:3306/test'\n);\n\nconnection.addListener('error', (err) => {\n  console.log(err);\n});\n"})})})]}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h2,{id:"createconnectionconfig",children:"createConnection(config)"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["createConnection(config: ",(0,t.jsx)(n.a,{href:"#connectionoptions",children:"ConnectionOptions"}),")"]})}),"\n"]}),"\n",(0,t.jsxs)(c.A,{children:[(0,t.jsx)(l.A,{value:"promise.js",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\ntry {\n  // highlight-start\n  const connection = await mysql.createConnection({\n    host: 'localhost',\n    user: 'root',\n    database: 'test',\n    // port: 3306,\n    // password: '',\n  });\n  // highlight-end\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,t.jsx)(l.A,{value:"callback.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconst connection = mysql.createConnection({\n  host: 'localhost',\n  user: 'root',\n  database: 'test',\n  // port: 3306,\n  // password: '',\n});\n\nconnection.addListener('error', (err) => {\n  console.log(err);\n});\n"})})})]}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h2,{id:"createconnectionconfig--sha1",children:"createConnection(config) \u2014 SHA1"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["createConnection(config: ",(0,t.jsx)(n.a,{href:"#connectionoptions",children:"ConnectionOptions"}),")"]})}),"\n"]}),"\n",(0,t.jsxs)(c.A,{children:[(0,t.jsx)(l.A,{value:"promise.js",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\ntry {\n  // highlight-start\n  const connection = await mysql.createConnection({\n    // ...\n    passwordSha1: Buffer.from(\n      '8bb6118f8fd6935ad0876a3be34a717d32708ffd',\n      'hex'\n    ),\n  });\n  // highlight-end\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,t.jsx)(l.A,{value:"callback.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconst connection = mysql.createConnection({\n  // ...\n  passwordSha1: Buffer.from('8bb6118f8fd6935ad0876a3be34a717d32708ffd', 'hex'),\n});\n\nconnection.addListener('error', (err) => {\n  console.log(err);\n});\n"})})})]}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h2,{id:"createconnectionconfig--ssl",children:"createConnection(config) \u2014 SSL"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["createConnection(config: ",(0,t.jsx)(n.a,{href:"#connectionoptions",children:"ConnectionOptions"}),")"]})}),"\n"]}),"\n",(0,t.jsxs)(c.A,{children:[(0,t.jsx)(l.A,{value:"promise.js",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\ntry {\n  // highlight-start\n  const connection = await mysql.createConnection({\n    // ...\n    ssl: {\n      // key: fs.readFileSync('./certs/client-key.pem'),\n      // cert: fs.readFileSync('./certs/client-cert.pem')\n      ca: fs.readFileSync('./certs/ca-cert.pem'),\n    },\n  });\n  // highlight-end\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,t.jsx)(l.A,{value:"callback.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconst connection = mysql.createConnection({\n  // ...\n  ssl: {\n    // key: fs.readFileSync('./certs/client-key.pem'),\n    // cert: fs.readFileSync('./certs/client-cert.pem')\n    ca: fs.readFileSync('./certs/ca-cert.pem'),\n  },\n});\n\nconnection.addListener('error', (err) => {\n  console.log(err);\n});\n"})})}),(0,t.jsxs)(l.A,{value:"certs/ca-cert.pem",children:[(0,t.jsx)(a.S,{language:"plan",url:"https://raw.githubusercontent.com/sidorares/node-mysql2/master/test/fixtures/ssl/certs/ca.pem"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/sidorares/node-mysql2/tree/master/test/fixtures/ssl/certs",children:"ssl/certs"}),"."]}),"\n"]})]})]}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h2,{id:"createconnectionconfig--rds-ssl",children:"createConnection(config) \u2014 RDS SSL"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["createConnection(config: ",(0,t.jsx)(n.a,{href:"#connectionoptions",children:"ConnectionOptions"}),")"]})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.strong,{children:"Amazon RDS"})," string as value to ssl property to connect to ",(0,t.jsx)(n.strong,{children:"Amazon RDS"})," MySQL over SSL."]}),"\n",(0,t.jsxs)(n.p,{children:["In that case ",(0,t.jsx)(n.a,{href:"https://s3.amazonaws.com/rds-downloads/mysql-ssl-ca-cert.pem",children:"https://s3.amazonaws.com/rds-downloads/mysql-ssl-ca-cert.pem"})," CA cert is used:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npm install --save aws-ssl-profiles\n"})}),"\n",(0,t.jsxs)(c.A,{children:[(0,t.jsxs)(l.A,{value:"promise.js",default:!0,children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\nimport awsCaBundle from 'aws-ssl-profiles';\n\ntry {\n  // highlight-start\n  const connection = await mysql.createConnection({\n    // ...\n    host: 'db.id.ap-southeast-2.rds.amazonaws.com',\n    ssl: awsCaBundle,\n  });\n  // highlight-end\n} catch (err) {\n  console.log(err);\n}\n"})}),(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For detailed instructions, please follow the ",(0,t.jsx)(n.a,{href:"https://github.com/mysqljs/aws-ssl-profiles?tab=readme-ov-file#readme",children:(0,t.jsx)(n.strong,{children:"AWS SSL Profiles documentation"})}),"."]})}),(0,t.jsx)(n.admonition,{title:"Testing",type:"tip",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"try {\n  const [res] = await connection.query('SHOW `status` LIKE \"Ssl_cipher\"');\n  await connection.end();\n\n  console.log(res);\n} catch (err) {\n  console.log(err);\n}\n"})})})]}),(0,t.jsxs)(l.A,{value:"callback.js",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\nconst awsCaBundle = require('aws-ssl-profiles');\n\nconst connection = mysql.createConnection({\n  // ...\n  host: 'db.id.ap-southeast-2.rds.amazonaws.com',\n  ssl: awsCaBundle,\n});\n\nconnection.addListener('error', (err) => {\n  console.log(err);\n});\n"})}),(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For detailed instructions, please follow the ",(0,t.jsx)(n.a,{href:"https://github.com/mysqljs/aws-ssl-profiles?tab=readme-ov-file#readme",children:(0,t.jsx)(n.strong,{children:"AWS SSL Profiles documentation"})}),"."]})}),(0,t.jsx)(n.admonition,{title:"Testing",type:"tip",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"connectionquery('SHOW `status` LIKE \"Ssl_cipher\"', function (err, res) {\n  connection.end();\n\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  console.log(res);\n});\n"})})})]})]}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h2,{id:"createconnectionconfig--socks",children:"createConnection(config) \u2014 Socks"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["createConnection(config: ",(0,t.jsx)(n.a,{href:"#connectionoptions",children:"ConnectionOptions"}),")"]})}),"\n"]}),"\n",(0,t.jsxs)(c.A,{children:[(0,t.jsx)(l.A,{value:"A.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\nconst SocksConnection = require('socksjs');\n\nconst socksProxy = new SocksConnection({ port: 3306 });\n// highlight-start\nconst connection = mysql.createConnection({\n  stream: socksProxy,\n});\n// highlight-end\n\nconnection.addListener('error', (err) => {\n  console.log(err);\n});\n"})})}),(0,t.jsx)(l.A,{value:"B.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\nconst SocksConnection = require('socksjs');\n\n// highlight-start\nconst connection = mysql.createConnection({\n  debug: 1,\n  stream: function () {\n    return new SocksConnection({ port: 3306 });\n  },\n});\n// highlight-end\n\nconnection.addListener('error', (err) => {\n  console.log(err);\n});\n"})})})]}),"\n",(0,t.jsx)(n.admonition,{title:"Testing",type:"tip",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"connection.execute('SELECT SLEEP(1.1) AS `www`', (err, rows, fields) => {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  console.log(rows, fields);\n});\n\nconnection.execute('SELECT SLEEP(1) AS `qqq`', (err, rows, fields) => {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  console.log(rows, fields);\n});\n\nconnection.execute('SELECT SLEEP(1) AS `qqq`', (err, rows, fields) => {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  console.log(rows, fields);\n});\n"})})}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h2,{id:"glossary",children:"Glossary"}),"\n",(0,t.jsx)(n.h3,{id:"connectionoptions",children:"ConnectionOptions"}),"\n",(0,t.jsx)(i.T,{title:"ConnectionOptions Specification",children:(0,t.jsx)(a.S,{language:"ts",url:"https://raw.githubusercontent.com/sidorares/node-mysql2/master/typings/mysql/lib/Connection.d.ts",extractMethod:"ConnectionOptions",methodType:"interface"})})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},9365:(e,n,s)=>{s.d(n,{A:()=>c});s(6540);var r=s(4164);const t={tabItem:"tabItem_Ymn6"};var o=s(4848);function c(e){let{children:n,hidden:s,className:c}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,c),hidden:s,children:n})}},1470:(e,n,s)=>{s.d(n,{A:()=>S});var r=s(6540),t=s(4164),o=s(3104),c=s(6347),l=s(205),i=s(7485),a=s(1682),d=s(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:t}}=e;return{value:n,label:s,attributes:r,default:t}}))}(s);return function(e){const n=(0,a.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function m(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const t=(0,c.W6)(),o=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function g(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,o=h(e),[c,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[a,u]=p({queryString:s,groupId:t}),[g,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,d.Dv)(s);return[t,(0,r.useCallback)((e=>{s&&o.set(e)}),[s,o])]}({groupId:t}),x=(()=>{const e=a??g;return m({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{x&&i(x)}),[x]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=s(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=s(4848);function y(e){let{className:n,block:s,selectedValue:r,selectValue:c,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:a}=(0,o.a_)(),d=e=>{const n=e.currentTarget,s=i.indexOf(n),t=l[s].value;t!==r&&(a(n),c(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;n=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;n=i[s]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...o,className:(0,t.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:o}=e;const c=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=c.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:c.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function q(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,j.jsx)(y,{...n,...e}),(0,j.jsx)(b,{...n,...e})]})}function S(e){const n=(0,f.A)();return(0,j.jsx)(q,{...e,children:u(e.children)},String(n))}},4443:(e,n,s)=>{s.d(n,{S:()=>i});var r=s(6540),t=s(4586),o=s(1432),c=s(4848);const l=()=>(0,c.jsx)("span",{className:"loader"}),i=e=>{let{url:n,language:s,extractMethod:i,methodType:a}=e;const[d,u]=(0,r.useState)(""),[h,m]=(0,r.useState)(!0),[p,g]=(0,r.useState)(!0),{siteConfig:f}=(0,t.A)(),x=f.baseUrl.replace(/\/$/,""),j=/^\//.test(n)?`${x}${n}`:n;return(0,r.useEffect)((()=>{const e=new AbortController,n=e.signal;return fetch(j,{signal:n}).then((e=>e.text())).then((e=>{const n=i&&a?((e,n,s)=>{const r=e.split("\n"),t=`${s} ${n}`;let o=!1,c=0,l="";for(const i of r)if(i.includes(t)&&(o=!0),o&&(i.includes("{")&&c++,l+=i+"\n",i.includes("}")&&(c--,0===c)))break;return l.trim()||e})(e,i,a):e;u(n||e),m(!1),g(!1)})).catch((()=>{g(!0),m(!1)})),()=>{e.abort()}}),[j,i,a]),(0,c.jsx)(c.Fragment,{children:h?(0,c.jsx)(l,{}):(0,c.jsx)(c.Fragment,{children:p?(0,c.jsxs)("div",{children:["Unable to access the requested link: ",(0,c.jsx)("code",{children:j}),". Please verify the link or try again later."]}):(0,c.jsx)(o.A,{className:`language-${s}`,children:d})})})}},185:(e,n,s)=>{s.d(n,{T:()=>o});var r=s(1622),t=s(4848);const o=e=>{let{children:n,open:s,title:o}=e;return(0,t.jsx)(r.A,{open:s,className:"faq",summary:(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:o})}),children:(0,t.jsx)("section",{children:n})})}}}]);