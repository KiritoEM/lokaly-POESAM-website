import { navList } from "@/helpers/constants";
import { motion } from "framer-motion";
import React from "react";

const LandingNav = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -37 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 5.3 }}
      className="landing-nav absolute w-full top-0 z-50  bg-transparent overflow-hidden"
    >
      <div className="nav-container flex justify-between py-10 px-16  bg-transparent">
        {/* logo */}
        <div className="logo">
          <img src="/logo.svg" alt="" />
        </div>

        {/* menu-items */}
        <div className="menu-items flex gap-10 items-center">
          <ul className="flex gap-10">
            {navList.map((item, index) => (
              <li key={index} className="general-sans-medium  text-green02">
                {item.label}
              </li>
            ))}
          </ul>
          <div className="contact-btn">
            <button className="bg-green02 rounded-3xl py-3 text-white px-6 general-sans-medium">
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default LandingNav;
