import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import VisionValues from './VisionValues';

const AboutContent = memo(() => {
  const { t, language } = useLanguage();

  return (
    <section id="about-content" className="py-32 bg-white relative overflow-hidden border-0" dir={language === 'ar' ? 'rtl' : 'ltr'}>
     
      
      {/* أشكال هندسية حادة بدل الدوائر */}
      <div className="absolute z-0 opacity-10 border-0"
           style={{
             width: '150px', 
             height: '150px', 
             top: '15%', 
             right: '5%', 
             animationDelay: '-5s',
             clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
           }}>
        <div className="w-full h-full bg-blue-500 border-0"></div>
      </div>
      
    
      
      <div className="container relative z-10 border-0">
        <div className="text-center mb-20 border-0">
          <h2 className="section-title center text-5xl font-bold text-gray-900 mb-8 border-0 [text-shadow:none]" 
              data-aos="fade-up" 
              data-aos-duration="1000">
            {t('storyOf')} <span className="text-gradient border-0">{t('asqafEngineering')}</span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed border-0 [border-radius:0] [box-shadow:none]" 
             data-aos="fade-up" 
             data-aos-duration="1000" 
             data-aos-delay="200" 
             style={{maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto'}}>
            {t('journeyStart')}
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-32 border-0">
          <div className="lg:w-1/2 border-0">
            <div className="mb-16 border-0" data-aos="fade-right" data-aos-duration="1200">
              <h3 className="text-4xl font-bold text-gray-900 mb-10 border-0">
                {t('ourVision')} <span className="text-gradient border-0">{t('engineering')}</span>
              </h3>
              
              <p className="text-gray-700 mb-10 leading-relaxed text-xl border-0">
                {t('visionDescription')}
              </p>
              
              <p className="text-gray-700 mb-10 leading-relaxed text-xl border-0">
                {t('companyFounding')}
              </p>
              
              <div className="space-y-6 mb-10 border-0">
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-2 items-start border-0 [border-radius:0]" 
                     data-aos="fade-right" 
                     data-aos-duration="1000" 
                     data-aos-delay="200">
                  <span className="font-bold text-primary border-0">{t('engineeringLeadership')}:</span>
                  <span className="border-0">{t('leadershipDesc')}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-2 items-start border-0 [border-radius:0]" 
                     data-aos="fade-right" 
                     data-aos-duration="1000" 
                     data-aos-delay="300">
                  <span className="font-bold text-primary border-0">{t('engineeringPrecision')}:</span>
                  <span className="border-0">{t('precisionDesc')}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-2 items-start border-0 [border-radius:0]" 
                     data-aos="fade-right" 
                     data-aos-duration="1000" 
                     data-aos-delay="400">
                  <span className="font-bold text-primary border-0">{t('engineeringSustainability')}:</span>
                  <span className="border-0">{t('sustainabilityDesc')}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-2 items-start border-0 [border-radius:0]" 
                     data-aos="fade-right" 
                     data-aos-duration="1000" 
                     data-aos-delay="500">
                  <span className="font-bold text-primary border-0">{t('engineeringInnovation')}:</span>
                  <span className="border-0">{t('innovationDesc')}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 border-0">
            <div className="border-0" data-aos="fade-left" data-aos-duration="1200">
              <img 
                src="images/About.jpeg" 
                alt={t('asqafTeam')} 
                style={{
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  borderRadius: '0',
                  border: '2px solid #e5e7eb'
                }}
                loading="lazy"
                className="border-0"
              />
            </div>
          </div>
        </div>
        
        <VisionValues />
      </div>
    </section>
  );
});

AboutContent.displayName = 'AboutContent';

export default AboutContent;