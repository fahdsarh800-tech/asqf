import { useEffect, useRef } from 'react';

export const usePartnersSwiper = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (window.Swiper && !swiperRef.current) {
      swiperRef.current = new window.Swiper('.partners-swiper', {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        speed: 15000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true
        },
        freeMode: {
          enabled: true,
          momentum: false,
          sticky: false
        },
        allowTouchMove: false,
        grabCursor: false,
        breakpoints: {
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
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