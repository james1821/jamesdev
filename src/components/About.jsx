import React from 'react';
import PointingImage from './images/pointing_up.jpg';


const About = () => {
  

  return (
    <section id='About' className='h-full bg-[#000000]'>
      <div className="lg:flex flex-column ">
        <div className="lg:w-3/4 p-2 md:p-0">
          <div className="text-center text-white lg:p-20 p-4">
            <h2 className='text-2xl md:text-4xl font-bold pb-4 pt-4 text-custom-red '>About Me</h2>
            <p className='md:text-3xl'>I am a fresh graduate of Bachelor of Science in Information Technology (BSIT) 
            from Central Luzon State University (CLSU). <span className="text-custom-red"> I love learning </span>
            new technologies and <span className="text-custom-red"> building useful and cool things</span> with it.</p>
          </div>
        </div>
        
        <div className="w-full">
          <img src={PointingImage} alt="Slideshow" className="m-auto w-[60%] md:w-[40%] h-full" />
        </div>
      </div>
    </section>
  );
};

export default About;
