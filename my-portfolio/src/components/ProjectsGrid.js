// ProjectsGrid.js

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard'; // Create this component separately
import './ProjectsGrid.css'; // Import the CSS file for styling

const projects = [
  // Array of project data
  {
    id: 1,
    title: 'Fullstack app',
    description: 'This app was my final project for fullstack course, during it i learned alot about usind Node Express, Api endpoints, MongoDB, and a litle bit about user authentication, password encryption using Bcrypt etc.',
    link: 'https://github.com/Karvakaula/My_Projects/tree/main/Fullstack/Harjoitusty%C3%B6 ',
    img: './imgs/Bookreview.png',
  },
  {
    id: 2,
    title: 'CarRepair page',
    description: 'This project was created for my databases course with 2 group members. In this project we used php, mySQL, html and css. I was in charge of the database connection and using php to input and output data out of SQL db',
    link: 'https://github.com/Karvakaula/My_Projects/tree/main/Fullstack/Harjoitusty%C3%B6 ',
    img: './imgs/CarRepair.png',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 5,
    title: 'Basics of Python programming',
    description: 'All of tutorials in my course Basics of Programming. in this course we learned the basics of python.',
    link: 'https://github.com/Karvakaula/My_Projects/tree/main/Basics%20of%20python%20Course',
    img: './imgs/Pyth.jpg',
  },
  // Add more projects
];

const ProjectsGrid = () => {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {projects.map((project) => (
        
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
};

export default ProjectsGrid;