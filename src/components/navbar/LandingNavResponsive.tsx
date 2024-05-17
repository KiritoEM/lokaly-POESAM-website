import { navList } from "@/helpers/constants";
import scrollSection from "@/helpers/scroll";
import { useNav } from "@/hooks/usenav";
import React from "react";
import { motion } from "framer-motion";

const LandingNavResponsive = (): JSX.Element => {
  const { openMenu, changeNav } = useNav();

  return (
    <div className="nav-responsive-container fixed top-24  z-50 px-5 overflow-hidden lg:hidden md:flex md:justify-end  w-screen">
      <div
        className={`menu-items items-center relative bg-green02 w-full md:w-max px-0 md:px-24 py-12 rounded-xl shadow-gray-500 ${openMenu ? "open-menu" : "close-menu"
          }`}
      >
        <ul className="flex-col flex gap-8 items-center">
          {navList.map((item, index) => (
            <li
              key={index}
              className="general-sans-medium text-white text-lg cursor-pointer"
              onClick={() => {
                scrollSection(item.scrollSectionId ? item.scrollSectionId : "");
                changeNav(false);
              }}
            >
              {item.label}
            </li>
          ))}
          <div className="contact-btn">
            <button className="bg-white hover:bg-green01 rounded-3xl py-3 text-green02 px-6 general-sans-medium mt-2" onClick={() => { scrollSection("contact"); changeNav(false) }}>
              Nous contacter
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default LandingNavResponsive;
