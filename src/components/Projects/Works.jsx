import React from "react";
import Project from "./Projects";
import RMS from "../images/APCBA_RMS.png";
import HoneyShop from "/img/HoneyShop.png";
const Works = () => {
  const TechStack = {
    Tailwind:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    JS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    React:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
  };

  const projects = [
    {
      title:
        "Web-Based Record Management System with Two-factor Authentication",
      imageSrc: RMS,
      DemoLink: "",
      CodeLink: "",
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
      title: "Handmade By Honey",
      imageSrc: HoneyShop,
      DemoLink: "https://honey-shop-ten.vercel.app/",
      CodeLink: "https://github.com/james1821/Honey_Shop",
      description:
        "A website made using React for a small flower and money bouquet business.",
      techStack: [
        TechStack.React,
        TechStack.JS,
        TechStack.Tailwind,
        TechStack.HTML,
      ],
    },
  ];

  return (
    <section id="Works" className="bg-primary-bg">
      <h1 className="text-center md:text-center text-6xl md:text-8xl font-bold py-10 text-primary">
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
