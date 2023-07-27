import React from "react";
import { services } from "./index";
import Image, { StaticImageData } from "next/image";

interface PageData {
  title: string;
  description: string;
  icon: StaticImageData;
  // Other properties if needed
}

const ServiceCard = (pageData: PageData) => (
  <div className="flex justify-evenly items-center flex-col p-10">
    <Image
      src={pageData.icon}
      alt="placeholder"
      className="w-10 h-10 object-contain"
    />

    <h3 className="text-ellipsis overflow-hidden text-gray-600 text-base uppercase font-bold text-center">
      {pageData.title}
    </h3>
    <span className="text-ellipsis overflow-hidden text-gray-500 text-xs font-bold text-center">
      {pageData.description}
    </span>
  </div>
);

const About = () => {
  return (
    <section className="relactive w-full h-screen mx-auto">
      <div className="flex   items-clip justify-center ">
        <div>
          <h3 className=" border rounded-xl text-gray-600 p-3 tracking-[5px]">
            About
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
      <div className="py-15">
        <div className="grid grid-cols-3 gap-4 p-10 ">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
