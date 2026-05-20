import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const VisionValues = memo(() => {
  const { t } = useLanguage();

  const renderTextWithIcons = (text) => {
    return text.split('\n').map((line, index) => (
      <div key={index} className="flex items-start">
        <i className=" text-secondary mx-3 text-xl mt-1 flex-shrink-0"></i>
        <span>{line}</span>
      </div>
    ));
  };

  return (
    <div id="vision" className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
      {/* رسالتنا */}
      <div className=" p-12 " data-aos="fade-right" data-aos-duration="1000" style={{background: 'linear-gradient(to bottom right, rgba(88, 89, 91, 0.05), rgba(128, 130, 133, 0.05))'}}>
       
        <h3 className="text-3xl font-bold mb-8 text-primary geometric-text">{t('engineeringMission')}</h3>
        <div className="text-gray-700 text-xl leading-relaxed mb-8 pb-5">
          {renderTextWithIcons(t('missionDescription'))}
        </div>
        <ul style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
          <li className="flex items-center text-gray-600 text-lg">
            {/* <i className="fas fa-check-circle text-secondary mx-3 text-xl"></i> */}
            <span>{t('missionPoint1')}</span>
          </li>
          <li className="flex items-center text-gray-600 text-lg">
            {/* <i className="fas fa-check-circle text-secondary mx-3 text-xl"></i> */}
            <span>{t('missionPoint2')}</span>
          </li>
          <li className="flex items-center text-gray-600 text-lg">
            {/* <i className="fas fa-check-circle text-secondary mx-3 text-xl"></i> */}
            <span>{t('missionPoint3')}</span>
          </li>
        </ul>
      </div>
      
      {/* قيمنا */}
      <div className=" p-12 " data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" style={{background: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.05), rgba(128, 130, 133, 0.05))'}}>
       
        <h3 className="text-3xl font-bold mb-8 text-primary geometric-text">{t('engineeringValues')}</h3>
        <div className="text-gray-700 text-xl leading-relaxed mb-8">
          {renderTextWithIcons(t('valuesDescription'))}
        </div>
        <ul style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
          <li className="flex items-center text-gray-600 text-lg">
            {/* <i className="fas fa-star  text-secondary pb-12 m-1 mx-3 text-xl"></i> */}
            <span>{t('excellenceCreativity')}</span>
          </li>
          <li className="flex items-center text-gray-600 text-lg">
            {/* <i className="fas fa-star text-secondary mx-3 text-xl"></i> */}
            <span>{t('integrityTransparency')}</span>
          </li>
          <li className="flex items-center text-gray-600 text-lg">
            {/* <i className="fas fa-star text-secondary mx-3 text-xl"></i> */}
            <span>{t('teamwork')}</span>
          </li>
          <li className="flex items-center text-gray-600 text-lg">
            {/* <i className="fas fa-star text-secondary mx-3 text-xl"></i> */}
            <span>{t('commitmentTime')}</span>
          </li>
        </ul>
      </div>
    </div>
  );
});

VisionValues.displayName = 'VisionValues';

export default VisionValues;