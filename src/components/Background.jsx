import * as React from 'react';
import { Chrono } from '../../node_modules/react-chrono';
import { Slide } from '../../node_modules/react-awesome-reveal';
import Clsulogo from './images/clsu-logo.png';
import 'animate.css';

const Background = () => {
  const primary = '#86C232';
  return (
    <section id="Background" className="bg-primary-bg h-full">
      <h1 className="text-left md:text-center text-4xl md:text-6xl font-bold pb-4 pt-20 text-primary">Background</h1>

      <Chrono
        mode="VERTICAL_ALTERNATING"
        scrollable={{ scrollbar: false }}
        theme={{
          primary: primary,
          secondary: primary,
          cardBgColor: 'grey',
          titleColor: 'white',
          titleColorActive: 'white',
          cardTitleColor: primary,
        }}
      >


<Slide direction='left'>
          <div className='flex-col justify-center items-center  '>
      
          <img  className='md:w-[200px] w-[100px] m-auto' src="https://crt.edu.ph/img/CRT2.png" alt="crtlogo" />
     
          <h2 className='text-center md:text-2xl font-bold'>College for Research and Technology
          <br/> <span className='font-normal'>2018-2019</span>
          <br/> <span className='pt-2 font-normal'>Information Communication Technology</span>
          </h2>


    </div>
          </Slide>
      
          <Slide direction='right' >
            <div className='flex-col justify-center items-center  '>
      
              <img className='md:w-[200px] w-[100px] m-auto' src={Clsulogo} alt="crt-logo"  /> 
             
                  <h2 className='text-center md:text-2xl font-bold'> Central Luzon State University 
                  <br/> <span className='font-normal'>2019-2023</span>
                  <br/> <span className='pt-2 font-normal'>Bachelor of Science in Information Technology</span>
                  </h2>
        

            </div>

          </Slide>
          

         
             
         
      </Chrono>
      <h1 className="text-left md:text-center  text-4xl md:text-6xl font-bold pb-4 pt-12 text-primary">Experience</h1>
      <Chrono
      mode="VERTICAL_ALTERNATING"
        scrollable={{ scrollbar: false }}
        theme={{
          primary: primary,
          secondary: primary,
          cardBgColor: 'grey',
          titleColor: 'white',
          titleColorActive: 'white',
          cardTitleColor: primary,
        }}
      >

    
      </Chrono>
    

    </section>
  );
};

export default Background;
