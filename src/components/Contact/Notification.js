import React, { memo, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Notification = memo(({ message, type, onClose }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-6 left-6 px-6 py-4 md:px-8 md:py-6 rounded-2xl shadow-2xl text-white font-medium z-50 transform ${
      type === 'success' ? 'bg-green-600' : 'bg-red-600'
    }`}>
      <div className="flex items-center">
        <i className={`fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} ${
          language === 'ar' ? 'ml-3' : 'mr-3'
        } text-lg md:text-2xl`}></i>
        <span className="text-sm md:text-lg">{message}</span>
      </div>
    </div>
  );
});

Notification.displayName = 'Notification';

export default Notification;