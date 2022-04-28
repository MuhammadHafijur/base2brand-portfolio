import Image from "next/image";
import Link from "next/link";
import React from "react";
import championLandingPageLeft from "./championLandingPageLeft.png";
import championLandingPageRight from "./championLandingPageRight.png";
import championTie from "./championtie.png";
import printBanner from "./printbanner.png";
import printByNextProject from "./printbynextproject.png";
import sale from "./sale.png";
import saleLandingPage from "./salelandingpage.png";

const PrintBySusuDetails = () => {
  return (
    <div className="#E5E5E5">
      {/* Banner */}
      <div className="static">
        <Image
          alt="Mountains"
          src={printBanner}
          layout="responsive"
          objectFit="cover"
        />
      </div>

      <div className="w-full absolute top-0 flex justify-center items-center mt-2 md:mt-4">
        <div className="w-[93%] text-[12px] lg:text-[20px] font-poppins flex items-center text-white">
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
        <h1 className="text-[20px] text-[#646464] font-poppins font-medium">
          ABOUT THE PROJECT
        </h1>
        <div className="">
          <div className=" ">
            <h1 className="overview-title text-[40px] lg:text-[60px] 2xl:text-[78px] mb-8">
              An Overview Of The Project <br /> And Its Challenges
            </h1>
            <div className="flex flex-col md:flex-row gap-x-16">
              <div className="md:w-3/4 text-[20px] text-[#646464] 2xl:text-[24px] font-poppins font-medium leading-[43px]">
                <p className="mb-4">
                  Before Collaborating with Base 2 Brand, the brand&apos;s
                  website saw a few visitors a month, and its conversion rates
                  were terrible.
                </p>
                <p className="mb-4">
                  The problem was even worse on mobile, where Prints By
                  Susu&apos;s conversion rate was less than half of its desktop
                  counterpart.
                </p>
                <p className="mb-4">
                  Base 2 Brand realized something needed to be done and analyzed
                  Prints By Susu&apos;s selling propositions, offers, and
                  policies. As a result, we created an eCommerce marketing plan
                  that promoted the brand&apos;s products.
                </p>
                <p className="mb-4">
                  We handled Search Engine Optimization, Social Media Marketing,
                  and Google PPC for Prints By Susu. Through Base 2 Brand&apos;s
                  eCommerce marketing strategies, the brand achieves 40% more
                  conversions.
                </p>
              </div>
              <div className="md:w-1/4">
                <div className="mb-8">
                  <h1 className="project-title text-[21px]">PROJECTS</h1>
                  <h1 className="seo-title text-[17px]">SEO and Google PPC</h1>
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
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-2/5">
            <h1 className="czur-details-title text-[40px] lg:text-[60px] 2xl:text-[78px]">
              About Prints <br /> By Susu
            </h1>
          </div>
          <div className="md:w-3/5">
            <p className="czur-details-para text-[16px] lg:text-[20px] 2xl:text-[24px] text-[#646464] mb-8">
              The brand helps its customers find their fashion needs. It
              encourages them to browse the store thoroughly and take their
              time. Winter and autumn collections from Prints By Susu have
              everything you need in terms of fashion. It sells leggings,
              T-shirts, sweatshirts, hoodies, and jeans pants most frequently.
            </p>
          </div>
        </div>
      </div>

      {/* Typography and colors */}
      <div className="w-[65%] mx-auto flex">
        <div className="w-2/3">
          <h1 className="text-[#004681] text-[16px] 2xl:text-[24px] font-montserrat font-bold mb-4">
            TYPOGRAPHY
          </h1>
          <div className="text-[30px] md:text-[40px] lg:text-[55px] 2xl:text-[78px]">
            <h1 className="font-bold">
              Futura <br /> 123
            </h1>
            <h1>
              Futura <br /> 123
            </h1>
          </div>
        </div>
        <div className="w-1/3">
          <h1 className="text-[#004681] text-[16px] 2xl:text-[24px] font-poppins font-bold mb-4">
            COLORS
          </h1>
          <div className="">
            <h1 className="bg-[#FFCF45] px-2 py-3 lg:py-6 rounded mb-4">
              #FFCF45
            </h1>
            <h1 className="bg-[#0D2D4B] px-2 py-3 lg:py-6 rounded mb-4 text-white">
              #0D2D4B
            </h1>
            <h1 className="bg-[#F1CD3F] px-2 py-3 lg:py-6 rounded mb-4">
              #F1CD3F
            </h1>
            <h1 className="bg-[#6D8F5A] px-2 py-3 lg:py-6 rounded mb-4 text-white">
              #6D8F5A
            </h1>
          </div>
        </div>
      </div>

      {/* championTie */}
      <div className="w-[95%] overflow-hidden rounded-[30px] mx-auto my-16 lg:my-32">
        <Image alt="championTie" src={championTie} layout="responsive" />
      </div>
      <div className="w-[95%] overflow-hidden rounded-[30px] mx-auto my-16 lg:my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="">
            <Image
              alt="championTie"
              src={championLandingPageLeft}
              layout="responsive"
            />
          </div>
          <div className="">
            <Image
              alt="championTie"
              src={championLandingPageRight}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      {/* The pouch vertical */}
      <div className="w-[95%] mx-auto my-8 lg:my-16">
        <div className=" ">
          <Image
            alt="czur"
            src={saleLandingPage}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
      {/* Sale */}
      <div className=" my-16">
        <Image alt="sale" src={sale} layout="responsive" />
      </div>
      {/* Plants */}
      <div className="">
        <h1 className="text-[45px] text-[#253E5B] mb-12 font-bold text-center view-next-title">
          View Next Project
        </h1>
        <div className=" ">
          <Image alt="czur" src={printByNextProject} layout="responsive" />
        </div>
      </div>
    </div>
  );
};

export default PrintBySusuDetails;
