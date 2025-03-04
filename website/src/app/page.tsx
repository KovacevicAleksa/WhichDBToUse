"use client";

import Image from "next/image";
import React, { useState } from 'react';
import {Search, CheckCircle } from 'lucide-react';
import {RatingMainPage} from './components/RatingMainPage';
import {StarRatingMainPage} from './components/StarRatingMainPage';
import {DatabaseInfoMainPageType} from './types/DatabaseInfoMainPageType';
import {DatabaseMainPage} from '../../data/DatabaseMainPage'; 
import {FooterMainPage} from './components/FooterMainPage'


export default function AdvancedDatabaseSelector() {
  // State for preferences
  const [preferences, setPreferences] = useState({
    // Left side characteristics
    scalability: 3,
    performance: 3,
    flexibility: 3,
    consistency: 3,
    reliability: 3,
    security: 3,

    // Center characteristics
    costEfficiency: 3,
    communitySupport: 3,
    transactionSupport: 3,
    integrationEase: 3,
    queryCapability: 3,
    realTimeProcessing: 3,

    // Right side characteristics
    geographicDistribution: 3,
    dataVolumeCapacity: 3,
    elasticity: 3,
    developerFriendliness: 3,
    cloudNativeSupport: 3,
    multiModelCapability: 3,
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
        {/* Left side characteristics */}
        <RatingMainPage 
          label="Scalability" 
          value={preferences.scalability}
          onChange={(value) => handleRatingChange('scalability', value)}
        />
        <RatingMainPage 
          label="Performance" 
          value={preferences.performance}
          onChange={(value) => handleRatingChange('performance', value)}
        />
        <RatingMainPage 
          label="Flexibility" 
          value={preferences.flexibility}
          onChange={(value) => handleRatingChange('flexibility', value)}
        />
        <RatingMainPage 
          label="Consistency" 
          value={preferences.consistency}
          onChange={(value) => handleRatingChange('consistency', value)}
        />
        <RatingMainPage 
          label="Reliability" 
          value={preferences.reliability}
          onChange={(value) => handleRatingChange('reliability', value)}
        />
        <RatingMainPage 
          label="Security" 
          value={preferences.security}
          onChange={(value) => handleRatingChange('security', value)}
        />

        {/* Center characteristics */}
        <RatingMainPage 
          label="Cost Efficiency" 
          value={preferences.costEfficiency}
          onChange={(value) => handleRatingChange('costEfficiency', value)}
        />
        <RatingMainPage 
          label="Community Support" 
          value={preferences.communitySupport}
          onChange={(value) => handleRatingChange('communitySupport', value)}
        />
        <RatingMainPage 
          label="Transaction Support" 
          value={preferences.transactionSupport}
          onChange={(value) => handleRatingChange('transactionSupport', value)}
        />
        <RatingMainPage 
          label="Integration Ease" 
          value={preferences.integrationEase}
          onChange={(value) => handleRatingChange('integrationEase', value)}
        />
        <RatingMainPage 
          label="Query Capability" 
          value={preferences.queryCapability}
          onChange={(value) => handleRatingChange('queryCapability', value)}
        />
        <RatingMainPage 
          label="Real-Time Processing" 
          value={preferences.realTimeProcessing}
          onChange={(value) => handleRatingChange('realTimeProcessing', value)}
        />

        {/* Right side characteristics */}
        <RatingMainPage 
          label="Geographic Distribution" 
          value={preferences.geographicDistribution}
          onChange={(value) => handleRatingChange('geographicDistribution', value)}
        />
        <RatingMainPage 
          label="Data Volume Capacity" 
          value={preferences.dataVolumeCapacity}
          onChange={(value) => handleRatingChange('dataVolumeCapacity', value)}
        />
        <RatingMainPage 
          label="Elasticity" 
          value={preferences.elasticity}
          onChange={(value) => handleRatingChange('elasticity', value)}
        />
        <RatingMainPage 
          label="Developer Friendliness" 
          value={preferences.developerFriendliness}
          onChange={(value) => handleRatingChange('developerFriendliness', value)}
        />
        <RatingMainPage 
          label="Cloud-Native Support" 
          value={preferences.cloudNativeSupport}
          onChange={(value) => handleRatingChange('cloudNativeSupport', value)}
        />
        <RatingMainPage 
          label="Multi-Model Capability" 
          value={preferences.multiModelCapability}
          onChange={(value) => handleRatingChange('multiModelCapability', value)}
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
              <Image 
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
