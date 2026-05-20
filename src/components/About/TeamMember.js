import React, { memo } from 'react';

const TeamMember = memo(({ member, language }) => {
  return (
    <div className="swiper-slide border-0">
      <div className="bg-white border-0 [border-radius:0] [box-shadow:none] p-10 text-center" 
           style={{height: '100%', clipPath: 'polygon(0 0, 100% 0, 100% 92%, 94% 100%, 0 100%)'}}>
        
        <div className="w-48 h-48 border-0  [border-radius:0] overflow-hidden border-0 mx-auto mb-8 team-img" 
             style={{padding: '0', clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'}}>
          <img 
            src={member.image} 
            alt={member.name} 
            style={{width: '100%', height: '100%', objectFit: 'cover', border: 'none'}}
            loading="lazy"
            className=""
          />
        </div>
        
        <h3 className="text-3xl font-bold mb-3 text-primary border-0">
          {member.name}
        </h3>
        <p className="text-secondary font-medium mb-6 text-lg border-0">
          {member.title}
        </p>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed border-0">
          {member.description}
        </p>
      </div>
    </div>
  );
});

TeamMember.displayName = 'TeamMember';

export default TeamMember;