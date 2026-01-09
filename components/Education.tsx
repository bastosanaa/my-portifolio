import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Education: React.FC = () => {
  const { content } = useLanguage();
  const { education } = content;

  return (
    <div className="space-y-8">
      <h3 className="text-sm font-bold uppercase tracking-widest text-pastel-sage mb-6 md:mb-8">
        {education.title}
      </h3>
      
      <div className="bg-white p-6 md:p-8 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-pastel-sage/50">
        <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-5">
          <div className="p-3 bg-pastel-sageLight text-pastel-sage rounded-lg hidden sm:block">
            <GraduationCap size={24} />
          </div>
          {/* Mobile Icon alternative */}
          <div className="sm:hidden flex items-center gap-2 mb-2 text-pastel-sage">
            <GraduationCap size={20} />
            <span className="text-xs font-bold uppercase tracking-wider text-stone-400">Graduação</span>
          </div>

          <div className="space-y-3 md:space-y-4 w-full">
            <div>
              <h4 className="text-lg md:text-xl font-semibold text-stone-800 leading-tight">{education.item.degree}</h4>
              <p className="text-stone-500 font-medium font-serif italic mt-1">{education.item.institution}</p>
            </div>
            
            <p className="text-stone-600 leading-relaxed text-sm md:text-base text-justify md:text-left">
              {education.item.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {education.item.topics.map((topic, index) => (
                <span 
                  key={index} 
                  className="px-2.5 py-1 bg-stone-50 text-stone-600 text-xs rounded-full border border-stone-200 hover:bg-pastel-sageLight hover:border-pastel-sage/30 transition-colors"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;