import Image from "next/image";
import Link from "next/link";
import React from "react";
import channelGroupImg from "./channelgroup.png";
import checkUpMedsCard from "./checkupmedscard.jpg";
import czurShine from "./czurbanner.png";
import googleAdsImg from "./googleads.png";
import medicalHubImg from "./medicalhub.png";

const CheckUpMedsDetails = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <div className=" ">
        {/* Checkupmeds Cards */}
        {/* Banner */}
        <div className="static">
          <Image
            alt="Mountains"
            src={checkUpMedsCard}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full absolute top-0 flex justify-center items-center mt-2 md:mt-4">
          <div className="w-[93%] text-[12px] lg:text-[20px] font-semibold font-poppins flex items-center text-black">
            <Link href="/marketing/marketingcasestudy">
              <a>
                <h1 className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 lg:h-6 lg:w-6 mr-2"
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
                  </svg>{" "}
                  BACK TO HOME
                </h1>
              </a>
            </Link>
            <h1 className="ml-auto">ABOUT</h1>
          </div>
        </div>

        {/* Down Arrow */}
        <div className="w-8 h-8 mx-auto mt-12 animate animate-bounce flex justify-center items-center bg-gray-800 rounded-full text-white ">
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>

        <div className="w-[93%] mx-auto mt-12 ">
          <h1 className="text-[20px] text-[#646464] font-poppins font-medium">
            ABOUT THE PROJECT
          </h1>
          <div className="">
            <div className=" ">
              <h1 className="overview-title text-[40px] lg:text-[60px] 2xl:text-[78px] mb-8">
                Overview Of The Project <br />
                And Challenges
              </h1>
              <div className="flex flex-col md:flex-row gap-x-16">
                <div className="md:w-3/4 text-[20px] text-[#646464] 2xl:text-[24px] font-poppins font-medium leading-[43px]">
                  <p className="mb-4">
                    The client is a medication delivery and medical test
                    provider in Kenya. Our digital marketing campaign aimed to
                    increase new patient acquisition, traffic to their site and
                    paid traffic through Google PPC without spending too much.
                  </p>
                  <p className="mb-4">
                    As a team, we evaluated areas where we could improve and
                    what SEO strategies would be most effective. We started by
                    auditing the site for major errors such as duplicate
                    content, 404 errors, and any signs of black hat strategies
                    that may harm their site.
                  </p>
                  <p className="mb-4">
                    We did a competitor analysis to learn about the strategies
                    competitors in the area are using and performing.
                  </p>
                </div>
                <div className="md:w-1/4">
                  <div className="mb-8">
                    <h1 className="project-title text-[21px]">PROJECTS</h1>
                    <h1 className="seo-title text-[17px]">
                      SEO and Google PPC
                    </h1>
                  </div>
                  <div className="">
                    <h1 className="project-title text-[21px]">CLIENT</h1>
                    <h1 className="czur-subtitle text-[17px]">
                      Checkups Medical Hub
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ******** */}
        <div className="w-[93%] mx-auto my-16">
          <h1 className="czur-details-title text-[40px] lg:text-[60px] 2xl:text-[78px] mb-4">
            Checkupmeds
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-2/5">
              <p className="text-[24px] 2xl:text-[30px] text-[#646464] font-poppins font-semibold">
                As a technology-enabled medication procurement and delivery
                company, CheckupsMed helps patients get the best prices on
                medicines and diagnostics as quickly as possible.
              </p>
            </div>
            <div className="md:w-3/5">
              <p className="czur-details-para text-[16px] lg:text-[20px] 2xl:text-[24px] text-[#646464] mb-8">
                Base 2 Brand&apos;s SEO team runs various SEO strategies and
                reviews each strategy every month to ensure progress. Our
                efforts helped CheckupsMed to improve click-through rates of ads
                and website pages, helping them achieve company growth even
                during these hard times.
              </p>
              {/* <p className="czur-details-para text-[16px] lg:text-[20px] 2xl:text-[24px] text-[#646464]">
                Super Greens is a natural supplement that contains vital
                vitamins, minerals, probiotics, and nutrient-dense superfoods.
                It prevents chronic dehydration, inflammation and improves the
                immune system&apos;s functionality.
              </p> */}
            </div>
          </div>
        </div>

        <div className="w-[93%] mx-auto">
          <div className="">
            <Image
              alt="Mountains"
              // layout="raw"
              // objectFit="cover"
              src={googleAdsImg}
            />
          </div>
          {/* Checkupmeds Title */}
          <div className="">
            <Image alt="Mountains" src={channelGroupImg} />
          </div>
          <div className="">
            <Image alt="Mountains" src={medicalHubImg} />
          </div>
        </div>
        <div className="">
          <h1 className="text-[45px] text-[#253E5B] mb-12 font-bold text-center view-next-title">
            View Next Project
          </h1>
          <div className=" ">
            <Image alt="czur" src={czurShine} layout="responsive" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckUpMedsDetails;
