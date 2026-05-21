import React from 'react';
import { useAOS } from '../../hooks/useAOS';
import { useTeamSwiper } from '../../hooks/useTeamSwiper';
import { usePartnersSwiper } from '../../hooks/usePartnersSwiper';
import { useScrollIndicator } from '../../hooks/useScrollIndicator';
import GeometricBackground from './GeometricBackground';
import ScrollIndicator from './ScrollIndicator';

// استيراد عادي للمكونات
import HeroSection from './HeroSection';
import AboutContent from './AboutContent';
import TimelineSection from './TimelineSection';
import TeamSection from './TeamSection';
import CertificatesSection from './CertificatesSection';
import CTASection from './CTASection';

const About = () => {
  // استخدام custom hooks
  useAOS();
  useTeamSwiper();
  usePartnersSwiper();
  useScrollIndicator();

  return (
    <>
      <GeometricBackground />
      <ScrollIndicator />
      
      <HeroSection />
      <AboutContent />
      <TimelineSection />
      <TeamSection />
      <CertificatesSection />
      <CTASection />
    </>
  );
};

export default About;