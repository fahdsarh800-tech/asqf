import React, { memo } from 'react';

const PartnerSlide = memo(({ partner }) => {
  return (
    <div className="h-full">
      <div className="bg-white  p-8  text-center  h-full  flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105">
        <div className="w-40 h-40  overflow-hidden    mb-6 " 
             style={{border: 'none', padding: '8px'}}>
          <img 
            src={partner.image} 
            alt={partner.alt}
            className="w-full h-full object-contain p-4"
            loading="lazy"
          />
        </div>
        {partner.title && (
          <h4 className="text-2xl font-bold mb-2 text-primary geometric-text">
            {partner.title}
          </h4>
        )}
        {partner.description && (
          <p className="text-gray-600 text-lg leading-relaxed">
            {partner.description}
          </p>
        )}
      </div>
    </div>
  );
});

PartnerSlide.displayName = 'PartnerSlide';

export default PartnerSlide;