(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{5085:(e,a,i)=>{Promise.resolve().then(i.bind(i,28356))},28356:(e,a,i)=>{"use strict";i.r(a),i.d(a,{default:()=>M});var t=i(95155),l=i(5565),s=i(12115);let r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,a=Array(e),i=0;i<e;i++)a[i]=arguments[i];return a.filter((e,a,i)=>!!e&&""!==e.trim()&&i.indexOf(e)===a).join(" ").trim()};var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let c=(0,s.forwardRef)((e,a)=>{let{color:i="currentColor",size:t=24,strokeWidth:l=2,absoluteStrokeWidth:r,className:c="",children:d,iconNode:g,...m}=e;return(0,s.createElement)("svg",{ref:a,...n,width:t,height:t,stroke:i,strokeWidth:r?24*Number(l)/Number(t):l,className:o("lucide",c),...m},[...g.map(e=>{let[a,i]=e;return(0,s.createElement)(a,i)}),...Array.isArray(d)?d:[d]])}),d=(e,a)=>{let i=(0,s.forwardRef)((i,t)=>{let{className:l,...n}=i;return(0,s.createElement)(c,{ref:t,iconNode:a,className:o("lucide-".concat(r(e)),l),...n})});return i.displayName="".concat(e),i},g=d("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),m=d("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]),p=d("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]),u=e=>{let{label:a,value:i,onChange:l}=e;return(0,t.jsxs)("div",{className:"flex flex-col items-center space-y-2",children:[(0,t.jsx)("label",{className:"text-sm text-gray-300",children:a}),(0,t.jsx)("div",{className:"flex space-x-1",children:[1,2,3,4,5].map(e=>(0,t.jsx)("button",{onClick:()=>l(e),className:"\n              w-8 h-8 rounded-full \n              transition-all duration-200 \n              flex items-center justify-center\n              ".concat(i===e?"bg-blue-600 text-white scale-110":"bg-gray-700 text-gray-400 hover:bg-gray-600","\n            "),children:e},e))})]})},x=d("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]),y=d("StarHalf",[["path",{d:"M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2",key:"2ksp49"}]]),j=e=>{let{score:a}=e,i=Math.floor(a),l=a%1>=.5;return(0,t.jsx)("div",{className:"flex items-center",children:[void 0,void 0,void 0,void 0,void 0].map((e,a)=>a<i?(0,t.jsx)(x,{className:"text-yellow-500 fill-yellow-500",size:20},a):a===i&&l?(0,t.jsx)(y,{className:"text-yellow-500",size:20},a):(0,t.jsx)(x,{className:"text-gray-300",size:20},a))})},h=[{id:1,name:"PostgreSQL",logo:"https://cdn.simpleicons.org/postgresql/336791",overallScore:5,description:"Object-relational database system with strong reliability and data integrity features"},{id:2,name:"MySQL",logo:"https://cdn.simpleicons.org/mysql/4479A1",overallScore:5,description:"Widely-used relational database management system known for speed and reliability"},{id:3,name:"Oracle Database",logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiAxMXEzLjc1IDAgNi4zNzUtMS4xNzVUMjEgN3QtMi42MjUtMi44MjVUMTIgM1Q1LjYyNSA0LjE3NVQzIDd0Mi42MjUgMi44MjVUMTIgMTFtMCAyLjVxMS4wMjUgMCAyLjU2My0uMjEzdDIuOTYyLS42ODd0Mi40NS0xLjIzN1QyMSA5LjVWMTJxMCAxLjEtMS4wMjUgMS44NjN0LTIuNDUgMS4yMzd0LTIuOTYyLjY4OFQxMiAxNnQtMi41NjItLjIxM3QtMi45NjMtLjY4N3QtMi40NS0xLjIzN1QzIDEyVjkuNXEwIDEuMSAxLjAyNSAxLjg2M3QyLjQ1IDEuMjM3dDIuOTYzLjY4OFQxMiAxMy41bTAgNXExLjAyNSAwIDIuNTYzLS4yMTN0Mi45NjItLjY4N3QyLjQ1LTEuMjM3VDIxIDE0LjVWMTdxMCAxLjEtMS4wMjUgMS44NjN0LTIuNDUgMS4yMzd0LTIuOTYyLjY4OFQxMiAyMXQtMi41NjItLjIxM3QtMi45NjMtLjY4N3QtMi40NS0xLjIzN1QzIDE3di0yLjVxMCAxLjEgMS4wMjUgMS44NjN0Mi40NSAxLjIzN3QyLjk2My42ODhUMTIgMTguNSIvPjwvc3ZnPg==",overallScore:5,description:"Comprehensive relational database system offering advanced security and performance features"},{id:4,name:"Microsoft SQL Server",logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiAxMXEzLjc1IDAgNi4zNzUtMS4xNzVUMjEgN3QtMi42MjUtMi44MjVUMTIgM1Q1LjYyNSA0LjE3NVQzIDd0Mi42MjUgMi44MjVUMTIgMTFtMCAyLjVxMS4wMjUgMCAyLjU2My0uMjEzdDIuOTYyLS42ODd0Mi40NS0xLjIzN1QyMSA5LjVWMTJxMCAxLjEtMS4wMjUgMS44NjN0LTIuNDUgMS4yMzd0LTIuOTYyLjY4OFQxMiAxNnQtMi41NjItLjIxM3QtMi45NjMtLjY4N3QtMi40NS0xLjIzN1QzIDEyVjkuNXEwIDEuMSAxLjAyNSAxLjg2M3QyLjQ1IDEuMjM3dDIuOTYzLjY4OFQxMiAxMy41bTAgNXExLjAyNSAwIDIuNTYzLS4yMTN0Mi45NjItLjY4N3QyLjQ1LTEuMjM3VDIxIDE0LjVWMTdxMCAxLjEtMS4wMjUgMS44NjN0LTIuNDUgMS4yMzd0LTIuOTYyLjY4OFQxMiAyMXQtMi41NjItLjIxM3QtMi45NjMtLjY4N3QtMi40NS0xLjIzN1QzIDE3di0yLjVxMCAxLjEgMS4wMjUgMS44NjN0Mi40NSAxLjIzN3QyLjk2My42ODhUMTIgMTguNSIvPjwvc3ZnPg==",overallScore:5,description:"Relational database system optimized for business intelligence and transactional applications"},{id:5,name:"MariaDB",logo:"https://cdn.simpleicons.org/mariadb/003545",overallScore:5,description:"Community-developed relational database offering enhanced compatibility and performance"},{id:6,name:"MongoDB",logo:"https://cdn.simpleicons.org/mongodb/47A248",overallScore:5,description:"Document-oriented database designed for storing JSON-like data with dynamic schemas"},{id:7,name:"Couchbase",logo:"https://cdn.simpleicons.org/couchbase/EA2328",overallScore:5,description:"NoSQL database combining document orientation with key-value store capabilities"},{id:8,name:"Firebase Firestore",logo:"https://cdn.simpleicons.org/firebase/FFCA28",overallScore:5,description:"Scalable NoSQL cloud database for mobile and web applications with real-time sync"},{id:9,name:"Amazon DocumentDB",logo:"https://cdn.simpleicons.org/amazondynamodb/4053D6",overallScore:5,description:"Managed document database service compatible with MongoDB workloads"},{id:10,name:"Redis",logo:"https://cdn.simpleicons.org/redis/DC382D",overallScore:5,description:"High-performance in-memory database used for caching and real-time applications"},{id:11,name:"Amazon DynamoDB",logo:"https://cdn.simpleicons.org/amazondynamodb/4053D6",overallScore:5,description:"Fully managed NoSQL database service providing fast, predictable performance at scale"},{id:12,name:"Memcached",logo:"https://cdn.simpleicons.org/influxdb/22ADF6",overallScore:5,description:"High-performance distributed memory caching system for speeding up applications"},{id:13,name:"etcd",logo:"https://cdn.simpleicons.org/etcd/419EDA",overallScore:5,description:"Reliable distributed key-value store for storing critical data in distributed systems"},{id:14,name:"Apache Cassandra",logo:"https://cdn.simpleicons.org/apachecassandra/1287B1",overallScore:5,description:"Distributed NoSQL database designed for handling large amounts of data across many servers"},{id:15,name:"ScyllaDB",logo:"https://cdn.simpleicons.org/scylladb/4E69C5",overallScore:5,description:"Highly performant NoSQL database focusing on low latency and high throughput"},{id:16,name:"Google Bigtable",logo:"https://cdn.simpleicons.org/googlecloud/4285F4",overallScore:5,description:"Petabyte-scale, low-latency NoSQL database service for large analytical and operational workloads"},{id:17,name:"HBase",logo:"https://cdn.simpleicons.org/apache/D22128",overallScore:5,description:"Distributed, scalable big data store providing random access to massive structured data"}];function b(){return(0,t.jsx)("footer",{className:"text-center mt-12 text-gray-400",children:(0,t.jsx)("p",{children:(0,t.jsxs)("a",{href:"https://github.com/KovacevicAleksa/WhichDBToUse",className:"text-blue-500 hover:underline flex items-center justify-center gap-2",target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-5 h-5",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.385.6.11.793-.26.793-.577v-2.165c-3.338.726-4.043-1.415-4.043-1.415-.547-1.387-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 1.205.084 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 2.04.14 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.375.81 1.11.81 2.24v3.32c0 .315.195.69.8.575 4.755-1.59 8.19-6.08 8.19-11.38 0-6.627-5.37-12-12-12z",clipRule:"evenodd"})}),"GitHub"]})})})}function M(){let[e,a]=(0,s.useState)({scalability:3,performance:3,flexibility:3,consistency:3,reliability:3,security:3,costEfficiency:3,communitySupport:3,transactionSupport:3,integrationEase:3,queryCapability:3,realTimeProcessing:3,geographicDistribution:3,dataVolumeCapacity:3,elasticity:3,developerFriendliness:3,cloudNativeSupport:3,multiModelCapability:3}),[i,r]=(0,s.useState)(h),o=(e,i)=>{a(a=>({...a,[e]:i}))};return(0,t.jsxs)("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8",children:[(0,t.jsxs)("header",{className:"text-center mb-12",children:[(0,t.jsx)("h1",{className:"text-4xl font-bold text-white mb-4",children:"Database Selection Tool"}),(0,t.jsx)("p",{className:"text-gray-300",children:"Find the perfect database for your project"})]}),(0,t.jsxs)("div",{className:"bg-gray-800 rounded-xl p-8 mb-12 shadow-xl border border-gray-700 bg-opacity-70",children:[(0,t.jsx)("h2",{className:"text-2xl text-white text-center mb-8 font-semibold",children:"Database Preference Matcher"}),(0,t.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4",children:[(0,t.jsx)(u,{label:"Scalability",value:e.scalability,onChange:e=>o("scalability",e)}),(0,t.jsx)(u,{label:"Performance",value:e.performance,onChange:e=>o("performance",e)}),(0,t.jsx)(u,{label:"Flexibility",value:e.flexibility,onChange:e=>o("flexibility",e)}),(0,t.jsx)(u,{label:"Consistency",value:e.consistency,onChange:e=>o("consistency",e)}),(0,t.jsx)(u,{label:"Reliability",value:e.reliability,onChange:e=>o("reliability",e)}),(0,t.jsx)(u,{label:"Security",value:e.security,onChange:e=>o("security",e)}),(0,t.jsx)(u,{label:"Cost Efficiency",value:e.costEfficiency,onChange:e=>o("costEfficiency",e)}),(0,t.jsx)(u,{label:"Community Support",value:e.communitySupport,onChange:e=>o("communitySupport",e)}),(0,t.jsx)(u,{label:"Transaction Support",value:e.transactionSupport,onChange:e=>o("transactionSupport",e)}),(0,t.jsx)(u,{label:"Integration Ease",value:e.integrationEase,onChange:e=>o("integrationEase",e)}),(0,t.jsx)(u,{label:"Query Capability",value:e.queryCapability,onChange:e=>o("queryCapability",e)}),(0,t.jsx)(u,{label:"Real-Time Processing",value:e.realTimeProcessing,onChange:e=>o("realTimeProcessing",e)}),(0,t.jsx)(u,{label:"Geographic Distribution",value:e.geographicDistribution,onChange:e=>o("geographicDistribution",e)}),(0,t.jsx)(u,{label:"Data Volume Capacity",value:e.dataVolumeCapacity,onChange:e=>o("dataVolumeCapacity",e)}),(0,t.jsx)(u,{label:"Elasticity",value:e.elasticity,onChange:e=>o("elasticity",e)}),(0,t.jsx)(u,{label:"Developer Friendliness",value:e.developerFriendliness,onChange:e=>o("developerFriendliness",e)}),(0,t.jsx)(u,{label:"Cloud-Native Support",value:e.cloudNativeSupport,onChange:e=>o("cloudNativeSupport",e)}),(0,t.jsx)(u,{label:"Multi-Model Capability",value:e.multiModelCapability,onChange:e=>o("multiModelCapability",e)})]}),(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4",children:[(0,t.jsxs)("button",{onClick:()=>{r(h.filter(a=>{let i=Object.values(e).reduce((e,a)=>e+a,0)/Object.keys(e).length;return a.overallScore>=i/2}))},className:" bg-purple-600 hover:bg-purple-700  text-white px-8 py-3 rounded-lg  transition-all duration-300  flex items-center justify-center space-x-2 shadow-lg hover:shadow-purple-500/20 ",children:[(0,t.jsx)(g,{className:"w-5 h-5"}),(0,t.jsx)("span",{children:"Find Matching Databases"})]}),(0,t.jsxs)("button",{className:" bg-blue-600 hover:bg-blue-700  text-white px-8 py-3 rounded-lg  transition-all duration-300  flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/20 ",children:[(0,t.jsx)(m,{className:"w-5 h-5"}),(0,t.jsx)("span",{children:"Compare Databases"})]})]})]}),(0,t.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:i.map(e=>(0,t.jsx)("div",{className:" bg-gray-800 rounded-xl overflow-hidden  shadow-xl transform transition-all  hover:scale-105 hover:shadow-2xl border border-gray-700 bg-opacity-70 ",children:(0,t.jsxs)("div",{className:"p-6 flex flex-col items-center",children:[(0,t.jsx)("div",{className:"bg-gradient-to-r from-purple-500 to-blue-500 p-1 rounded-full mb-4",children:(0,t.jsx)("div",{className:"bg-gray-800 rounded-full p-3",children:(0,t.jsx)(l.default,{src:e.logo,width:100,height:100,alt:"".concat(e.name," logo"),className:"w-16 h-16 object-contain rounded-full"})})}),(0,t.jsx)("h3",{className:"text-xl font-bold text-white mb-2",children:e.name}),(0,t.jsx)("p",{className:"text-sm text-gray-300 text-center mb-4 h-12",children:e.description}),(0,t.jsxs)("div",{className:"flex flex-col items-center mb-4",children:[(0,t.jsx)("div",{className:"text-2xl font-bold text-blue-400 mb-2",children:e.overallScore}),(0,t.jsx)(j,{score:e.overallScore})]}),(0,t.jsxs)("div",{className:"flex flex-col w-full gap-3 mt-4",children:[(0,t.jsxs)("button",{className:" bg-purple-600 hover:bg-purple-700  text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 w-full shadow-md hover:shadow-purple-500/20 ",children:[(0,t.jsx)(p,{className:"w-4 h-4"}),(0,t.jsx)("span",{children:"Select for comparison"})]}),(0,t.jsxs)("button",{className:" bg-gray-700 hover:bg-gray-600  text-gray-200 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 w-full border border-gray-600 hover:border-gray-500 ",children:[(0,t.jsx)(g,{className:"w-4 h-4"}),(0,t.jsx)("span",{children:"More Info"})]})]})]})},e.id))}),(0,t.jsx)(b,{})]})}}},e=>{var a=a=>e(e.s=a);e.O(0,[565,441,587,358],()=>a(5085)),_N_E=e.O()}]);