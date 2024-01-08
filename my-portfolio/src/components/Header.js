import React, { useState, useEffect} from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';


const Header = () => {
  const downloadCV = (file) => {
    const link = document.createElement('a');
    link.href = `./files/${file}`; // Replace with the actual path to your CV
    link.download = `${file}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log(link.href)
  };
  const downloadFile = (file) => {
    window.location.href = `./files/${file}`
  }
  return (
    <header id="header">
      <div className="container">
       
        <h1>Leevi Kauranen</h1>
        <span>Upcoming ICT engineer</span>
      </div>
      <ul id="links">
        <li>
          <a
            target= "blank"
            href="https://github.com/Karvakaula/My_Projects"
          >

          <FontAwesomeIcon icon={faGithub} /> 
          </a> 
          </li>
          <li>
          <a
            target= "blank"
            href="https://www.linkedin.com/in/leevi-kauranen-a600151bb/"
          >

          <FontAwesomeIcon icon={faLinkedin} /> 
          </a> 
          </li>
          <li>
          <button className="download-cv-button"  onClick={() => downloadCV('CV_Leevi.pdf')}>
            Download CV
          </button>
          
        </li>
      </ul>
      
    </header>
  );
};

export default Header;
