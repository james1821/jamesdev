import * as React from 'react';
import { Chrono } from "react-chrono";
import { Slide } from "../../node_modules/react-awesome-reveal";
import crtImage from './images/crt.jpg';
import collegeImage from './images/college.jpg';
import 'animate.css';


const Education = () => {
    const customRed = '#86C232'; 
  
  return (
   <section id='Education' className='bg-primary-bg h-full md:pt-56 ' >
   <h1 className='text-center text-2xl md:text-4xl font-bold pb-4 pt-12 text-primary '>Education</h1>


  <Chrono 
  mode="VERTICAL_ALTERNATING"
  scrollable={{ scrollbar: true }} 
   theme={{
     primary: customRed,
     secondary: customRed,
     cardBgColor: 'grey',
     titleColor: 'white',
     titleColorActive: 'white',
     cardTitleColor: customRed,
   }}

  >
        <Slide> <div>
            <div style={{ width: "100%", height: "100%" }}>
              <img
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt="test"
                src={crtImage}
              />
            </div>
          </div>
          </Slide>


          <Slide> <div>
            <div style={{ width: "100%", height: "100%" }}>
              <img
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt="test"
                src={collegeImage}
              />
            </div>
          </div>
          </Slide>
      </Chrono>

        
   </section>
  )
}

export default Education
