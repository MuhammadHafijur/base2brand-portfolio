import Image from "next/image";
import React from "react";
import logoAndAlternateOne from "./logoandalternateone.png";
import logoAndAlternateTwo from "./logoandalternatetwo.png";
import propertiesListedImg from "./propertieslisted.png";
import trvBanner from "./trvbanner.jpg";
import trvHomesOverlay from "./trvhomes.png";
import trvHomesConcept from "./trvhomesconcept.png";
import trvLandingPage from "./trvlandingpage.png";
import trvLot from "./trvlot.png";
import trvNextProject from "./trvnextproject.png";
import trvSelectionBooklet from "./trvSelectionBooklet.png";
import typographyImg from "./typography.png";

const TrvHomesDetails = () => {
  return (
    <div>
      {/* Banner */}
      <div className="">
        <Image
          alt="Mountains"
          src={trvBanner}
          layout="responsive"
          objectFit="cover"
        />
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
        <h1>ABOUT THE PROJECT</h1>
        <div className="flex flex-col md:flex-row items-center gap-x-16">
          <div className="md:w-3/4 ">
            <h1 className="overview-title text-[40px] lg:text-[60px] 2xl:text-[78px] mb-8">
              Overview Of The Project <br /> And Challenges
            </h1>
            <div className="text-[20px] 2xl:text-[24px]">
              <p className="mb-4">
                TRV Homes&apos; website was an exciting and challenging project
                for our web development and design teams. The client wanted us
                to create an image gallery to highlight residential projects’
                work on the website.
              </p>
              <p className="mb-4">
                Although TRV Homes provided us with images of each custom
                designed home that they have built, it was difficult for us to
                combine them into an outdated website. Our developers updated
                the site with the latest plugins and technologies to create a
                visually appealing corporate platform with stunning photo
                galleries of client projects.
              </p>
              <p className="mb-4">
                Along with a good desktop view, we also made this website mobile
                friendly. Additionally, lead generation forms were added to all
                important pages in order to automatically transfer qualified
                leads to the company&apos;s email address. In the end, we
                created a website with an excellent user experience and greater
                navigational features.
              </p>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="mb-8">
              <h1 className="project-title text-[21px]">PROJECTS</h1>
              <h1 className="seo-title text-[17px">
                Web designing and Development
              </h1>
            </div>
            <div className="">
              <h1 className="project-title text-[21px]">CLIENT</h1>
              <h1 className="czur-subtitle text-[17px">TRV HOMES</h1>
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
        <Image
          alt="trvHomesOverlay"
          src={trvHomesOverlay}
          layout="responsive"
        />
      </div>
      {/* Logo and Alternate */}
      <div className="w-[95%] mx-auto bg-[#F1F8FF]">
        <h1>Logo & Alternates</h1>
        <div className="flex justify-between items-center">
          <div className="w-1/3">
            <Image
              alt="logoAndAlternateOne"
              src={logoAndAlternateOne}
              layout="responsive"
            />
          </div>
          <div className="w-1/3">
            <Image
              alt="logoAndAlternateTwo"
              src={logoAndAlternateTwo}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      {/* typographyImg */}
      <div className="mt-16">
        <Image alt="typographyImg" src={typographyImg} layout="responsive" />
      </div>
      {/* trvHomesConcept */}
      <div className="">
        <Image
          alt="trvHomesConcept"
          src={trvHomesConcept}
          layout="responsive"
        />
      </div>
      {/* LSigntaure Colours */}
      <div className="bg-[#F1F8FF]">
        <div className="w-[95%] mt-8 mx-auto ">
          <h1 className="my-12">Signtaure Colours</h1>
          <div className="grid grid-cols-3 gap-8">
            <div className="">
              <div className="py-8 bg-[#AAC5E4]"></div>
              <div className="py-8 bg-[#57779C]"></div>
              <div className="py-8 bg-[#253E5B]"></div>
            </div>
            <div className="">
              <div className="py-8 bg-[#FFB594]"></div>
              <div className="py-8 bg-[#EA8052]"></div>
              <div className="py-8 bg-[#DD591F]"></div>
            </div>
            <div className="">
              <div className="py-8 bg-[#8A8A8A]"></div>
              <div className="py-8 bg-[#292B34]"></div>
              <div className="py-8 bg-[#0E101A]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* The Pouch */}
      <div className=" mx-auto my-16">
        <Image alt="trvLandingPage" src={trvLandingPage} layout="responsive" />
      </div>
      <div className="w-4/5 my-16">
        <Image alt="trvLot" src={trvLot} layout="responsive" />
      </div>
      <div className="w-2/3 ml-auto my-16">
        <Image
          alt="propertiesListedImg"
          src={propertiesListedImg}
          layout="responsive"
        />
      </div>
      <div className="w-4/5 my-16">
        <Image
          alt="trvSelectionBooklet"
          src={trvSelectionBooklet}
          layout="responsive"
        />
      </div>
      {/* Plants */}
      <div className="">
        <h1 className="text-[45px] text-[#253E5B] mb-12 font-bold text-center view-next-title">
          View Next Project
        </h1>
        <div className=" ">
          <Image
            alt="trvNextProject"
            src={trvNextProject}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default TrvHomesDetails;
