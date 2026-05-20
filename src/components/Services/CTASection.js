import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const CTASection = memo(() => {
  const { t } = useLanguage();

  return (
    <section
      id="cta"
      style={{
        backgroundColor: '#ffffff',
        padding: '100px 0',
      }}
    >
      <div className="container mx-auto px-6">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{
              fontFamily: 'Cairo, sans-serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
              fontWeight: 900,
              color: '#000',
              marginBottom: '24px',
              lineHeight: 1.4,
            }}
          >
            {t('haveDistinguishedProject')}
          </h2>

          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            style={{
              color: '#666',
              fontSize: '1rem',
              lineHeight: 1.9,
              marginBottom: '48px',
              fontWeight: 300,
            }}
          >
            {t('ctaDescription')}
          </p>

          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <a
              href="contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: '#000',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                padding: '16px 48px',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
                letterSpacing: '0.04em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#333';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#000';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <i className="fas fa-paper-plane"></i>
              {t('discussYourProject')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';

export default CTASection;
