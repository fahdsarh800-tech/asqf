import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const CLIENT_LOGOS = [
  { src: '/images/clients/museums-authority.png', alt: 'هيئة المتاحف' },
  { src: '/images/clients/madina-arts.png', alt: 'مركز المدينة للفنون' },
  { src: '/images/clients/diriyah.png', alt: 'بوابة الدرعية' },
  { src: '/images/clients/noor-riyadh.png', alt: 'نور الرياض' },
  { src: '/images/clients/aramco-ithra.png', alt: 'إثراء' },
  { src: '/images/clients/qatar-museum.png', alt: 'متحف قطر' },
  { src: '/images/clients/culture.png', alt: 'الثقافة' },
  { src: '/images/clients/sawaya.png', alt: 'سوايا' },
  { src: '/images/clients/mbs-calligraphy.png', alt: 'مركز الخط العربي' },
  { src: '/images/clients/red-sea-museum.png', alt: 'متحف البحر الأحمر' },
  { src: '/images/clients/rrc-riyadh.png', alt: 'الهيئة الملكية الرياض' },
  { src: '/images/clients/rrc-ula.png', alt: 'الهيئة الملكية العلا' },
  { src: '/images/clients/musmak.png', alt: 'المصمك' },
  { src: '/images/clients/middle-east.png', alt: 'ميدل بيست' },
];

const CertificatesSection = memo(() => {
  const { t, language } = useLanguage();

  return (
    <section id="clients" style={{ backgroundColor: '#fff', padding: '80px 0' }}>
      <style>{`
        .projects-clients-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 640px) {
          .projects-clients-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .projects-clients-grid {
            grid-template-columns: repeat(5, 1fr);
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
            {language === 'ar' ? 'أبرز عملاؤنا' : 'Our Clients'}
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
            className="projects-clients-grid"
            style={{ display: 'grid', gap: '40px' }}
          >
            {CLIENT_LOGOS.map((logo, i) => (
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

      </div>
    </section>
  );
});

CertificatesSection.displayName = 'CertificatesSection';

export default CertificatesSection;
