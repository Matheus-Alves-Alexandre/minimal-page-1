import Image from "next/image";
import React from "react";
import { company } from "./assets";

const Experience = () => {
  return (
    <section className="relactive w-full h-screen mx-auto">
      <div className="flex   items-clip justify-center ">
        <div>
          <h3 className=" border rounded-xl text-gray-600 p-3 tracking-[5px]">
            Experience
          </h3>
        </div>
      </div>
      <div className="flex flex-grow  items-clip justify-center p-3">
        <div className=" ">
          <span className="flex font-bold text-gray-500 text-xl">
            Minimalism wrecks
          </span>
        </div>
        <br />
      </div>
      <div className="flex flex-grow  items-clip justify-center p-3">
        <div>
          <span className="text-gray-400 text-base font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ad
            architecto, <br />
            repellendus quos, placeat corporis commodi aspernatur eum pariatur
          </span>
        </div>
      </div>

      {/* ------------------------------------------ */}
      <div className="flex p-15 ml-10 mt-">
        <div className=" mt-32 ml-20">
          <Image
            src={company}
            alt="placeholder"
            className="w-[1200px] h-[300px] "
          />
        </div>
        <div className=" p-40 justify-center">
          <h3 className="text-gray-600 font-light uppercase text-lg ">
            inspiration
          </h3>
          <h2 className="text-gray-600 font-semibold text-3xl">
            get inspiration and design ideas
          </h2>
          <span className="text-gray-500 text-clip">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            ab aliquam quas facilis sapiente pariatur placeat corporis, neque at
            consectetur, itaque cupiditate eaque dolore doloribus recusandae
            odit dicta natus tempora?
          </span>
        </div>
      </div>
    </section>
  );
};

export default Experience;
