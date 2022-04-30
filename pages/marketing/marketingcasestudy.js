import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
// or only core styles
// import "@splidejs/react-splide/css/core";
// import "@splidejs/react-splide/css/sea-green";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import CheckUpMeds from "./checkupmeds.js";
import Czur from "./czur";
import Insights from "./insights.js";
import PrintBySusu from "./printbysusu.js";
const MarketingCaseStudy = () => {
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
    speed: 3000,
    interval: 6000,
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
    <div className="">
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
          <CheckUpMeds />
        </SplideSlide>
        <SplideSlide>
          <Czur />
        </SplideSlide>
        <SplideSlide>
          <PrintBySusu />
        </SplideSlide>
        <SplideSlide>
          <Insights />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default MarketingCaseStudy;
