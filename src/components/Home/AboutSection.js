import React, { memo, useState, useEffect, useRef } from 'react';
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

const useCountUp = (target, duration = 1800, shouldStart = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    const numericTarget = parseInt(target.replace(/\D/g, ''), 10);
    if (!numericTarget) return;
    let start = 0;
    const step = numericTarget / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [shouldStart, target, duration]);
  return count;
};

const StatCard = ({ value, label }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const prefix = value.startsWith('+') ? '+' : '';
  const isYear = value.includes('٢٠٢٣') || value.includes('2023');
  const count = useCountUp(value, 1800, visible && !isYear);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const displayValue = isYear ? value : visible ? `${prefix}${count}` : '0';

  return (
    <div
      ref={ref}
      data-aos="fade-up"
      style={{
        width: '180px',
        height: '180px',
        border: '1px solid #e0e0e0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '12px',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        backgroundColor: '#fff',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#888';
        e.currentTarget.style.backgroundColor = '#f8f8f8';
        e.currentTarget.style.transform = 'translateY(-8px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#e0e0e0';
        e.currentTarget.style.backgroundColor = '#fff';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <span style={{
        fontSize: '2.8rem',
        fontWeight: 900,
        color: '#000',
        fontFamily: 'Cairo, sans-serif',
        lineHeight: 1,
      }}>
        {displayValue}
      </span>
      <span style={{
        fontSize: '0.85rem',
        color: '#666',
        marginTop: '10px',
        fontWeight: 400,
      }}>
        {label}
      </span>
    </div>
  );
};

const AboutSection = memo(() => {
  const { t, language } = useLanguage();

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
      <style>{`
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
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '16px' }}>
          {stats.map((s, i) => (
            <StatCard key={i} value={s.value} label={s.label} />
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
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '40px',
          }}
            className="clients-grid"
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
