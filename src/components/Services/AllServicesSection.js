import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import ServiceCard from './ServiceCard';

const AllServicesSection = memo(() => {
  const { t, language } = useLanguage();

  const services = [
    {
      id: 1,
      title: t('service1Title'),
      description: t('service1Description'),
      features: t('service1Features'),
      icon: 'fa-pencil-ruler',
      shape: 'pentagon'
    },
    {
      id: 2,
      title: t('service2Title'),
      description: t('service2Description'),
      features: t('service2Features'),
      icon: 'fa-tasks',
      shape: 'hexagon'
    },
    {
      id: 3,
      title: t('service3Title'),
      description: t('service3Description'),
      features: t('service3Features'),
      icon: 'fa-leaf',
      shape: 'polygon'
    },
    {
      id: 4,
      title: t('service4Title'),
      description: t('service4Description'),
      features: t('service4Features'),
      icon: 'fa-search',
      shape: 'octagon'
    },
 
  ];

  return (
    <section id="all-services" className="py-32 bg-gray-50 relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
          <h2 className="section-title center text-5xl font-bold text-gray-900 mb-8" data-aos="fade-up" data-aos-duration="1000">
            {t('allServicesTitle')} <span className="text-gradient">{t('asqafEngineering')}</span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" style={{maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto'}}>
            {t('allServicesDescription')}
          </p>
        </div>
        
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
  {services.map((service, index) => (
    <ServiceCard 
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

AllServicesSection.displayName = 'AllServicesSection';

export default AllServicesSection;