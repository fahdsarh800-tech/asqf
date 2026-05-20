import React, { memo } from 'react';

const PhoneIcon = memo(() => {
  return (
    <div className="phone-icon-mobile">
      <a href="tel:+966531319288">
        <i className="fas fa-phone"></i>
      </a>
    </div>
  );
});

PhoneIcon.displayName = 'PhoneIcon';

export default PhoneIcon;