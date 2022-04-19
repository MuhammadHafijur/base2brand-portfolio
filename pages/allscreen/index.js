// import WebDesign from "../WebDesign";
// import Marketing from "../marketing/Marketing";
// Splidejs
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
// // or only core styles
// import "@splidejs/react-splide/css/core";
// import "@splidejs/react-splide/css/sea-green";
// // or other themes
// import "@splidejs/react-splide/css/skyblue";
import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Animation from "../anim";
// import Animation from "../animation/index.js";
// import Animation from "../animation/index.js";
import Marketing from "../marketing";
import Ux from "../ux";
// import Marketing from "../Marketing";
// import Ux from "../Ux";
import WebDesign from "../webdesign";

const Screen = () => {
  // const swiper = new Swiper(".swiper-container", {
  //   effect: "coverflow",
  //   grabCursor: true,
  //   centeredSlides: true,
  //   slidesPerView: "auto",
  //   loop: true,
  //   coverflowEffect: {
  //     rotate: 50,
  //     stretch: 0,
  //     depth: 100,
  //     modifier: 1,
  //     slideShadows: true,
  //   },
  //   autoplay: {
  //     delay: 2000,
  //   },
  // });

  const options = {
    type: "loop",
    autoplay: true,
    resetProgress: true,
    // waitForTransition: true,
    // wheelSleep: 2000,
    // wheelMinThreshold: 1000,
    // wheel: true,
    // releaseWheel: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    rewind: true,
    rewindSpeed: 2000,
    speed: 2000,
    interval: 6000,
    // width : 800,
    // gap   : '1rem',
    arrows: true,
    // direction: "ttb",
    // height: "100vh",
    autoplay: true,
    type: "loop",
    // paginationDirection: "ttb",
  };

  return (
    <div className="">
      <Splide options={options} aria-label="My Favorite Images">
        <SplideSlide>
          <Marketing />
        </SplideSlide>
        <SplideSlide>
          <WebDesign />
        </SplideSlide>
        <SplideSlide>
          <Ux />
        </SplideSlide>
        <SplideSlide>
          <Animation />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Screen;
