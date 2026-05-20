import { useEffect, useCallback } from 'react';

export const useScrollEffects = () => {
  const updateProgressBar = useCallback(() => {
    const progressBar = document.getElementById('progressBar');
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    
    if (progressBar) {
      progressBar.style.width = scrolled + '%';
    }
  }, []);

  const updateScrollIndicator = useCallback(() => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 200;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const indicator = document.querySelector(`#scrollIndicator a[href="#${sectionId}"]`);
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('#scrollIndicator a').forEach(a => a.classList.remove('active'));
        if (indicator) indicator.classList.add('active');
      }
    });
  }, []);

  const handleScroll = useCallback(() => {
    updateProgressBar();
    updateScrollIndicator();
    
    // إظهار/إخفاء زر العودة للأعلى
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }, [updateProgressBar, updateScrollIndicator]);

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
    
    // التنقل السلس
    const handleSmoothScroll = (e) => {
      const targetId = e.currentTarget.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    };
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });
    
    // تشغيل مرة واحدة عند التحميل
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScrollDebounced);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, [handleScroll]);

  return { handleScroll };
};