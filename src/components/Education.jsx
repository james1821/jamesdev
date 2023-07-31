import * as React from 'react';
import { Chrono } from '../../node_modules/react-chrono';
import { Slide } from '../../node_modules/react-awesome-reveal';
import Clsulogo from './images/clsu-logo.png';
import 'animate.css';

const Education = () => {
  const primary = '#86C232';
  return (
    <section id="Education" className="bg-primary-bg h-full">
      <h1 className="text-center text-2xl md:text-4xl font-bold pb-4 pt-12 text-primary">Education</h1>

      <Chrono
        mode="VERTICAL_ALTERNATING"
        scrollable={{ scrollbar: true }}
        theme={{
          primary: primary,
          secondary: primary,
          cardBgColor: 'grey',
          titleColor: 'white',
          titleColorActive: 'white',
          cardTitleColor: primary,
        }}
      >
      
          <Slide direction='left' >
            <div className='flex-col justify-center items-center  '>
      
              <img className='md:w-[20%] w-[100px] m-auto' src={Clsulogo} alt="crt-logo"  /> 
             
                  <h2 className='text-center  font-bold'> Central Luzon State University 
                  <br/> <span className='font-normal'>2019-2023</span>
                  <br/> <span className='pt-2 font-normal'>Bachelor of Science in Information Technology</span>
                  </h2>
        

            </div>

          </Slide>
         

          <Slide direction='right'>
            <div>
                  <h2> Hello James</h2>
             </div>
          </Slide>
             
         
      </Chrono>
    </section>
  );
};

export default Education;
