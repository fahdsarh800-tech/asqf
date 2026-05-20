import React, { memo } from 'react';

const FilterButtons = memo(({ activeFilter, onFilterClick, language }) => {
  const filters = [
    { id: 'all', icon: 'fa-th-large', label: 'all' },
    { id: 'art-galleries', icon: 'fa-paint-brush', label: 'artGalleries' },
    { id: 'cultural', icon: 'fa-landmark', label: 'culturalProjects' },
    { id: 'festivals', icon: 'fa-star', label: 'festivals' },
    { id: 'art-installations', icon: 'fa-cubes', label: 'artInstallations' }
  ];

  const getLabel = (key) => {
    const labels = {
      'all': 'الكل',
      'artGalleries': 'معارض فنية',
      'culturalProjects': 'مشاريع ثقافية',
      'festivals': 'مهرجانات',
      'artInstallations': 'تركيبات فنية'
    };
    
    return language === 'ar' ? labels[key] : key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <div className={`project-filters ${language === 'en' ? 'direction-ltr' : ''}`}>
      {filters.map((filter) => (
        <button 
          key={filter.id}
          className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`} 
          onClick={() => onFilterClick(filter.id)}
        >
          <i className={`fas ${filter.icon} mx-2`}></i> {getLabel(filter.label)}
        </button>
      ))}
    </div>
  );
});

FilterButtons.displayName = 'FilterButtons';

export default FilterButtons;