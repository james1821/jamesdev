import Project from "./Projects";
import RMS from "../images/APCBA_RMS.png";
import HoneyShop from "/img/HoneyShop.png";
import OtherProjects from "./OtherProjects";
import { Fade } from "react-awesome-reveal";
const Works = () => {
  const TechStack = {
    JavaScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
    Tailwind:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    React:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    NextJS:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg",
    MongoDB:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    MySql:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    NodeJS:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  };

  const techEntries = Object.entries(TechStack);
  const halfLength = Math.ceil(techEntries.length / 2);
  const firstColumn = techEntries.slice(0, halfLength);
  const secondColumn = techEntries.slice(halfLength);

  const projects = [
    {
      title:
        "Web-Based Record Management System with Two-factor Authentication",
      imageSrc: RMS,
      DemoLink: "http://apcba-demo.infinityfreeapp.com/admin/login.php",
      CodeLink: "https://github.com/james1821/APCBA_RMS",
      description:
        "A Web-based System for Asia Pacific College of Business and Art in Rizal Nueva Ecija as part of my undergraduate capstone/thesis. The objective of this project is to streamline record management.",
      techStack: [
        TechStack.PHP,
        TechStack.JavaScript,
        TechStack.HTML,
        TechStack.CSS,
        TechStack.MySql,
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
        TechStack.JavaScript,
        TechStack.Tailwind,
        TechStack.HTML,
      ],
    },
  ];

  return (
    <section id="Projects" className="bg-primary-bg">
      <Fade>
        <h1 className="text-center md:text-center text-6xl md:text-8xl font-bold pt-10 text-primary">
          Projects
        </h1>
      </Fade>
      <Fade>
        <div className=" flex md:flex-row justify-center gap-10 p-5  flex-col h-[50%] ">
          {projects.map((project, index) => (
            <Project {...project} key={`project-${index}`} />
          ))}
        </div>
      </Fade>
      <div className="">
        <div className="flex flex-col lg:flex-row justify-start">
          <div className="w-full lg:w-1/2 lg:pl-10 ">
            <Fade>
              <h1 className="text-center md:text-center text-3xl md:text-4xl font-bold pb-4 pt-10 text-white">
                Other Projects
              </h1>

              <OtherProjects />
            </Fade>
          </div>

          <div className="w-full lg:w-1/2 lg:pr-10 flex flex-col">
            <Fade>
              <h1 className="text-center text-3xl md:text-4xl font-bold pb-4 pt-10 text-white">
                My Tech Stack
              </h1>
              <div className="flex bg-secondary rounded-md p-2 m-3 h-[310px]">
                <div className="w-1/2 md:pl-10 ">
                  <ul>
                    {firstColumn.map(([tech, iconUrl]) => (
                      <TechStackItem key={tech} tech={tech} iconUrl={iconUrl} />
                    ))}
                  </ul>
                </div>
                <div className="w-1/2  md:pr-10">
                  <ul>
                    {secondColumn.map(([tech, iconUrl]) => (
                      <TechStackItem key={tech} tech={tech} iconUrl={iconUrl} />
                    ))}
                  </ul>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};
function TechStackItem({ tech, iconUrl }) {
  return (
    <li className="flex justify-center items-center text-white  font-bold ">
      <div className="flex justify-center items-center pb-2">
        {" "}
        <img src={iconUrl} alt={tech} width="50" height="50" />
        <span className="px-5">{tech}</span>
      </div>
    </li>
  );
}

export default Works;
