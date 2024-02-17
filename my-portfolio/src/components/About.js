import React, { useState, useEffect } from 'react';
import './About.css';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  const [activeTab, setActiveTab] = useState('Hello');
  const [sectionContent, setSectionContent] = useState({
    Hello: `"At a certain level, it becomes less about skill and more about being opem. To the world, to yourself, to other people."
    That was quote from the show "The Bear". I think it applies to everything in life, things that teach us the most are usually around us, in the world.
    It's wonderful how much we can learn, just by paying attention to our surroundings and people around us.
    My name is Leevi Kauranen, also known as Lele. I am a second-year student pursuing a degree in Information and Communication Technology. I am currently seeking an internship position
    for the summer of 2024 to gain valuable work experience 
    and what i described on the beginning of this text, an environment to learn from. `,
    About: `Im 25 year old student living in Jyväskylä. On my freetime i enjoy listening to music, collecting vinyl records, working out and playing ukulele.
     My new years resolution for 2024 was to read more books.
      Im also really into photography and would really like to get into that scene someday.
      `,
    Future: `I am on track to graduate in 2025, with my primary focus being on development and cybersecurity. 
    I am currently refining my skills in React JS, TypeScript, docker, and ethical hacking. 
    My goal is to contribute effectively and adapt swiftly to emerging challenges in the ever-changing tech industry." `
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
