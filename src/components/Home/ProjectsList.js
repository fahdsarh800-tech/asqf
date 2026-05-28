import React, { memo, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const PROJECTS = [
  {
    image: 'images/Qatar Museum Project.webp',
    title: 'مشروع متحف قطر',
    titleEn: 'Qatar Museum Project',
    category: 'متحف',
    categoryEn: 'Museum',
  },
  {
    image: 'images/Noor Riyadh Festival.webp',
    title: 'مهرجان نور الرياض',
    titleEn: 'Noor Riyadh Festival',
    category: 'مهرجان',
    categoryEn: 'Festival',
  },
  {
    image: 'images/Nabil Fanous Exhibition.webp',
    title: 'معرض نابيل فانوس',
    titleEn: 'Nabil Fanous Exhibition',
    category: 'معرض',
    categoryEn: 'Exhibition',
  },
  {
    image: 'images/Unfolding The Embassy.webp',
    title: 'مشروع السفارة',
    titleEn: 'Unfolding The Embassy',
    category: 'مشاريع ثقافية',
    categoryEn: 'Cultural',
  },
  {
    image: 'images/The Comma.webp',
    title: 'مشروع الفاصلة',
    titleEn: 'The Comma',
    category: 'تركيبات فنية',
    categoryEn: 'Art Installation',
  },
  {
    image: 'images/Ceramic Exhibition.webp',
    title: 'معرض السيراميك',
    titleEn: 'Ceramic Exhibition',
    category: 'معرض',
    categoryEn: 'Exhibition',
  },
];

const ProjectsList = memo(() => {
  const { language } = useLanguage();
  const swiperRef = useRef(null);

  useEffect(() => {
    const init = () => {
      if (!window.Swiper) return;
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
        swiperRef.current = null;
      }
      swiperRef.current = new window.Swiper('.projectsSwiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        speed: 700,
        autoplay: { delay: 4000, disableOnInteraction: false },
        navigation: {
          nextEl: '.projects-swiper-next',
          prevEl: '.projects-swiper-prev',
        },
        pagination: {
          el: '.projects-swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        breakpoints: {
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 28 },
        },
      });
    };

    if (window.Swiper) {
      init();
    } else {
      const interval = setInterval(() => {
        if (window.Swiper) { clearInterval(interval); init(); }
      }, 100);
      return () => clearInterval(interval);
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
        swiperRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative" data-aos="fade-up" data-aos-duration="1000">
      <style>{`
        .project-slide-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          height: 420px;
        }
        .project-slide-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
          display: block;
        }
        .project-slide-card:hover img {
          transform: scale(1.08);
        }
        .project-slide-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%);
          padding: 32px 24px 24px;
          transform: translateY(8px);
          transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .project-slide-card:hover .project-slide-overlay {
          transform: translateY(0);
        }
        .project-slide-category {
          font-family: Cairo, sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.7);
          margin-bottom: 6px;
          text-transform: uppercase;
        }
        .project-slide-title {
          font-family: Cairo, sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
          line-height: 1.4;
        }
        .projects-swiper-prev,
        .projects-swiper-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 48px;
          height: 48px;
          background: rgba(0,0,0,0.6);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.3s ease;
          backdrop-filter: blur(4px);
        }
        .projects-swiper-prev:hover,
        .projects-swiper-next:hover {
          background: rgba(0,0,0,0.9);
        }
        .projects-swiper-prev { left: -24px; }
        .projects-swiper-next { right: -24px; }
        .projects-swiper-prev::after,
        .projects-swiper-next::after { display: none !important; }
        @media (max-width: 768px) {
          .projects-swiper-prev { left: 0; }
          .projects-swiper-next { right: 0; }
          .project-slide-card { height: 300px; }
        }
      `}</style>

      <div className="swiper projectsSwiper" style={{ paddingBottom: '56px', overflow: 'hidden' }}>
        <div className="swiper-wrapper">
          {PROJECTS.map((p, i) => (
            <div className="swiper-slide" key={i}>
              <div className="project-slide-card">
                <img src={p.image} alt={language === 'ar' ? p.title : p.titleEn} />
                <div className="project-slide-overlay">
                  <div className="project-slide-category">
                    {language === 'ar' ? p.category : p.categoryEn}
                  </div>
                  <h3 className="project-slide-title">
                    {language === 'ar' ? p.title : p.titleEn}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination projects-swiper-pagination" style={{ marginTop: '24px' }}></div>
      </div>

      <button className="projects-swiper-prev" aria-label="Previous">
        <i className="fas fa-chevron-right"></i>
      </button>
      <button className="projects-swiper-next" aria-label="Next">
        <i className="fas fa-chevron-left"></i>
      </button>
    </div>
  );
});

ProjectsList.displayName = 'ProjectsList';

export default ProjectsList;
