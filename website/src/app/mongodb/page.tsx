"use client";

import { DBMainComponent } from "../components/DBMainComponent";
import {MongoDBData} from "../data/MongoDBData";


export default function PostgreSQL() {
  return <DBMainComponent databaseInfo={MongoDBData} />;
}