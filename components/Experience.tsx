import React from 'react';
import { useLanguage } from '../LanguageContext';

const Experience: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="space-y-8 md:space-y-12">
      <h3 className="text-sm font-bold uppercase tracking-widest text-pastel-sage">
        {content.experience.title}
      </h3>

      <div className="relative border-l border-stone-200 ml-2 md:ml-6 space-y-10 md:space-y-12">
        {content.experience.items.map((job, index) => (
          <div key={index} className="relative pl-6 md:pl-12 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 w-[10px] h-[10px] rounded-full bg-stone-300 border-2 border-stone-50 transition-colors duration-300 group-hover:bg-pastel-sage"></div>
            
            {/* Header: Role & Date */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2 gap-1 sm:gap-4">
              <h4 className="text-base md:text-lg font-bold text-stone-800 leading-tight">{job.role}</h4>
              <span className="self-start sm:self-auto text-xs md:text-sm text-stone-400 font-mono bg-stone-100 px-2 py-0.5 rounded whitespace-nowrap">
                {job.period}
              </span>
            </div>
            
            {/* Company */}
            <div className="mb-3 md:mb-4">
              <span className="text-sm md:text-base text-stone-600 font-medium font-serif italic">
                {job.company}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-stone-600 mb-4 leading-relaxed">
              {job.description}
            </p>

            {/* Achievements */}
            <ul className="space-y-2 mb-5 md:mb-6">
              {job.achievements.map((achievement, idx) => (
                <li key={idx} className="text-sm text-stone-500 flex items-start leading-relaxed">
                  <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-pastel-clay flex-shrink-0 opacity-60"></span>
                  <span className="flex-1">{achievement}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {job.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 bg-pastel-blueLight text-stone-600 text-[10px] md:text-xs font-medium rounded border border-pastel-blue/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;