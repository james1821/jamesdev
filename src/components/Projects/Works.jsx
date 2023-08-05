import React from 'react';
import Project from './Projects';

const Works = () => {

  const projects = [
    {
      title: 'Web-Based Record Management System with Two-factor Authentication',
      videoSrc: 'https://www.youtube.com/embed/tftEN5Zgtro',
      description: "A Web-based System that I proposed and developed for Asia Pacific College of Business and Art in Rizal Nueva Ecija as part of my undergraduate capstone/thesis. The objective of this project is to streamline manual record management and digitalize student records",
      techStack: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
       
      ],
    },
    {
      title: 'Project 2',
      imageSrc: 'https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=',
      description: 'Description of Project 2...',
      techStack: [
      
      ],
    },

  ];

  return (
    <section id='Works' className='bg-primary-bg'>
      <h1 className='text-center md:text-center text-6xl md:text-7xl font-bold pb-10 pt-10 text-white'>Projects</h1>
      <div className=' flex md:flex-row justify-center gap-10 sm:flex-col md:w-[80%] w-[90%] h-[50%] '>
        {projects.map((project, index) => (
          <Project {...project} key={`project-${index}`}  />
        ))}
      
      </div>
    </section>
  );
};

export default Works;
