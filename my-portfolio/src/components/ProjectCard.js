// ProjectCard.js

import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css'; 

const ProjectCard = ({ project }) => {
  const renderImage = () => {
    if (project.img) {
      // If the project has an 'img' attribute, render the background image
      const backgroundImageStyle = {
        backgroundImage: `url(${require(`${project.img}`)})`,
      };

      return (
        <div
          className="image-container"
          style={backgroundImageStyle}
          onLoad={handleImageLoad}
        />
      );
    }
  };
const handleImageLoad = () => {
  console.log("Image loaded successfully");
};

  console.log(project.img)
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {renderImage()}
      
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <button className='GHlink'>GitHub</button>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
