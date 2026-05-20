import { useEffect, useRef } from 'react';

export const useTeamSwiper = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (window.Swiper && !swiperRef.current) {
      swiperRef.current = new window.Swiper('.teamSwiper', {
        slidesPerView: 1,
        spaceBetween: 40,
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