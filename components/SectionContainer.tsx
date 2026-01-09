import React, { ReactNode } from 'react';

interface SectionContainerProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ id, className = "", children }) => {
  return (
    <section id={id} className={`py-16 md:py-24 lg:py-32 px-5 md:px-8 scroll-mt-28 ${className}`}>
      <div className="max-w-4xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;