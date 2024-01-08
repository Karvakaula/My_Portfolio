import React, { useState, useEffect } from 'react';
import './About.css';
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  const [activeTab, setActiveTab] = useState('Hello');
  const [sectionContent, setSectionContent] = useState({
    Hello: 'Hey! my name is Leevi Kauranen. Im a second year information - and communication technology student. Im looking for a internship position for summer 2024 where i can get some valuable work experience and develope my skills.',
    About: 'Im 25 year old student living in Jyväskylä. On my freetime i enjoy listening to music, collecting vinyl records, working out and playing ukulele. As a person im positive and open minded, i try to spread that positivity around as mutch as i can.',
    
  });
  
  const [resetAnimation, setResetAnimation] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setResetAnimation(true);
  };

  
  const onAnimationComplete = () => {
    setResetAnimation(false);
  };

  return (
    <section id="about">
      <div className="button-container">
        {Object.keys(sectionContent).map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="content">
      <p><TypeAnimation
        key={activeTab} 
        sequence={[sectionContent[activeTab]]}
        speed={90}
        onComplete={onAnimationComplete}
        reset={resetAnimation}
        style={{ fontSize: '1em' }}
      /></p>
      </div>
    </section>
  );
};

export default About;
