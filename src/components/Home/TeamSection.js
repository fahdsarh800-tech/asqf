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
      image: 'images/Mahmoud Al-Rubai.webp',
    },
    {
      name: language === 'ar' ? 'هيثم العزي' : 'Haitham Al-Azzi',
      title: t('haithamTitle'),
      description: t('haithamDesc'),
      image: 'images/Haitham Al-Ezi.webp',
    },
    {
      name: language === 'ar' ? 'إدريس أحمد' : 'Idris Ahmed',
      title: t('idrisTitle'),
      description: t('idrisDesc'),
      image: 'images/Edrees Ahmed.webp',
    },
    {
      name: language === 'ar' ? 'لجين خالد' : 'Lujain Khalid',
      title: t('lujainTitle'),
      description: t('lujainDesc'),
      image: 'images/Lujain Khaled.webp',
    },
    {
      name: language === 'ar' ? 'فرح حاتم' : 'Farah Hatem',
      title: t('Farahtitle'),
      description: t('FarahDesc'),
      image: 'images/farah.webp',
    },
    {
      name: language === 'ar' ? 'أيمن الشهاري' : 'Ayman Al-Shahary',
      title: t('Aymantitle'),
      description: t('Aymandesc'),
      image: 'images/Ayman Al-Shahary.webp',
    },
    {
      name: language === 'ar' ? 'محمد أبو زيد' : 'Mohamed Abo Zeid',
      title: t('Mohamedtitle'),
      description: t('Mohameddesc'),
      image: 'images/Mohamed Abo Zeid.webp',
    },
    {
      name: language === 'ar' ? 'اية أيمن' : 'Aya Ayman',
      title: t('Ayatitle'),
      description: t('Ayadesc'),
      image: 'images/Ayayman.webp',
    },
  ];

  return (
    <section id="team" style={{ backgroundColor: '#000000', padding: '96px 0' }}>
      <div className="container mx-auto px-6">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{
            fontFamily: 'Cairo, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 900,
            color: '#fff',
            marginBottom: '24px',
          }}>
            {t('teamTitle')}
          </h2>
          <p style={{
            color: '#CCCCCC',
            maxWidth: '680px',
            margin: '0 auto',
            fontSize: '1.05rem',
            lineHeight: 1.9,
            fontWeight: 300,
          }}>
            فريقنا هو قلب كل مشروع ننفذه — مهندسون ومصممون يجمعون بين الدقة والإبداع لتحويل الأفكار إلى واقع.
          </p>
        </div>

        <div className="swiper teamSwiper" style={{ paddingBottom: '60px' }}>
          <div className="swiper-wrapper">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} member={member} language={language} />
            ))}
          </div>
          <div className="swiper-pagination relative mt-10"></div>
        </div>
      </div>
    </section>
  );
});

TeamSection.displayName = 'TeamSection';

export default TeamSection;
