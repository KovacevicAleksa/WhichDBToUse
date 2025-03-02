import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhichDBToUse - PostgreSQL",
  description: "PostgreSQL database information and use cases",
  icons: {
    icon: 'https://img.icons8.com/?size=100&id=1476&format=png&color=000000',
  },
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
  password_hash VARCHAR(100) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP WITH TIME ZONE,
  is_active BOOLEAN DEFAULT TRUE
);

-- Products table with relations
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  inventory_count INTEGER NOT NULL DEFAULT 0,
  category_id INTEGER REFERENCES categories(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Orders with JSON data example
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  status VARCHAR(20) NOT NULL,
  shipping_address JSONB NOT NULL,
  order_items JSONB NOT NULL,
  total_amount DECIMAL(12, 2) NOT NULL,
  ordered_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Add indexes for performance
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_orders_user ON orders(user_id);`,
    queryExample: `-- Basic query with joins
SELECT 
  o.id AS order_id,
  u.username,
  o.total_amount,
  o.ordered_at,
  o.status
FROM orders o
JOIN users u ON o.user_id = u.id
WHERE o.ordered_at > NOW() - INTERVAL '30 days'
ORDER BY o.ordered_at DESC;

-- Query using JSON functions
SELECT 
  id,
  order_items -> 'items' as items,
  jsonb_array_length(order_items -> 'items') as item_count
FROM orders
WHERE order_items @> '{"shipping_method": "express"}';

-- Complex aggregation with window functions
SELECT 
  p.category_id,
  c.name AS category_name,
  p.id AS product_id,
  p.name AS product_name,
  p.price,
  AVG(p.price) OVER (PARTITION BY p.category_id) AS avg_category_price,
  p.price - AVG(p.price) OVER (PARTITION BY p.category_id) AS price_diff_from_avg
FROM products p
JOIN categories c ON p.category_id = c.id
ORDER BY category_id, price_diff_from_avg DESC;`
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <header className="max-w-6xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-100">PostgreSQL</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          The world's most advanced open source relational database
        </p>
      </header>
      
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700">
        {/* Database header */}
        <div className="p-6 border-b border-gray-700 flex items-center gap-4">
          <img src={databaseInfo.logo} alt="PostgreSQL logo" className="w-16 h-16 bg-white rounded p-1" />
          <div>
            <h2 className="text-2xl font-bold text-gray-100">{databaseInfo.name}</h2>
            <p className="text-sm text-gray-400">Object-Relational Database Management System</p>
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
          <div className="bg-gray-900 rounded-md p-4 overflow-x-auto border border-gray-700">
            <pre className="text-sm text-gray-300">{databaseInfo.modelExample}</pre>
          </div>
        </div>
        
        {/* Query Example */}
        <div className="p-6">
          <h3 className="font-semibold mb-2 text-lg text-gray-200">Query Examples</h3>
          <div className="bg-gray-900 rounded-md p-4 overflow-x-auto border border-gray-700">
            <pre className="text-sm text-gray-300">{databaseInfo.queryExample}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}