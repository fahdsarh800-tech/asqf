import React, { memo } from 'react';

const DetailedServiceCard = memo(({ service, index, language }) => {

  return (
    <div 
      className="flex flex-col lg:flex-row items-center gap-16"
      data-aos="fade-up" 
      data-aos-duration="1000"
      data-aos-delay={index * 200}
    >
      {/* الصورة - أولاً في الترتيب العام */}
      <div className={`lg:w-1/2 ${language === 'ar' ? 'lg:order-1' : 'lg:order-1'}`}>
        <div className="service-image-frame mt-10  relative">
          <img 
            src={service.image} 
            alt={service.title}
            className=" w-full h-96 object-cover  "
            loading="lazy"
          />
        </div>
      </div>
      
      {/* المحتوى - ثانياً في الترتيب العام */}
      <div className={`lg:w-1/2 ${language === 'ar' ? 'lg:order-2' : 'lg:order-2'}`}>
        <div className="mb-6">
          <span className="px-4 py-2 bg-secondary/10 text-secondary  text-sm font-medium inline-flex items-center">
            <i className={`fas ${service.badgeIcon} mx-2`}></i> {service.badge}
          </span>
        </div>
        
        <h3 className="text-4xl font-bold text-gray-900 mb-6">
          {service.title}
        </h3>
        
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          {service.description}
        </p>
        
        <ul className="space-y-4 mb-10">
          {service.features.map((feature, idx) => (
            <li key={idx} className="text-gray-700 text-lg flex items-start">
              <i className="fas fa-check text-secondary text-sm mt-2 mx-3"></i>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
      
      </div>
    </div>
  );
});

DetailedServiceCard.displayName = 'DetailedServiceCard';

export default DetailedServiceCard;