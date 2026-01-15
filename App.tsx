import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import SectionContainer from "./components/SectionContainer";
import { LanguageProvider } from "./LanguageContext";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-stone-50 text-stone-800 selection:bg-pastel-sageLight selection:text-stone-900 font-sans">
        <Navbar />

        <main>
          <SectionContainer
            id="home"
            className="min-h-[90vh] flex items-center"
          >
            <Home />
          </SectionContainer>

          <SectionContainer
            id="sobre"
            className="bg-white/50 border-y border-stone-200/50"
            >
            <About />
          </SectionContainer>

          <SectionContainer
            id="formacao"
          >
            <Education />
          </SectionContainer>

          <SectionContainer
            id="experiencia"
            className="bg-white/50 border-y border-stone-200/50"
          >
            <Experience />
          </SectionContainer>

          <SectionContainer
            id="portfolio"
          >
            <Portfolio />
          </SectionContainer>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
