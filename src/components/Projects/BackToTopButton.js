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
    <button
      id="backToTop"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-6 w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white text-2xl shadow-2xl z-50 transition-all duration-300 transform ${
        isVisible ? 'scale-100 opacity-100 visible' : 'scale-0 opacity-0 invisible'
      }`}
      style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}
      aria-label="Back to top"
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  );
});

BackToTopButton.displayName = 'BackToTopButton';

export default BackToTopButton;