import React, { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ScrollIndicator = memo(() => {
  const { t } = useLanguage();

  return (
    <div id="scrollIndicator" className="scroll-indicator">
      <a href="#hero" className="active" data-section="hero" title={t('homePage')}></a>
      <a href="#about-content" data-section="about-content" title={t('aboutUs')}></a>
      <a href="#vision" data-section="vision" title={t('visionValues')}></a>
      <a href="#timeline" data-section="timeline" title={t('timeline')}></a>
      <a href="#team" data-section="team" title={t('team')}></a>
      <a href="#certificates" data-section="certificates" title={t('certificates')}></a>
      <a href="#cta" data-section="cta" title={t('contact')}></a>
    </div>
  );
});

ScrollIndicator.displayName = 'ScrollIndicator';

export default ScrollIndicator;