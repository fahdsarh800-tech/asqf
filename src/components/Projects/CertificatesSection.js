import React, { memo } from 'react';
import Marquee from 'react-fast-marquee';
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
      <div className="container mx-auto px-6">
        <div style={{ textAlign: 'center', marginBottom: '48px' }} data-aos="fade-up">
          <h2 style={{
            fontFamily: 'Cairo, sans-serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: 900,
            color: '#000',
            marginBottom: '16px',
          }}>
            {language === 'ar' ? 'أبرز عملاؤنا' : 'Our Clients'}
          </h2>
          <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.8, fontWeight: 300 }}>
            {t('partnersDescription')}
          </p>
        </div>

        <div style={{ borderTop: '1px solid #e8e8e8', borderBottom: '1px solid #e8e8e8', padding: '32px 0 20px' }} data-aos="fade-up">
          <Marquee speed={40} gradient={false} pauseOnHover={true}>
            {CLIENT_LOGOS.map((logo, i) => (
              <img key={i} src={logo.src} alt={logo.alt} className="client-logo" />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
});

CertificatesSection.displayName = 'CertificatesSection';

export default CertificatesSection;
