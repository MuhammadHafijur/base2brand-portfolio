import Image from "next/image";
import React from "react";
// import styles from "../globals.css";
import mozaikuImg from "./mozaiku.png";

const Mozaiku = () => {
  return (
    <div
      style={{ background: "#FFF2EA" }}
      className="min-h-screen  md:border-l-[22px] border-[#4A1D00]"
    >
      <div className="w-[92%] mx-auto">
        <div className="md:flex h-screen min-w-full justify-items-end items-center ">
          <div className="md:w-1/2">
            <h1 className="text-[40px] md:text-[50px] 2xl:text-[155px] text-center md:text-left text-[#022C5B]">
              Mozaiku & <br /> Notteluna
            </h1>
            <p className="text-[16px] md:text-[20px] lg:text-[24px] text-center md:text-left text-black">
              Lorem Ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever.
            </p>
          </div>
          <div className="md:w-1/2 ">
            <Image
              src={mozaikuImg}
              alt="Picture of the author"
              // className={styles.imageAnimation}
              className={`${"imageAnimation"} ${"w-[100%]"}`}
              // layout="fill"
              objectFit="contain"
              // width={1}
              // height={500}
            />
          </div>
        </div>
        <h1 className="text-[21px] flex items-center mt-0 sm:mt-32 md:-mt-16  lg:-mt-16 font-bold justify-center md:justify-start ">
          OPEN CASE STUDY
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </h1>
      </div>
    </div>
  );
};

export default Mozaiku;
