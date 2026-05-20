import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TeamMember from './TeamMember';

const TeamSection = memo(() => {
  const { t, language } = useLanguage();

  const teamMembers = [
    {
      name: language === 'ar' ? 'محمود الرباعي' : 'Mahmoud Al-Rubai\'i',
      title: t('mahmoudTitle'),
      description: t('mahmoudDesc'),
      image: 'images/Mahmoud Al-Rubai.webp'
    },
    {
      name: language === 'ar' ? 'هيثم العزي' : 'Haitham Al-Azzi',
      title: t('haithamTitle'),
      description: t('haithamDesc'),
      image: 'images/Haitham Al-Ezi.webp'
    },
    {
      name: language === 'ar' ? 'إدريس أحمد' : 'Idris Ahmed',
      title: t('idrisTitle'),
      description: t('idrisDesc'),
      image: 'images/Edrees Ahmed.webp'
    },
    {
      name: language === 'ar' ? 'لجين خالد' : 'Lujain Khalid',
      title: t('lujainTitle'),
      description: t('lujainDesc'),
      image: 'images/Lujain Khaled.webp'
    },
    {
      name: language === 'ar' ? 'فرح حاتم' : 'Farah Hatem',
      title: t('Farahtitle'),
      description: t('FarahDesc'),
      image: 'images/farah.webp'
    },
    {
      name: language === 'ar' ? 'أيمن الشهاري' : 'Ayman Al-Shahary',
      title: t('Aymantitle'),
      description: t('Aymandesc'),
      image: 'images/Ayman Al-Shahary.webp'
    },
    {
      name: language === 'ar' ? 'محمد أبو زيد' : 'Mohamed Abo Zeid',
      title: t('Mohamedtitle'),
      description: t('Mohameddesc'),
      image: 'images/Mohamed Abo Zeid.webp'
    },
    {
      name: language === 'ar' ? 'اية أيمن' : 'Aya Ayman',
      title: t('Ayatitle'),
      description: t('Ayadesc'),
      image: 'images/Ayayman.webp'
    },
  ];

  return (
    <section id="team" className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title center text-gradient text-5xl font-bold text-gray-900 mb-8 
                        [text-shadow:none] border-0" 
              data-aos="fade-up" 
              data-aos-duration="1000">
            {t('teamTitle')}
          </h2>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed 
                       border-0 [border-radius:0] [box-shadow:none]" 
             data-aos="fade-up" 
             data-aos-duration="1000" 
             data-aos-delay="200">
            {t('teamDescription')}
          </p>
        </div>
        
        <div className="swiper teamSwiper pb-20 border-0 [border-radius:0] [box-shadow:none]" 
             data-aos="fade-up" 
             data-aos-duration="1000">
          <div className="swiper-wrapper">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index} 
                member={member} 
                language={language} 
              />
            ))}
          </div>
          <div className="swiper-pagination relative mt-12 [border-radius:0]"></div>
        </div>
      </div>
    </section>
  );
});

TeamSection.displayName = 'TeamSection';

export default TeamSection;