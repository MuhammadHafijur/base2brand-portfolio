// import React from "react";
import Image from "next/image";
import Link from "next/link";
import checkupImg from "./checkups.png";
import "./Market.module.css";

const CheckUpMeds = () => {
  return (
    <div style={{ background: "#D5F8FD" }} className="h-screen">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 justify-items-end items-center ">
          <div className="">
            <h1 className="text-[100px] 2xl:text-[155px] text-[#022C5B]">
              Checkupmeds
            </h1>
            <p className="text-[24px] text-black">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever si
            </p>
            <Link href="/marketing/checkupmedsdetails" passHref>
              <a>
                <h1 className="text-[21px] font-bold mt-32">OPEN CASE STUDY</h1>
              </a>
            </Link>
          </div>
          <div className="">
            <Image
              src={checkupImg}
              alt="Picture of the author"
              // width={500}
              // height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckUpMeds;
