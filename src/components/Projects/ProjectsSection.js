import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import ProjectCard from './ProjectCard';

const ProjectsSection = memo(({ activeFilter, onFilterClick, onLoadMore }) => {
  const { t, language } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t('project1Title'),
      description: t('project1Description'),
      category: 'art-galleries',
      image: 'images/Qatar Museum Project.webp',
      icon: 'fa-landmark',
      categoryName: t('qatarNationalMuseum'),
      tags: [t('museumDesign'), t('displayCabinets'), t('heritagePreservation')],
      alt: t('qatarMuseum'),
      delay: 0
    },
    {
      id: 2,
      title: t('project2Title'),
      description: t('project2Description'),
      category: 'festivals',
      image: 'images/Noor Riyadh Festival.webp',
      icon: 'fa-lightbulb',
      categoryName: t('noorRiyadhFestival'),
      tags: [t('artInstallations'), t('festivals'), t('artLighting')],
      alt: t('noorRiyadhFestival'),
      delay: 200
    },
    {
      id: 3,
      title: t('project3Title'),
      description: t('project3Description'),
      category: 'art-galleries',
      image: 'images/Nabil Fanous Exhibition.webp',
      icon: 'fa-palette',
      categoryName: t('nabilFanousExhibition'),
      tags: [t('heritageRehabilitation'), t('exhibitionDesign'), t('restoration')],
      alt: t('nabilFanousExhibition'),
      delay: 400
    },
    {
      id: 4,
      title: t('project4Title'),
      description: t('project4Description'),
      category: 'culturalProjects',
      image: 'images/Unfolding The Embassy.webp',
      icon: 'fa-expand-arrows-alt',
      categoryName: t('unfoldingTheEmbassy'),
      tags: [t('interactiveDesign'), t('futureExhibitions'), t('technology')],
      alt: 'Unfolding The Embassy',
      delay: 600
    },
    {
      id: 5,
      title: t('project5Title'),
      description: t('project5Description'),
      category: 'art-installations',
      image: 'images/The Comma.webp',
      icon: 'fa-music',
      categoryName: t('theCommaProject'),
      tags: [t('artInstallations'), t('musicalEvents'), t('fastDesign')],
      alt: 'The Comma',
      delay: 800
    },
    {
      id: 6,
      title: t('project6Title'),
      description: t('project6Description'),
      category: 'cultural',
      image: 'images/Ceramic Exhibition.webp',
      icon: 'fa-book',
      categoryName: t('saudiNationalLibrary'),
      tags: [t('smartDesign'), t('culturalProjects'), t('heritagePreservation')],
      alt: t('saudiNationalLibrary'),
      delay: 1000
    }
  ];

  return (
    <section id="projects-content" className="projects-section" style={{ backgroundColor: '#ffffff' }} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      
      <div className="container">
        <div className="section-title center">
          <h2 data-aos="fade-up" data-aos-duration="1000">
            {t('projectsGallery')} <span className="text-gradient">{t('projects')}</span>
          </h2>
        </div>
        
        <p className="section-description pb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          {t('projectsGalleryDescription')}
        </p>
       
        
        <div className="projects-grid mb-10" id="projects-grid">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              activeFilter={activeFilter}
              language={language}
            />
          ))}
        </div>
        
      
      </div>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;