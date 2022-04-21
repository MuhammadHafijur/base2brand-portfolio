import Image from "next/image";
import Link from "next/link";
import React from "react";
import circle from "./circle.png";
import logo from "./logo.png";
import uxgif from "./ux.gif";

const Ux = () => {
  return (
    <div className=" bg-[#000000de] relative overflow-hidden w-screen h-screen">
      <header className=" text-gray-600 relative z-10 body-font">
        <div className="container mx-auto flex justify-between p-5 items-center">
          <Link href="/">
            <a className="flex logo-spin title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image src={logo} alt="Picture of the logo" />
            </a>
          </Link>

          <button className="md:ml-auto flex flex-wrap items-center text-base justify-center border-0 py-1 px-3 focus:outline-none rounded  mt-4 md:mt-0">
            <div className="w-32">
              {/* <Image src={workContact} alt="Picture of the work contact logo" /> */}
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
          src={uxgif}
          alt="Picture of the banner"
          width={70}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute grid top-0 min-h-full w-screen ">
        <div className="m-auto logo-spin w-[100%] lg:w-[50%] ">
          <Image
            // width={800}
            // height={800}
            layout="responsive"
            src={circle}
            alt="Picture of the banner"
          />
        </div>
        <div className="absolute inset-0 top-[35%] text-center">
          <h1 className="font-extrabold text-[40px] md:text-[80px] lg:text-[110px] xl:text-[140px] 2xl:text-[173px] text-center text-[#0DFFB6] leading-tight">
            UX/UI
          </h1>
          <Link href="/webdesign/webdesigncasestudy" passHref>
            <button className=" bg-[#E4602D] text-white mt-4 px-12 py-2">
              EXPLORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ux;
