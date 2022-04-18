import Image from "next/image";
import React from "react";
import channelGroupImg from "./channelgroup.png";
import checkUpMedsCard from "./checkupmedscard.jpg";
import googleAdsImg from "./googleads.png";
import medicalHubImg from "./medicalhub.png";

const CheckUpMedsDetails = () => {
  return (
    <div>
      <div className="w-[93%] mx-auto ">
        {/* Navbar */}
        <header className="text-gray-600 body-font">
          <div className="flex flex-wrap py-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className=" text-[20px] text-[#0B0B0B] font-[500]">
                BACK TO HOME
              </span>
            </a>

            <button className="inline-flex md:ml-auto items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              ABOUT
            </button>
          </div>
        </header>
        {/* Checkupmeds Cards */}
        <div className="  ">
          <Image alt="Mountains" src={checkUpMedsCard} />
        </div>
        <div className="">
          <h1>ABOUT THE PROJECT</h1>
          <div className="flex items-center gap-8">
            <div className="w-3/4 ">
              <h1 className="text-[calc(4.875em+1vmin)] mb-8">
                Overview Of The Project <br /> And Challenges
              </h1>
              <div className="text-[24px]">
                <p className="mb-4">
                  The client is a medication delivery and medical test provider
                  in Kenya. Our digital marketing campaign aimed to increase new
                  patient acquisition, traffic to their site and paid traffic
                  through Google PPC without spending too much.
                </p>
                <p className="mb-4">
                  As a team, we evaluated areas where we could improve and what
                  SEO strategies would be most effective. We started by auditing
                  the site for major errors such as duplicate content, 404
                  errors, and any signs of black hat strategies that may harm
                  their site.
                </p>
                <p className="mb-4">
                  We did a competitor analysis to learn about the strategies
                  competitors in the area are using and performing.
                </p>
              </div>
            </div>
            <div className="w-1/4">
              <div className="">
                <h1>PROJECTS</h1>
                <h1>SEO and Google PPC</h1>
              </div>
              <div className="">
                <h1>CLIENT</h1>
                <h1>Checkups Medical Hub</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Image alt="Mountains" src={googleAdsImg} />
        </div>

        {/* Checkupmeds Title */}
        <div className="">
          <h1 className="text-[78px]">Checkupmeds</h1>
          <div className="flex gap-8">
            <div className="w-2/5 ">
              <p className="text-[30px] text-[#646464] font-[600]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
                arcu et lectus volutpat hendrerit mollis vel
              </p>
            </div>
            <div className="w-3/5">
              <p className="text-[24px] text-[#646464] font-[500]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
                arcu et lectus volutpat hendrerit mollis vel elit. Pellentesque
                nibh enim, facilisis quis lacinia ultrices, consectetur in
                velit. Maecenas nibh libero, blandit sit amet est eget, mollis
                facilisis quam. Aliquam lacus sapien, tincidunt{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <Image alt="Mountains" src={channelGroupImg} />
        </div>
        <div className="">
          <Image alt="Mountains" src={medicalHubImg} />
        </div>
      </div>
    </div>
  );
};

export default CheckUpMedsDetails;
