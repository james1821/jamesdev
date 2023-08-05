import * as React from 'react';
import { Chrono } from '../../node_modules/react-chrono';
import { Slide } from '../../node_modules/react-awesome-reveal';
import Clsulogo from './images/clsu-logo.png';
import 'animate.css';
import ResizableImage from './/tools/Resize';

const Background = () => {
  const primary = '#86C232';
  const background = [
    {
      title: 'College for Research and Technology',
      year: '2017-2019',
      pos: 'Information Communication Technology (ICT)',
      imageurl: 'https://crt.edu.ph/img/CRT2.png',
      imageSize:'100px',
      imageSizeDesktop:'200px' 
    },
    {
      title: 'Central Luzon State University',
      year: '2019-2023',
      pos: 'Bachelor of Science in Information Technology (BSIT)',
      imageurl: Clsulogo,
      imageSize:'100px',
      imageSizeDesktop:'200px' 
    },
    {
      title: 'IPhiTech',
      year: 'February 2023 - June 2023',
      pos: 'Web Developer Intern',
      imageurl:"https://iphitech.com/wp-content/uploads/2023/02/iPhitech-logo-colored-1024x238.png",
      desc:'Developed front-end website from design mockup using HTML, CSS and JavaScript',
      imageSize:'300px',
      imageSizeDesktop:'300px' 
    }
  ];

  return (
    <section id="Background" className="bg-primary-bg h-full">
      <h1 className="text-center md:text-center text-4xl md:text-7xl font-bold pb-4 pt-20 text-primary">Background</h1>
     

      <div className='m-auto md:w-[70%] '>
        <Chrono 
          mode="VERTICAL"
          hideControls={true}
          theme={{
            primary: primary,
            secondary: primary,
            cardBgColor: 'grey',
            titleColor: 'white',
            titleColorActive: 'white',
            cardTitleColor: primary,
           innerHeight: 500
          }}
        >
          {background.map((backgrounds) => (
            <Slide direction='left' triggerOnce="true" key={backgrounds.title}>
              <div className='flex-col justify-center items-center'>
                <img className={`md:w-[${backgrounds.imageSizeDesktop}] w-[${backgrounds.imageSize}] m-auto`} src={backgrounds.imageurl} alt="bg-logos" loading="lazy" />
                <h2 className='text-center text-white    md:text-2xl font-bold'>{backgrounds.title}<br /> <span className='font-normal'>{backgrounds.year}</span><br /> <span className='pt-2 font-normal'>{backgrounds.pos}</span>
                 <br /> <span className='font-normal '>{backgrounds.desc} </span></h2>
              </div>
            </Slide>
          ))}
        </Chrono>
      </div>
    </section>
  );
};

export default Background;
