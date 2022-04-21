import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "./logo.png";
import marketingGif from "./marketing.gif";
import circle from "./yellow-circle.png";

const Market = () => {
  return (
    <div className=" bg-[#000000de] relative overflow-hidden w-screen h-screen">
      <header className=" text-gray-600 relative z-10 body-font">
        <div className="container mx-auto flex justify-between p-5 items-center">
          <Link href="/">
            <a className="flex logo-spin title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image src={logo} alt="Picture of the logo" />
            </a>
          </Link>

          <button className="md:ml-auto flex flex-wrap items-center text-base justify-center border-0 py-1 px-3 focus:outline-none rounded  md:mt-0">
            <div className="w-32">
              <Link href="/allscreen">
                <a className="text-right w-[138px] h-[70px] text-white font-bold text-medium lg:text-2xl">
                  {/* <br /> */}
                  <h1 className="font-montserrat">Work</h1>
                  <h1 className="font-montserrat">Contact</h1>
                </a>
              </Link>
            </div>
          </button>
        </div>
      </header>
      <div className="mix-blend-overlay">
        <Image
          src={marketingGif}
          alt="Picture of the banner"
          width={70}
          layout="fill"
          // objectFit="contain"
        />
      </div>
      <div className="absolute grid top-0 min-h-full w-screen ">
        <div className="m-auto logo-spin w-[60%] lg:w-[40%] ">
          <Image
            // width={800}
            // height={800}
            layout="responsive"
            src={circle}
            alt="Picture of the banner"
          />
        </div>
        <div className="absolute inset-0 top-[35%] text-center">
          <h1 className="font-extrabold text-[40px] lg:text-[110px] xl:text-[140px] 2xl:text-[173px] text-center text-yellow-400 leading-tight">
            MARKETING
          </h1>
          <Link href="/marketing/marketingcasestudy" passHref>
            <button className=" bg-yellow-500 mt-4 px-12 py-2">EXPLORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Market;
