import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const HeroSection = memo(() => {
  const { t, language } = useLanguage();

  return (
    <section id="hero" className=" min-h-screen page-hero pt-32 pb-20 relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
     
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <div data-aos="fade-up" data-aos-duration="1200">
            <span className="px-8 py-3 glass-effect-geometric  text-gradient-geometric   text-white  text-sm font-medium border border-white/30 inline-flex items-center mb-8">
              <i className="fas fa-cogs mx-2"></i> {t('badgeText')}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight geometric-entrance" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <span className="block  text-gradient-geometric ">{t('heroTitle1')}</span>
            <span className="block my-4">
              <span className="text-gradient-geometric">{t('heroTitle2')}</span>
            </span>
            <span className="block mb-5  text-gradient-geometric ">{t('heroTitle3')}</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto  text-gradient-geometric   leading-relaxed" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
            {t('heroDescription')}
          </p>
          
         
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;