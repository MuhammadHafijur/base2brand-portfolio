import React from "react";
import { A11y, Autoplay, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const Test = () => {
  return (
    <div className="">
      <Swiper
        loop={true}
        spaceBetween={30}
        direction={"vertical"}
        autoplay={{
          delay: 6000,
        }}
        modules={[Autoplay, A11y, EffectFade]}
        breakpoints={{
          10: {
            slidesPerView: 1,
            spaceBetween: 60,
          },
          380: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1198: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        className="mySwiper"
      >
        {Array.from({ length: 8 })?.map((product, i) => (
          <SwiperSlide key={i}>
            <div className="bg-indigo-500 px-12 py-4">
              <h1>Hello world</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Test;
