import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const CTASection = memo(() => {
  const { t } = useLanguage();

  return (
    <section id="cta" className="cta-section">
      <div className="shape polygon-shape" style={{width: '120px', height: '120px', top: '20%', right: '10%', animationDelay: '-3s', opacity: '0.2'}}></div>
      <div className="shape polygon-shape" style={{width: '100px', height: '100px', bottom: '20%', left: '15%', animationDelay: '-6s', opacity: '0.2'}}></div>
      
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title text-gradient-geometric " data-aos="fade-up" data-aos-duration="1000">
            {t('haveDistinguishedProject')}
          </h2>
          <p className="cta-description text-gradient-geometric" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            {t('ctaDescription')}
          </p>
          <div className="cta-buttons  text-black " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <a href="contact" className=" px-14 py-5 font-medium text-xl bg- inline-flex items-center">
              <i className="fas fa-paper-plane"></i> {t('discussYourProject')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';

export default CTASection;