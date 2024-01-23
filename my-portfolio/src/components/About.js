import React, { useState, useEffect } from 'react';
import './About.css';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  const [activeTab, setActiveTab] = useState('Hello');
  const [sectionContent, setSectionContent] = useState({
    Hello: 'Hey! my name is Leevi Kauranen, also known as Lele. Im a second year information - and communication technology student. Im looking for a internship position for summer 2024 where i can get some valuable work experience and develope my skills.',
    About: 'Im 25 year old student living in Jyväskylä. On my freetime i enjoy listening to music, collecting vinyl records, working out and playing ukulele. Im very positive dude and i try to spread that positivity around. I enjoy learning new things and i get a rush from self development, thats one of the main things i love about tech industry, its always growing and pushing to learn',
    Future: 'I,m aiming to graduate in 2025, my main focus right now is on web dev but im also very interested in cybersecurity and programming. Right now learning React JS, TS and ethical hacking. '
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
