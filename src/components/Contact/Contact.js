import React from 'react';
import { useAOS } from '../../hooks/useAOS';
import { useShapesEffect } from '../../hooks/useShapesEffect';
import { useMobileEnhancements } from '../../hooks/useMobileEnhancements';
import PhoneIcon from './PhoneIcon';
import BackToTopButton from './BackToTopButton';

// استيراد عادي للمكونات
import HeroSection from './HeroSection';
import ContactInfoSection from './ContactInfoSection';

const Contact = () => {
  // استخدام custom hooks
  useAOS();
  useShapesEffect();
  useMobileEnhancements();

  return (
    <>
      {/* <GeometricBackground /> */}
      <PhoneIcon />
      
      <HeroSection />
      <ContactInfoSection />
      <BackToTopButton />
    </>
  );
};

export default Contact;