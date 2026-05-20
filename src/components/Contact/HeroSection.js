import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const HeroSection = memo(() => {
  const { t, language } = useLanguage();

  return (
    <section id="hero" className="min-h-screen page-hero pt-32 pb-20 relative overflow-hidden">
  
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center min-h-80 justify-center">
          <div className="mb-8 mt-20" data-aos="fade-up" data-aos-duration="1200">
            <span className="px-6 py-2 md:px-8 md:py-3 text-gradient-geometric  glass-effect-geometric text-white  text-sm md:text-base font-medium   inline-flex items-center">
              <i className={`fas fa-comments   ${language === 'ar' ? 'ml-2' : 'mr-2'}`}></i> {t('communicationEngineering')}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white pt-2  mb-6 md:mb-8 leading-tight geometric-entrance" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <span className="block text-gradient-geometric">{t('contact')}</span>
            <span className="block my-2 md:my-4">
              <span className="text-gradient-geometric">{t('withUs')}</span>
            </span>
            <span className="block text-gradient-geometric">{t('weBuildYourFuture')}</span>
          </h1>
          
          <p className="text-base md:text-xl text-gradient-geometric  text-gray-200 mb-8 md:mb-10 max-w-3xl leading-relaxed px-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
            {t('heroContactDescription')}
          </p>
          
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
          
            <a href="tel:+966531319288" className="px-6 py-3 md:px-10 md:py-5 text-gradient-geometric   font-medium text-base md:text-lg    flex items-center   hover:text-primary transition-all">
              <i className={`fas fa-phone ${language === 'ar' ? 'ml-2 md:ml-3' : 'mr-2 md:mr-3'} text-lg md:text-xl`}></i> {t('callDirectly')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;