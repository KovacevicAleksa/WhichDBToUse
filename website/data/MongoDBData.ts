"use client";

import { DatabaseInfoType } from "../src/app/types/DatabaseInfoType";

export const MongoDBData: DatabaseInfoType = {
  name: "MongoDB",
  logo: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
  officialDocs: "https://www.mongodb.com/docs/",
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
  DBtype: "NoSQL Document-Oriented Database",
  maintext: "The most popular NoSQL database for modern applications",
  description:
    "MongoDB is a powerful, flexible, and scalable NoSQL database designed for handling large volumes of data. It uses a document-oriented data model with JSON-like documents, making it highly adaptable for a variety of use cases. MongoDB is widely used in modern applications, including real-time analytics, content management, and distributed systems.",
  useCases: [
    "Real-time analytics and big data applications",
    "Content management systems and blogging platforms",
    "E-commerce and inventory management",
    "IoT applications with high-speed data ingestion",
    "Mobile and web applications requiring flexibility",
    "Distributed applications with multi-region deployments",
    "High-availability systems with automatic failover",
    "Gaming applications requiring rapid data access"
  ],
  features: [
    "Flexible schema with JSON-like documents",
    "Automatic sharding for horizontal scalability",
    "Replication and high availability",
    "Powerful aggregation framework",
    "Full-text search capabilities",
    "Geospatial indexing and queries",
    "Multi-document ACID transactions",
    "Change streams for real-time data processing",
    "Seamless integration with modern development frameworks"
  ],
  modelExample: `// Users collection example
db.users.insertMany([
  { _id: ObjectId(), username: "john_doe", email: "john@example.com", created_at: new Date() },
  { _id: ObjectId(), username: "jane_smith", email: "jane@example.com", created_at: new Date() }
]);

// Products collection example
db.products.insertOne({
  name: "Laptop",
  price: 1200.99,
  category: "Electronics",
  stock: 50
});

// Orders collection with embedded documents
db.orders.insertOne({
  user_id: ObjectId("603dcd1f1f292c2f4c8b4567"),
  status: "completed",
  order_items: [
    { product_id: ObjectId("603dcd1f1f292c2f4c8b4568"), quantity: 2 },
    { product_id: ObjectId("603dcd1f1f292c2f4c8b4569"), quantity: 1 }
  ],
  total_amount: 250.75
});`,
  queryExample: `// Find all users
db.users.find({});

// Find orders for a specific user
db.orders.find({ user_id: ObjectId("603dcd1f1f292c2f4c8b4567") });

// Aggregation example: Average product price by category
db.products.aggregate([
  { $group: { _id: "$category", avgPrice: { $avg: "$price" } } }
]);

// Query using an index
db.products.createIndex({ category: 1 });
db.products.find({ category: "Electronics" });`,
  sampleData: [
    { _id: 1, username: "john_doe", email: "john@example.com", created_at: "2025-02-15T09:30:00Z" },
    { _id: 2, username: "jane_smith", email: "jane@example.com", created_at: "2025-02-18T14:25:00Z" },
    { _id: 3, username: "bob_johnson", email: "bob@example.com", created_at: "2025-02-25T11:15:00Z" }
  ],
  languageDataModelExample: "javascript",
  languageQueryExamples: "javascript"
};