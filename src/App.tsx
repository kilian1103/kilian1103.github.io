import React from 'react';
import { Header } from './components/Header';
import { Timeline } from './components/Timeline';
import { AchievementsSection } from './components/AchievementsSection';
import { VisitorCounter } from './components/VisitorCounter';
import { profileData, timelineData, achievementsData, publicationsData, certificationsData } from './data/cvData';

function App() {
  return (
    <div className="min-h-screen bg-cyber-black font-pixel text-cyber-green">
      <Header {...profileData} />
      <Timeline data={timelineData} />
      <AchievementsSection 
        achievements={achievementsData} 
        publications={publicationsData} 
        certifications={certificationsData}
      />
      
      {/* Visitor Counter */}
      <VisitorCounter />
      
      {/* Footer */}
      <footer className="bg-cyber-black text-cyber-green py-8 px-4 border-t-4 border-cyber-green relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-cyber-green animate-glow-pulse" />
        <div className="absolute top-0 left-0 w-full h-1 animate-energy-flow opacity-60" />
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <p className="text-cyber-pink font-bold">
            © 2025 <span className="text-cyber-blue">{profileData.name}</span>. 
            <span className="text-cyber-green"> All rights reserved.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;