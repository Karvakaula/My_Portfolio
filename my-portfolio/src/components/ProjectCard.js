// ProjectCard.js

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css'; 
import { Slide} from "react-swift-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ project }) => {
  const [flip, setFlip] = useState(false)
  
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
         
        />
      );
    }
  };


  console.log(project.img)
  return (
    <Slide left duration={300} delay={0} >
    <motion.div
      className={`project-card ${flip ? "flip" : ""}`}

      onClick={() => setFlip(!flip)}
    >
      
      <div className='front' onClick={() => setFlip(!flip)}>
      {renderImage()}
      <h3>{project.title}</h3>
      <span style={{ opacity:'50%' }}>click to flip</span>
      </div>
      <div className='back' onClick={() =>setFlip(!flip)}>
      <p>{project.description}</p>
      <a target="_blank" href={project.link} rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      
    </motion.div>
    </Slide>
  );
};

export default ProjectCard;
