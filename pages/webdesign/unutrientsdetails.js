import Image from "next/image";
import React from "react";
import plantImg from "./plantImg.jpg";
import simplerSupplement from "./simplersupplement.jpg";
import thePouch from "./thepouch.jpg";
import thePouchVetical from "./thepouchvertical.jpg";
import unutrientsBanner from "./unutirentsbanner.png";

const UnutrientsDetails = () => {
  return (
    <div>
      {/* Banner */}
      <div className="static">
        <Image
          alt="Mountains"
          src={unutrientsBanner}
          layout="responsive"
          objectFit="cover"
        />
      </div>

      <div className="w-[93%] mx-auto mt-12 ">
        <h1>ABOUT THE PROJECT</h1>
        <div className="flex flex-col md:flex-row items-center gap-x-16">
          <div className="md:w-3/4 ">
            <h1 className="overview-title text-[40px] lg:text-[60px] 2xl:text-[78px] mb-8">
              Overview Of The Project <br /> And Challenges
            </h1>
            <div className="text-[20px] 2xl:text-[24px]">
              <p className="mb-4">
                Our first step in meeting U Nutrients&apos; needs was creating a
                site that spoke to their brand from the very beginning. We
                worked closely with the client on the site&apos;s identity to
                accomplish this.
              </p>
              <p className="mb-4">
                During this project, we had to improve user interface (UI),
                overall site architecture and navigation in order to facilitate
                easier browsing and a more frictionless experience. We also had
                to create a more user-friendly and visually appealing product
                story with improved navigation and filtering.
              </p>
              <p className="mb-4">
                Our web design and development teams collaborated to deliver a
                great user experience (UX) of this website. As fresh as their
                supplements, U Nutrients&apos; website now feels youthful and
                fun.
              </p>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="mb-8">
              <h1 className="project-title text-[21px]">PROJECTS</h1>
              <h1 className="seo-title text-[17px">
                UI and UX, Web Designing and Development
              </h1>
            </div>
            <div className="">
              <h1 className="project-title text-[21px]">CLIENT</h1>
              <h1 className="czur-subtitle text-[17px">U Nutrients</h1>
            </div>
          </div>
        </div>
      </div>

      {/* ******** */}
      <div className="w-[93%] mx-auto my-16">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-2/5">
            <h1 className="czur-details-title text-[40px] lg:text-[60px] 2xl:text-[78px]">
              Unutrients
            </h1>
          </div>
          <div className="md:w-3/5">
            <p className="czur-details-para text-[16px] lg:text-[20px] 2xl:text-[24px] text-[#646464] mb-8">
              U Nutrients manufactures and sells plant-based and vegan-friendly
              supplements. Its Super Greens supplement is made under strict
              regulations of California.
            </p>
            <p className="czur-details-para text-[16px] lg:text-[20px] 2xl:text-[24px] text-[#646464]">
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
          <div className="text-[40px] 2xl:text-[78px]">
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
      <div className="w-[95%] mx-auto my-32">
        <Image alt="Unutrients" src={simplerSupplement} layout="responsive" />
      </div>
      {/* The pouch vertical */}
      <div className="w-[95%] mx-auto my-16">
        <Image alt="czur" src={thePouchVetical} layout="responsive" />
      </div>
      {/* The Pouch */}
      <div className=" mx-auto my-16">
        <Image alt="czur" src={thePouch} layout="responsive" />
      </div>
      {/* Plants */}
      <div className="">
        <h1 className="text-[45px] text-[#253E5B] mb-12 font-bold text-center view-next-title">
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
