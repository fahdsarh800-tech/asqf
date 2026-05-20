import { useEffect } from 'react';

export const useShapesEffect = () => {
  useEffect(() => {
    const shapes = document.querySelectorAll('.shape');
    
    const handleMouseEnter = (e) => {
      e.target.style.transform = 'scale(1.1)';
      e.target.style.opacity = '0.2';
    };
    
    const handleMouseLeave = (e) => {
      e.target.style.transform = '';
      e.target.style.opacity = '';
    };

    shapes.forEach(shape => {
      shape.addEventListener('mouseenter', handleMouseEnter);
      shape.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      shapes.forEach(shape => {
        shape.removeEventListener('mouseenter', handleMouseEnter);
        shape.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
};