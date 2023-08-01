import React from 'react';
import PointingImage from './images/pointing_up.jpg';
import { Slide } from "../../node_modules/react-awesome-reveal";
import 'animate.css';


const About = () => {


  return (
    <section id='About' className='h-full bg-[#000000]'>
      <div className="lg:flex flex-column pt-20 ">
        <div className="lg:w-3/4 p-2 md:pl-20">
          <div className="text-center text-white lg:p-20 p-4">
            <h2 className='text-4xl md:text-6xl font-bold pb-4 pt-4 text-primary '>About Me</h2>
            <p className='md:text-2xl'>I am a fresh graduate of Bachelor of Science in Information Technology (BSIT) 
            from Central Luzon State University (CLSU). <span className="text-primary"> I love learning </span>
            new technologies and <span className="text-primary"> building useful and cool things</span> with it.</p>
          </div>
        </div>
       

<div className="w-full md:pt-20  text-white" >


<Slide direction="right">
<img src={PointingImage} alt="mePointingImage" className=" m-auto w-[60%] md:w-[40%] h-full" loading="lazy" />
</Slide>    
      
 </div>
        
      </div>
    </section>
  );
};

export default About;
