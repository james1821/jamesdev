import React from "react";
import James from "/img/James.jpg";
import { Slide } from "../../node_modules/react-awesome-reveal";
import "animate.css";

const About = () => {
  return (
    <section id="About" className="h-full bg-[#000000]">
      <div className="lg:flex flex-row-reverse pt-20">
        <div className="lg:w-[90%] p-2  m-auto">
          <div className="text-center text-white  p-4">
            <h2 className="text-4xl md:text-6xl font-bold pb-4 pt-4 text-primary ">
              About Me
            </h2>
            <p className="md:text-2xl ">
              I am a fresh graduate of Bachelor of Science in Information
              Technology (BSIT) from Central Luzon State University (CLSU).{" "}
              <span className="text-primary"> I love learning </span>
              new technologies and{" "}
              <span className="text-primary">
                {" "}
                building useful and cool things
              </span>{" "}
              with it.
            </p>
          </div>
          <div className="flex justify-center items-center"></div>
        </div>

        <div className="w-full md:pt-20  ">
          <Slide direction="left">
            <img
              src={James}
              alt="James"
              className=" w-[60%] md:w-[40%]  m-auto  "
              loading="lazy"
            />
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default About;
