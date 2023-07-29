import * as React from 'react';
import { Chrono } from "react-chrono";


const Education = () => {
    const customRed = '#86C232'; 
    const items = [{
        title: "2017 - 2019",
        cardTitle: "College for Research and Technology (CRT)",
        media: {
          type: "IMAGE",
          source: {
            url: "https://img.freepik.com/free-photo/cherry-blossoms-fuji-mountain-spring-sunrise-shizuoka-japan_335224-110.jpg?w=1060&t=st=1690479875~exp=1690480475~hmac=4c4f292d82da4cc4eda4303137f2b7ce640f5182df2f53b8086789e5d21ec715"
          }
        }
      },
      {
        title:  "2019 - 2023",
        cardTitle: "Dunkirk",
      
        media: {
          type: "IMAGE",
          source: {
            url: "http://someurl/image.jpg"
          }
        }
      }
    ];

  return (
   <section id='Education' className='bg-HOME-BG h-full ' >
   <h1 className='text-center text-2xl md:text-4xl font-bold pb-4 pt-12 text-custom-red '>Education</h1>

  
  <Chrono items={items} 
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

  />

        
   </section>
  )
}

export default Education
