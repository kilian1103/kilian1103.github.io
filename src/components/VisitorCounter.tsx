import React, { useState, useEffect } from 'react';
import { Users, Eye, Zap } from 'lucide-react';

export const VisitorCounter: React.FC = () => {
  const [visitorCount] = useState(1337);
  const [isNewVisitor, setIsNewVisitor] = useState(false);

  useEffect(() => {
    // Check if visitor has been here before
    const hasVisited = localStorage.getItem('cv-visited');

    if (!hasVisited) {
      // New visitor
      localStorage.setItem('cv-visited', 'true');
      setIsNewVisitor(true);
      
      // Show new visitor animation for 3 seconds
      setTimeout(() => setIsNewVisitor(false), 3000);
    }
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="relative bg-cyber-black border-t-2 border-cyber-green py-6 px-4">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-pink via-cyber-blue to-cyber-green animate-energy-flow opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-pink animate-energy-flow opacity-60" style={{ animationDirection: 'reverse' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          {/* Visitor Icon */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Users className="w-6 h-6 text-cyber-blue animate-glow-pulse" />
              {isNewVisitor && (
                <Zap className="absolute -top-1 -right-1 w-3 h-3 text-cyber-pink animate-ping" />
              )}
            </div>
            <span className="text-cyber-blue font-pixel text-sm">VISITORS</span>
          </div>

          {/* Counter Display */}
          <div className="flex items-center gap-3">
            <div className="bg-cyber-black border-2 border-cyber-green px-4 py-2 relative overflow-hidden">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-cyber-green opacity-10 animate-glow-pulse" />
              
              {/* Counter number */}
              <div className="relative z-10 flex items-center gap-2">
                <Eye className="w-4 h-4 text-cyber-green" />
                <span className="font-pixel text-cyber-green text-lg font-bold tracking-wider">
                  {formatNumber(visitorCount)}
                </span>
              </div>

              {/* New visitor indicator */}
              {isNewVisitor && (
                <div className="absolute -top-1 -right-1 bg-cyber-pink text-cyber-black text-xs font-pixel px-1 py-0.5 animate-bounce">
                  NEW!
                </div>
              )}
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full animate-pulse ${isNewVisitor ? 'bg-cyber-pink' : 'bg-cyber-green'}`} />
              <span className="text-cyber-green font-pixel text-xs">
                {isNewVisitor ? 'WELCOME CYBER WARRIOR!' : 'SYSTEM ONLINE'}
              </span>
            </div>
          </div>
        </div>

        {/* Additional stats */}
        <div className="mt-4 text-center">
          <p className="text-cyber-green font-pixel text-xs opacity-80">
            TRACKING SINCE 2025.01.01 • CYBERPUNK ANALYTICS v2.0
          </p>
        </div>
      </div>
    </div>
  );
};