import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const HeroSection = memo(() => {
  const { t } = useLanguage();

  return (
    <section id="hero" style={{ backgroundColor: '#000', paddingTop: '140px', paddingBottom: '100px', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container mx-auto px-6">
        <div data-aos="fade-up" data-aos-duration="1000" style={{ textAlign: 'center' }}>
          <h1 style={{
            fontFamily: 'Cairo, sans-serif',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.3,
            marginBottom: '24px',
          }}>
            {t('engineeringCreativity')}
          </h1>
          <p style={{ color: '#888', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto', fontWeight: 300 }}
             data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            {t('heroProjectsDescription')}
          </p>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
