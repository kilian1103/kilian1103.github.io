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

  const renderAchievement = (achievement: Achievement) => {
    const content = (
      <div className="flex items-start gap-4">
        <div className="text-cyber-pink flex-shrink-0">
          {getIcon(achievement)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
            <h3 className="font-semibold text-cyber-green break-words">{achievement.title}</h3>
            <span className="text-sm text-cyber-green bg-cyber-black px-2 py-1 border border-cyber-green flex-shrink-0 self-start">
              {achievement.year}
            </span>
          </div>
          <p className="text-cyber-green text-sm break-words leading-relaxed">{achievement.description}</p>
        </div>
      </div>
    );

    if (achievement.url) {
      return (
        <a
          key={achievement.id}
          href={achievement.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-cyber-black border-2 border-cyber-pink p-4 sm:p-6 hover:border-cyber-green transition-colors duration-300 cursor-pointer"
        >
          {content}
        </a>
      );
    }

    return (
      <div
        key={achievement.id}
        className="bg-cyber-black border-2 border-cyber-pink p-4 sm:p-6"
      >
        {content}
      </div>
    );
  };

  const renderPublication = (publication: Achievement) => (
    <a
      key={publication.id}
      href={publication.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-cyber-black border-2 border-cyber-blue p-4 sm:p-6 hover:border-cyber-green transition-colors duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="text-cyber-blue flex-shrink-0">
          {getIcon(publication)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
            <h3 className="font-semibold text-cyber-green break-words">{publication.title}</h3>
            <span className="text-sm text-cyber-green bg-cyber-black px-2 py-1 border border-cyber-green flex-shrink-0 self-start">
              {publication.year}
            </span>
          </div>
          <p className="text-cyber-green text-sm break-words leading-relaxed">{publication.description}</p>
        </div>
      </div>
    </a>
  );

  const renderCertification = (certification: Achievement) => {
    const content = (
      <div className="flex items-start gap-4">
        <div className="text-cyber-green flex-shrink-0">
          {getIcon(certification)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
            <h3 className="font-semibold text-cyber-green break-words">{certification.title}</h3>
            <span className="text-sm text-cyber-green bg-cyber-black px-2 py-1 border border-cyber-green flex-shrink-0 self-start">
              {certification.year}
            </span>
          </div>
          <p className="text-cyber-green text-sm break-words leading-relaxed">{certification.description}</p>
        </div>
      </div>
    );

    if (certification.url) {
      return (
        <a
          key={certification.id}
          href={certification.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-cyber-black border-2 border-cyber-green p-4 sm:p-6 hover:border-cyber-pink transition-colors duration-300 cursor-pointer"
        >
          {content}
        </a>
      );
    }

    return (
      <div
        key={certification.id}
        className="bg-cyber-black border-2 border-cyber-green p-4 sm:p-6"
      >
        {content}
      </div>
    );
  };

  return (
    <section className="py-16 px-4 bg-cyber-black">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Achievements */}
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-cyber-pink mb-6 sm:mb-8 flex items-center gap-3 break-words">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-cyber-pink flex-shrink-0" />
              <span>Achievements & Awards</span>
            </h2>
            <div className="space-y-4 w-full">
              {achievements.map(renderAchievement)}
            </div>
          </div>

          {/* Publications */}
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-cyber-blue mb-6 sm:mb-8 flex items-center gap-3 break-words">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-cyber-blue flex-shrink-0" />
              <span>Publications & Research</span>
            </h2>
            <div className="space-y-4 w-full">
              {publications.map(renderPublication)}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 md:mt-16 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyber-green mb-6 sm:mb-8 flex items-center gap-3 break-words">
            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-cyber-green flex-shrink-0" />
            <span>Certifications</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {certifications.map(renderCertification)}
          </div>
        </div>
      </div>
    </section>
  );
};