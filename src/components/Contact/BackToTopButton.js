import React, { memo, useEffect, useState } from 'react';

const BackToTopButton = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a 
      href="#hero" 
      id="backToTop"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      className={`fixed bottom-24 right-4 md:bottom-32 md:right-6 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white text-lg md:text-2xl shadow-2xl z-50 hover:scale-110 transition-transform duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}
      aria-label="Back to top"
    >
      <i className="fas fa-chevron-up"></i>
    </a>
  );
});

BackToTopButton.displayName = 'BackToTopButton';

export default BackToTopButton;