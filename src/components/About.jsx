import React, { Component } from 'react';
import JMImage from './images/JM.jpg';

class About extends Component {
  render() {
    const { MyData } = this.props;
    
    return (
      <section id='About' className='h-[100vh] bg-white'>
        <div className="lg:flex-row flex-col ">
          <div className="lg:w-1/2 p-2">
            <div className="text-center text-black">
              <h2 className='text-2xl font-bold pb-4'>About Me</h2>
              <p>{MyData.AboutMe}</p>
            </div>
          </div>

          <div className="w-1/2 flex items-center justify-center">
            <div className="">
              <img src={JMImage} alt="Slideshow" className="w-[200px] h-[200px]" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
