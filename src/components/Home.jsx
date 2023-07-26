import React, { useState } from 'react';
import '../components/css/tailwind.css';
import {TypeAnimation} from '../../node_modules/react-type-animation';



const Home = () => {
 

  return (
    <section id='Home' className="bg-HOME-BG h-[100vh] w-full">
      <div className="md:flex space-x-20 justify-center text-center ">
        <div className="justify-center align-center flex-col p-6">
          <h1 className="text-white lg:text-[4rem] text-[2rem] pt-[8rem]">Hello there I'm</h1>
        
          <p className="text-custom-red lg:text-[6rem] text-[2.5rem] tracking-tighter leading-none pb-8">
          Mark James Espinosa
          </p>
          <hr className='lg:w-[70%] w-[90%] h-[20px]  m-auto pt-8 text-custom-red' />
        
          <p className="text-white text-[1rem] lg:text-[2rem]">
          <TypeAnimation
          sequence={['Front End',300, 'Back End',300, 'Full Stack Developer']}
          speed={40}
          deletionSpeed={40}
          style={{ fontSize: '1em', display: 'inline-block' }}
        
        />
           </p>  
        </div>
      </div>
    </section>
  );
};

export default Home;
