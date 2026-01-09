import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import SectionContainer from './components/SectionContainer';
import { LanguageProvider } from './LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-stone-50 text-stone-800 selection:bg-pastel-sageLight selection:text-stone-900 font-sans">
        <Navbar />
        
        <main>
          <SectionContainer id="sobre" className="min-h-[90vh] flex items-center">
            <About />
          </SectionContainer>

          <SectionContainer id="formacao" className="bg-white/50 border-y border-stone-200/50">
            <Education />
          </SectionContainer>

          <SectionContainer id="experiencia">
            <Experience />
          </SectionContainer>

          <SectionContainer id="portfolio" className="bg-white/50 border-y border-stone-200/50">
            <Portfolio />
          </SectionContainer>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;