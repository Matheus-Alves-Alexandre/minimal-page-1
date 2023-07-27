import React from "react";

export const Contact = () => {
  return (
    <section className="relactive w-full h-screen mx-auto">
      <div className="flex   items-clip justify-center ">
        <div>
          <h3 className=" border rounded-xl text-gray-300 p-3 tracking-[5px]">
            contact
          </h3>
        </div>
      </div>
      <div className="flex flex-grow  items-clip justify-center p-3">
        <div className=" ">
          <span className="flex font-bold text-gray-300 text-xl">
            Minimalism wrecks
          </span>
        </div>
        <br />
      </div>
      <div className="px-96">
        <div className="border p-5 py-20 bg-gray-600 rounded">
          {" "}
          <form className="mt-12 h-full flex flex-col gap-8">
            <input
              type="text"
              placeholder="What's your name?"
              className="border py-2 bg-slate-600  h-full rounded px-6 placeholder:text-secondary"
            />
            <input
              type="text"
              placeholder="What's your web address?"
              className="border py-2 bg-slate-600 rounded h-full  px-6 placeholder:text-secondary"
            />
            <input
              type="text"
              placeholder="What you want to say?"
              className="border py-8 px-6 bg-slate-600 h-full  rounded  placeholder:text-secondary"
            />
          </form>
          <div className="mt-3">
            <button
              type="submit"
              className=" bg-gray-900 py-1 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {" "}
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
