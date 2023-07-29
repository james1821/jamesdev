import React, { useEffect, useRef, useState } from 'react';
import { AnimateKeyframes } from 'react-simple-animate';
import PointingImage from './images/pointing_up.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust the threshold value as per your preference
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id='About' className='h-full bg-[#000000]'>
      <div className="lg:flex flex-column ">
        <div className="lg:w-3/4 p-2 md:pl-20">
          <div className="text-center text-white lg:p-20 p-4">
            <h2 className='text-2xl md:text-4xl font-bold pb-4 pt-4 text-custom-red '>About Me</h2>
            <p className='md:text-2xl'>I am a fresh graduate of Bachelor of Science in Information Technology (BSIT) 
            from Central Luzon State University (CLSU). <span className="text-custom-red"> I love learning </span>
            new technologies and <span className="text-custom-red"> building useful and cool things</span> with it.</p>
          </div>
        </div>
        
        <div className="w-full md:pt-20 " ref={sectionRef} >
         
                <img src={PointingImage} alt="mePointingImage" className="m-auto w-[60%] md:w-[40%] h-full" loading="lazy" />
             
        </div>
      </div>
    </section>
  );
};

export default About;
