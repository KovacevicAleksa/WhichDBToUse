export interface DatabaseInfoType {
    name: string;
    logo: string;
    officialDocs: string;
    ratings: {
      scalability: number;             // Ability to scale horizontally/vertically
      performance: number;             // Overall speed and efficiency
      flexibility: number;             // Adaptability to different data models and schemas
      consistency: number;             // Degree of ACID or eventual consistency support
      reliability: number;             // Uptime, fault tolerance, and stability
      security: number;                // Built-in security features and compliance
      costEfficiency: number;          // Operational and licensing cost-effectiveness
      communitySupport: number;        // Strength of community and vendor support
      transactionSupport: number;      // Robustness of transaction processing capabilities
      integrationEase: number;         // Ease of integration with other tools and systems
      queryCapability: number;         // Ability to handle complex queries and analytics
      realTimeProcessing: number;      // Suitability for handling streaming or real-time data
      geographicDistribution: number;  // Support for global distribution and multi-region deployments
      dataVolumeCapacity: number;      // Handling of large-scale data storage and processing
      elasticity: number;              // Dynamic scaling and resource management features
      developerFriendliness: number;   // Quality of documentation, tooling, and ease of use
      cloudNativeSupport: number;      // Native support for cloud environments and managed services
      multiModelCapability: number;    // Ability to support multiple data models (e.g., relational, document, graph)
    };
    DBtype: string;
    maintext: string;
    description: string;
    useCases: string[];
    features: string[];
    modelExample: string;
    queryExample: string;
    sampleData: Array<{
      [key: string]: any;
    }>;
    languageDataModelExample: string;
    languageQueryExamples: string;
  }