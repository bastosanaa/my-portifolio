import React, { useState } from 'react';
import { Github, ArrowUpRight, Folder, FolderOpen, Code, BookOpen } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { ProjectCategory } from '../types';

const Portfolio: React.FC = () => {
  const { content } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');

  const categories: { id: ProjectCategory | 'all'; label: string }[] = [
    { id: 'all', label: content.portfolio.categories.all },
    { id: 'academic', label: content.portfolio.categories.academic },
    { id: 'personal', label: content.portfolio.categories.personal },
    { id: 'challenge', label: content.portfolio.categories.challenge },
  ];

  const filteredProjects = activeCategory === 'all'
    ? content.portfolio.items
    : content.portfolio.items.filter(item => item.category === activeCategory);

  const getCategoryIcon = (cat: ProjectCategory) => {
    switch (cat) {
      case 'academic': return <BookOpen size={12} />;
      case 'challenge': return <Code size={12} />;
      case 'personal': return <FolderOpen size={12} />;
      default: return <Folder size={12} />;
    }
  };

  const getCategoryLabel = (cat: ProjectCategory) => {
    switch (cat) {
      case 'academic': return content.portfolio.categories.academic;
      case 'challenge': return content.portfolio.categories.challenge;
      case 'personal': return content.portfolio.categories.personal;
      default: return '';
    }
  };

  const getCategoryColor = (cat: ProjectCategory) => {
    switch (cat) {
      case 'academic': return 'bg-pastel-blueLight text-pastel-blue border-pastel-blue/20';
      case 'challenge': return 'bg-pastel-clayLight text-pastel-clay border-pastel-clay/20';
      case 'personal': return 'bg-pastel-sageLight text-pastel-sage border-pastel-sage/20';
      default: return 'bg-stone-100 text-stone-500';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-pastel-sage">
          {content.portfolio.title}
        </h3>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-pastel-sage text-white border-pastel-sage shadow-sm'
                  : 'bg-transparent text-stone-500 border-stone-200 hover:border-pastel-sage/50 hover:text-pastel-sage'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[400px]">
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className="group bg-white rounded-xl overflow-hidden border border-stone-200 hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-300 flex flex-col h-full active:scale-[0.99] md:active:scale-100 hover:-translate-y-1 animate-in fade-in zoom-in-95 duration-500"
          >
            <div className="relative overflow-hidden h-40 md:h-48 bg-stone-100">
              <div className="absolute inset-0 bg-pastel-sage/10 group-hover:bg-transparent transition-colors z-10"></div>
              
              {/* Category Badge on Image */}
              <div className="absolute top-3 right-3 z-20">
                <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border shadow-sm backdrop-blur-sm ${getCategoryColor(project.category)}`}>
                  {getCategoryIcon(project.category)}
                  {getCategoryLabel(project.category)}
                </span>
              </div>

              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
              />
            </div>
            
            <div className="p-5 md:p-6 flex flex-col flex-grow">
              <h4 className="text-base md:text-lg font-bold text-stone-800 mb-2 group-hover:text-pastel-sage transition-colors">
                {project.title}
              </h4>
              <p className="text-stone-500 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-[10px] uppercase tracking-wider font-semibold text-stone-500 bg-stone-50 px-2 py-1 rounded border border-stone-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.githubUrl}
                  className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-white hover:bg-stone-800 transition-all w-full justify-center py-3 md:py-2.5 border border-stone-200 rounded-lg group-hover:border-stone-800 touch-manipulation"
                >
                  <Github size={16} />
                  <span>{content.portfolio.viewCode}</span>
                  <ArrowUpRight size={14} className="opacity-50" />
                </a>
              </div>
            </div>
          </div>
        ))}
        
        {filteredProjects.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-stone-400">
            <FolderOpen size={48} strokeWidth={1} className="mb-4 text-stone-300" />
            <p className="text-sm font-medium">Nenhum projeto encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;