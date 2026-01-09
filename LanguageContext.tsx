import React, { createContext, useContext, useState, ReactNode } from 'react';
import { DICTIONARY, Language } from './constants';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  content: typeof DICTIONARY['pt'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const value = {
    language,
    toggleLanguage,
    content: DICTIONARY[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};