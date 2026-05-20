import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ServiceCard = memo(({ service, index, language }) => {
  const { t } = useLanguage();

  return (
    <div 
      className="service-card bg-white  p-8  transition-all duration-300 "
      data-aos="fade-up" 
      data-aos-duration="1000" 
      data-aos-delay={index * 200}
    >
     
      
      <h3 className="text-2xl font-bold mb-4 text-primary geometric-text">
        {service.title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.description}
      </p>
      
      <ul className="space-y-2 mb-8">
        {service.features.map((feature, idx) => (
          <li key={idx} className="text-gray-700 flex items-center">
            <i className="fas fa-check-circle text-secondary text-sm mx-2"></i>
            {feature}
          </li>
        ))}
      </ul>
      
   
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;