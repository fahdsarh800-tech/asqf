import React, { memo } from 'react';

const HeroSection = memo(() => {
  return (
    <section id="home">
      <div style={{ height: '70vh', width: '100%', overflow: 'hidden' }}>
        <img
          src="images/homeoverimages.webp"
          alt="ASQF"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      <div style={{ backgroundColor: '#fff', padding: '80px 40px', textAlign: 'center' }}>
        <h1 style={{
          fontFamily: 'Cairo, sans-serif',
          fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
          fontWeight: 900,
          color: '#000',
          lineHeight: 1.5,
          maxWidth: '860px',
          margin: '0 auto',
          letterSpacing: '-0.01em',
        }}>
          نحن نبنى الفكرة لإنشاء سقف يستحق رؤيتك
        </h1>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
