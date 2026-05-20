import React, { memo, useState } from 'react';
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

const StatCard = ({ value, label, isActive, onClick }) => (
  <div
    onClick={onClick}
    data-aos="fade-up"
    style={{
      width: '180px',
      height: '180px',
      border: `1px solid ${isActive ? '#888888' : '#e0e0e0'}`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '12px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backgroundColor: isActive ? '#f8f8f8' : '#fff',
    }}
  >
    <span style={{
      fontSize: '2.8rem',
      fontWeight: 900,
      color: isActive ? '#888888' : '#000',
      fontFamily: 'Cairo, sans-serif',
      lineHeight: 1,
      transition: 'color 0.3s ease',
    }}>
      {value}
    </span>
    <span style={{
      fontSize: '0.85rem',
      color: isActive ? '#888888' : '#666',
      marginTop: '10px',
      fontWeight: 400,
      transition: 'color 0.3s ease',
    }}>
      {label}
    </span>
  </div>
);

const AboutSection = memo(() => {
  const { t, language } = useLanguage();
  const [activeStats, setActiveStats] = useState({});

  const handleStatClick = (index) => {
    setActiveStats(prev => ({ ...prev, [index]: true }));
    setTimeout(() => {
      setActiveStats(prev => ({ ...prev, [index]: false }));
    }, 800);
  };

  const stats = [
    { value: '٢٠٢٣', label: language === 'ar' ? 'سنة التأسيس' : 'Founded' },
    { value: '+٥٠', label: language === 'ar' ? 'مشروع منجز' : 'Projects' },
    { value: '+١٤', label: language === 'ar' ? 'عميل مؤسسي' : 'Clients' },
    { value: '٨', label: language === 'ar' ? 'متخصص إبداعي' : 'Specialists' },
  ];

  const values = [
    { key: 'leadership', desc: 'leadershipDesc' },
    { key: 'precision', desc: 'precisionDesc' },
    { key: 'sustainability', desc: 'sustainabilityDesc' },
    { key: 'innovation', desc: 'innovationDesc' },
  ];

  return (
    <section id="about" style={{ backgroundColor: '#fff', padding: '96px 0' }}>
      <div className="container mx-auto px-6">

        <div style={{ textAlign: 'center', marginBottom: '64px' }} data-aos="fade-up">
          <h2 style={{
            fontFamily: 'Cairo, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 900,
            color: '#000',
            marginBottom: '24px',
          }}>
            {t('aboutTitle')}
          </h2>
          <p style={{ color: '#888', maxWidth: '680px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.9, fontWeight: 300 }}>
            {t('aboutDescription')}
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '16px' }}>
          {stats.map((s, i) => (
            <StatCard
              key={i}
              value={s.value}
              label={s.label}
              isActive={activeStats[i]}
              onClick={() => handleStatClick(i)}
            />
          ))}
        </div>

        {/* Clients Marquee — below stats */}
        <div style={{ borderTop: '1px solid #e8e8e8', borderBottom: '1px solid #e8e8e8', padding: '24px 0', marginBottom: '80px' }}>
          <p style={{
            textAlign: 'center',
            fontFamily: 'Cairo, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            color: '#aaa',
            marginBottom: '18px',
            textTransform: 'uppercase',
          }}>
            {language === 'ar' ? 'أبرز عملاؤنا' : 'Our Clients'}
          </p>
          <Marquee speed={40} gradient={false} pauseOnHover={true}>
            {CLIENT_LOGOS.map((logo, i) => (
              <img key={i} src={logo.src} alt={logo.alt} className="client-logo" />
            ))}
          </Marquee>
        </div>

        {/* Vision */}
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', marginBottom: '64px' }} data-aos="fade-up">
          <h3 style={{ fontFamily: 'Cairo, sans-serif', fontSize: '1.75rem', fontWeight: 700, color: '#000', marginBottom: '24px' }}>
            {t('vision')}
          </h3>
          <p style={{ color: '#666', lineHeight: 1.9, fontSize: '1rem', fontWeight: 300, marginBottom: '40px' }}>
            {t('visionDescription')}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            textAlign: language === 'ar' ? 'right' : 'left',
          }}>
            {values.map(({ key, desc }, i) => (
              <div key={key} data-aos="fade-up" data-aos-delay={i * 100} style={{ borderTop: '2px solid #888888', paddingTop: '16px' }}>
                <span style={{ fontWeight: 700, color: '#000', display: 'block', marginBottom: '6px' }}>{t(key)}</span>
                <span style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.7 }}>{t(desc)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className={`timeline ${language === 'en' ? 'timeline-english' : ''}`}>
            {[
              { title: 'timeline2023Start', desc: 'timeline2023StartDesc' },
              { title: 'timeline2023Growth', desc: 'timeline2023GrowthDesc' },
              { title: 'timeline2023Achievements', desc: 'timeline2023AchievementsDesc' },
              { title: 'timeline2024Expansion', desc: 'timeline2024ExpansionDesc' },
            ].map(({ title, desc }, i) => (
              <div className="timeline-item" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#000', marginBottom: '8px' }}>{t(title)}</h3>
                <p style={{ color: '#888', lineHeight: 1.7, fontSize: '0.95rem' }}>{t(desc)}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
