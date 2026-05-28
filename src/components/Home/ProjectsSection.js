import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import ProjectsList from './ProjectsList';

const ProjectsSection = memo(() => {
  const { t } = useLanguage();

  return (
    <section id="projects" style={{ backgroundColor: '#fff', padding: '96px 0' }}>
      <div className="container mx-auto px-6">
        <div style={{ textAlign: 'center', marginBottom: '48px' }} data-aos="fade-up">
          <h2 style={{
            fontFamily: 'Cairo, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 900,
            color: '#000',
            marginBottom: '20px',
          }}>
            {t('projectsTitle')}
          </h2>
          <p style={{ color: '#555', maxWidth: '640px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.9, fontWeight: 300 }}>
            {t('projectsDescription')}
          </p>
        </div>

        <ProjectsList />
      </div>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;
