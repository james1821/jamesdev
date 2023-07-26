import React, { Component } from 'react';
import PointingImage from './images/pointing_up.jpg';



class About extends Component {
  render() {
    const { MyData } = this.props;
    
    return (
      <section id='About' className='h-full bg-[#000000]'>
        <div className="lg:flex-row flex-col ">
          <div className="lg:w-1/2 p-2">
            <div className="text-center text-white">
              <h2 className='text-2xl font-bold pb-4 pt-4  '>About Me</h2>
              <p className='md:text-4xl'>{MyData.AboutMe}</p>
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
