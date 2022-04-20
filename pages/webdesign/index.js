import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "./logo.png";
import webGif from "./web-design.gif";
import circle from "./yellow-circle.png";

const WebDesign = () => {
  return (
    <div className="bg-[#000000e1] relative overflow-hidden w-screen h-screen">
      <header className="text-gray-600 relative z-10 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex logo-spin title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={logo} alt="Picture of the logo" />
          </a>

          <button className="md:ml-auto flex flex-wrap items-center text-base justify-center border-0 py-1 px-3 focus:outline-none rounded  mt-4 md:mt-0">
            <div className="w-32 text-white text-3xl text-center lg:text-right">
              <h1>Work</h1>
              <h1>Contact</h1>
            </div>
          </button>
        </div>
      </header>
      <div className="mix-blend-overlay w-1/3">
        <Image
          src={webGif}
          alt="Picture of the banner"
          layout="fill"
          objectFit="cover"
          // className="absolute top-0"
          // quality={100}
        />
      </div>
      {/* <div className="relative h-screen bg-blue-400">
        <div className="absolute inset-0 flex items-center justify-center">
          Item 1
          <br />
          Item 2
        </div>
      </div> */}
      <div className="flex h-screen min-w-full absolute  top-10">
        <div className="m-auto">
          <div className="w-[50%] mx-auto relative">
            <Image
              src={circle}
              // layout="fill"
              alt="Picture of the banner"
            />
            <div className="absolute inset-0 flex  ">
              <div className="m-auto text-center">
                <h1
                  style={{ color: "#0DFFB6" }}
                  className="font-extrabold align-center text-5xl lg:text-9xl text-center web-font leading-tight mt-4"
                >
                  WEB DESIGN
                </h1>
                <Link href="/webdesign/webdesigncasestudy" passHref>
                  <a>
                    <button className=" bg-yellow-500 px-8 lg:px-12 py-1 lg:py-2">
                      EXPLORE
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inset-0 bg-black opacity-5 absolute"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center ">
        <div className="min-w-full font-mono flex flex-col items-center relative z-10">
          <div className="w-[calc(100vw-40%)] ">
            {/* <Image
              src={circle}
              // layout="fill"
              alt="Picture of the banner"
            /> */}
          </div>
          {/* <h1
            style={{ color: "#0DFFB6" }}
            className="font-extrabold absolute top-[25%] align-center text-5xl lg:text-9xl text-center web-font leading-tight mt-4"
          >
            WEB DESIGN
          </h1>
          <Link href="/webdesign/webdesigncasestudy" passHref>
            <button className="absolute top-[60%] lg:top-[250px] bg-yellow-500 px-8 lg:px-12 py-1 lg:py-2">
              EXPLORE
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default WebDesign;

//   <div className=" bg-black relative">
//   <div className="">
//     <Image
//       src={webGif}
//       alt="Picture of the banner"
//       layout="fill"
//       objectFit="cover"
//       className="mix-blend-mode"
//       // quality={100}
//     />
//   </div>
//   <div className="flex h-screen">
//     <div className="w-[32%] m-auto">
//       <Image src={circle} alt="Picture of the banner" />
//     </div>
//   </div>
//   <div className="flex h-screen absolute inset-0">
//     <div className="text-center m-auto">
//       <h1
//         style={{ color: "#0DFFB6" }}
//         className="font-extrabold z-20 text-5xl lg:text-7xl text-center web-font leading-tight "
//       >
//         WEB DESIGN
//       </h1>
//       <Link href="/webdesign/webdesigncasestudy" passHref>
//         <button className=" bg-yellow-500 px-8 lg:px-12 py-1 lg:py-2">
//           EXPLORE
//         </button>
//       </Link>
//     </div>
//   </div>
//   <div className="w-[95%] mx-auto absolute top-0  flex justify-between items-center">
//     <div className="">
//       <a className="logo-spin title-font font-medium text-gray-900 mb-4 md:mb-0">
//         <Image src={logo} alt="Picture of the logo" />
//       </a>
//     </div>
//     <div className="w-32 text-white z-10 text-3xl text-center lg:text-right">
//       <h1>Work</h1>
//       <h1>Contact</h1>
//     </div>
//   </div>
// </div>
