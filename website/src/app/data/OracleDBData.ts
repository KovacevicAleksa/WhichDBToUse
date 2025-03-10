"use client";

import { DatabaseInfoType } from "../types/DatabaseInfoType";

export const OracleDBData: DatabaseInfoType = {
  name: "OracleDB",
  logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiAxMXEzLjc1IDAgNi4zNzUtMS4xNzVUMjEgN3QtMi42MjUtMi44MjVUMTIgM1Q1LjYyNSA0LjE3NVQzIDd0Mi42MjUgMi44MjVUMTIgMTFtMCAyLjVxMS4wMjUgMCAyLjU2My0uMjEzdDIuOTYyLS42ODd0Mi40NS0xLjIzN1QyMSA5LjVWMTJxMCAxLjEtMS4wMjUgMS44NjN0LTIuNDUgMS4yMzd0LTIuOTYyLjY4OFQxMiAxNnQtMi41NjItLjIxM3QtMi45NjMtLjY4N3QtMi40NS0xLjIzN1QzIDEyVjkuNXEwIDEuMSAxLjAyNSAxLjg2M3QyLjQ1IDEuMjM3dDIuOTYzLjY4OFQxMiAxMy41bTAgNXExLjAyNSAwIDIuNTYzLS4yMTN0Mi45NjItLjY4N3QyLjQ1LTEuMjM3VDIxIDE0LjVWMTdxMCAxLjEtMS4wMjUgMS44NjN0LTIuNDUgMS4yMzd0LTIuOTYyLjY4OFQxMiAyMXQtMi41NjItLjIxM3QtMi45NjMtLjY4N3QtMi40NS0xLjIzN1QzIDE3di0yLjVxMCAxLjEgMS4wMjUgMS44NjN0Mi40NSAxLjIzN3QyLjk2My42ODhUMTIgMTguNSIvPjwvc3ZnPg==",
  officialDocs: "https://www.oracle.com/database/",
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
  maintext: "The most popular RDBMS for enterprise-grade applications",
  description:
    "OracleDB is a highly reliable and scalable relational database designed for high-performance transactional processing, data warehousing, and mixed workloads. It supports SQL and PL/SQL and provides advanced security features, high availability, and comprehensive data management solutions.",
  useCases: [
    "Enterprise resource planning (ERP) systems",
    "Customer relationship management (CRM) applications",
    "Financial and banking applications",
    "Data warehousing and business intelligence",
    "Healthcare management systems",
    "E-commerce platforms handling complex transactions",
    "Multi-tenant and cloud-native applications",
    "High-performance OLTP applications"
  ],
  features: [
    "ACID-compliant transactions",
    "Advanced security features",
    "Partitioning and sharding capabilities",
    "In-memory processing",
    "Data compression and encryption",
    "Support for SQL and PL/SQL",
    "High availability and disaster recovery",
    "Advanced analytics and reporting",
    "Automatic storage management (ASM)",
    "Multitenant architecture"
  ],
  modelExample: `-- Example OracleDB Table Definition
CREATE TABLE users (
  user_id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  username VARCHAR2(50) NOT NULL,
  email VARCHAR2(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, email) VALUES ('john_doe', 'john@example.com');
`,
  queryExample: `-- Query to find users by email
SELECT * FROM users WHERE email = 'john@example.com';

-- Aggregate query to count users
SELECT COUNT(*) FROM users;

-- Query to find users created within the last month
SELECT * FROM users WHERE created_at >= ADD_MONTHS(SYSDATE, -1);
`,
  sampleData: [
    { user_id: 1, username: "john_doe", email: "john@example.com", created_at: "2025-02-15 09:30:00" },
    { user_id: 2, username: "jane_smith", email: "jane@example.com", created_at: "2025-02-18 14:25:00" },
    { user_id: 3, username: "bob_johnson", email: "bob@example.com", created_at: "2025-02-25 11:15:00" }
  ],
  languageDataModelExample: "sql",
  languageQueryExamples: "sql"
};