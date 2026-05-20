import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const HeroSection = memo(() => {
  const { t, language } = useLanguage();

  return (
    <section id="hero" className="pt-40 pb-32 page-hero relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      
      
    
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8" data-aos="fade-up" data-aos-duration="1200">
            <span className="glass-effect-geometric text-gradient-geometric text-white  text-sm font-medium border border-white/30 inline-flex items-center px-8 py-3">
              <i className="fas fa-history mx-2  "></i> {t('ourEngineeringStory')}
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight geometric-entrance" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" style={{fontSize: '3rem', lineHeight: '1.25', textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'}}>
            <span className="block text-gradient-geometric">{t('aboutUs')}</span>
            <span className="block my-4">
              <span className="text-gradient-geometric">{t('ourStory')}</span>
            </span>
            <span className="block text-gradient-geometric">{t('engineering')}</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-10 text-gradient-geometric leading-relaxed" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" style={{maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto'}}>
            {t('companyDescription')}
          </p>
          
          
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;