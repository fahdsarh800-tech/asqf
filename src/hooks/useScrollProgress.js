import { useEffect, useCallback } from 'react';

export const useScrollProgress = () => {
  const handleScroll = useCallback(() => {
    const progressBar = document.getElementById('progressBar');
    const backToTop = document.getElementById('backToTop');
    
    if (progressBar) {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    }
    
    if (backToTop) {
      if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    }
  }, []);

  useEffect(() => {
    // استخدام debounce لتحسين الأداء
    let ticking = false;
    
    const debouncedScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', debouncedScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [handleScroll]);

  return { handleScroll };
};