import React, { memo } from 'react';

const ProjectCard = memo(({ project, activeFilter, language }) => {
  
  const isVisible = activeFilter === 'all' || activeFilter === project.category;
  const className = `project-card project-item ${isVisible ? '' : 'hidden'}`;

  return (
    <div 
      className={className}
      data-aos="fade-up" 
      data-aos-duration="1000"
      data-aos-delay={project.delay}
    >
      <img 
        src={project.image} 
        alt={project.alt}
        loading="lazy"
      />
      {/* <div className="project-icon ">
        <i className={`fas ${project.icon} `}></i>
      </div> */}
      <div className="project-overlay">
        <div className="project-content">
          <div className="project-category">{project.categoryName}</div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="project-tag">{tag}</span>
            ))}
          </div>
        
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;