import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAOS } from '../../hooks/useAOS';
import { useServicesSwiper } from '../../hooks/useServicesSwiper';
import { useScrollEffects } from '../../hooks/useScrollEffects';
// import GeometricBackground from './GeometricBackground';
import BackToTopButton from './BackToTopButton';

// استيراد عادي للمكونات
import HeroSection from './HeroSection';
import AllServicesSection from './AllServicesSection';
import ServiceDetailsSection from './ServiceDetailsSection';
import WorkProcessSection from './WorkProcessSection';
import CTASection from './CTASection';

const Services = () => {
  const { t } = useLanguage();
  
  // استخدام custom hooks
  useAOS();
  useServicesSwiper();
  useScrollEffects();

  return (
    <>
      {/* <GeometricBackground /> */}
      
      <HeroSection />
      <AllServicesSection />
      <ServiceDetailsSection />
      <WorkProcessSection />
      <CTASection />
      <BackToTopButton />
    </>
  );
};

export default Services;