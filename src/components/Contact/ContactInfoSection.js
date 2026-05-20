import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import ContactInfoCard from './ContactInfoCard';

const ContactInfoSection = memo(() => {
  const { t, language } = useLanguage();

  const contactInfoCards = [
    {
      title: t('address'),
      description: t('fullAddress'),
      icon: 'fa-map-marker-alt',
      linkText: t('openMap'),
      linkUrl: 'https://maps.google.com/?q=الرياض الدرعية حي الجاكس',
      linkIcon: 'fa-directions',
      gradient: 'from-secondary to-primary',
      shape: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
      delay: 0
    },
    {
      title: t('phone'),
      description: '+966 53 131 9288',
      icon: 'fa-phone',
      linkText: t('callUsNow'),
      linkUrl: 'tel:+966531319288',
      linkIcon: 'fa-phone-alt',
      gradient: 'from-accent to-secondary',
      shape: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
      delay: 200
    },
    {
      title: t('email'),
      description: 'info@asqf-ksa.com',
      icon: 'fa-envelope',
      linkText: t('sendEmail'),
      linkUrl: 'mailto:info@asqf-ksa.com',
      linkIcon: 'fa-paper-plane',
      gradient: 'from-primary to-accent',
      shape: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
      delay: 400
    },
  ];

  const handleCardClick = (card) => {
    if (card.linkUrl) {
      window.open(card.linkUrl, card.linkUrl.startsWith('mailto:') || card.linkUrl.startsWith('tel:') ? '_self' : '_blank');
    } else if (card.onClick) {
      card.onClick();
    }
  };

  return (
    <section id="contact-info" className="py-20 md:py-32 bg-white relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
    
      
     
      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="section-title center text-3xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-8" data-aos="fade-up" data-aos-duration="1000">
            {t('contactInfo')} <span className="text-gradient-geometric">{t('contact')}</span>
          </h2>
          <div className="text-gray-600 max-w-3xl mx-auto text-base md:text-xl leading-relaxed px-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="inline-block max-w-4xl">
              {t('contactInfoDescription')}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mb-12 md:mb-20">
          {contactInfoCards.map((card, index) => (
            <div 
              key={index}
              onClick={() => handleCardClick(card)}
              className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
              style={{ animationDelay: `${card.delay}ms` }}
            >
              <ContactInfoCard card={card} language={language} />
            </div>
          ))}
        </div>
        
        {/* Map Section */}
        <div className=" overflow-hidden  mb-12 md:mb-20" data-aos="fade-up" data-aos-duration="1000">
          <div className="h-64 md:h-96 w-full bg-gradient-to-br from-gray-100 to-gray-200 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center relative px-4">
                <div className="polygon-shape" style={{width: '60px', height: '60px', top: '-30px', right: '-30px'}}></div>
                <div className="polygon-shape" style={{width: '40px', height: '40px', bottom: '-20px', left: '-20px', animationDelay: '-5s'}}></div>
                
                <div className="w-20 h-20 md:w-32 md:h-32   from-secondary to-primary flex items-center justify-center mx-auto mb-4 md:mb-6   " style={{border: 'none', padding: '10px'}}>
                  <i className="fas fa-map-marked-alt text-black text-2xl md:text-4xl"></i>
                </div>
                <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-primary geometric-text">{t('mapLocation')}</h3>
                <p className="text-gray-600 text-base md:text-xl max-w-2xl mx-auto">{t('fullAddress')}</p>
                <a 
                  href="https://maps.google.com/?q=الرياض الدرعية حي الجاكس" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={` px-6 py-3 md:px-10 md:py-5 font-medium text-base md:text-lg inline-flex items-center mt-4 md:mt-8 ${language === 'ar' ? 'flex-row-reverse' : ''}`}
                >
                  <i className="fas fa-external-link-alt mx-3 text-lg md:text-xl"></i> 
                  {t('openGoogleMaps')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactInfoSection.displayName = 'ContactInfoSection';

export default ContactInfoSection;