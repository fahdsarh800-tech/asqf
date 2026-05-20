import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ContactItem = ({ href, icon, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      color: '#CCCCCC',
      textDecoration: 'none',
      fontSize: '0.95rem',
      padding: '10px 0',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      transition: 'color 0.3s ease',
    }}
    onMouseEnter={e => { e.currentTarget.style.color = '#888888'; }}
    onMouseLeave={e => { e.currentTarget.style.color = '#CCCCCC'; }}
  >
    <i className={`fas ${icon}`} style={{ color: '#888888', width: '20px', textAlign: 'center' }}></i>
    {text}
  </a>
);

const Footer = () => {
  const { t, language } = useLanguage();

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/services', label: t('services') },
    { href: '/projects', label: t('projects') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <footer
      style={{ backgroundColor: '#000', color: '#fff', padding: '80px 0 40px' }}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-6">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '48px', marginBottom: '64px' }}>

          <div>
            <div style={{ marginBottom: '28px' }}>
              <img
                src='images/clients/logo.png'
                alt='ASQF'
                style={{ height: '56px', width: 'auto', filter: 'brightness(0) invert(1)', objectFit: 'contain' }}
              />
            </div>
            <p style={{ color: '#CCCCCC', lineHeight: 1.8, fontSize: '0.9rem', fontWeight: 300 }}>
              {t('footerDescription')}
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: 'Cairo, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '24px', borderBottom: '2px solid #888888', paddingBottom: '12px', display: 'inline-block' }}>
              {t('quickLinks')}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    style={{ color: '#CCCCCC', textDecoration: 'none', fontSize: '0.95rem', padding: '8px 0', display: 'block', transition: 'color 0.3s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#888888'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#CCCCCC'; }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: 'Cairo, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '24px', borderBottom: '2px solid #888888', paddingBottom: '12px', display: 'inline-block' }}>
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ContactItem
                href="https://wa.me/966531319288"
                icon="fa-whatsapp fab"
                text="+966531319288"
              />
              <ContactItem
                href="https://www.instagram.com/asqf.eng"
                icon="fa-instagram fab"
                text="@asqf.eng"
              />
              <ContactItem
                href="https://maps.app.goo.gl/2xYNaaGNnkQePGhD8"
                icon="fa-map-marker-alt"
                text={language === 'ar' ? 'الرياض — الدرعية — حي جاكس — E08' : 'Riyadh - Diriyah - JAX District - E08'}
              />
              <ContactItem
                href="mailto:info@asqf-ksa.com"
                icon="fa-envelope"
                text="info@asqf-ksa.com"
              />
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid #888888', paddingTop: '32px', textAlign: 'center' }}>
          <p style={{ color: '#888', fontSize: '0.875rem' }}>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
