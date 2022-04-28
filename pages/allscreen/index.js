// import WebDesign from "../WebDesign";
// import Marketing from "../marketing/Marketing";
// Splidejs
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
import Carousel from "nuka-carousel";
// // or only core styles
// import "@splidejs/react-splide/css/core";
// import "@splidejs/react-splide/css/sea-green";
// // or other themes
// import "@splidejs/react-splide/css/skyblue";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import Animation from "../animation";
import Marketing from "../marketing";
import Ux from "../ux";
import WebDesign from "../webdesign";
import styles from "./Allscree.module.css";

const Screen = () => {
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

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className={styles.splide__pagination__page}>
      {/* <Splide options={options} aria-label="My Favorite Images">
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
      </Splide> */}
      {/* <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
        fillParent={true}
      >
        <div>
          <Animation />
        </div>
        <div>
          <Marketing />
        </div>
        <div>3</div>
      </AutoplaySlider> */}
      <Carousel
        defaultControlsConfig={{
          pagingDotsStyle: {
            fill: "#FFF6E7",
            height: "10px",
            width: "20px",
            borderRadius: "15px",
            background: "#FFF6E7",
            marginRight: "10px",
          },
          // nextButtonText: "hey"
        }}
        wrapAround={true}
        slidesToShow={1}
        autoplay={true}
        autoplayInterval={4000}
        speed={3000}
        pauseOnHover={false}
        dragging={true}
        scrollMode={"remainder"}
        swiping={false}
        // adaptiveHeight={true}
        // animation={"zoom"}
      >
        <div>
          <Marketing />
        </div>
        <div>
          <WebDesign />
        </div>
        <div>
          <Ux />
        </div>
        <div>
          <Animation />
        </div>
      </Carousel>
    </div>
  );
};

export default Screen;
