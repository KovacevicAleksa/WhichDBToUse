"use client";

import React, { useState } from 'react';
import { Star, StarHalf, Search, CheckCircle } from 'lucide-react';
import {RatingMainPage} from './components/RatingMainPage';
import {StarRatingMainPage} from './components/StarRatingMainPage';
import {DatabaseInfoMainPageType} from './types/DatabaseInfoMainPageType';
import {DatabaseMainPage} from './DatabaseMainPage'; 
import {FooterMainPage} from './components/FooterMainPage'


export default function AdvancedDatabaseSelector() {
  // State for preferences
  const [preferences, setPreferences] = useState({
    // Left side characteristics
    performance: 3,
    scalability: 3,
    dataConsistency: 3,
    horizontalScaling: 3,

    // Center characteristics
    complexity: 3,
    security: 3,
    querySpeed: 3,
    transactionSupport: 3,

    // Right side characteristics
    cloudReadiness: 3,
    dataModelFlexibility: 3,
    backupAndRecovery: 3,
    verticalScaling: 3
  });

  // Filtered databases state
  const [filteredDatabases, setFilteredDatabases] = useState<DatabaseInfoMainPageType[]>(DatabaseMainPage);

  // Handler for rating changes
  const handleRatingChange = (field: string, value: number) => {
    setPreferences(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Find matching databases need to add more logic
  const findMatchingDatabases = () => {
    const matchedDbs = DatabaseMainPage.filter(db => {
      const avgPreference = Object.values(preferences).reduce((a, b) => a + b, 0) / Object.keys(preferences).length;
      return db.overallScore >= avgPreference / 2;
    });

    setFilteredDatabases(matchedDbs);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-100 mb-4">Database Selection Tool</h1>
        <p className="text-gray-400">Find the perfect database for your project</p>
      </header>

      {/* Preference Selector */}
      <div className="bg-gray-800 rounded-lg p-8 mb-12">
        <h2 className="text-2xl text-gray-100 text-center mb-8">Database Preference Matcher</h2>
        
        {/* Updated Grid Layout for Preferences */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <RatingMainPage 
            label="Performance" 
            value={preferences.performance}
            onChange={(value) => handleRatingChange('performance', value)}
          />
          <RatingMainPage 
            label="Scalability" 
            value={preferences.scalability}
            onChange={(value) => handleRatingChange('scalability', value)}
          />
          <RatingMainPage 
            label="Data Consistency" 
            value={preferences.dataConsistency}
            onChange={(value) => handleRatingChange('dataConsistency', value)}
          />
          <RatingMainPage 
            label="Horizontal Scaling" 
            value={preferences.horizontalScaling}
            onChange={(value) => handleRatingChange('horizontalScaling', value)}
          />
          <RatingMainPage 
            label="Complexity" 
            value={preferences.complexity}
            onChange={(value) => handleRatingChange('complexity', value)}
          />
          <RatingMainPage 
            label="Security" 
            value={preferences.security}
            onChange={(value) => handleRatingChange('security', value)}
          />
          <RatingMainPage 
            label="Query Speed" 
            value={preferences.querySpeed}
            onChange={(value) => handleRatingChange('querySpeed', value)}
          />
          <RatingMainPage 
            label="Transaction Support" 
            value={preferences.transactionSupport}
            onChange={(value) => handleRatingChange('transactionSupport', value)}
          />
          <RatingMainPage 
            label="Cloud Readiness" 
            value={preferences.cloudReadiness}
            onChange={(value) => handleRatingChange('cloudReadiness', value)}
          />
          <RatingMainPage 
            label="Data Model Flexibility" 
            value={preferences.dataModelFlexibility}
            onChange={(value) => handleRatingChange('dataModelFlexibility', value)}
          />
          <RatingMainPage
            label="Backup & Recovery" 
            value={preferences.backupAndRecovery}
            onChange={(value) => handleRatingChange('backupAndRecovery', value)}
          />
          <RatingMainPage
            label="Vertical Scaling" 
            value={preferences.verticalScaling}
            onChange={(value) => handleRatingChange('verticalScaling', value)}
          />
        </div>

        {/* Find Databases Button */}
        <div className="flex justify-center mt-8">
          <button 
            onClick={findMatchingDatabases}
            className="
              bg-blue-600 hover:bg-blue-700 
              text-white px-8 py-3 rounded-lg 
              transition-colors duration-300 
              flex items-center space-x-2
            "
          >
            <Search className="w-5 h-5" />
            <span>Find Matching Databases</span>
          </button>
        </div>
      </div>

      {/* Database Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredDatabases.map((db) => (
          <div 
            key={db.id} 
            className="
              bg-gray-800 rounded-lg overflow-hidden 
              shadow-lg transform transition 
              hover:scale-105 hover:shadow-2xl
              border border-gray-700
            "
          >
            <div className="p-6 flex flex-col items-center">
              <img 
                src={db.logo} 
                alt={`${db.name} logo`} 
                className="w-24 h-24 object-contain mb-4 rounded"
              />
              <h3 className="text-xl font-bold text-gray-100 mb-2">{db.name}</h3>
              <p className="text-sm text-gray-400 text-center mb-4 h-12">
                {db.description}
              </p>
              <div className="flex flex-col items-center mb-4">
                <div className="text-2xl font-bold text-blue-400 mb-2">
                  {db.overallScore}
                </div>
                <StarRatingMainPage score={db.overallScore} />
              </div>
              <button 
                className="
                  bg-green-600 hover:bg-green-700 
                  text-white px-4 py-2 rounded 
                  flex items-center space-x-2
                "
              >
                <CheckCircle className="w-4 h-4" />
                <span>Select Database</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <FooterMainPage />
    </div>
  );
}
