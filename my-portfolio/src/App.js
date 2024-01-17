
import './App.css';
import Navbar from "./components/Navbar";
import Main from './components/Main';
import Header from './components/Header';
import About from './components/About.js';
import ProjectsGrid from './components/ProjectsGrid';
import Skills from './components/Skills.js';
import { Slide } from "react-swift-reveal";
import React, { useState } from 'react';

const Portfolio = () => {
  

    const sections = [
      { id: 'header', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'projects', label: 'Projects' }
    ];
  return (
      <div className="app">
        <Navbar sections={sections} />
      <Main>   
          <Header />
        <About />
        <Skills />
        <ProjectsGrid />
      </Main>
    </div>
  );
   
  
};

export default Portfolio;
