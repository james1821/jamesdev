import React from "react";
import Background from "./Background";
import { Fade } from "react-awesome-reveal";
function Exp() {
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

  return (
    <div id="Background" className="lg:py-20 bg-[#000000]">
      <Fade>
        <h1 className=" text-center md:text-center text-6xl md:text-8xl font-bold pb-4 pt-10 text-primary bg-[#000000]">
          Background
        </h1>
        <div className="flex flex-col lg:flex-row justify-start bg-[#000000]">
          <div className="w-full lg:w-1/2 lg:pl-10">
            <h1 className="text-center md:text-center text-3xl md:text-4xl font-bold pb-4 pt-10 text-white">
              Education and Work Experience
            </h1>
            <Background />
          </div>
          <div className="w-full lg:w-1/2 lg:pr-10 flex flex-col">
            <h1 className="text-center text-3xl md:text-4xl font-bold pb-4 pt-10 text-white">
              Tech Stack
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
          </div>
        </div>
      </Fade>
    </div>
  );
}

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

export default Exp;
