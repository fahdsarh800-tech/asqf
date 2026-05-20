import React, { memo } from 'react';

const ProcessStep = memo(({ step, index }) => {
  return (
    <div 
      className="process-step text-center"
      data-aos="fade-up" 
      data-aos-duration="1000"
      data-aos-delay={index * 200}
    >
      <div className="step-number relative mb-8">
        {/* <span className="text-8xl font-bold text-gray-200 opacity-50">{step.id}</span> */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br  flex items-center justify-center">
          <i className={`fas ${step.icon}  text-2xl`}></i>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {step.title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {step.description}
      </p>
    </div>
  );
});

ProcessStep.displayName = 'ProcessStep';

export default ProcessStep;