import React from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { content } = useLanguage();

  return (
    <footer className="py-8 md:py-12 border-t border-stone-200 bg-white">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="text-stone-900 font-serif font-medium">Ana Luiza.</p>
          <p className="text-stone-400 text-sm mt-1">
            © {new Date().getFullYear()} - {content.footer.rights}
          </p>
        </div>
        
        <div className="flex gap-6 order-1 md:order-2">
          <a href="#" className="text-stone-400 hover:text-pastel-sage transition-colors transform hover:scale-110 p-2">
            <Github size={20} />
          </a>
          <a href="#" className="text-stone-400 hover:text-pastel-blue transition-colors transform hover:scale-110 p-2">
            <Linkedin size={20} />
          </a>
          <a href="mailto:email@exemplo.com" className="text-stone-400 hover:text-pastel-clay transition-colors transform hover:scale-110 p-2">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;