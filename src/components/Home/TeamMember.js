import React, { memo } from 'react';

const TeamMember = memo(({ member }) => {
  return (
    <div className="swiper-slide">
      <div style={{ textAlign: 'center', padding: '40px 24px' }}>
        <div
          className="team-photo-wrapper"
          style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid #888888',
            margin: '0 auto 28px',
          }}
        >
          <img
            src={member.image}
            alt={member.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            loading="lazy"
          />
        </div>

        <h3 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px', fontFamily: 'Cairo, sans-serif' }}>
          {member.name}
        </h3>
        <p style={{ color: '#888888', marginBottom: '16px', fontWeight: 500, fontSize: '0.95rem' }}>
          {member.title}
        </p>
        <p style={{ color: '#CCCCCC', fontSize: '0.875rem', lineHeight: 1.8, maxWidth: '240px', margin: '0 auto', fontWeight: 300 }}>
          {member.description}
        </p>
      </div>
    </div>
  );
});

TeamMember.displayName = 'TeamMember';

export default TeamMember;
