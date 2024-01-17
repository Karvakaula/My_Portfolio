// Skills.js

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faPython, faNode } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './Skills.css'; // Don't forget to create this CSS file for styling
import ProgressBar from './ProgressBar';
import { motion, AnimatePresence } from 'framer-motion';

const frontData = [
    {
        name: 'HTML',
        icon: <FontAwesomeIcon icon={faHtml5} />,
        proficiency: 95,
      },
      {
        name: 'CSS',
        icon: <FontAwesomeIcon icon={faCss3} />,
        proficiency: 75,
      },
      {
        name: 'JavaScript',
        icon: <FontAwesomeIcon icon={faJs} />,
        proficiency: 60,
      },
      {
        name: 'React',
        icon: <FontAwesomeIcon icon={faReact} />,
        proficiency: 45,
      }
      
      
];
const backData = [
    {
      name: 'Python',
      icon: <FontAwesomeIcon icon={faPython} />,
      proficiency: 70,
    },
    {
      name: 'NodeJS',
      icon: <FontAwesomeIcon icon={faNode} />,
      proficiency: 65,
    },
    {
      name: 'Node Express',
      icon: <FontAwesomeIcon icon={faNode} />,
      proficiency: 65,
    },
    
    
];
const Databases = [
  {
    name: 'Mysql',
    icon: <FontAwesomeIcon icon={faDatabase} />,
    proficiency: 65,
  },
  {
    name: 'MongoDB',
    icon: <FontAwesomeIcon icon={faDatabase} />,
    proficiency: 70,
  },
  
  
];
const iconVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('front');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    if (activeTab === 'front') {
      return (
         <motion.div
          className="skills-container"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
        >
          <AnimatePresence>
            {frontData.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-item"
                variants={iconVariants}
                exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
              >
                <p className='skill-icon'>{skill.icon}</p>
                <p className="skill-name">{skill.name}</p>
                <ProgressBar proficiency={skill.proficiency} />
              </motion.div>
            ))}
          </AnimatePresence>
          
        </motion.div>
      );
    } else if (activeTab === 'Backend') {
      return (
        <motion.div
          className="skills-container"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
        >
          <AnimatePresence>
            {backData.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-item"
                variants={iconVariants}
                exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
              >
                <p className='skill-icon'>{skill.icon}</p>
                <p className="skill-name">{skill.name}</p>
                <ProgressBar proficiency={skill.proficiency} />
              </motion.div>
            ))}
          </AnimatePresence>
          
        </motion.div>
      );
    } else if (activeTab === 'Databases') {
      return (
        <motion.div
          className="skills-container"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
        >
          <AnimatePresence>
            {Databases.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-item"
                variants={iconVariants}
                exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
              >
                <p className='skill-icon'>{skill.icon}</p>
                <p className="skill-name">{skill.name}</p>
                <ProgressBar proficiency={skill.proficiency} />
              </motion.div>
            ))}
          </AnimatePresence>
          
        </motion.div>
      );
    }
  };

  return (
    <section id="skills">
      <div className="button-container2">
        <button
          className={`tab-button ${activeTab === 'front' ? 'active' : ''}`}
          onClick={() => handleTabChange('front')}
        >
          Frontend
        </button>
        <button
          className={`tab-button ${activeTab === 'Backend' ? 'active' : ''}`}
          onClick={() => handleTabChange('Backend')}
        >
          Backend
        </button>
        <button
          className={`tab-button ${activeTab === 'Databases' ? 'active' : ''}`}
          onClick={() => handleTabChange('Databases')}
        >
          Databases
        </button>
        {/* Add more tab buttons as needed */}
      </div>
      {renderContent()}
    </section>
  );
};

export default Skills;