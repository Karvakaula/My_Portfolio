// Skills.js

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faPython, faNode } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './Skills.css'; // Don't forget to create this CSS file for styling
import ProgressBar from './ProgressBar';
import { motion, AnimatePresence } from 'framer-motion';
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";


const frontData = [
    {
        name: 'HTML',
        icon: <FontAwesomeIcon icon={faHtml5} />,
        proficiency: 'Advanced',
      },
      {
        name: 'CSS',
        icon: <FontAwesomeIcon icon={faCss3} />,
        proficiency: 'Advanced',
      },
      {
        name: 'TailwindCSS',
        icon: <SiTailwindcss /> ,
        proficiency: 'Beginner',
      },
      {
        name: 'React',
        icon: <FontAwesomeIcon icon={faReact} />,
        proficiency: 'Intermediate',
      }
      
      
];
const backData = [
    {
      name: 'Python',
      icon: <FontAwesomeIcon icon={faPython} />,
      proficiency: 'Good',
    },
    {
      name: 'JavaScript',
      icon: <FontAwesomeIcon icon={faJs} />,
      proficiency: 'Good',
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript />,
      proficiency:'beginner',
    },
    {
      name: 'NodeJS',
      icon: <FontAwesomeIcon icon={faNode} />,
      proficiency: 'Intermediate',
    },
    {
      name: 'Node Express',
      icon: <FontAwesomeIcon icon={faNode} />,
      proficiency: 'Good',
    },
    
    
];
const Databases = [
  {
    name: 'Mysql',
    icon: <SiMysql />,
    proficiency: 'Intermediate',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb />,
    proficiency: 'Intermediate',
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
                {/*<ProgressBar proficiency={skill.proficiency} />*/}
                <p className='knowledge'>{skill.proficiency}</p>
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
                <p className='knowledge'>{skill.proficiency}</p>
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
                <p className='knowledge'>{skill.proficiency}</p>
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