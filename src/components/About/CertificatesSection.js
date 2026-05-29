import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const PARTNER_LOGOS = [
  { src: '/images/partners/ratal.png', alt: 'رتل' },
  { src: '/images/partners/doiqa.png', alt: 'دائقة' },
  { src: '/images/partners/yasfer.png', alt: 'يسفر' },
  { src: '/images/partners/comeanddo.png', alt: 'Come and Do' },
  { src: '/images/partners/shashai.png', alt: 'شاشاي ستوديو' },
  { src: '/images/partners/mshmsh.png', alt: 'مشمش' },
  { src: '/images/partners/tamam.png', alt: 'تمام' },
];

const CertificatesSection = memo(() => {
  const { t, language } = useLanguage();

  return (
    <section id="partners" style={{ backgroundColor: '#fff', padding: '80px 0' }}>
      <style>{`
        .partners-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 640px) {
          .partners-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .partners-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>

      <div className="container mx-auto px-6">

        <div style={{ textAlign: 'center', marginBottom: '50px' }} data-aos="fade-up">
          <h2 style={{
            fontFamily: 'Cairo, sans-serif',
            fontSize: '36px',
            fontWeight: 700,
            color: '#000',
            marginBottom: '16px',
          }}>
            {language === 'ar' ? 'شركاؤنا في النجاح' : 'Our Partners'}
          </h2>
          <p style={{
            color: '#888',
            maxWidth: '600px',
            margin: '0 auto',
            fontSize: '1rem',
            lineHeight: 1.8,
            fontWeight: 300,
          }}>
            {t('partnersDescription')}
          </p>
        </div>

        <div style={{
          borderTop: '1px solid #e8e8e8',
          borderBottom: '1px solid #e8e8e8',
          padding: '60px 0',
        }}>
          <div
            className="partners-grid"
            style={{ display: 'grid', gap: '40px' }}
          >
            {PARTNER_LOGOS.map((logo, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px',
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    height: '100px',
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    display: 'block',
                    transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }} data-aos="fade-up">
          <a
            href="contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              color: '#000',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              borderBottom: '2px solid #888',
              paddingBottom: '4px',
              transition: 'color 0.4s cubic-bezier(0.4,0,0.2,1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#888'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#000'; }}
          >
            <i className="fas fa-handshake"></i> {t('beOurPartner')}
          </a>
        </div>

      </div>
    </section>
  );
});

CertificatesSection.displayName = 'CertificatesSection';

export default CertificatesSection;
