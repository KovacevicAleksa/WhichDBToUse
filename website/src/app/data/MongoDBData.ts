"use client";

import { DatabaseInfoType } from "../types/DatabaseInfoType";

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
    "MongoDB is a high-performance, document-oriented NoSQL database designed for scalability and flexibility. It stores data in JSON-like BSON format, making it ideal for applications requiring fast development cycles and handling semi-structured data. With built-in sharding and replication, MongoDB excels in distributed environments.",
  useCases: [
    "Real-time analytics and big data processing",
    "Content management systems",
    "Internet of Things (IoT) applications",
    "Gaming applications with dynamic data structures",
    "E-commerce platforms handling high traffic",
    "Applications with rapidly changing schemas",
    "Social networks and recommendation engines",
    "Multi-region applications requiring geo-distributed databases"
  ],
  features: [
    "Flexible, schema-less document storage",
    "Horizontal scaling with automatic sharding",
    "Replication and high availability",
    "Indexing for fast query performance",
    "Full-text search capabilities",
    "Aggregation framework for advanced analytics",
    "Built-in support for geospatial queries",
    "ACID transactions support",
    "Time-series and graph data models",
    "Cloud-native deployment options"
  ],
  modelExample: `// Example MongoDB collection schema
  {
    _id: ObjectId("507f191e810c19729de860ea"),
    username: "john_doe",
    email: "john@example.com",
    created_at: ISODate("2025-02-15T09:30:00Z"),
    orders: [
      {
        order_id: ObjectId("60a7c8b5f5a2c2d9c3e7b1a4"),
        total_amount: 99.99,
        status: "completed",
        order_items: [
          { product: "Laptop", price: 799.99 },
          { product: "Mouse", price: 19.99 }
        ]
      }
    ]
  }`,
  queryExample: `// Find users with a specific email
  db.users.find({ email: "john@example.com" });

  // Aggregate orders to find total revenue per user
  db.orders.aggregate([
    { $group: { _id: "$user_id", total_spent: { $sum: "$total_amount" } } }
  ]);

  // Find orders containing an item with a specific name
  db.orders.find({ "order_items.product": "Laptop" });`,
  sampleData: [
    { _id: "507f191e810c19729de860ea", username: "john_doe", email: "john@example.com", created_at: "2025-02-15T09:30:00Z" },
    { _id: "507f191e810c19729de860eb", username: "jane_smith", email: "jane@example.com", created_at: "2025-02-18T14:25:00Z" },
    { _id: "507f191e810c19729de860ec", username: "bob_johnson", email: "bob@example.com", created_at: "2025-02-25T11:15:00Z" }
  ],
  languageDataModelExample: "javascript",
  languageQueryExamples: "javascript"
};