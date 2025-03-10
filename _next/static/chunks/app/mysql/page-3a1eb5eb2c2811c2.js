(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[523],{19816:(e,a,s)=>{Promise.resolve().then(s.bind(s,24590))},24590:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>i});var t=s(95155),r=s(26461);let l={name:"MySQL",logo:"https://cdn.simpleicons.org/mysql/4479A1",officialDocs:"https://dev.mysql.com/doc/",ratings:{scalability:5,performance:5,flexibility:5,consistency:5,reliability:5,security:5,costEfficiency:5,communitySupport:5,transactionSupport:5,integrationEase:5,queryCapability:5,realTimeProcessing:5,geographicDistribution:5,dataVolumeCapacity:5,elasticity:5,developerFriendliness:5,cloudNativeSupport:5,multiModelCapability:5},DBtype:"Relational Database Management System (RDBMS)",maintext:"The world's most popular open-source relational database",description:"MySQL is a widely used open-source relational database management system (RDBMS) known for its reliability, scalability, and performance. It supports SQL for querying and managing structured data, making it ideal for web applications, enterprise solutions, and various data-driven applications.",useCases:["Web applications and content management systems","E-commerce platforms and transactional applications","Data warehousing and business intelligence","Enterprise resource planning (ERP) systems","Banking and financial applications requiring ACID compliance","Cloud-based applications with high availability needs","IoT applications requiring structured data storage","Scalable backend systems for mobile and web applications"],features:["ACID-compliant transactions for data integrity","Scalability with replication and clustering","High-performance query optimization","Stored procedures, triggers, and views","Full-text search capabilities","Strong security with user privilege management","Seamless integration with web technologies","Support for JSON and spatial data types","Partitioning for handling large datasets"],modelExample:"-- Users table example\nCREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  username VARCHAR(50) NOT NULL,\n  email VARCHAR(100) NOT NULL,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- Products table example\nCREATE TABLE products (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  price DECIMAL(10,2) NOT NULL,\n  category VARCHAR(50),\n  stock INT NOT NULL\n);\n\n-- Orders table with foreign keys\nCREATE TABLE orders (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  user_id INT,\n  status ENUM('pending', 'completed', 'shipped') NOT NULL,\n  total_amount DECIMAL(10,2) NOT NULL,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  FOREIGN KEY (user_id) REFERENCES users(id)\n);",queryExample:"-- Find all users\nSELECT * FROM users;\n\n-- Find orders for a specific user\nSELECT * FROM orders WHERE user_id = 1;\n\n-- Aggregation example: Average product price by category\nSELECT category, AVG(price) AS avgPrice FROM products GROUP BY category;\n\n-- Query using an index\nCREATE INDEX idx_category ON products(category);\nSELECT * FROM products WHERE category = 'Electronics';",sampleData:[{id:1,username:"john_doe",email:"john@example.com",created_at:"2025-02-15 09:30:00"},{id:2,username:"jane_smith",email:"jane@example.com",created_at:"2025-02-18 14:25:00"},{id:3,username:"bob_johnson",email:"bob@example.com",created_at:"2025-02-25 11:15:00"}],languageDataModelExample:"sql",languageQueryExamples:"sql"};function i(){return(0,t.jsx)(r.n,{databaseInfo:l})}},26461:(e,a,s)=>{"use strict";s.d(a,{n:()=>m});var t=s(95155),r=s(48173),l=s.n(r),i=s(5565),n=s(12115),d=s(62377);s(44803);let c=e=>{let{code:a,language:s}=e,[r,l]=(0,n.useState)(!1),i=(0,n.useRef)(null);return(0,n.useEffect)(()=>{i.current&&d.A.highlightElement(i.current)},[a,s]),(0,t.jsxs)("div",{className:"bg-gray-900 rounded-md overflow-hidden border border-gray-700 relative",children:[(0,t.jsxs)("div",{className:"flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700",children:[(0,t.jsx)("div",{className:"text-sm text-gray-400 font-mono",children:s}),(0,t.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(a),l(!0),setTimeout(()=>l(!1),2e3)},className:"bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors",children:r?"Copied!":"Copy"})]}),(0,t.jsx)("div",{className:"p-0 m-0 w-full h-full",children:(0,t.jsx)("pre",{className:"m-0 p-0 w-full h-full",children:(0,t.jsx)("code",{ref:i,className:"language-".concat(s),children:a})})})]})},o=e=>{let{score:a,label:s}=e,r=[];for(let e=0;e<5;e++)r.push((0,t.jsx)("span",{className:"text-xl ".concat(e<a?"text-yellow-500":"text-gray-700"),children:"★"},e));return(0,t.jsxs)("div",{className:"flex flex-col items-center",children:[(0,t.jsx)("div",{className:"flex",children:r}),(0,t.jsx)("span",{className:"text-xs mt-1 text-gray-300",children:s})]})};function m(e){let{databaseInfo:a}=e,s=Object.keys(a.sampleData[0]),r=Object.values(a.ratings),n=Math.round(r.reduce((e,a)=>e+a,0)/r.length*10)/10;return(0,t.jsxs)("div",{className:"min-h-screen bg-gray-900 p-8",children:[(0,t.jsxs)("header",{className:"max-w-6xl mx-auto mb-8 text-center",children:[(0,t.jsx)("h1",{className:"text-4xl font-bold mb-4 text-gray-100",children:a.name}),(0,t.jsx)("p",{className:"text-xl text-gray-400 max-w-2xl mx-auto",children:a.maintext}),(0,t.jsx)("div",{className:"mt-4",children:(0,t.jsx)(l(),{href:a.officialDocs,target:"_blank",className:"text-blue-400 hover:text-blue-300 transition-colors",children:"Official Documentation →"})})]}),(0,t.jsxs)("div",{className:"max-w-6xl mx-auto bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700",children:[(0,t.jsxs)("div",{className:"p-6 border-b border-gray-700 flex items-center gap-4",children:[(0,t.jsx)(i.default,{src:a.logo,alt:"PostgreSQL logo",width:100,height:100,className:"bg-white rounded p-1"}),(0,t.jsxs)("div",{className:"flex-grow",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-gray-100",children:a.name}),(0,t.jsx)("p",{className:"text-sm text-gray-400",children:a.DBtype})]}),(0,t.jsxs)("div",{className:"bg-gray-700 p-4 rounded-lg flex flex-col items-center",children:[(0,t.jsx)("div",{className:"text-3xl font-bold text-blue-400",children:n}),(0,t.jsx)("div",{className:"text-xs text-gray-300",children:"OVERALL SCORE"})]})]}),(0,t.jsxs)("div",{className:"p-6 border-b border-gray-700",children:[(0,t.jsx)("h3",{className:"font-semibold mb-4 text-lg text-gray-200",children:"Ratings"}),(0,t.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4",children:Object.entries(a.ratings).map(e=>{let[a,s]=e;return(0,t.jsx)(o,{score:s,label:a.charAt(0).toUpperCase()+a.slice(1).replace(/([A-Z])/g," $1")},a)})})]}),(0,t.jsxs)("div",{className:"p-6 border-b border-gray-700",children:[(0,t.jsx)("h3",{className:"font-semibold mb-2 text-lg text-gray-200",children:"Description"}),(0,t.jsx)("p",{className:"text-gray-300",children:a.description})]}),(0,t.jsxs)("div",{className:"p-6 grid md:grid-cols-2 gap-6 border-b border-gray-700",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"font-semibold mb-2 text-lg text-gray-200",children:"Key Features"}),(0,t.jsx)("ul",{className:"list-disc list-inside text-gray-300 space-y-1",children:a.features.map((e,a)=>(0,t.jsx)("li",{children:e},a))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"font-semibold mb-2 text-lg text-gray-200",children:"Best Use Cases"}),(0,t.jsx)("ul",{className:"list-disc list-inside text-gray-300 space-y-1",children:a.useCases.map((e,a)=>(0,t.jsx)("li",{children:e},a))})]})]}),(0,t.jsxs)("div",{className:"p-6 border-b border-gray-700",children:[(0,t.jsx)("h3",{className:"font-semibold mb-2 text-lg text-gray-200",children:"Data Model Example"}),(0,t.jsx)(c,{code:a.modelExample,language:a.languageDataModelExample})]}),(0,t.jsxs)("div",{className:"p-6 border-b border-gray-700",children:[(0,t.jsx)("h3",{className:"font-semibold mb-2 text-lg text-gray-200",children:"Query Examples"}),(0,t.jsx)(c,{code:a.queryExample,language:a.languageQueryExamples})]}),(0,t.jsxs)("div",{className:"p-6",children:[(0,t.jsx)("h3",{className:"font-semibold mb-2 text-lg text-gray-200",children:"Data Visualization Example"}),(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:"w-full border-collapse",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"bg-gray-700",children:[(0,t.jsx)("th",{className:"p-2 text-left text-gray-200 border border-gray-600",children:s[0]}),(0,t.jsx)("th",{className:"p-2 text-left text-gray-200 border border-gray-600",children:s[1]}),(0,t.jsx)("th",{className:"p-2 text-left text-gray-200 border border-gray-600",children:s[2]}),(0,t.jsx)("th",{className:"p-2 text-left text-gray-200 border border-gray-600",children:s[3]})]})}),(0,t.jsx)("tbody",{children:a.sampleData.map((e,a)=>(0,t.jsxs)("tr",{className:a%2==0?"bg-gray-800":"bg-gray-900",children:[(0,t.jsx)("td",{className:"p-2 border border-gray-600 text-gray-300",children:e[s[0]]}),(0,t.jsx)("td",{className:"p-2 border border-gray-600 text-gray-300",children:e[s[1]]}),(0,t.jsx)("td",{className:"p-2 border border-gray-600 text-gray-300",children:e[s[2]]}),(0,t.jsx)("td",{className:"p-2 border border-gray-600 text-gray-300",children:e[s[3]]})]},a))})]})}),(0,t.jsx)("p",{className:"text-xs text-gray-400 mt-2",children:"Sample data visualization"})]})]})]})}}},e=>{var a=a=>e(e.s=a);e.O(0,[994,565,351,441,587,358],()=>a(19816)),_N_E=e.O()}]);