import React from "react";
import Project from "./Projects";
import RMS from "../images/APCBA_RMS.png";

const Works = () => {
  const projects = [
    {
      title:
        "Web-Based Record Management System with Two-factor Authentication",
      imageSrc: RMS,
      description:
        "A Web-based System for Asia Pacific College of Business and Art in Rizal Nueva Ecija as part of my undergraduate capstone/thesis. The objective of this project is to streamline record management.",
      techStack: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
      ],
    },
    {
      title: "Project 2",
      imageSrc: RMS,
      description: "Description of Project 2...",
      techStack: [],
    },
  ];

  return (
    <section id="Works" className="bg-primary-bg">
      <h1 className="text-center md:text-center text-6xl md:text-7xl font-bold py-10 text-primary">
        Projects
      </h1>
      <div className=" flex md:flex-row justify-center gap-10 flex-col h-[50%] ">
        {projects.map((project, index) => (
          <Project {...project} key={`project-${index}`} />
        ))}
      </div>
    </section>
  );
};

export default Works;
