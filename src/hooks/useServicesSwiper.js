import { useEffect, useRef } from 'react';

export const useServicesSwiper = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (window.Swiper && !swiperRef.current) {
      swiperRef.current = new window.Swiper('.servicesSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      });
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
        swiperRef.current = null;
      }
    };
  }, []);

  return swiperRef;
};