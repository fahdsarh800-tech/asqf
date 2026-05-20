import React, { memo } from 'react';
import Marquee from 'react-fast-marquee';
import { useLanguage } from '../../context/LanguageContext';

const PARTNER_LOGOS = [
  { src: '/images/partners/ratal.png', alt: 'رتل' },
  { src: '/images/partners/doiqa.png', alt: 'دائقة' },
  { src: '/images/partners/yasfer.png', alt: 'يسفر' },
  { src: '/images/partners/comeanddo.png', alt: 'Come and Do' },
  { src: '/images/partners/shashai.png', alt: 'شاشاي ستوديو' },
  { src: '/images/partners/mshmsh.png', alt: 'مشمش' },
  { src: '/images/partners/tamam.png', alt: 'تمام' },
  // Duplicated to fill the marquee width
  { src: '/images/partners/ratal.png', alt: 'رتل' },
  { src: '/images/partners/doiqa.png', alt: 'دائقة' },
  { src: '/images/partners/yasfer.png', alt: 'يسفر' },
  { src: '/images/partners/comeanddo.png', alt: 'Come and Do' },
  { src: '/images/partners/shashai.png', alt: 'شاشاي ستوديو' },
  { src: '/images/partners/mshmsh.png', alt: 'مشمش' },
  { src: '/images/partners/tamam.png', alt: 'تمام' },
];

const PartnerLogo = ({ src, alt }) => (
  <div
    style={{
      margin: '0 32px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.35s ease',
    }}
    onMouseEnter={e => {
      const img = e.currentTarget.querySelector('img');
      if (img) {
        img.style.filter = 'grayscale(0%)';
        img.style.opacity = '1';
        img.style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)';
        img.style.transform = 'scale(1.08)';
      }
    }}
    onMouseLeave={e => {
      const img = e.currentTarget.querySelector('img');
      if (img) {
        img.style.filter = 'grayscale(100%)';
        img.style.opacity = '0.55';
        img.style.boxShadow = 'none';
        img.style.transform = 'scale(1)';
      }
    }}
  >
    <img
      src={src}
      alt={alt}
      style={{
        height: '80px',
        width: 'auto',
        maxWidth: '140px',
        objectFit: 'contain',
        filter: 'grayscale(100%)',
        opacity: '0.55',
        transition: 'all 0.35s ease',
        display: 'block',
      }}
    />
  </div>
);

const CertificatesSection = memo(() => {
  const { t, language } = useLanguage();

  return (
    <section id="partners" style={{ backgroundColor: '#fff', padding: '80px 0' }}>
      <div className="container mx-auto px-6">
        <div style={{ textAlign: 'center', marginBottom: '48px' }} data-aos="fade-up">
          <h2 style={{
            fontFamily: 'Cairo, sans-serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: 900,
            color: '#000',
            marginBottom: '16px',
          }}>
            {t('ourPartners')}
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

        <div
          data-aos="fade-up"
          style={{
            borderTop: '1px solid #e8e8e8',
            borderBottom: '1px solid #e8e8e8',
            padding: '32px 0',
          }}
        >
          <Marquee speed={40} gradient={false} pauseOnHover={true}>
            {PARTNER_LOGOS.map((logo, i) => (
              <PartnerLogo key={i} src={logo.src} alt={logo.alt} />
            ))}
          </Marquee>
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
              transition: 'color 0.3s ease',
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
