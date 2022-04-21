import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
// or only core styles
// import "@splidejs/react-splide/css/core";
// import "@splidejs/react-splide/css/sea-green";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import CocoSky from "./cocosky.js";
import PortiaRoberts from "./portiaroberts.js";
import Vyatra from "./vyatra.js";

const AnimationCaseStudy = () => {
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
    interval: 3000,
    // width : 800,
    // gap   : '1rem',
    arrows: false,
    direction: "ttb",
    height: "100vh",
    autoplay: true,
    type: "loop",
    paginationDirection: "ttb",
  };

  return (
    <div>
      <Splide
        aria-label="My Favorite Images"
        // renderControls={() => (
        //   <div className="splide__arrows bg-red-400 ml-auto">
        //     <div className=" splide__arrow--prev" role="button"></div>
        //     <div className="splide__arrow--next" role="button"></div>
        //   </div>
        // )}
        options={options}
      >
        <SplideSlide>
          <CocoSky />
        </SplideSlide>
        <SplideSlide>
          <Vyatra />
        </SplideSlide>
        <SplideSlide>
          <PortiaRoberts />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default AnimationCaseStudy;
