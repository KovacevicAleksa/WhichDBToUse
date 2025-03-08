"use client";

import { DatabaseInfoType } from "../types/DatabaseInfoType";

export const PostgreSQLData: DatabaseInfoType = {
  name: "PostgreSQL",
  logo: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
  officialDocs: "https://www.postgresql.org/docs/",
  ratings: {
    scalability: 3.5,            // PostgreSQL scales well, but not as easily as NoSQL solutions
    performance: 4.5,            // High performance, especially with indexing and query optimization
    flexibility: 4,              // Supports relational data well, but not as flexible as document stores
    consistency: 5,              // Full ACID compliance ensures strong consistency
    reliability: 5,              // Extremely reliable with replication and failover options
    security: 4.5,              // Strong security features, role-based access, SSL, and encryption
    costEfficiency: 4,          // Open-source and free, but operational costs can vary
    communitySupport: 4.5,      // Large and active community, plus commercial support available
    transactionSupport: 5,      // Excellent transaction support with ACID compliance
    integrationEase: 4,         // Integrates well with many tools, but requires setup
    queryCapability: 5,         // Advanced SQL, JSONB support, indexing, and analytics
    realTimeProcessing: 3.5,    // Can handle real-time workloads but not as optimized as specialized solutions
    geographicDistribution: 3.5, // Supports replication and multi-region but requires manual setup
    dataVolumeCapacity: 4.5,    // Handles large datasets effectively, but requires tuning
    elasticity: 3,              // Vertical scaling is easy, but horizontal scaling is more complex
    developerFriendliness: 4,   // Great documentation, but can have a steep learning curve
    cloudNativeSupport: 3,      // PostgreSQL has cloud options, but requires additional setup for full cloud-native features
    multiModelCapability: 2     // Primarily a relational database, but has some document and key-value support
  },
  DBtype: "Object-Relational Database Management System",
  maintext: "The world's most advanced open source relational database",
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
  GROUP BY category_id;`,
  sampleData:[
    { id: 1, username: "john_doe", email: "john@example.com", created_at: "2025-02-15 09:30:00" },
    { id: 2, username: "jane_smith", email: "jane@example.com", created_at: "2025-02-18 14:25:00" },
    { id: 3, username: "bob_johnson", email: "bob@example.com", created_at: "2025-02-25 11:15:00" }
  ]
};