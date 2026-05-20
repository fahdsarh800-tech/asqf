import React, { memo } from 'react';

const ProgressIndicator = memo(({ item, index }) => {
  const animationDirection = item.direction === 'right' ? 'fade-right' : 'fade-left';
  
  return (
    <div className="progress-item" data-aos={animationDirection} data-aos-duration="1000" data-aos-delay={item.delay || 0}>
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 font-medium text-lg">
          {item.label}
        </span>
        <span className="text-secondary font-bold text-lg">{item.value}</span>
      </div>
      <div className="geometric-progress">
        <div className="geometric-progress-bar" style={{width: item.value}}></div>
      </div>
    </div>
  );
});

ProgressIndicator.displayName = 'ProgressIndicator';

export default ProgressIndicator;