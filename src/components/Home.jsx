import React, { useState } from 'react';
import ReactTyped from "react-typed";
import '../components/css/tailwind.css';

const Home = () => {
  const [typedText, setTypedText] = useState('');

  return (
    <section id='Home' className="bg-HOME-BG h-[100vh]">
      <div className="md:flex space-x-20 justify-center text-center ">
        <div className="justify-center align-center flex-col p-6">
          <h1 className="text-white lg:text-[4rem] text-[2rem] pt-[8rem]">Hello there I'm</h1>
        
          <p className="text-custom-red lg:text-[6rem] text-[2.5rem] tracking-tighter leading-none pb-8">
          Mark James Espinosa
          </p>
          <hr className='lg:w-[70%] w-[90%] h-[20px]  m-auto pt-8 text-custom-red' />
        
          <p className="text-white text-[1rem] lg:text-[2rem]"><ReactTyped
               strings={[
                '<span class="front-end-text">Front End</span>',
                '<span class="back-end-text">Back End</span>',
                'Full Stack Developer',
              ]}
              typeSpeed={5}
              backSpeed={5}
              onStringTyped={(text) => setTypedText(text)}
              showCursor={false} 
            /></p>
        </div>
      </div>
    </section>
  );
};

export default Home;
