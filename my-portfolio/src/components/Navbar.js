import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';


const Navbar = ({ sections, onPageChange  }) => {
  const [activeSection, setActiveSection] = useState('Home');
  const changeSection = (section) => {
    setActiveSection(section);
  };
  
  const handleSetActive = (to) => {
    setActiveSection(to);
    const button = document.getElementById(`button-${to}`);
    if (button) {
      button.classList.add('active');
    }
    console.log(`${to} is now active`);
  };

  const handleSetInactive = () => {
    const button = document.getElementById(`button-${activeSection}`);
    if (button) {
      button.classList.remove('active');
    }
    console.log(`${activeSection} is now inactive`);
  };

  return (
    <nav id="nav">
      <p>Leevi Kauranen</p>
      <div id="container">
      {sections.map((section) => (
        <Link
          key={section.id}
          to={section.id}
          smooth={true}
          duration={500}
          spy={true}
          offset={-50}
          onSetActive={() => handleSetActive(section.id)}
          onSetInactive={() => handleSetInactive()}
        >
          <button id={`button-${section.id}`}>{section.label}</button>
        </Link>
      ))}
      </div>
    </nav>
  );
};


export default Navbar;
