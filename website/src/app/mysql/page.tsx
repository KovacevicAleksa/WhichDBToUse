"use client";

import { DBMainComponent } from "../components/DBMainComponent";
import { MySQLData } from "../../../data/MySQLData";


export default function MySQLFun() {
  return <DBMainComponent databaseInfo={MySQLData} />;
}