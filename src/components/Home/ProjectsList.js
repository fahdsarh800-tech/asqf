import React, { memo, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ProjectCard = memo(({ project }) => {
  return (
    <div className="project-card-wrapper group">
      <div className="project-card cursor-pointer overflow-hidden">
        <div className="project-image-layer">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
          />
        </div>

        <div className="project-info-overlay">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-12 h-1 bg-accent"></div>
              <span className="text-accent font-medium text-lg">{project.category}</span>
            </div>
            <h3 className="text-white text-2xl font-bold mb-1">{project.title}</h3>
            <p className="text-gray-300 text-lg mb-1">{project.description}</p>
            <div className="flex flex-wrap gap-3 mb-1">
              {project.tags.map((tag, index) => (
                <span key={index} className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-6 left-6 z-30">
          <div className="flex flex-col gap-2">
            <div
              className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center"
              style={{ clipPath: project.iconClipPath }}
            >
              <i className={`fas ${project.icon} text-white text-2xl`}></i>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm">
              <span className="text-white font-medium">{project.projectName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const ProjectsList = memo(() => {
  const { t, language } = useLanguage();
  const swiperRef = useRef(null);

  const mainProjects = [
    {
      title: t('displayCases'),
      category: t('museum'),
      description: t('displayCasesDesc'),
      image: 'images/Qatar Museum Project.webp',
      tags: [
        t('interiorDesign'),
        language === 'ar' ? 'تصميم وتنفيذ ' : 'designing and executing',
        language === 'ar' ? 'واجهات عرض فنية ' : 'art display cases '
      ],
      icon: 'fa-landmark',
      iconClipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
      projectName: language === 'ar' ? 'مشروع متحف قطر' : 'Qatar Museum Project'
    },
    {
      title: t('fifthPyramid'),
      category: t('festival'),
      description: t('fifthPyramidDesc'),
      image: 'images/Noor Riyadh Festival.webp',
      tags: [
        language === 'ar' ? 'تركيبات فنية' : 'Art Installations',
        language === 'ar' ? 'إضاءة تفاعلية' : 'Interactive Lighting',
        t('architecturalEngineering')
      ],
      icon: 'fa-lightbulb',
      iconClipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
      projectName: language === 'ar' ? 'مهرجان نور الرياض' : 'Noor Riyadh Festival'
    },
    {
      title: t('heritageTransformation'),
      category: t('exhibition'),
      description: t('heritageTransformationDesc'),
      image: 'images/Nabil Fanous Exhibition.webp',
      tags: [
        language === 'ar' ? 'ترميم' : 'Restoration',
        t('interiorDesign'),
        language === 'ar' ? 'تكييف بيئي' : 'Environmental Adaptation'
      ],
      icon: 'fa-palette',
      iconClipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
      projectName: language === 'ar' ? 'معرض نابيل فانوس' : 'Nabil Fanous Exhibition'
    }
  ];

  useEffect(() => {
    if (window.Swiper && !swiperRef.current) {
      swiperRef.current = new window.Swiper('.projectsSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.projects-swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: '.projects-swiper-next',
          prevEl: '.projects-swiper-prev',
        },
        breakpoints: {
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        },
        autoplay: {
          delay: 4000,
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

  return (
    <div className="relative" data-aos="fade-up" data-aos-duration="1000">
      <div className="swiper projectsSwiper pb-14">
        <div className="swiper-wrapper">
          {mainProjects.map((project, index) => (
            <div className="swiper-slide" key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <div className="swiper-pagination projects-swiper-pagination relative mt-10"></div>
      </div>

      <div className="projects-swiper-prev swiper-button-prev"></div>
      <div className="projects-swiper-next swiper-button-next"></div>
    </div>
  );
});

ProjectsList.displayName = 'ProjectsList';

export default ProjectsList;
