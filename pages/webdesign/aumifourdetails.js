import Image from "next/image";
import Link from "next/link";
import React from "react";
import aBag from "./abag.png";
import aumiBanner from "./aumibanner.png";
import goldAndSilverImg from "./goldandsilverImg.png";
import goldAndSilverRotate from "./goldandsliverrotate.png";
import simplerWay from "./simplerway.jpg";

const AumiFourDetails = () => {
  return (
    <div className="bg-[#F7F7F7]">
      {/* Banner */}
      <div className="">
        <Image
          alt="Mountains"
          src={aumiBanner}
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
                  Aumi4 wanted to redesign its online store to be an e-commerce
                  platform that incorporated all the features of a regular
                  apparel store with the capability of selling jewelry products
                  as well. Our challenge was to create a multi-brand environment
                  that integrated all the brands in a reliable and user-friendly
                  manner.
                </p>
                <p className="mb-4">
                  With the help of Shopify, we have built an online boutique
                  with stylish and accessible clothing and jewelry products
                  (item catalog, payment/delivery options, etc.).
                </p>
                <p className="mb-4">
                  Before ending the project, our Shopify developers ran multiple
                  performance and security checks on the store to ensure the
                  user-friendly and secure functionality of the website. Aumi4
                  experiences significant traffic of buyers in all of its
                  categories of fashion products.
                </p>
              </div>
              <div className="md:w-1/4 order-first md:order-none flex gap-x-8 justify-between md:justify-start md:flex-col text-center md:text-left">
                <div className="w-1/2 md:w-full mb-8">
                  <h1 className="project-title text-[16px] md:text-[21px]">
                    PROJECTS
                  </h1>
                  <h1 className="seo-title text-[13px] md:text-[17px]">
                    Web designing and Development
                  </h1>
                </div>
                <div className="w-1/2 md:w-full">
                  <h1 className="project-title text-[16px] md:text-[21px]">
                    CLIENT
                  </h1>
                  <h1 className="czur-subtitle text-[13px] md:text-[17px]">
                    TRV HOMES
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ******** */}
      <div className="w-[93%] mx-auto my-16">
        <div className="flex flex-col text-center md:text-left md:flex-row items-center md:items-start">
          <div className="md:w-2/5">
            <h1 className="czur-details-title text-[40px] lg:text-[60px] 2xl:text-[78px]">
              Bettle Bags
            </h1>
          </div>
          <div className="md:w-3/5">
            <p className="czur-details-para text-[16px] lg:text-[20px] 2xl:text-[24px] text-[#646464] mb-8">
              Aumi4 was founded in 2013 by a California-based fashion designer.
              It helps people find better designs for fashionable products by
              letting them explore the quality ones.
            </p>
            <p className="czur-details-para text-[16px] lg:text-[20px] 2xl:text-[24px] text-[#646464]">
              Aumi4 specifically sells stylish bags, elegant jewelry pieces,
              sweaters, and embroidered shirts for women. Aumi4 is famous among
              people for offering unique and best-in-class fashion products at
              affordable prices.
            </p>
          </div>
        </div>
      </div>
      {/* Typography and colors */}
      <div className="w-[65%] mx-auto flex">
        <div className="w-3/5">
          <h1 className="text-[#004681] text-[16px] 2xl:text-[24px] font-montserrat font-bold mb-4">
            TYPOGRAPHY
          </h1>
          <div className="text-[30px] md:text-[40px] 2xl:text-[78px]">
            <h1 className="font-bold font-montserrat">
              Poppins <br /> 123
            </h1>
            <h1 className="font-montserrat">
              Poppins <br /> 123
            </h1>
          </div>
        </div>
        <div className="w-2/5">
          <h1 className="text-[#004681] text-[16px] 2xl:text-[24px] font-poppins font-bold mb-4">
            COLORS
          </h1>
          <div className="">
            <h1 className="bg-[#637EB5] px-2 py-3 rounded mb-4 text-white">
              #FFCF45
            </h1>
            <h1 className="bg-[#F5AC9B] px-2 py-3 rounded mb-4 text-white">
              #F5AC9B
            </h1>
            <h1 className="bg-[#661938] px-2 py-3 rounded mb-4 text-white">
              #661938
            </h1>
            <h1 className="bg-[#76A36C] px-2 py-3 rounded mb-4 text-white">
              #76A36C
            </h1>
          </div>
        </div>
      </div>

      {/* Refuses to fit in */}
      <div className="w-[95%] overflow-hidden rounded-[30px] mx-auto my-16 lg:mt-32">
        <Image alt="Unutrients" src={aBag} layout="responsive" />
      </div>

      {/* Typography and colors */}
      <div className="w-[95%] mx-auto">
        <h1 className="text-[40px] 2xl:text-[78px] pb-12 font-semibold font-montagu">
          Mozaiku and Notteluna
        </h1>
        <div className="w-[75%] mx-auto flex">
          <div className="w-3/5">
            <h1 className="text-[#004681] text-[16px] 2xl:text-[24px] font-montserrat font-bold mb-4">
              TYPOGRAPHY
            </h1>
            <div className="text-[30px] md:text-[40px] 2xl:text-[78px]">
              <h1 className="font-bold font-montserrat">
                Poppins <br /> 123
              </h1>
              <h1 className="font-montserrat">
                Poppins <br /> 123
              </h1>
              <h1 className="font-bold font-montserrat">
                Bebas NEUE <br /> 123
              </h1>
              <h1 className="font-montserrat">
                Lora <br />
                123
              </h1>
            </div>
          </div>
          <div className="w-2/5">
            <h1 className="text-[#004681] text-[16px] 2xl:text-[24px] font-poppins font-bold mb-4">
              COLORS
            </h1>
            <div className="">
              <h1 className="bg-[#0E1C32] px-3 py-3 lg:py-4 rounded mb-4 text-white">
                #0E1C32
              </h1>
              <h1 className="bg-[#895B05] px-3 py-3 lg:py-4 rounded mb-4 text-white">
                #895B05
              </h1>
              <h1 className="bg-[#D6A96D] px-3 py-3 lg:py-4 rounded mb-4 text-white">
                #D6A96D
              </h1>
              <h1 className="bg-[#2C211B] px-3 py-3 lg:py-4 rounded mb-4 text-white">
                #2C211B
              </h1>
              <h1 className="bg-[#313B56] px-3 py-3 lg:py-4 rounded mb-4 text-white">
                #313B56
              </h1>
              <h1 className="bg-[#191919] px-3 py-3 lg:py-4 rounded mb-4 text-white">
                #191919
              </h1>
              <h1 className="bg-[#DDC8B3] px-3 py-3 lg:py-4 rounded mb-4 text-white">
                #DDC8B3
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Aumi4 */}

      <div className="w-[95%] overflow-hidden rounded-[30px] mx-auto my-16 lg:mt-32">
        <Image
          alt="goldAndSilverImg"
          src={goldAndSilverImg}
          layout="responsive"
        />
      </div>

      {/* typographyImg */}
      <div className="mt-16">
        <Image
          alt="typographyImg"
          src={goldAndSilverRotate}
          layout="responsive"
        />
      </div>

      <div className="bg-white ">
        <h1 className="text-[20px] md:text-[45px] text-[#253E5B] mb-12 font-bold text-center view-next-title">
          View Next Project
        </h1>
        <div className="">
          <Image alt="simplerWay" src={simplerWay} layout="responsive" />
        </div>
      </div>
    </div>
  );
};

export default AumiFourDetails;
