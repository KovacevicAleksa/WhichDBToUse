"use client";

import { DBMainComponent } from "../../components/DBMainComponent";
import {PostgreSQLData} from "../../../../data/PostgreSQLData";


export default function PostgreSQL() {
  return <DBMainComponent databaseInfo={PostgreSQLData} />;
}