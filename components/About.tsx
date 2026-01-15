import React from "react";
import { Heart, Sparkles, Target } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const About: React.FC = () => {
  const { content } = useLanguage();
  const { about } = content;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Heart":
        return <Heart size={24} />;
      case "Sparkles":
        return <Sparkles size={24} />;
      default:
        return <Heart size={24} />;
    }
  };

  const getIconColor = (iconName: string) => {
    switch (iconName) {
      case "Heart":
        return "bg-pastel-clayLight text-pastel-clay";
      case "Sparkles":
        return "bg-pastel-blueLight text-pastel-blue";
      case "Target":
        return "bg-pastel-sageLight text-pastel-sage";
      default:
        return "bg-pastel-sageLight text-pastel-sage";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Coluna de Texto */}
      <div className="space-y-6 lg:col-span-8">
        <h3 className="text-sm font-bold uppercase tracking-widest text-pastel-sage mb-6 md:mb-8">
          {about.title}
        </h3>

        <div className="space-y-6">
          {about.paragraphs.map((para, index) => (
            <p 
              key={index}
              className="text-stone-600 leading-relaxed text-base"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 min-[560px]:grid-cols-2 lg:grid-cols-1 gap-6 lg:col-span-4 mt-2 lg:mt-0">
        {about.sections.map((section, index) => (
          <div
            key={index}
            className={`
              bg-white p-6 rounded-xl border border-stone-100 shadow-sm 
              hover:shadow-md transition-all duration-300 hover:border-pastel-sage/50 group
              w-full min-[560px]:max-w-sm
              ${index % 2 !== 0 ? 'lg:ml-8' : ''}
              
            `}
          >
            <div className="flex flex-col items-start text-left space-y-4">
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 ${getIconColor(
                    section.icon
                  )} rounded-xl transition-transform duration-300 group-hover:scale-110`}
                >
                  {getIcon(section.icon)}
                </div>
                <h4 className="text-lg font-semibold text-stone-800">
                  {section.title}
                </h4>
              </div>

              <ul className="space-y-2 w-full pl-1">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-stone-600 text-sm"
                  >
                    <span className="text-pastel-sage flex-shrink-0 text-[10px]">
                      ●
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;