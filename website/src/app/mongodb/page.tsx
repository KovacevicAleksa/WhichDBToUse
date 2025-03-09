"use client";

import { DBMainComponent } from "../components/DBMainComponent";
import {MongoDBData} from "../data/MongoDBData";


export default function MongoDBFun() {
  return <DBMainComponent databaseInfo={MongoDBData} />;
}