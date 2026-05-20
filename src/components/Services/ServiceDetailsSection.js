import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import DetailedServiceCard from './DetailedServiceCard';

const ServiceDetailsSection = memo(() => {
  const { t, language } = useLanguage();

  const detailedServices = [
    {
      id: 1,
      title: t('integratedDesign'),
      description: t('integratedDesignDesc'),
      features: t('integratedFeatures'),
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80',
      badge: t('integratedService'),
      badgeIcon: 'fa-drafting-compass',
      buttonText: t('requestDesign')
    },
    {
      id: 2,
      title: t('buildingLicenses'),
      description: t('buildingLicensesDesc'),
      features: t('licensesFeatures'),
      image: 'images/service1.jpeg',
      badge: t('officialService'),
      badgeIcon: 'fa-file-contract',
      buttonText: t('requestLicenses')
    },
    {
      id: 3,
      title: t('constructionSupervision'),
      description: t('constructionSupervisionDesc'),
      features: t('supervisionFeatures'),
      image: 'images/homeoverimages.webp',
      badge: t('fieldService'),
      badgeIcon: 'fa-hard-hat',
      buttonText: t('requestSupervision')
    }
  ];

  return (
    <section id="service-details" className="py-32 bg-white relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 relative z-10">
         <div className="text-center mb-20">
          <h2 className="section-title center text-5xl font-bold text-gray-900 mb-8" data-aos="fade-up" data-aos-duration="1000">
            {t('serviceDetailsTitle')} <span className="text-gradient">{t('asqafEngineering')}</span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" style={{maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto'}}>
            {t('serviceDetailsDescription')}
          </p>
        </div>
        
        <div className="space-y-32">
          {detailedServices.map((service, index) => (
            <DetailedServiceCard 
              key={service.id} 
              service={service} 
              index={index}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

ServiceDetailsSection.displayName = 'ServiceDetailsSection';

export default ServiceDetailsSection;