"use client";

import Link from "next/link";
import Image from 'next/image';
import { CodeBlock } from "./CodeBlock";
import { Rating } from "./Rating";
import { DatabaseInfoType } from "../types/DatabaseInfoType";

interface DatabaseInfoTypeProps {
  databaseInfo: DatabaseInfoType;
}

export function DBMainComponent({ databaseInfo }: DatabaseInfoTypeProps) {
  const keys = Object.keys(databaseInfo.sampleData[0]);

  // Calculate overall score
  const ratings = Object.values(databaseInfo.ratings);
  const overallScore = Math.round((ratings.reduce((a, b) => a + b, 0) / ratings.length) * 10) / 10;

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <header className="max-w-6xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-100">{databaseInfo.name}</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {databaseInfo.maintext}
        </p>
        <div className="mt-4">
          <Link
            href={databaseInfo.officialDocs}
            target="_blank"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Official Documentation →
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700">
        {/* Database header with overall score */}
        <div className="p-6 border-b border-gray-700 flex items-center gap-4">
          <Image
            src={databaseInfo.logo}
            alt="PostgreSQL logo"
            width={100}
            height={100}
            className="bg-white rounded p-1"
          />          
          <div className="flex-grow">
            <h2 className="text-2xl font-bold text-gray-100">{databaseInfo.name}</h2>
            <p className="text-sm text-gray-400">{databaseInfo.DBtype}</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
            <div className="text-3xl font-bold text-blue-400">{overallScore}</div>
            <div className="text-xs text-gray-300">OVERALL SCORE</div>
          </div>
        </div>

        {/* Ratings section */}
        <div className="p-6 border-b border-gray-700">
          <h3 className="font-semibold mb-4 text-lg text-gray-200">Ratings</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Object.entries(databaseInfo.ratings).map(([key, value]) => (
              <Rating
                key={key}
                score={value}
                label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="p-6 border-b border-gray-700">
          <h3 className="font-semibold mb-2 text-lg text-gray-200">Description</h3>
          <p className="text-gray-300">{databaseInfo.description}</p>
        </div>

        {/* Features and Use Cases */}
        <div className="p-6 grid md:grid-cols-2 gap-6 border-b border-gray-700">
          <div>
            <h3 className="font-semibold mb-2 text-lg text-gray-200">Key Features</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {databaseInfo.features.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-lg text-gray-200">Best Use Cases</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {databaseInfo.useCases.map((useCase: string, index: number) => (
                <li key={index}>{useCase}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Data Model Example */}
        <div className="p-6 border-b border-gray-700">
          <h3 className="font-semibold mb-2 text-lg text-gray-200">Data Model Example</h3>
          <CodeBlock code={databaseInfo.modelExample} language="sql" />
        </div>

        {/* Query Example */}
        <div className="p-6 border-b border-gray-700">
          <h3 className="font-semibold mb-2 text-lg text-gray-200">Query Examples</h3>
          <CodeBlock code={databaseInfo.queryExample} language="sql" />
        </div>

        {/* Visual Data Example */}
        <div className="p-6">
          <h3 className="font-semibold mb-2 text-lg text-gray-200">Data Visualization Example</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-700">
                  <th className="p-2 text-left text-gray-200 border border-gray-600">{keys[0]}</th>
                  <th className="p-2 text-left text-gray-200 border border-gray-600">{keys[1]}</th>
                  <th className="p-2 text-left text-gray-200 border border-gray-600">{keys[2]}</th>
                  <th className="p-2 text-left text-gray-200 border border-gray-600">{keys[3]}</th>
                </tr>
              </thead>
              <tbody>
                {databaseInfo.sampleData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"}>
                    <td className="p-2 border border-gray-600 text-gray-300">{row.id}</td>
                    <td className="p-2 border border-gray-600 text-gray-300">{row.username}</td>
                    <td className="p-2 border border-gray-600 text-gray-300">{row.email}</td>
                    <td className="p-2 border border-gray-600 text-gray-300">{row.created_at}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">Sample data visualization</p>
        </div>
      </div>
    </div>
  );
}