import Image from "next/image";
import React from "react";
import { hero, work } from "./assets";

function OurWork() {
  return (
    <section className="relactive w-full h-screen mx-auto">
      <div className="flex   items-clip justify-center ">
        <div>
          <h3 className=" border rounded-xl text-gray-600 p-3 tracking-[5px]">
            Our Work
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
          <span className="text-gray-500 text-base font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ad
            architecto, <br />
            repellendus quos, placeat corporis commodi aspernatur eum pariatur
          </span>
        </div>
      </div>

      {/* --------------------------------- */}
      <div>
        <div className=" flex justify-between mb-10">
          <Image
            src={work}
            alt="logo"
            width={600}
            height={400}
            className="rounded ml-16 p-10 "
          />

          <div className="" />
          <div className="flex-row p-36 ">
            <h1 className=" text-gray-400 font-extrabold text-4xl p-3">
              Our Fantastic Work
            </h1>
            <span className="text-gray-500 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nemo
              quia, ducimus nam, error molestias sit minima amet optio, corrupti
              cumque tempore eos provident! Recusandae deserunt earum a
              distinctio sit.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurWork;
