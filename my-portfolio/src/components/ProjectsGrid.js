// ProjectsGrid.js

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard'; // Create this component separately
import './ProjectsGrid.css'; // Import the CSS file for styling

const projects = [
  // Array of project data
  {
    id: 1,
    title: 'Book review page',
    description: 'This app was my final project for fullstack course, during it i learned alot about usind Node Express, Api endpoints, MongoDB, a little bit about user authentication and password encryption',
    link: 'https://github.com/Karvakaula/My_Projects/tree/main/Fullstack/Harjoitusty%C3%B6 ',
    img: './imgs/Bookreview.png',
  },
  {
    id: 2,
    title: 'CarRepair page',
    description: 'This project was created for my databases course with 2 group members. In this project we used php, mySQL, html and css. I was in charge of the database connection and using php to input and output data out of SQL db',
    link: 'https://github.com/Karvakaula/My_Projects/tree/main/Databases%20Course/harjoitusty%C3%B6 ',
    img: './imgs/CarRepair.png',
  },
  {
    id: 3,
    title: 'Mern deadline tracker',
    description: ' Did this litle project to create a app with react frontend using node express as backend and mongodb as a database. Added DnD feature to it just to play around with breautiful dnd a litle bit. might turn this to a kanban when i have more time',
    link: 'https://github.com/Karvakaula/My_Projects/tree/main/Mern_todo',
    img: './imgs/Todo.png',
  },
  {
    id: 4,
    title: '!UPCOMING! Book review page 2.0',
    description: 'Recreating bookreview page with react frontend',
    link: 'https://github.com/Karvakaula/My_Projects/tree/main/Bookreview2.0/bookreview',
    img: './imgs/bookreview2.0.png',
  },
  {
    id: 5,
    title: 'This web portfolio',
    description: 'I started this web portfolio as a way to learn react js and it turned out okey so i decided i will use it until next one. This project taught me alot about react basics, for example different hooks.',
    link: 'https://github.com/Karvakaula/My_Portfolio ',
    img: './imgs/portfolio.png',
  },
  {
    id: 6,
    title: 'Basics of Python programming',
    description: 'All of tutorials in my course Basics of Programming. in this course we learned the basics of python.',
    link: 'https://github.com/Karvakaula/My_Projects/tree/main/Basics%20of%20python%20Course',
    img: './imgs/Pyth.jpg',
  }
  // Add more projects
];

const ProjectsGrid = () => {
  return (
    
    <motion.div
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {projects.map((project) => (
        
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  
  );
};

export default ProjectsGrid;
