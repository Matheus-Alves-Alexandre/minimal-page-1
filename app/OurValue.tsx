import React from "react";

const OurValue = () => {
  return (
    <section className="relactive w-full h-screen mx-auto">
      <div className="flex   items-clip justify-center ">
        <div>
          <h3 className=" border rounded-xl text-gray-600 p-3 tracking-[5px]">
            Our Value
          </h3>
        </div>
      </div>
      <div className="flex flex-grow  items-clip justify-center p-3">
        <div className=" ">
          <span className="flex font-bold text-gray-600 text-xl">
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
      {/* --------------------------------------------- */}

      <div className=" justify-center px-28 grid grid-cols-2 gap-2 mt-20">
        <div className="p-10">
          <h2 className="text-gray-600 text-base text-xl uppercase font-bold">
            Commitment
          </h2>
          <span className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum
            consequatur praesentium omnis cumque? Voluptatibus error, quia eaque
            unde deserunt voluptate maxime sed iste beatae quae odio laborum
            incidunt commodi.
          </span>
        </div>{" "}
        <div className="p-10">
          <h2 className="text-gray-600 text-base text-xl uppercase font-bold">
            Collaboration
          </h2>
          <span className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum
            consequatur praesentium omnis cumque? Voluptatibus error, quia eaque
            unde deserunt voluptate maxime sed iste beatae quae odio laborum
            incidunt commodi.
          </span>
        </div>
        <div className="p-10">
          <h2 className="text-gray-600 text-base text-xl uppercase font-bold">
            Diversity
          </h2>
          <span className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum
            consequatur praesentium omnis cumque? Voluptatibus error, quia eaque
            unde deserunt voluptate maxime sed iste beatae quae odio laborum
            incidunt commodi.
          </span>
        </div>
        <div className="p-10">
          <h2 className="text-gray-600 text-base text-xl uppercase font-bold">
            Remote Work
          </h2>
          <span className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum
            consequatur praesentium omnis cumque? Voluptatibus error, quia eaque
            unde deserunt voluptate maxime sed iste beatae quae odio laborum
            incidunt commodi.
          </span>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
