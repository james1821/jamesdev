import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Fade } from "react-awesome-reveal";
import { Pagination, Autoplay } from "swiper/modules";

import "animate.css";

const Certificates = () => {
  const primary = "#86C232";

  const certificates = [
    {
      imgSrc: "img/ReactCert.png",
      imgHeight: "h-[300px]",
      link: "https://www.hackerrank.com/certificates/0dc11c5d1ddb",
    },
    {
      imgSrc: "img/JSCert.png",
      imgHeight: "h-[300px] ",
      link: "https://www.freecodecamp.org/certification/fcc71a9be58-9e3e-4387-86d9-7387e9390675/javascript-algorithms-and-data-structures",
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
            modules={[Pagination]}
            className="w-full h-[300px] "
          >
            {certificates.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center text-white text-center">
                  <a href={item.link}>
                    <img
                      src={item.imgSrc}
                      alt=""
                      className={`${item.imgHeight} m-auto`}
                    />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Fade>
    </section>
  );
};

export default Certificates;
