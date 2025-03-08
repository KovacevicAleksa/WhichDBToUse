import {DatabaseInfoMainPageType} from '../types/DatabaseInfoMainPageType';

// This approach is faster as it avoids loading the entire large objects on the main page.
// However, this may lead to repetition of object fields since the data is directly written instead of being dynamically loaded from a source.

export const DatabaseMainPage: DatabaseInfoMainPageType[] = [
  {
    id: 1,
    name: "PostgreSQL",
    logo: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
    overallScore: 4.5,
    description: "Advanced open-source relational database"
  },
  {
    id: 2,
    name: "MongoDB",
    logo: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
    overallScore: 4.2,
    description: "Popular NoSQL document database"
  },
];
