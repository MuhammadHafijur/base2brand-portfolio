import Image from "next/image";
import Link from "next/link";
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
        <div className="flex translate-y-[10%] md:translate-y-0 flex-col md:flex-row h-screen min-w-full justify-items-end items-center ">
          <div className="md:w-1/2 order-last md:order-none">
            <h1 className="font-nanummy text-[40px] md:text-[50px] 2xl:text-[155px] text-center md:text-left text-[#4A1D00]">
              Mozaiku & <br />
              Notteluna
            </h1>
            <p className="font-poppins text-[16px] md:text-[20px] lg:text-[24px] text-center md:text-left text-[#0D1C31]">
              Mozaiko and Notteluna are the jewelry brands by Aumi 4 that sell
              Gold and Silver jewelry inspired by apanese Designs that have
              timeless appeal and can be worn during all occasions
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
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

        <div className="absolute bottom-[20px]">
          <Link href="/webdesign/unutrientsdetails">
            <a>
              <h1 className="text-[16px] md:text-[21px] flex  font-bold justify-center items-center md:justify-start ">
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
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mozaiku;
