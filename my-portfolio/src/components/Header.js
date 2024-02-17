import React, { useState, useEffect } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import profileImage from './imgs/logo2.png'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Slide } from "react-swift-reveal";

const Header = () => {
  const [imageAnimationDone, setImageAnimationDone] = useState(false);

  useEffect(() => {
   
    setTimeout(() => {
      setImageAnimationDone(true);
    },800);
  }, []);
  return (
   
      
      <header id="header">
      <div className="infocontainer_top">
      <Slide left duration={700} delay={0} >
      <img id="profile-image" src={profileImage} alt="Profile" />
      </Slide>
            <Slide right duration={700} delay={0}>
              <span REFL="Upcoming ICT engineer">Upcoming ICT engineer</span>
              </Slide>
      </div>
      <div className="infocontainer_bott">
      
      
      
            {imageAnimationDone && (
              <>
              <Slide right duration={700} delay={0}>
              <ul id="links">
              <li>
              <a target="_blank" href="https://github.com/Karvakaula/My_Projects" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              
            
            
              <li>
            <a target="_blank" href="https://www.linkedin.com/in/leevi-kauranen-a600151bb/" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            </li>
            
             
             
        </ul>
        <span ><FontAwesomeIcon icon={faEnvelope} /> Leevi.kauranen@gmail.com</span>
        
        </Slide>
        </>
             )}
             

      </div>
      
    </header>
  );
};

export default Header;
