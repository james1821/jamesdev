import * as React from 'react';
import { Chrono } from 'react-chrono';
import { Slide } from 'react-awesome-reveal';
import 'animate.css';

const Education = () => {
  const customRed = '#86C232';

 
  const timelineItems = [
    {
      title: '2017-2019',
      cardTitle: 'CRT',
      cardSubtitle: 'Subtitle for Card 1',
      cardDetailedText: 'Details about Card 1',
      
    },
    {
      title: '2019-2023',
      cardTitle: 'CLSU',
      cardSubtitle: 'Subtitle for Card 1',
      cardDetailedText: 'Details about Card 1',
      
    },
   
  ];

  return (
    <section id="Education" className="bg-primary-bg h-full">
      <h1 className="text-center text-2xl md:text-4xl font-bold pb-4 pt-12 text-primary">Education</h1>

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
        {timelineItems.map((item, index) => (
          <Slide key={index}>
            <div>
              <h2>{item.title}</h2>
              <h3>{item.cardTitle}</h3>
              <p>{item.cardSubtitle}</p>
            </div>
          </Slide>
        ))}
      </Chrono>
    </section>
  );
};

export default Education;
