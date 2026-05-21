import React from 'react';
import { useAOS } from '../../hooks/useAOS';
import { useSwiper } from '../../hooks/useSwiper';
import { useScrollProgress } from '../../hooks/useScrollProgress';

import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import TeamSection from './TeamSection';

const Divider = () => (
  <div style={{ height: '1px', backgroundColor: '#e0e0e0', width: '100%' }} />
);

const Home = () => {
  useAOS();
  useSwiper();
  useScrollProgress();

  return (
    <>
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      <ServicesSection />
      <Divider />
      <ProjectsSection />
      <Divider />
      <TeamSection />
    </>
  );
};

export default React.memo(Home, () => true);
