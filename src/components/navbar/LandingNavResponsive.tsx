import { navList } from "@/helpers/constants";
import scrollSection from "@/helpers/scroll";
import { useNav } from "@/hooks/usenav";
import React from "react";
import { motion } from "framer-motion";

const LandingNavResponsive = (): JSX.Element => {
  const { openMenu } = useNav();

  const menuVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.4 } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate={openMenu ? "visible" : "closed"}
      variants={menuVariants}
      className={`container relative top-24 p-5 overflow-hidden lg:hidden ${
        openMenu ? "" : "hidden"
      }`}
    >
      <div className="menu-items items-center bg-green02 py-12 rounded-xl shadow-gray-500">
        <ul className="flex-col flex gap-8 items-center">
          {navList.map((item, index) => (
            <li
              key={index}
              className="general-sans-medium text-white text-lg cursor-pointer"
              onClick={() =>
                scrollSection(item.scrollSectionId ? item.scrollSectionId : "")
              }
            >
              {item.label}
            </li>
          ))}
          <div className="contact-btn">
            <button className="bg-white rounded-3xl py-3 text-green02 px-6 general-sans-medium mt-2">
              Nous contacter
            </button>
          </div>
        </ul>
      </div>
    </motion.div>
  );
};

export default LandingNavResponsive;
