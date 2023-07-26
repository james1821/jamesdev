import React, { useState } from 'react';
import '../components/css/tailwind.css';
import {TypeAnimation} from '../../node_modules/react-type-animation';



const Home = () => {
 

  return (
    <section id='Home' className="bg-HOME-BG h-[100vh] w-full">
      <div className="md:flex space-x-20 justify-center text-center ">
        <div className="justify-center align-center flex-col p-6">
          <h1 className="text-white lg:text-[4rem] text-[2.5rem] pt-[8rem]">Hello there I'm</h1>
        
          <p className="text-custom-red lg:text-[6rem] text-[3.5rem] tracking-tighter leading-none pb-8">
          Mark James Espinosa
          </p>
          <hr className='lg:w-[70%] w-[90%] h-[20px]  m-auto pt-8 text-custom-red' />
        
          <p className="text-white text-[1.5rem] lg:text-[2rem]">
          <TypeAnimation
          sequence={['Front End',200, 'Back End',200, 'Full Stack Developer']}
          speed={70}
          deletionSpeed={100}
          style={{ fontSize: '1em', display: 'inline-block' }}
          cursor = {false}
        
        />
           </p>  
        </div>
      </div>
    </section>
  );
};

export default Home;
