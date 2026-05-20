import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ServiceCard = memo(({ service, index }) => {
  const { t, language } = useLanguage();
  
  return (
    <div className="bg-white overflow-hidden service-card"
         data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-delay={index * 200}>
      <div className="h-80 overflow-hidden relative">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100" style={{ background: 'rgba(0,0,0,0.08)' }}></div>
        {/* <div className="absolute top-6 left-6 w-16 h-16 bg-white  flex items-center justify-center" 
             style={{clipPath: service.iconClipPath}}>
          <i className={`fas ${service.icon} text-secondary text-2xl`}></i>
        </div> */}
      </div>
      <div className="p-10 relative z-10">
        {/* <div className="w-20 h-20  bg-gradient-to-br  flex items-center justify-center mb-8 " 
             style={{clipPath: service.iconClipPath}}>
          <i className={`fas ${service.icon} text-white text-3xl`}></i>
        </div> */}
        <h3 className="text-3xl font-bold mb-6 text-primary geometric-text">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

const ServicesList = memo(() => {
  const { t, language } = useLanguage();
  
  const services = [
    {
      title: t('integratedDesign'),
      description: t('integratedDesignDesc'),
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      icon: 'fa-drafting-compass',
      iconClipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
    },
    {
      title: t('buildingPermits'),
      description: t('buildingPermitsDesc'),
      image: 'images/service1.jpeg',
      icon: 'fa-hard-hat',
      iconClipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
    },
    {
      title: t('constructionSupervision'),
      description: t('constructionSupervisionDesc'),
      image: 'images/service2.jpeg',
      icon: 'fa-hard-hat',
      iconClipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </div>
  );
});

ServicesList.displayName = 'ServicesList';

export default ServicesList;