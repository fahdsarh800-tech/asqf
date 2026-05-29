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

const STATS = [
  { value: '+10',  ar: 'عضو فريق',              en: 'Team Members' },
  { value: '2023', ar: 'تأسست عام',              en: 'Founded' },
  { value: '+50',  ar: 'مشاريع مميزة',           en: 'Projects' },
  { value: '+14',  ar: 'شريك وعميل مؤسسي',       en: 'Partners & Clients' },
];

const AboutSection = memo(() => {
  const { t, language } = useLanguage();

  const values = [
    { key: 'leadership',    desc: 'leadershipDesc' },
    { key: 'precision',     desc: 'precisionDesc' },
    { key: 'sustainability',desc: 'sustainabilityDesc' },
    { key: 'innovation',    desc: 'innovationDesc' },
  ];

  return (
    <section id="about" style={{ backgroundColor: '#fff', padding: '96px 0' }}>
      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-bottom: 64px;
        }
        .stat-card {
          border: 1px solid #e0e0e0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px 16px;
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          background-color: #fff;
        }
        .stat-card:hover {
          border-color: #888;
          background-color: #f8f8f8;
          transform: translateY(-8px);
        }
        .stat-value {
          font-size: 2.8rem;
          font-weight: 900;
          color: #000;
          font-family: Cairo, sans-serif;
          line-height: 1;
        }
        .stat-label {
          font-size: 0.85rem;
          color: #666;
          margin-top: 10px;
          font-weight: 400;
          text-align: center;
        }
        .clients-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 640px) {
          .clients-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .clients-grid {
            grid-template-columns: repeat(5, 1fr);
          }
        }
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .stat-card {
            padding: 20px 12px;
          }
          .stat-value {
            font-size: 2.25rem;
          }
        }
      `}</style>

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
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div key={i} className="stat-card" data-aos="fade-up" data-aos-delay={i * 100}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{language === 'ar' ? s.ar : s.en}</span>
            </div>
          ))}
        </div>

        {/* Clients Grid */}
        <div style={{
          borderTop: '1px solid #e8e8e8',
          borderBottom: '1px solid #e8e8e8',
          padding: '80px 0',
          marginBottom: '80px',
          backgroundColor: '#fff',
        }}>
          <h2
            data-aos="fade-up"
            style={{
              textAlign: 'center',
              fontFamily: 'Cairo, sans-serif',
              fontSize: '36px',
              fontWeight: 700,
              color: '#000',
              marginBottom: '50px',
            }}
          >
            {language === 'ar' ? 'أبرز عملاؤنا' : 'Our Clients'}
          </h2>
          <div
            className="clients-grid"
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
              { title: 'timeline2023Start',        desc: 'timeline2023StartDesc' },
              { title: 'timeline2023Growth',       desc: 'timeline2023GrowthDesc' },
              { title: 'timeline2023Achievements', desc: 'timeline2023AchievementsDesc' },
              { title: 'timeline2024Expansion',    desc: 'timeline2024ExpansionDesc' },
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
