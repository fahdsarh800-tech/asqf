import React, { memo } from 'react';

const CertificateCard = memo(({ certificate }) => {
  return (
    <div className="h-full">
      <div className="bg-white  p-8  text-center card-hover h-full  flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105">
        <div className="w-40 h-40  overflow-hidden  mb-6  " 
             style={{border: 'none', padding: '8px'}}>
          <img 
            src={certificate.image} 
            alt={certificate.alt}
            className="w-full h-full  "
            loading="lazy"
            style={{
              transition: 'opacity 0.3s ease',
            }}
          />
        </div>
            {/* <div className="text-center mt-4">
              {certificate.title && (
                <h4 className="text-2xl font-bold text-primary geometric-text mb-2">
                  {certificate.title}
                </h4>
              )}
              {certificate.description && (
                <p className="text-gray-600 mt-2 text-lg leading-relaxed">
                  {certificate.description}
                </p>
              )}
            </div> */}
      </div>
    </div>
  );
});

CertificateCard.displayName = 'CertificateCard';

export default CertificateCard;