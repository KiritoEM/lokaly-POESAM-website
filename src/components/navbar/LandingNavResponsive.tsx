import { navList } from "@/helpers/constants";
import scrollSection from "@/helpers/scroll";
import { motion } from "framer-motion";
import React, { Fragment } from "react";

const LandingNavResponsive = (): JSX.Element => {
  return (
    <div className="container  relative top-24 p-5  overflow-hidden lg:hidden">
      <div className="menu-items items-center  bg-green01 py-12 rounded-lg shadow-gray-500">
        <ul className="flex-col flex gap-10 items-center">
          {navList.map((item, index) => (
            <li
              key={index}
              className="general-sans-medium  text-green02 text-lg cursor-pointer"
              onClick={() =>
                scrollSection(item.scrollSectionId ? item.scrollSectionId : "")
              }
            >
              {item.label}
            </li>
          ))}
          <div className="contact-btn">
            <button className="bg-green02 rounded-3xl py-3 text-white px-6 general-sans-medium mt-2">
              Nous contacter
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default LandingNavResponsive;
