import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAOS } from '../../hooks/useAOS';
import { useShapesEffect } from '../../hooks/useShapesEffect';
import { useMobileEnhancements } from '../../hooks/useMobileEnhancements';
import PhoneIcon from './PhoneIcon';
import BackToTopButton from './BackToTopButton';

// استيراد عادي للمكونات
import HeroSection from './HeroSection';
import ContactInfoSection from './ContactInfoSection';

const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // استخدام custom hooks
  useAOS();
  useShapesEffect();
  useMobileEnhancements();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // محاكاة إرسال النموذج
    showNotification(t('messageSentSuccess'), 'success');
    
    // إعادة تعيين النموذج
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const showNotification = (message, type) => {
    // سنقوم بتنفيذ هذا في مكون Notification
    console.log(message, type);
  };

  return (
    <>
      {/* <GeometricBackground /> */}
      <PhoneIcon />
      
      <HeroSection />
      <ContactInfoSection />
      <BackToTopButton />
    </>
  );
};

export default Contact;