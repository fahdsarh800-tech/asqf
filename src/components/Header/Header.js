import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const NavLink = ({ to, icon, label }) => (
  <Link
    to={to}
    className="nav-link font-medium inline-flex items-center"
    style={{ color: '#fff', margin: '0 12px', textDecoration: 'none' }}
    onMouseEnter={e => { e.currentTarget.style.color = '#C9A84C'; }}
    onMouseLeave={e => { e.currentTarget.style.color = '#fff'; }}
  >
    <i className={`fas ${icon} mx-2`}></i> {label}
  </Link>
);

const Header = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuToggleRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLinkClick = (path) => {
    closeMenu();
    navigate(path);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        menuToggleRef.current &&
        !menuToggleRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const navItems = [
    { path: '/home', icon: 'fa-home', label: t('home') },
    { path: '/about', icon: 'fa-info-circle', label: t('about') },
    { path: '/services', icon: 'fa-cogs', label: t('services') },
    { path: '/projects', icon: 'fa-project-diagram', label: t('projects') },
    { path: '/contact', icon: 'fa-paper-plane', label: t('contact') },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        backgroundColor: scrolled ? '#000000' : 'transparent',
        transition: 'background-color 0.4s ease',
        padding: '14px 0',
      }}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <div style={{ width: '60px', height: '60px' }}>
              <img
                src='images/clients/logo.png'
                alt='ASQF'
                style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center">
            {navItems.map(item => (
              <NavLink key={item.path} to={item.path} icon={item.icon} label={item.label} />
            ))}
            <button
              onClick={toggleLanguage}
              style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer', padding: '8px 12px', fontFamily: 'inherit', fontSize: '1rem' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#C9A84C'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#fff'; }}
            >
              <i className="fas fa-globe mx-2"></i>
              {language === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>

          <button
            ref={menuToggleRef}
            className="lg:hidden text-3xl"
            style={{ color: '#fff', background: 'transparent', border: 'none', cursor: 'pointer' }}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? t('closeMenu') : t('openMenu')}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        <div
          ref={mobileMenuRef}
          className={`lg:hidden mt-6 pt-6 ${isMenuOpen ? 'block' : 'hidden'}`}
          style={{ borderTop: '1px solid rgba(201,168,76,0.4)' }}
        >
          <div className="flex flex-col space-y-1">
            {navItems.map(item => (
              <button
                key={item.path}
                onClick={() => handleLinkClick(item.path)}
                style={{
                  color: '#fff', background: 'none', border: 'none', cursor: 'pointer',
                  padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.08)',
                  fontFamily: 'inherit', fontSize: '1.05rem', display: 'flex', alignItems: 'center',
                  textAlign: 'inherit',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#C9A84C'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#fff'; }}
              >
                <i className={`fas ${item.icon} mx-3`}></i>
                {item.label}
              </button>
            ))}
            <button
              onClick={() => { toggleLanguage(); closeMenu(); }}
              style={{
                color: '#fff', background: 'none', border: 'none', cursor: 'pointer',
                padding: '12px 0', fontFamily: 'inherit', fontSize: '1.05rem',
                display: 'flex', alignItems: 'center', textAlign: 'inherit',
              }}
            >
              <i className="fas fa-globe mx-3"></i>
              {language === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
