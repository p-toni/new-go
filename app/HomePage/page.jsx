"use client";
import Link from "next/link";
import React from "react";
import { PiFingerprintThin } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

function Homepage() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.6,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="w-full lg:w-fit "
    >
      <div className="  bg-[#1C1C1C] lg:bg-transparent rounded-2xl ">
        <div>
          <div className="flex gap-x-6 p-4">
            <PiFingerprintThin className="text-6xl text-neutral-50" />

            <div>
              <h1 className="text-2xl font-RubikMedium text-neutral-300">
                Probably Human,{" "}
                <span className="text-sm text-neutral-400">Blog</span>
              </h1>
              <p className="max-w-sm text-neutral-400 text-sm">
                Just trying to learn, challenge, and maybe make <br />{" "}
                a little difference. Oh, and sometimes I write about it.
              </p>
            </div>
          </div>

          <div className="border border-neutral-700 my-5" />

          <div className="  bg-[#1C1C1C] rounded-lg text-neutral-400">
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <Image
                  width={1000}
                  height={1000}
                  className="w-24 h-24 object-cover rounded-md"
                  src="/soon.jpeg"
                  alt=""
                />
                <div>
                  <span className="text-sm">TBD</span>
                  <h2 className="text-sm font-RubikMedium">
                    How many Why's
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <Image
                  height={1000}
                  width={1000}
                  className="w-24 h-24 object-cover rounded-md"
                  src="/soon.jpeg"
                  alt=""
                />
                <div>
                  <span className="text-sm">TBD</span>
                  <h2 className="text-sm font-RubikMedium">
                    Agile is both more and less than you think.
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <Image
                  height={1000}
                  width={1000}
                  className="w-24 h-24 object-cover rounded-md"
                  src="/soon.jpeg"
                  alt=""
                />
                <div>
                  <span className="text-sm">TBD</span>
                  <h2 className="text-sm font-RubikMedium">
                    LLMS Productivity Research.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* without image */}

          {/* <div className="mt-6  bg-[#1C1C1C] rounded-lg text-neutral-400">
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <span className="text-sm">July 22, 2023</span>
                  <h2 className="text-sm font-RubikMedium">
                    When I was featured in a local newspaper due to Pegueeei startup
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <span className="text-sm">July 22, 2023</span>
                  <h2 className="text-sm font-RubikMedium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <span className="text-sm">July 22, 2023</span>
                  <h2 className="text-sm font-RubikMedium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
          </div> */}

          {/* With image */}

          <div className=" mt-6  bg-[#1C1C1C] rounded-lg text-neutral-400">
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <Image
                  height={1000}
                  width={1000}
                  className="w-24 h-24 object-cover rounded-md"
                  src="/eddie.jpeg"
                  alt=""
                />
                <div>
                  <span className="text-sm">2021</span>
                  <h2 className="text-sm font-RubikMedium">
                    Our little Eddie 🐶
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <Image
                  height={1000}
                  width={1000}
                  className="w-24 h-24 object-cover rounded-md"
                  src="/lascar.jpg"
                  alt=""
                />
                <div>
                  <span className="text-sm">2019</span>
                  <h2 className="text-sm font-RubikMedium">
                    Right before climbing the Lascar Volvano in Chile
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <Image
                  height={1000}
                  width={1000}
                  className="w-24 h-24 object-cover rounded-md"
                  src="/estadao.jpg"
                  alt=""
                />
                <div>
                  <span className="text-sm">2017</span>
                  <h2 className="text-sm font-RubikMedium">
                    Featured in a local newspaper because of my startup Pegueeei.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* without image */}

          {/* <div className="mt-6  bg-[#1C1C1C] rounded-lg text-neutral-400">
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <h2 className="text-sm font-RubikMedium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                  <div className="flex items-center gap-x-2 font-RubikBold">
                    <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                      TypeScript
                    </p>
                    <div className="w-1 h-1 rounded-full bg-neutral-400" />
                    <span className="text-xs">Sunday, July 22, 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
}

export default Homepage;
