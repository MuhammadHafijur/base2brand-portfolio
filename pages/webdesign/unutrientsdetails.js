import Image from "next/image";
import Link from "next/link";
import React from "react";
import plantImg from "./plantImg.jpg";
import simplerSupplement from "./simplersupplement.jpg";
import thePouch from "./thepouch.jpg";
import thePouchVetical from "./thepouchvertical.jpg";
import unutrientsBanner from "./unutirentsbanner.png";

const UnutrientsDetails = () => {
  return (
    <div className="#F7F7F7">
      {/* Banner */}
      <div className="static pt-10 md:pt-0">
        <Image
          alt="Mountains"
          src={unutrientsBanner}
          layout="responsive"
          objectFit="cover"
        />
      </div>

      <div className="w-full absolute top-0 flex justify-center items-center mt-2 md:mt-4">
        <div className="w-[93%] text-[12px] lg:text-[20px] font-poppins flex items-center text-black md:text-white font-semibold">
          <Link href="/webdesign/webdesigncasestudy">
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
        <h1 className="text-[20px] text-center md:text-left text-[#646464] font-poppins font-medium">
          ABOUT THE PROJECT
        </h1>
        <div className="">
          <div className=" ">
            <h1 className="overview-title mt-4 md:mt-0 text-[24px] text-center md:text-left md:text-[40px] lg:text-[60px] 2xl:text-[78px] mb-8">
              Overview Of The Project <br />
              And Challenges
            </h1>
            <div className="flex order-last flex-col md:flex-row gap-x-16">
              <div className="md:w-3/4 text-[16px] lg:text-[20px] text-[#646464] 2xl:text-[24px] font-poppins font-medium leading-[24px] md:leading-[30px] text-center md:text-left lg:leading-[43px]">
                <p className="mb-4">
                  Our first step in meeting U Nutrients&apos; needs was creating
                  a site that spoke to their brand from the very beginning. We
                  worked closely with the client on the site&apos;s identity to
                  accomplish this.
                </p>
                <p className="mb-4">
                  During this project, we had to improve user interface (UI),
                  overall site architecture and navigation in order to
                  facilitate easier browsing and a more frictionless experience.
                  We also had to create a more user-friendly and visually
                  appealing product story with improved navigation and
                  filtering.
                </p>
                <p className="mb-4">
                  Our web design and development teams collaborated to deliver a
                  great user experience (UX) of this website. As fresh as their
                  supplements, U Nutrients&apos; website now feels youthful and
                  fun.
                </p>
              </div>
              <div className="md:w-1/4 order-first md:order-none flex gap-x-8 justify-between md:justify-start md:flex-col text-center md:text-left">
                <div className="mb-8">
                  <h1 className="project-title text-[16px] md:text-[21px]">
                    PROJECTS
                  </h1>
                  <h1 className="seo-title text-[13px] md:text-[17px]">
                    SEO and Google PPC
                  </h1>
                </div>
                <div className="">
                  <h1 className="project-title text-[16px] md:text-[21px]">
                    CLIENT
                  </h1>
                  <h1 className="czur-subtitle text-[13px] md:text-[17px]">
                    Checkups Medical Hub
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ******** */}
      <div className="w-[93%] mx-auto my-16 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-2/5">
            <h1 className="czur-details-title text-[30px] md:text-[40px] lg:text-[60px] 2xl:text-[78px] mb-4 leading-[40px] lg:leading-[100px]">
              Unutrients
            </h1>
          </div>
          <div className="md:w-3/5 mt-8 md:mt-0">
            <p className="czur-details-para text-[16px] lg:text-[20px] 2xl:text-[24px] text-[#646464] mb-8 leading-[30px] lg:leading-[43px]">
              U Nutrients manufactures and sells plant-based and vegan-friendly
              supplements. Its Super Greens supplement is made under strict
              regulations of California.
            </p>
            <p className="czur-details-para text-[16px] lg:text-[20px] 2xl:text-[24px] text-[#646464] mb-8 leading-[30px] lg:leading-[43px]">
              Super Greens is a natural supplement that contains vital vitamins,
              minerals, probiotics, and nutrient-dense superfoods. It prevents
              chronic dehydration, inflammation and improves the immune
              system&apos;s functionality.
            </p>
          </div>
        </div>
      </div>

      {/* Typography and colors */}
      <div className="w-[95%] mx-auto flex">
        <div className="w-2/3">
          <h1 className="text-[#004681] text-[16px] 2xl:text-[24px] font-montserrat font-bold mb-4">
            TYPOGRAPHY
          </h1>
          <div className="text-[30px] md:text-[40px] 2xl:text-[78px]">
            <h1 className="font-bold">Open Sans 123</h1>
            <h1>Open Sans 123</h1>
          </div>
        </div>
        <div className="w-1/3">
          <h1 className="text-[#004681] text-[16px] 2xl:text-[24px] font-poppins font-bold mb-4">
            COLORS
          </h1>
          <div className="">
            <h1 className="bg-[#FFCF45] px-2 py-3 rounded mb-4">#FFCF45</h1>
            <h1 className="bg-[#0D2D4B] px-2 py-3 rounded mb-4 text-white">
              #0D2D4B
            </h1>
            <h1 className="bg-[#F1CD3F] px-2 py-3 rounded mb-4">#F1CD3F</h1>
            <h1 className="bg-[#6D8F5A] px-2 py-3 rounded mb-4 text-white">
              #6D8F5A
            </h1>
          </div>
        </div>
      </div>

      {/* Unutrients */}
      <div className="w-[95%] overflow-hidden rounded-[30px] mx-auto my-16 lg:my-32">
        <Image alt="Unutrients" src={simplerSupplement} layout="responsive" />
      </div>
      {/* The pouch vertical */}
      <div className="w-[95%] mx-auto my-8 lg:my-16">
        <div className="overflow-hidden rounded-[30px] ">
          <Image
            alt="czur"
            src={thePouchVetical}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
      {/* The Pouch */}
      <div className=" mx-auto my-16">
        <Image alt="czur" src={thePouch} layout="responsive" />
      </div>
      {/* Plants */}
      <div className="">
        <h1 className="text-[20px] md:text-[45px] text-[#253E5B] mb-12 font-bold text-center view-next-title">
          View Next Project
        </h1>
        <div className=" ">
          <Image alt="czur" src={plantImg} layout="responsive" />
        </div>
      </div>
    </div>
  );
};

export default UnutrientsDetails;
