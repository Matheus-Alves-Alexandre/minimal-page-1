import React from "react";
import { hero } from "./assets";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relactive w-full h-screen mx-auto">
      <div className=" flex justify-between">
        <Image
          src={hero}
          alt="logo"
          width={480}
          height={480}
          className="rounded ml-5 p-10"
        />

        <div className="" />
        <div className="flex-row p-36 ">
          <h1 className=" text-gray-600 font-extrabold text-4xl p-3">
            Minimal design
          </h1>
          <span className="text-gray-500 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nemo
            quia, ducimus nam, error molestias sit minima amet optio, corrupti
            cumque tempore eos provident! Recusandae deserunt earum a distinctio
            sit.
          </span>
          <div className="p-2 flex py-1">
            <div className="p-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
