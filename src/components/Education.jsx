import * as React from 'react';
import { Chrono } from '../../node_modules/react-chrono';
import { Slide } from '../../node_modules/react-awesome-reveal';
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
       
          <Slide >
            <div>
             <div>
                  <h2> Hello World</h2>
             </div>
            </div>

            <div>
             <div>
                  <h2> Hello James</h2>
             </div>
            </div>
          </Slide>
      </Chrono>
    </section>
  );
};

export default Education;
