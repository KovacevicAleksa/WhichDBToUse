"use client";

import { DBMainComponent } from "../components/DBMainComponent";
import { OracleDBData } from "../data/OracleDBData";

export default function OracleDBFun() {
  return <DBMainComponent databaseInfo={OracleDBData} />;
}