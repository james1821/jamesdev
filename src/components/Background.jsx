import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Fade } from "react-awesome-reveal";
import { Pagination, Autoplay } from "swiper/modules";
import CLSU from "/img/CLSU_Logo.png";

import "animate.css";

const Background = () => {
  const primary = "#86C232";

  const background = [
    {
      title: "College for Research and Technology",
      year: "2017-2019",
      pos: "Information Communication Technology",
      imgSrc: "https://www.crt.edu.ph/img/CRT2.png",
      imgHeight: "h-[150px]",
    },
    {
      title: "Central Luzon State University",
      year: "2019-2023",
      pos: "Bachelor of Science in Information Technology (BSIT)",
      imgSrc: CLSU,
      imgHeight: "h-[150px]",
    },
    {
      title: "IPhiTech",
      year: "February 2023 - June 2023",
      pos: "Web Developer Intern",
      desc: "Developed front-end websites mockup using HTML, CSS, JavaScript and Wordpress (Elementor, Oxygen Builder) ",
      imgSrc:
        "https://iphitech.com/wp-content/uploads/2023/05/005-2048x305.png",
      imgHeight: "lg:h-[80px] h-[50px] mt-6",
    },
  ];

  return (
    <section className="bg-secondary rounded-md h-[310px] p-2 m-3">
      <Fade>
        <div className="">
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Pagination, Autoplay]}
            className="w-full h-[300px] "
          >
            {background.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center text-white text-center">
                  <img
                    src={item.imgSrc}
                    alt=""
                    className={`${item.imgHeight} m-auto`}
                  />
                  <h2 className="text-2xl font-bold text-primary">
                    {item.title}
                  </h2>
                  <p className="text-lg  ">{item.year}</p>
                  <p className="text-lg ">{item.pos}</p>
                  {item.desc && <p className="text-lg">{item.desc}</p>}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Fade>
    </section>
  );
};

export default Background;
