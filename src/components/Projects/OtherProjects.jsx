import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Fade } from "react-awesome-reveal";
import { Pagination, Autoplay } from "swiper/modules";

import "animate.css";

const OtherProjects = () => {
  const primary = "#86C232";

  const otherPojects = [
    {
      title: "Tajam Website Mockup",

      imgSrc: "img/tajam.png",
      imgHeight: "h-full",
    },
    {
      title: "Image Text Tracker",

      imgSrc: "",
      imgHeight: "h-[300px]",
    },
    {
      title: "Tajam Website Mockup",

      imgSrc: "img/tajam.png",
      imgHeight: "h-[150px]",
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
            {otherPojects.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center text-white text-center">
                  <img
                    src={item.imgSrc}
                    alt=""
                    className={`${item.imgHeight} m-auto`}
                  />
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
