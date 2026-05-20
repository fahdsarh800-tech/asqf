import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAOS } from '../../hooks/useAOS';
import { usePartnersSwiper } from '../../hooks/usePartnersSwiper';
import { useShapesEffect } from '../../hooks/useShapesEffect';
import BackToTopButton from './BackToTopButton';

// استيراد عادي للمكونات
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import CertificatesSection from './CertificatesSection';
import CTASection from './CTASection';

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  // استخدام custom hooks
  useAOS();
  usePartnersSwiper();
  useShapesEffect();

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleLoadMore = () => {
    // دالة تحميل المزيد من المشاريع
    console.log('Loading more projects...');
  };

  return (
    <>
      {/* <GeometricBackground /> */}
      
      <HeroSection />
      
      <ProjectsSection 
        activeFilter={activeFilter}
        onFilterClick={handleFilterClick}
        onLoadMore={handleLoadMore}
      />
      
      <CertificatesSection />
      
      <CTASection />
      
      <BackToTopButton />
    </>
  );
};

export default Projects;