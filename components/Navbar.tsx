import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { content, language, toggleLanguage } = useLanguage();

  // Handle scroll appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -50% 0px' } // Trigger when section is near center/top
    );

    content.nav.forEach((item) => {
      const id = item.href.replace('#', '');
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [content.nav]);

  // Close mobile menu when clicking outside or scrolling significantly
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const isActive = (href: string) => {
    return activeSection === href.replace('#', '');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-white/90 backdrop-blur-md border-b border-stone-200 py-3 shadow-sm' 
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center relative">
        <a 
          href="#" 
          onClick={(e) => handleScrollTo(e, '#root')} // Optional: scroll to top
          className="text-xl font-serif font-bold text-stone-800 tracking-tight flex items-center gap-2 z-50 relative"
        >
          Ana Luiza<span className="text-pastel-sage">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {content.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className={`text-sm font-medium transition-colors relative group ${
                isActive(item.href) ? 'text-stone-900 font-bold' : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              {item.label}
              <span 
                className={`absolute -bottom-1 left-0 h-0.5 bg-pastel-sage transition-all duration-300 ${
                  isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </a>
          ))}
          
          <div className="h-4 w-px bg-stone-300 mx-2"></div>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-xs font-semibold tracking-wider text-stone-500 hover:text-stone-800 transition-colors px-3 py-1.5 rounded-full hover:bg-stone-100"
          >
            <Globe size={14} className="text-stone-500" />
            <span className={language === 'pt' ? 'text-stone-800' : 'text-stone-400'}>PT</span>
            <span className="text-stone-300">|</span>
            <span className={language === 'en' ? 'text-stone-800' : 'text-stone-400'}>EN</span>
          </button>
        </div>

        {/* Mobile Toggle Group */}
        <div className="flex items-center gap-3 md:hidden z-50 relative">
           <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-xs font-bold text-stone-600 bg-pastel-sageLight border border-pastel-sage/20 px-3 py-1.5 rounded-full transition-colors active:scale-95"
            aria-label="Toggle Language"
          >
            <Globe size={14} className="text-stone-500" />
            {language === 'pt' ? 'PT' : 'EN'}
          </button>
          <button 
            className="text-stone-800 p-1 focus:outline-none active:scale-95 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-md z-40 flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col bg-white/95 w-full rounded-lg shadow-lg py-8">
          {content.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-2xl font-serif font-medium py-4 border-b border-stone-100 transition-colors ${
                 isActive(item.href) ? 'text-pastel-sage' : 'text-stone-800'
              }`}
              onClick={(e) => handleScrollTo(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;