import React from 'react';
import { Palette, Terminal, Github, Linkedin, Mail, Goal } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 pt-4 md:pt-10">
      {/* Text Content */}
      <div className="flex-1 space-y-6 md:space-y-8 order-2 md:order-1 w-full">
        <div className="space-y-3 md:space-y-4 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-800 tracking-tight">
            {content.hero.name}
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-stone-500 font-light leading-relaxed max-w-lg mx-auto md:mx-0">
            {content.hero.tagline}
          </h2>
        </div>

        <div className="prose prose-stone text-stone-600 leading-loose text-left md:text-left text-sm md:text-base">
          <p>{content.hero.bio}</p>
        </div>

        {/* Interests Badges */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2 md:pt-4">
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-medium uppercase tracking-wider text-stone-600 bg-pastel-blueLight px-3 py-2 rounded-full border border-pastel-blue/30 shadow-sm transition-transform hover:scale-105 cursor-default">
              <Terminal size={14} className="text-pastel-blue" />
              <span>{content.hero.badges.tech}</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-medium uppercase tracking-wider text-stone-600 bg-pastel-clayLight px-3 py-2 rounded-full border border-pastel-clay/30 shadow-sm transition-transform hover:scale-105 cursor-default">
              <Palette size={14} className="text-pastel-clay" />
              <span>{content.hero.badges.creative}</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-medium uppercase tracking-wider text-stone-600 bg-pastel-sageLight px-3 py-2 rounded-full border border-pastel-sage/30 shadow-sm transition-transform hover:scale-105 cursor-default">
              <Goal size={14} className="text-pastel-sage" />
              <span>{content.hero.badges.dedication}</span>
            </div>
        </div>
      </div>

      {/* Image & Contact Column */}
      <div className="w-full md:w-1/3 flex flex-col items-center md:items-end gap-6 order-1 md:order-2">
        {/* Image Container */}
        <div className="relative group w-48 h-48 sm:w-64 sm:h-64 md:w-full md:h-auto md:max-w-[280px]">
          {/* Decorative element */}
          <div className="absolute -inset-4 bg-pastel-sageLight rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
          
          <div className="relative z-10 rounded-full md:rounded-2xl overflow-hidden border-2 border-white shadow-lg shadow-stone-200/50 w-full h-full aspect-square md:aspect-auto">
             {/* 
                IMPORTANT: This src points to the file expected to be in the public root.
             */}
            <img 
              src="/assets/ana-profile.jpeg" 
              alt="Ana Luiza" 
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/400x500/E8F0EB/2C2C2A?text=Ana+Luiza';
              }}
            />
          </div>
        </div>

        {/* Contact Buttons - Call to Action (Moved Here) */}
        <div className="flex flex-wrap justify-center gap-3 w-full md:max-w-[280px]">
          
          <a 
            href="https://www.linkedin.com/in/ana-bastos-7b0103272/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 min-w-[100px] group flex items-center justify-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-lg text-stone-600 hover:text-pastel-blue hover:border-pastel-blue hover:shadow-md transition-all duration-300 active:scale-95"
          >
            <Linkedin size={18} className="group-hover:scale-110 shrink-0 transition-transform" />
            <span className="text-sm font-semibold">LinkedIn</span>
          </a>
          
          <a 
            href="mailto:bastosanaa11@gmail.com" 
            className="flex-1 min-w-[100px] group flex items-center justify-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-lg text-stone-600 hover:text-pastel-clay hover:border-pastel-clay hover:shadow-md transition-all duration-300 active:scale-95"
          >
            <Mail size={18} className="group-hover:scale-110 shrink-0 transition-transform" />
            <span className="text-sm font-semibold">Email</span>
          </a>
          <a 
            href="https://github.com/bastosanaa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 min-w-[100px] group flex items-center justify-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-lg text-stone-600 hover:text-stone-900 hover:border-stone-400 hover:shadow-md transition-all duration-300 active:scale-95"
          >
            <Github size={18} className="group-hover:scale-110 shrink-0 transition-transform" />
            <span className="text-sm font-semibold">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;