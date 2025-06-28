import React from 'react';
import { Award, BookOpen, Trophy, Star } from 'lucide-react';
import { GoogleScholarIcon } from './icons/GoogleScholarIcon';
import { ArxivIcon } from './icons/ArxivIcon';

interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  type: 'award' | 'publication' | 'certification' | 'recognition';
  url?: string;
  icon?: string;
}

interface AchievementsSectionProps {
  achievements: Achievement[];
  publications: Achievement[];
  certifications: Achievement[];
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  achievements,
  publications,
  certifications,
}) => {
  const getIcon = (item: Achievement) => {
    if (item.type === 'publication') {
      if (item.icon === 'google-scholar') {
        return <GoogleScholarIcon className="w-5 h-5" />;
      }
      if (item.icon === 'arxiv') {
        return <ArxivIcon className="w-5 h-5" />;
      }
      return <BookOpen className="w-5 h-5" />;
    }
    switch (item.type) {
      case 'award':
        return <Trophy className="w-5 h-5" />;
      case 'certification':
        return <Award className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  const renderAchievement = (achievement: Achievement) => (
    <div
      key={achievement.id}
      className="bg-cyber-black border-2 border-cyber-pink p-6"
    >
      <div className="flex items-start gap-4">
        <div className="text-cyber-pink">
          {getIcon(achievement)}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-cyber-green">{achievement.title}</h3>
            <span className="text-sm text-cyber-green bg-cyber-black px-2 py-1 border border-cyber-green">
              {achievement.year}
            </span>
          </div>
          <p className="text-cyber-green text-sm">{achievement.description}</p>
        </div>
      </div>
    </div>
  );

  const renderPublication = (publication: Achievement) => (
    <a
      key={publication.id}
      href={publication.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-cyber-black border-2 border-cyber-blue p-6"
    >
      <div className="flex items-start gap-4">
        <div className="text-cyber-blue">
          {getIcon(publication)}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-cyber-green">{publication.title}</h3>
            <span className="text-sm text-cyber-green bg-cyber-black px-2 py-1 border border-cyber-green">
              {publication.year}
            </span>
          </div>
          <p className="text-cyber-green text-sm">{publication.description}</p>
        </div>
      </div>
    </a>
  );

  return (
    <section className="py-16 px-4 bg-cyber-black">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <h2 className="text-3xl font-bold text-cyber-pink mb-8 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-cyber-pink" />
              Achievements & Awards
            </h2>
            <div className="space-y-4">
              {achievements.map(renderAchievement)}
            </div>
          </div>

          {/* Publications */}
          <div>
            <h2 className="text-3xl font-bold text-cyber-blue mb-8 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-cyber-blue" />
              Publications & Research
            </h2>
            <div className="space-y-4">
              {publications.map(renderPublication)}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-cyber-green mb-8 flex items-center gap-3">
            <Award className="w-6 h-6 text-cyber-green" />
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map(renderAchievement)}
          </div>
        </div>
      </div>
    </section>
  );
};
