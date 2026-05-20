import { useEffect } from 'react';

export const useMobileEnhancements = () => {
  useEffect(() => {
    const enhanceMobileExperience = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        if (window.innerWidth < 768) {
          section.style.paddingTop = '40px';
          section.style.paddingBottom = '40px';
        }
      });
      
      if (window.innerWidth < 768) {
        document.querySelectorAll('h1').forEach(h1 => {
          h1.style.fontSize = '2rem';
        });
        document.querySelectorAll('h2').forEach(h2 => {
          h2.style.fontSize = '1.75rem';
        });
      }
    };

    enhanceMobileExperience();
    window.addEventListener('resize', enhanceMobileExperience);

    return () => {
      window.removeEventListener('resize', enhanceMobileExperience);
    };
  }, []);
};