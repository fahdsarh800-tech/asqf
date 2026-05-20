import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ContactInfoCard = memo(({ card }) => {
  const { language } = useLanguage();

  const handleClick = (e) => {
    if (card.onClick) {
      e.preventDefault();
      card.onClick();
    }
  };

  return (
    <div className="  bg-white   p-6 md:p-10 text-center " data-aos="fade-up" data-aos-duration="1000" data-aos-delay={card.delay}>
      <div className={`w-16 h-16 md:w-24 md:h-24   ${card.gradient} flex items-center justify-center mx-auto mb-6 md:mb-8`} style={{clipPath: card.shape, padding: '8px'}}>
        <i className={`fas ${card.icon} text-black text-lg md:text-2xl`}></i>
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-primary geometric-text">{card.title}</h3>
      <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">{card.description}</p>
      {card.linkUrl ? (
        <a 
          href={card.linkUrl} 
          target={card.linkUrl.startsWith('http') ? '_blank' : '_self'}
          rel={card.linkUrl.startsWith('http') ? 'noopener noreferrer' : ''}
          className="text-secondary font-medium hover:text-primary transition-colors flex items-center justify-center text-base md:text-lg geometric-text"
        >
          <i className={`fas ${card.linkIcon} ${language === 'ar' ? 'ml-2 md:ml-3' : 'mr-2 md:mr-3'} text-lg md:text-xl`}></i> {card.linkText}
        </a>
      ) : (
        <button 
          onClick={handleClick}
          className="text-secondary font-medium hover:text-primary transition-colors flex items-center justify-center text-base md:text-lg geometric-text"
        >
          <i className={`fas ${card.linkIcon} ${language === 'ar' ? 'ml-2 md:ml-3' : 'mr-2 md:mr-3'} text-lg md:text-xl`}></i> {card.linkText}
        </button>
      )}
    </div>
  );
});

ContactInfoCard.displayName = 'ContactInfoCard';

export default ContactInfoCard;