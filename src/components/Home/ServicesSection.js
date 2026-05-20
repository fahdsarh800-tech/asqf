import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import ServicesList from './ServicesList';

const ServicesSection = memo(() => {
  const { t, language } = useLanguage();

  return (
    <section id="services" style={{ backgroundColor: '#fff', padding: '96px 0' }}>
      <div className="container mx-auto px-6">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontFamily: 'Cairo, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 900,
            color: '#000',
            marginBottom: '20px',
          }}>
            {t('servicesTitle')}
          </h2>
          <p style={{ color: '#555', maxWidth: '640px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.9, fontWeight: 300 }}>
            {t('servicesDescription')}
          </p>
        </div>

        <ServicesList />

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a
            href="services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              color: '#000',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              borderBottom: '2px solid #C9A84C',
              paddingBottom: '4px',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#C9A84C'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#000'; }}
          >
            <i className={`fas fa-list ${language === 'ar' ? 'ml-2' : 'mr-2'}`}></i>
            {t('viewAllServices')}
          </a>
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;
