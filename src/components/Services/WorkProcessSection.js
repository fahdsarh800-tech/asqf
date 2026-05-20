import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import ProcessStep from './ProcessStep';
import ProgressIndicator from './ProgressIndicator';

const WorkProcessSection = memo(() => {
  const { t, language } = useLanguage();

  const processSteps = [
    {
      id: 1,
      title: t('step1Title'),
      description: t('step1Description'),
      icon: 'fa-comments'
    },
    {
      id: 2,
      title: t('step2Title'),
      description: t('step2Description'),
      icon: 'fa-pencil-ruler'
    },
    {
      id: 3,
      title: t('step3Title'),
      description: t('step3Description'),
      icon: 'fa-hard-hat'
    },
    {
      id: 4,
      title: t('step4Title'),
      description: t('step4Description'),
      icon: 'fa-check-circle'
    }
  ];

  const progressItems = [
    {
      label: t('executionSpeed'),
      value: t('executionSpeedValue'),
      direction: 'right'
    },
    {
      label: t('qualityExecution'),
      value: t('qualityExecutionValue'),
      direction: 'left',
      delay: 200
    }
  ];

  return (
    <section id="work-process" className="py-32 bg-gray-50 relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title center text-5xl font-bold text-gray-900 mb-8" data-aos="fade-up" data-aos-duration="1000">
            {t('workProcessTitle')} <span className="text-gradient">{t('asqafEngineering')}</span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" style={{maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto'}}>
            {t('workProcessDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.id} step={step} index={index} />
          ))}
        </div>
        
        {/* <div className="max-w-3xl mx-auto space-y-8">
          {progressItems.map((item, index) => (
            <ProgressIndicator 
              key={index} 
              item={item} 
              index={index}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
});

WorkProcessSection.displayName = 'WorkProcessSection';

export default WorkProcessSection;