import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const TimelineSection = memo(() => {
  const { t } = useLanguage();

  const timelineItems = [
    {
      title: t('timeline2023Start'),
      description: t('timeline2023StartDesc')
    },
    {
      title: t('timeline2023Growth'),
      description: t('timeline2023GrowthDesc')
    },
    {
      title: t('timeline2023Achievements'),
      description: t('timeline2023AchievementsDesc')
    },
    {
      title: t('timeline2024Expansion'),
      description: t('timeline2024ExpansionDesc')
    }
  ];

  return (
    <div id="timeline" className="mb-32 mr-8 ml-8">
      <div className="text-center mb-20">
        <h2 className="section-title center text-5xl font-bold text-gray-900 mb-8" data-aos="fade-up" data-aos-duration="1000">
          {t('journey')} <span className="text-gradient">{t('throughTime')}</span>
        </h2>
        <p className="text-gray-600 text-xl leading-relaxed" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" style={{maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto'}}>
          {t('timelineDescription')}
        </p>
      </div>
      
      <div className="timeline" data-aos="fade-up" data-aos-duration="1200">
        {timelineItems.map((item, index) => (
          <div 
            key={index} 
            className="timeline-item" 
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-delay={(index + 1) * 100}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

TimelineSection.displayName = 'TimelineSection';

export default TimelineSection;