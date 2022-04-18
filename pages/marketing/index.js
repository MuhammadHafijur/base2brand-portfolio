import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "./logo.png";
import marketingGif from "./marketing.gif";
import workContact from "./work-contact.png";
import circle from "./yellow-circle.png";

const Market = () => {
  return (
    <div className=" bg-[#000000e1] relative overflow-hidden w-screen h-screen">
      <header className=" text-gray-600 relative z-10 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={logo} alt="Picture of the logo" />
          </a>

          <button className="md:ml-auto flex flex-wrap items-center text-base justify-center border-0 py-1 px-3 focus:outline-none rounded  mt-4 md:mt-0">
            <div className="w-32">
              <Image src={workContact} alt="Picture of the work contact logo" />
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
      <div className="items-center bg-black opacity-25 absolute"></div>
      <div className="items-center px-6 md:px-12 relative z-10  ">
        <div className="w-full min-h-full font-mono flex flex-col justify-center items-center relative z-10">
          <Image
            width={400}
            height={400}
            src={circle}
            alt="Picture of the banner"
          />
          <h1 className="font-extrabold absolute top-20 bottom-0 align-center  text-9xl text-center text-yellow-400 leading-tight mt-4">
            MARKETING
          </h1>
          <Link href="/marketing/marketingcasestudy" passHref>
            <button className="absolute top-[250px] bg-yellow-500 px-12 py-2">
              EXPLORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Market;
