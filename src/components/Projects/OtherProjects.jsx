import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Fade } from "react-awesome-reveal";
import { Pagination, Autoplay } from "swiper/modules";

import "animate.css";

const OtherProjects = () => {
  const primary = "#86C232";

  const otherProjects = [
    {
      title: "Tajam Website Mockup",
      imgSrc: "img/tajam.png",
      imgHeight: "md:h-full md:w-full  ",
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
            className="w-full h-[300px]  "
          >
            {otherProjects.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group relative flex flex-col items-center justify-center text-white text-3xl text-center">
                  <img
                    src={item.imgSrc}
                    alt=""
                    className={`${item.imgHeight} md:mt-0 mt-12`}
                  />
                  <div className="lg:hidden group-hover:block absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-center">
                    <p className="mt-2">{item.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Fade>
    </section>
  );
};

export default OtherProjects;
