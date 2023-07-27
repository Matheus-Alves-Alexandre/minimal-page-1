import Image from "next/image";
import React from "react";
import { eu, hero } from "./assets";

function CeoValue() {
  return (
    <section className="relactive w-full h-screen mx-auto">
      <div className="p-20 ">
        <div className=" bg-slate-300 border-2 border-gray-400 rounded-md p-10  flex ">
          <div>
            <Image
              src={eu}
              alt={"plaholder"}
              className="rounded-full border-3   border-gray-400"
              width={200}
              height={200}
            />
          </div>
          <div className="p-5">
            <span className="text-gray-600 font-semibold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium qui ex, aspernatur nulla assumenda amet similique
              provident repudiandae nemo libero quas.
            </span>
            <h1 className="font-extrabold text-xl text-gray-800 ">
              Rogerio Silva
            </h1>
            <h2 className="text-gray-500 font-bold">CEO BARNEY CO</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CeoValue;
