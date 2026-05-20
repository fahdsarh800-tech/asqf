import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

// تسجيل الوحدات
Swiper.use([Autoplay]);

export const initPartnersSwiper = (containerSelector) => {
  if (typeof window === 'undefined') return null; // منع التشغيل في الـ SSR
  
  const container = document.querySelector(containerSelector);
  if (!container) return null;

  return new Swiper(container, {
    modules: [Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 25
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 30
      }
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    resizeObserver: true,
    preventClicks: true,
    preventClicksPropagation: true,
    touchEventsTarget: 'container',
    on: {
      init: function() {
        console.log('Swiper initialized successfully');
      },
      imagesReady: function() {
        this.update();
      }
    }
  });
};