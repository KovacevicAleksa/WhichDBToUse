export interface DatabaseInfoType {
    name: string;
    logo: string;
    officialDocs: string;
    ratings: {
      performance: number;
      scalability: number;
      easeOfUse: number;
      enterprise: number;
      security: number;
      queryPower: number;
      flexibility: number;
      community: number;
      costEfficiency: number;
      reliability: number;
      extensions: number;
      compliance: number;
    };
    DBtype: string;
    maintext: string;
    description: string;
    useCases: string[];
    features: string[];
    modelExample: string;
    queryExample: string;
    sampleData: {
      id: number;
      username: string;
      email: string;
      created_at: string;
    }[];
  }