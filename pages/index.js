import React from "react";
import Meta from "../Components/Meta";
import Homepage from "./Homepage";

const Home = () => {
  return (
    <>
      <Meta
        title="Base2Brand | Portfolio"
        keywords="Marketing, Web Design, Animation, Ui/Ux, Animation"
        description="Let’s Build something Digital together Web Mobile Marketing Leading Innovative Partner for Start-ups and Enterprises"
      >
        {" "}
      </Meta>
      <div>
        {/* <Banner></Banner> */}
        <Homepage></Homepage>
      </div>
    </>
  );
};

export default Home;
