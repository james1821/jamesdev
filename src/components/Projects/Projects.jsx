import React from "react";

const Project = ({ title, videoSrc, imageSrc, description, techStack }) => {
  return (
    <div className="flex-col bg-secondary md:w-1/3 w-full text-white text-center round">
      {videoSrc ? (
        <iframe
          className="m-auto w-full h-[300px]"
          src={videoSrc}
          title={title}
        ></iframe>
      ) : (
        <img
          className="m-auto w-auto h-[20%] lg:h-[40%]"
          src={imageSrc}
          alt="Project"
        />
      )}

      {/* button for view code */}
      <div className="flex justify-center items-center gap-12 p-4">
        <a
          href="#_"
          class="relative p-2 overflow-hidden font-[1rem] text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
        >
          <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span class="relative transition-colors duration-300 delay-200 group-hover:text-primary">
            View Code
          </span>
        </a>

        {/* button for view site */}
        <a
          href="#_"
          class="relative p-2 overflow-hidden font-[1rem] text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
        >
          <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span class="relative transition-colors duration-300 delay-200 group-hover:text-primary">
            View Site
          </span>
        </a>
      </div>
      <div className="px-3">
        <h1 className="text-2xl p-1 text-primary">{title}</h1>

        <p className="p-1">{description}</p>
      </div>
      <div className="flex justify-center items-center gap-3 pt-4">
        {techStack.map((tech, index) => (
          <img
            className="w-[40px]"
            src={tech}
            alt={`tech-${index}`}
            key={`tech-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
