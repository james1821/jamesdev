import React, { Component } from 'react';
import PointingImage from './images/pointing_up.jpg';



class About extends Component {
  render() {
  
    
    return (
      <section id='About' className='h-full bg-[#000000]'>
        <div className="lg:flex-row flex-col ">
          <div className="lg:w-1/2 p-2">
            <div className="text-center text-white">
              <h2 className='text-2xl font-bold pb-4 pt-4  '>About Me</h2>
              <p className='md:text-4xl'>I am a fresh graduate of Bachelor of Science in Information Technology (BSIT) 
              from Central Luzon State University (CLSU). 
              <span className="text-custom-red"> I love learning </span> new technologies and <span className="text-custom-red">
                building useful and cool things</span> with it.</p>
            </div>
          </div>

          <div className="w-full flex items-center justify-center ">
            <div className="">
              <img src={PointingImage} alt="Slideshow" className="m-auto w-[60%] h-full" />
            </div>
          </div>
        </div>
        
      
      </section>
    );
  }
}

export default About;
