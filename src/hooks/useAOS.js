import { useEffect } from 'react';

export const useAOS = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1200,
        once: false,
        offset: 100,
        easing: 'ease-out-cubic'
      });
    }
  }, []);
};