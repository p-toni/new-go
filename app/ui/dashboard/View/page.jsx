"use client";
import React from "react";
import { PiShoppingCartBold, PiMotorcycleBold, PiUsersBold } from "react-icons/pi";
import { SiCss3, SiFramer } from "react-icons/si";

import TestimonialTooltip from "@/app/TestimonialTooltip/page";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

function page() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="lg:block w-ful lg:w-fit hidden  max-xl:hidden "
    >
      <div className=" md:w-60 w-full rounded-2xl h-fit sticky top-5 ">
        <div>
          <div className="bg-[#1C1C1C] min-w-min rounded-2xl p-4 border border-neutral-800 h-fit">
            <h2 className="font-RubikBold text-neutral-200">
              My big things
            </h2>
            <p className="text-xs my-3 text-neutral-400 font-RubikRegular">
              1. From a small city IDH: 0,575 - low.<br />
              2. My Mom taught me I could do anything.<br />
              3. Love for sciency, history, and tech.<br />
              4. I'm a Product Manager, Data Evangelist, and Founder.<br />
              5. My family and my ability to think independently.<br />
              <br />Now working @ Google! 🎉 tnks mom
            </p>
            <button className="bg-[#696969] h-7 p-1 rounded-md text-xs w-full font-RubikMedium text-neutral-50 ">
              Read
            </button>

            <div className="border border-neutral-700 my-5" />

            <div className="text-neutral-400">
              <h1 className="font-RubikMedium text-neutral-200">Some of my projects</h1>
              <div className="flex items-center gap-x-3 mt-3 hover:bg-neutral-800  p-2 rounded-md ">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <PiShoppingCartBold className="text-lg" />
                </div>
                <h3 className="text-xs ">
                  Pegueeei <br /> E-Commerce
                </h3>
              </div>
              <div className="flex items-center gap-x-3 mt-3 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <PiMotorcycleBold className="text-lg" />
                </div>
                <h3 className="text-xs ">
                  Cierge <br /> Consumer Services
                </h3>
              </div>
              <div className="flex items-center gap-x-3 mt-3 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <PiUsersBold className="text-lg" />
                </div>
                <h3 className="text-xs ">
                  Gomlabs <br /> Web3
                </h3>
              </div>

              <div className="border border-neutral-700 my-5" />

              <div className="flex items-center justify-center gap-x-2">
                <TestimonialTooltip />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1C1C1C] min-w-min rounded-2xl p-4 border border-neutral-800 mt-3 text-neutral-50">
          <Image
            width={1000}
            height={1000}
            className="h-32 w-56 object-cover rounded-lg"
            src="/shark.jpg"
            alt=""
          />
          <p className="my-3 font-RubikMedium text-sm">I'm having fun</p>
          {/* <button className="bg-[#696969] h-7 p-1 rounded-md text-xs w-full font-RubikMedium ">
            Get Now @20% OFF
          </button> */}
        </div>
      </div>
    </motion.div>
  );
}

export default page;

