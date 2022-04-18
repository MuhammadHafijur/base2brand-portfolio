import Image from "next/image";
import Link from "next/link";
import React from "react";
import heroGif from "./hola_2.gif";
import letsConnect from "./lets-connect.png";
import logo from "./nav-logo.png";
import bannerBg from "./orange-paper-bg.png";
import rotateYellow from "./rotate-yellow.png";

const Banner = () => {
  return (
    <div className="">
      <div className="">
        <div className="z-20 w-full h-full relative">
          <div className="flex absolute z-30 justify-between w-[89%] m-auto left-0 right-0 top-[8%]">
            <div className="">
              <Image
                src={logo}
                alt="Picture of the banner"
                height={75}
                width={75}
              />
            </div>
            <div className="">
              <Link href="/screen">
                <a className="text-right text-white font-bold text-2xl">
                  Work <br />
                  Contact
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full">
            <Image
              src={bannerBg}
              alt="Picture of the banner"
              // height={1000}
              // width={1000}
            />
          </div>
        </div>
        <div className="w-[89%] mx-auto">
          <div className="absolute z-40 top-[30%]">
            <div className="">
              {/* <Image
                src={heroContent}
                height={300}
                width={600}
                alt="Picture of the banner"
              /> */}
              <h1 className="text-7xl">
                WE DESIGN <br /> DIGITAL <br /> PRODUCTS
              </h1>

              <div className="w-96">
                <Image
                  className="w-24 h-full rounded-lg"
                  src={rotateYellow}
                  alt="Picture of the banner"
                  // height={75}
                  // width={75}
                />
              </div>
            </div>
          </div>
          <div className="right-[6%] left-[50%] absolute top-[15%]">
            <div className="relative z-0">
              <Image
                src={heroGif}
                height={400}
                width={600}
                alt="Picture of the banner"
              />
            </div>
          </div>
        </div>
        <div className="z-20 w-full">
          <div className="flex absolute z-30 justify-between w-[89%] m-auto left-0 right-0 bottom-[10%]">
            <div className="">
              <Link href="">
                <a>Social Icon</a>
              </Link>
            </div>
            <div>
              <Image
                src={letsConnect}
                alt="Picture of the banner"
                height={50}
                width={200}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="p-[80%]">Hello world!</div> */}
    </div>
  );
};

export default Banner;
