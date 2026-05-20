import React, { createContext, useState, useContext, useEffect } from 'react';
// استيراد ملفات JSON
import ar from '../locales/ar.json';
import en from '../locales/en.json';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar');
  const [direction, setDirection] = useState('rtl');
  const [translations, setTranslations] = useState(ar);

  useEffect(() => {
    // تحميل اللغة من localStorage إذا كانت موجودة
    const savedLanguage = localStorage.getItem('language') || 'ar';
    setLanguage(savedLanguage);
    setDirection(savedLanguage === 'ar' ? 'rtl' : 'ltr');
    setTranslations(savedLanguage === 'ar' ? ar : en);
    
    // تحديث اتجاه الصفحة
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = savedLanguage;
    
    // إضافة فئة اللغة إلى body
    document.body.classList.add(savedLanguage === 'ar' ? 'rtl' : 'ltr');
    document.body.classList.remove(savedLanguage === 'ar' ? 'ltr' : 'rtl');
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'ar' ? 'en' : 'ar';
    const newDirection = newLanguage === 'ar' ? 'rtl' : 'ltr';
    
    setLanguage(newLanguage);
    setDirection(newDirection);
    setTranslations(newLanguage === 'ar' ? ar : en);
    
    // حفظ في localStorage
    localStorage.setItem('language', newLanguage);
    
    // تحديث اتجاه الصفحة
    document.documentElement.dir = newDirection;
    document.documentElement.lang = newLanguage;
    
    // تحديث فئة اللغة في body
    document.body.classList.remove(language === 'ar' ? 'rtl' : 'ltr');
    document.body.classList.add(newDirection);
  };

  const t = (key) => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, direction, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};