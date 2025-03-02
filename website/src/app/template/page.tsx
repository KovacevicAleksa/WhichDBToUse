"use client";

import Link from "next/link";
import { useState } from "react";

// Code Block Component with Copy Button
const CodeBlock = ({ code, language }: { code: string, language: string }) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="bg-gray-900 rounded-md p-4 overflow-x-auto border border-gray-700 relative">
      <button 
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className="text-sm">
        <code className={`language-${language} text-gray-300`}>{code}</code>
      </pre>
    </div>
  );
};

// Rating component for visualizing scores
const Rating = ({ score, label }: { score: number, label: string }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span 
        key={i} 
        className={`text-xl ${i < score ? 'text-yellow-500' : 'text-gray-700'}`}
      >
        ★
      </span>
    );
  }
  
  return (
    <div className="flex flex-col items-center">
      <div className="flex">{stars}</div>
      <span className="text-xs mt-1 text-gray-300">{label}</span>
    </div>
  );
};

export default function PostgreSQL() {
  const databaseInfo = {
    name: "PostgreSQL",
    logo: "https://img.icons8.com/?size=100&id=1476&format=png&color=000000",
    officialDocs: "https://www.postgresql.org/docs/",
    ratings: {
      performance: 4,
      scalability: 3,
      easeOfUse: 4,
      enterprise: 5,
      security: 5,
      queryPower: 5,
      flexibility: 4,
      community: 5,
      costEfficiency: 5,
      reliability: 5,
      extensions: 5,
      compliance: 5
    },
    description: 
      "PostgreSQL is a powerful, open-source object-relational database system with over 30 years of active development. It has earned a strong reputation for reliability, feature robustness, and performance. PostgreSQL extends the SQL standard while providing many advanced features including complex queries, foreign keys, triggers, updatable views, transactional integrity, and multiversion concurrency control.",
    useCases: [
      "Enterprise applications requiring ACID compliance",
      "Geospatial applications using PostGIS extension",
      "Financial systems and transaction processing",
      "Complex data models with relations and constraints",
      "Data warehousing and analytics",
      "Applications requiring strong data integrity and validation",
      "Systems with both structured and semi-structured data (using JSONB)",
      "Multi-tenant applications"
    ],
    features: [
      "Full ACID compliance",
      "Advanced indexing techniques (B-tree, Hash, GiST, SP-GiST, GIN, BRIN)",
      "Full-text search capabilities",
      "JSON/JSONB support for semi-structured data",
      "Table inheritance and partitioning",
      "Native replication and high availability options",
      "Extensive extension ecosystem (PostGIS, TimescaleDB, etc.)",
      "Stored procedures and functions in multiple languages",
      "Materialized views",
      "Common Table Expressions and Window functions"
    ],
    modelExample: `-- User table definition
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products table with relations
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  category_id INTEGER REFERENCES categories(id)
);

-- Orders with JSON data
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  status VARCHAR(20) NOT NULL,
  order_items JSONB NOT NULL,
  total_amount DECIMAL(12, 2) NOT NULL
);

-- Simple indexes
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_orders_user ON orders(user_id);`,
    queryExample: `-- Basic query with join
SELECT 
  o.id AS order_id,
  u.username,
  o.total_amount
FROM orders o
JOIN users u ON o.user_id = u.id
WHERE o.status = 'completed';

-- Query using JSON functions
SELECT 
  id,
  order_items -> 'items' as items
FROM orders
WHERE order_items @> '{"shipping": "express"}';

-- Simple aggregation
SELECT 
  category_id,
  AVG(price) AS avg_price,
  COUNT(*) AS product_count
FROM products
GROUP BY category_id;`
  };

  // Calculate overall score
  const ratings = Object.values(databaseInfo.ratings);
  const overallScore = Math.round((ratings.reduce((a, b) => a + b, 0) / ratings.length) * 10) / 10;

  // Sample data for visual representation
  const sampleData = [
    { id: 1, username: "john_doe", email: "john@example.com", created_at: "2025-02-15 09:30:00" },
    { id: 2, username: "jane_smith", email: "jane@example.com", created_at: "2025-02-18 14:25:00" },
    { id: 3, username: "bob_johnson", email: "bob@example.com", created_at: "2025-02-25 11:15:00" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <header className="max-w-6xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-100">PostgreSQL</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          The world's most advanced open source relational database
        </p>
        <div className="mt-4">
          <Link 
            href={databaseInfo.officialDocs} 
            target="_blank" 
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Official Documentation →
          </Link>
        </div>
      </header>
      
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700">
        {/* Database header with overall score */}
        <div className="p-6 border-b border-gray-700 flex items-center gap-4">
          <img src={databaseInfo.logo} alt="PostgreSQL logo" className="w-16 h-16 bg-white rounded p-1" />
          <div className="flex-grow">
            <h2 className="text-2xl font-bold text-gray-100">{databaseInfo.name}</h2>
            <p className="text-sm text-gray-400">Object-Relational Database Management System</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
            <div className="text-3xl font-bold text-blue-400">{overallScore}</div>
            <div className="text-xs text-gray-300">OVERALL SCORE</div>
          </div>
        </div>
        
        {/* Ratings section */}
        <div className="p-6 border-b border-gray-700">
          <h3 className="font-semibold mb-4 text-lg text-gray-200">Ratings</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Object.entries(databaseInfo.ratings).map(([key, value]) => (
              <Rating 
                key={key} 
                score={value} 
                label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')} 
              />
            ))}
          </div>
        </div>
        
        {/* Description */}
        <div className="p-6 border-b border-gray-700">
          <h3 className="font-semibold mb-2 text-lg text-gray-200">Description</h3>
          <p className="text-gray-300">{databaseInfo.description}</p>
        </div>
        
        {/* Features and Use Cases */}
        <div className="p-6 grid md:grid-cols-2 gap-6 border-b border-gray-700">
          <div>
            <h3 className="font-semibold mb-2 text-lg text-gray-200">Key Features</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {databaseInfo.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-lg text-gray-200">Best Use Cases</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {databaseInfo.useCases.map((useCase, index) => (
                <li key={index}>{useCase}</li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Data Model Example */}
        <div className="p-6 border-b border-gray-700">
          <h3 className="font-semibold mb-2 text-lg text-gray-200">Data Model Example</h3>
          <CodeBlock code={databaseInfo.modelExample} language="sql" />
        </div>
        
        {/* Query Example */}
        <div className="p-6 border-b border-gray-700">
          <h3 className="font-semibold mb-2 text-lg text-gray-200">Query Examples</h3>
          <CodeBlock code={databaseInfo.queryExample} language="sql" />
        </div>
        
        {/* Visual Data Example */}
        <div className="p-6">
          <h3 className="font-semibold mb-2 text-lg text-gray-200">Data Visualization Example</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-700">
                  <th className="p-2 text-left text-gray-200 border border-gray-600">ID</th>
                  <th className="p-2 text-left text-gray-200 border border-gray-600">Username</th>
                  <th className="p-2 text-left text-gray-200 border border-gray-600">Email</th>
                  <th className="p-2 text-left text-gray-200 border border-gray-600">Created At</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"}>
                    <td className="p-2 border border-gray-600 text-gray-300">{row.id}</td>
                    <td className="p-2 border border-gray-600 text-gray-300">{row.username}</td>
                    <td className="p-2 border border-gray-600 text-gray-300">{row.email}</td>
                    <td className="p-2 border border-gray-600 text-gray-300">{row.created_at}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">Sample data visualization - Users table</p>
        </div>
        
        {/* Kubernetes Config Example */}
        <div className="p-6 border-t border-gray-700">
          <h3 className="font-semibold mb-2 text-lg text-gray-200">Kubernetes PersistentVolumeClaim Example</h3>
          <CodeBlock 
            code={`apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: postgres-volume-claim
  labels:
    app: postgres
spec:
  storageClassName: manual
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 10Gi`} 
            language="yaml" 
          />
        </div>
      </div>
    </div>
  );
}