"use client";

import { DatabaseInfoType } from "../src/app/types/DatabaseInfoType";

export const MySQLData: DatabaseInfoType = {
  name: "MySQL",
  logo: "https://cdn.simpleicons.org/mysql/4479A1",
  officialDocs: "https://dev.mysql.com/doc/",
  ratings: {
    scalability: 5,
    performance: 5,
    flexibility: 5,
    consistency: 5,
    reliability: 5,
    security: 5,
    costEfficiency: 5,
    communitySupport: 5,
    transactionSupport: 5,
    integrationEase: 5,
    queryCapability: 5,
    realTimeProcessing: 5,
    geographicDistribution: 5,
    dataVolumeCapacity: 5,
    elasticity: 5,
    developerFriendliness: 5,
    cloudNativeSupport: 5,
    multiModelCapability: 5
  },
  DBtype: "Relational Database Management System (RDBMS)",
  maintext: "The world's most popular open-source relational database",
  description:
    "MySQL is a widely used open-source relational database management system (RDBMS) known for its reliability, scalability, and performance. It supports SQL for querying and managing structured data, making it ideal for web applications, enterprise solutions, and various data-driven applications.",
  useCases: [
    "Web applications and content management systems",
    "E-commerce platforms and transactional applications",
    "Data warehousing and business intelligence",
    "Enterprise resource planning (ERP) systems",
    "Banking and financial applications requiring ACID compliance",
    "Cloud-based applications with high availability needs",
    "IoT applications requiring structured data storage",
    "Scalable backend systems for mobile and web applications"
  ],
  features: [
    "ACID-compliant transactions for data integrity",
    "Scalability with replication and clustering",
    "High-performance query optimization",
    "Stored procedures, triggers, and views",
    "Full-text search capabilities",
    "Strong security with user privilege management",
    "Seamless integration with web technologies",
    "Support for JSON and spatial data types",
    "Partitioning for handling large datasets"
  ],
  modelExample: `-- Users table example
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products table example
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  category VARCHAR(50),
  stock INT NOT NULL
);

-- Orders table with foreign keys
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  status ENUM('pending', 'completed', 'shipped') NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);`,
  queryExample: `-- Find all users
SELECT * FROM users;

-- Find orders for a specific user
SELECT * FROM orders WHERE user_id = 1;

-- Aggregation example: Average product price by category
SELECT category, AVG(price) AS avgPrice FROM products GROUP BY category;

-- Query using an index
CREATE INDEX idx_category ON products(category);
SELECT * FROM products WHERE category = 'Electronics';`,
  sampleData: [
    { id: 1, username: "john_doe", email: "john@example.com", created_at: "2025-02-15 09:30:00" },
    { id: 2, username: "jane_smith", email: "jane@example.com", created_at: "2025-02-18 14:25:00" },
    { id: 3, username: "bob_johnson", email: "bob@example.com", created_at: "2025-02-25 11:15:00" }
  ],
  languageDataModelExample: "sql",
  languageQueryExamples: "sql"
};
