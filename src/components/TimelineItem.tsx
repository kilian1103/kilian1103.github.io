import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

interface TimelineItemProps {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  isLeft: boolean;
  type: 'work' | 'education';
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  location,
  period,
  description,
  achievements,
  isLeft,
  type
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`relative mb-8 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
      {/* Timeline connector */}
      <div className={`absolute top-8 w-4 h-4 rounded-full z-20 ${isLeft ? 'md:-right-2' : 'md:-left-2 left-1/2 transform -translate-x-1/2 md:transform-none'} ${type === 'work' ? 'bg-cyber-pink' : 'bg-cyber-blue'} border-4 border-cyber-black`}></div>

      {/* Card */}
      <div
        onClick={handleToggle}
        className={`relative bg-cyber-black border-2 ${type === 'work' ? 'border-cyber-pink' : 'border-cyber-blue'} p-6 cursor-pointer`}>
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-cyber-green mb-1">{title}</h3>
            <p className={`text-lg font-semibold mb-2 ${type === 'work' ? 'text-cyber-pink' : 'text-cyber-blue'}`}>
              {company}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-cyber-green">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{location}</span>
              </div>
            </div>
          </div>
          <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-cyber-green" />
            ) : (
              <ChevronDown className="w-5 h-5 text-cyber-green" />
            )}
          </div>
        </div>

        {/* Expandable Content */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pt-4 border-t border-cyber-green">
            <p className="text-cyber-green mb-4 leading-relaxed">{description}</p>
            {achievements.length > 0 && (
              <div>
                <h4 className="font-semibold text-cyber-green mb-2">Key Achievements:</h4>
                <ul className="space-y-1">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-cyber-green">
                      <span className={`w-1.5 h-1.5 mt-2 flex-shrink-0 ${type === 'work' ? 'bg-cyber-pink' : 'bg-cyber-blue'}`}></span>
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};