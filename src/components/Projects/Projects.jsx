import React from 'react';

const Project = ({ title, videoSrc, imageSrc, description, techStack }) => {
  return (
    <div className='flex-col bg-secondary md:w-1/3 w-full text-white text-center round'>
      {videoSrc ? (
        <iframe className='m-auto w-full h-[300px]' src={videoSrc} title={title}></iframe>
      ) : (
        <img className='m-auto w-full h-[300px]' src={imageSrc} alt="Project" />
      )}
      <h1 className='text-2xl p-4 text-primary'>{title}</h1>
      <p className='p-4'>{description}</p>
      <h1 className='text-primary text-2xl'>Tech Stack Used</h1>
      <div className='flex justify-center items-center gap-3 p-4'>
        {techStack.map((tech, index) => (
          <img className='w-[50px]' src={tech} alt={`tech-${index}`} key={`tech-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Project;
