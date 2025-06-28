import React from 'react';
import { TimelineItem } from './TimelineItem';

interface TimelineData {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  type: 'work' | 'education';
  startDate: string;
}

interface TimelineProps {
  data: TimelineData[];
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  // Sort data by start date (most recent first)
  const sortedData = [...data].sort((a, b) => 
    new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  return (
    <section className="py-16 px-4 bg-cyber-black relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyber-pink mb-4">
            Professional Journey
          </h2>
          <p className="text-xl text-cyber-blue max-w-2xl mx-auto">
            A chronological overview of my career milestones and educational achievements
          </p>
        </div>

        <div className="relative">
          {/* Central glowing timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 bg-cyber-green animate-reveal-down animate-glow-pulse"></div>
          
          {/* Energy flow overlay */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2 animate-energy-flow opacity-60"></div>

          {/* Mobile timeline */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-cyber-green animate-glow-pulse"></div>

          {/* Timeline items */}
          <div className="md:grid md:grid-cols-2 md:gap-8">
            {sortedData.map((item, index) => (
              <div
                key={item.id}
                className={`${index % 2 === 0 ? 'md:pr-4' : 'md:pl-4 md:mt-16'}`}>
                <TimelineItem
                  {...item}
                  isLeft={index % 2 === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};