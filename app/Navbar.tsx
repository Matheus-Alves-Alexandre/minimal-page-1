import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-full justify-end">
      {/* TODO: Add links to other pages here */}
      <div className="font-medium py-4  ">
        <a href="#about" className="mr-4  text-gray-500 hover:text-white">
          about
        </a>{" "}
        <a href="#experience" className="mr-4  text-gray-500 hover:text-white">
          experience
        </a>{" "}
        <a href="#ourValue" className="mr-4 text-gray-500 hover:text-white">
          our value
        </a>{" "}
        <a href="#ourWork" className="mr-4  text-gray-500 hover:text-white">
          our work
        </a>{" "}
        <a href="#ceoValue" className="mr-4  text-gray-500 hover:text-white">
          ceo value
        </a>{" "}
        {/*   <a href="#about" className="mr-4 text-gray-500 hover:text-white">
          contact
        </a>{" "} */}
      </div>
    </div>
  );
};

export default Navbar;
