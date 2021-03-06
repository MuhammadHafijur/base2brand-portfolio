import React from "react";
import Meta from "../Components/Meta";
import Homepage from "./homepage";

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
        <Homepage></Homepage>
      </div>
    </>
  );
};

export default Home;
