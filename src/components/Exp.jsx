import React from "react";
import Background from "./Background";
import Certificates from "./Certificates";
import { Fade } from "react-awesome-reveal";
function Exp() {
  return (
    <div id="Background" className="lg:py-20 bg-[#000000]">
      <Fade>
        <h1 className=" text-center md:text-center text-6xl md:text-8xl font-bold pb-4 pt-10 text-primary bg-[#000000]">
          Background
        </h1>
      </Fade>
      <div className="flex flex-col lg:flex-row justify-start bg-[#000000]">
        <div className="w-full lg:w-1/2 lg:pl-10">
          <Fade>
            <h1 className="text-center md:text-center text-3xl md:text-4xl font-bold pb-4 pt-10 text-white md:whitespace-nowrap">
              Education and Work Experience
            </h1>
            <Background />
          </Fade>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-10">
          <Fade>
            <h1 className="text-center md:text-center text-3xl md:text-4xl font-bold pb-4 pt-10 text-white">
              Certificates
            </h1>
            <Certificates />
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Exp;
