import { useEffect, useCallback } from 'react';

export const useScrollIndicator = () => {
  const handleScroll = useCallback(() => {
    const sections = ['hero', 'about-content', 'vision', 'timeline', 'team', 'certificates', 'cta'];
    const indicators = document.querySelectorAll('#scrollIndicator a');
    
    let currentSection = '';
    
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section;
        }
      }
    });
    
    indicators.forEach(indicator => {
      indicator.classList.remove('active');
      if (indicator.getAttribute('data-section') === currentSection) {
        indicator.classList.add('active');
      }
    });
  }, []);

  useEffect(() => {
    const handleScrollDebounced = () => {
      let ticking = false;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScrollDebounced, { passive: true });
    
    // تشغيل مرة واحدة عند التحميل
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScrollDebounced);
    };
  }, [handleScroll]);
};