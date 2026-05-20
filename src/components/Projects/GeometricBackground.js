import React, { memo } from 'react';

const GeometricBackground = memo(() => {
  return (
    <>
      <div className="progress-bar-container" id="progressBar"></div>
      
      <div className="moving-shapes">
        <div className="moving-shape triangle" style={{width: '100px', height: '100px', top: '10%', right: '5%'}}></div>
        <div className="moving-shape hexagon" style={{width: '120px', height: '120px', top: '20%', left: '10%', animationDelay: '-3s'}}></div>
        <div className="moving-shape pentagon" style={{width: '80px', height: '80px', top: '40%', right: '15%', animationDelay: '-5s'}}></div>
        <div className="moving-shape octagon" style={{width: '90px', height: '90px', bottom: '20%', right: '20%', animationDelay: '-7s'}}></div>
        <div className="moving-shape triangle" style={{width: '70px', height: '70px', bottom: '30%', left: '15%', animationDelay: '-10s'}}></div>
      </div>
      
      <div className="geometric-grid"></div>
    </>
  );
});

GeometricBackground.displayName = 'GeometricBackground';

export default GeometricBackground;