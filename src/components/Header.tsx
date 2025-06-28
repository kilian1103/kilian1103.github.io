import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Twitter, MapPin } from 'lucide-react';
import { Mario } from './icons/Mario';
import { DonationButton } from './DonationButton';

interface HeaderProps {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
}

export const Header: React.FC<HeaderProps> = ({
  name,
  title,
  location,
  email,
  github,
  linkedin,
  twitter
}) => {
  const [marioPosition, setMarioPosition] = useState(-20);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarioPosition(prev => {
        if (prev > 110) { // Give some room to be off-screen
          return -20; // Reset position
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const triggerJump = () => {
    if (!isJumping) {
      setIsJumping(true);
      setTimeout(() => {
        setIsJumping(false);
      }, 500);
    }
  };

  useEffect(() => {
    if (marioPosition > 50 && marioPosition < 85) {
      triggerJump();
    }
  }, [marioPosition]);

  return (
    <header className="relative bg-cyber-black text-cyber-green py-16 px-4 border-b-4 border-cyber-green overflow-hidden">
      {/* Donation Button - Desktop: Top Right, Mobile: Hidden (will show above avatar) */}
      <div className="hidden md:block absolute top-4 right-4 z-20">
        <DonationButton />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Mobile Donation Button - Above Avatar */}
        <div className="md:hidden flex justify-center mb-6">
          <DonationButton />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-cyber-green p-1">
              <img
                src="/mario_ghost_8_bit_by_exhibit_the_mad-d4v6xzc_gif (229×232).jpeg"
                alt={name}
                className="w-full h-full object-cover"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
          </div>
          
          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-cyber-pink">
              {name}
            </h1>
            <p className="text-xl md:text-2xl text-cyber-blue mb-4">
              {title}
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6 text-cyber-green">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href={`mailto:${email}`}
                className="p-3 bg-cyber-green text-cyber-black hover:bg-cyber-pink transition-all duration-300 relative"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyber-green text-cyber-black hover:bg-cyber-pink transition-all duration-300 relative"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyber-green text-cyber-black hover:bg-cyber-pink transition-all duration-300 relative"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyber-green text-cyber-black hover:bg-cyber-pink transition-all duration-300 relative"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-4 bg-cyber-green animate-glow-pulse" />
      <div className="absolute bottom-0 left-0 w-full h-2 animate-energy-flow opacity-60" />
      <div
        className={`absolute bottom-4 transition-opacity duration-500 ${isJumping ? 'animate-mario-jump' : ''} ${marioPosition > 100 ? 'opacity-0' : 'opacity-100'}`}
        style={{ left: `${marioPosition}%` }}
      >
        <Mario />
      </div>
    </header>
  );
};