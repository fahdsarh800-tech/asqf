import React, { memo, useEffect, useRef, useState } from 'react';

const HeroSection = memo(() => {
  const [offsetY, setOffsetY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setOffsetY(window.scrollY);
        rafRef.current = null;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Parallax image */}
      <img
        src="images/hero-main.jpg"
        alt="ASQF"
        onLoad={() => setLoaded(true)}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '115%',
          objectFit: 'cover',
          objectPosition: 'center',
          transform: `translateY(${offsetY * 0.35}px)`,
          willChange: 'transform',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      />

      {/* Dark gradient overlay — transparent top → dark bottom */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.85) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingBottom: '10vh',
          textAlign: 'center',
          padding: '0 24px 10vh',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s',
        }}
      >
        <h1
          style={{
            fontFamily: 'Cairo, Almarai, sans-serif',
            fontSize: 'clamp(1.8rem, 5vw, 4rem)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.4,
            maxWidth: '860px',
            margin: '0 auto 32px',
            textShadow: '0 2px 20px rgba(0,0,0,0.4)',
          }}
        >
          نحن نبنى الفكرة لإنشاء سقف يستحق رؤيتك
        </h1>

        <a
          href="/about"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            color: '#fff',
            border: '2px solid rgba(255,255,255,0.7)',
            padding: '14px 40px',
            fontSize: '1rem',
            fontFamily: 'Cairo, sans-serif',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textDecoration: 'none',
            backdropFilter: 'blur(4px)',
            backgroundColor: 'rgba(255,255,255,0.08)',
            transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
            e.currentTarget.style.borderColor = '#fff';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)';
          }}
        >
          اكتشف أعمالنا
          <i className="fas fa-arrow-left" style={{ fontSize: '0.9rem' }}></i>
        </a>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
