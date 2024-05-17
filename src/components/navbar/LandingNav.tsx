import { navList } from "@/helpers/constants";
import scrollSection from "@/helpers/scroll";
import { motion } from "framer-motion";
import React, { Fragment } from "react";
import LandingNavResponsive from "./LandingNavResponsive";
import { useNav } from "@/hooks/usenav";

const LandingNav = (): JSX.Element => {
  const { menuToogle, changeNav } = useNav();
  return (
    <Fragment>
      {/* navbar  container responsive */}
      <div className="container lg:mx-auto">
        <motion.nav
          initial={{ opacity: 0, y: -37 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="landing-nav fixed lg:relative w-full top-0 z-50  bg-white lg:bg-transparent overflow-hidden"
        >
          <div className="nav-responsive-container flex justify-between px-10 lg:px-20 bg-transparent py-6 md:py-8 bg-transparent">
            {/* logo */}
            <div className="logo">
              <img src="/logo.svg" alt="logo" className="w-24 md:w-auto" />
            </div>

            {/* menu-items */}
            <div className="menu-items  gap-10 items-center hidden lg:flex">
              <ul className="flex gap-10">
                {navList.map((item, index) => (
                  <li
                    key={index}
                    className="general-sans-medium  text-green02 cursor-pointer hover:text-green01"
                    onClick={() =>
                      scrollSection(
                        item.scrollSectionId ? item.scrollSectionId : ""
                      )
                    }
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
              <div className="contact-btn">
                <button className="bg-green02 hover:bg-green01 rounded-3xl py-3 text-white px-6 general-sans-medium">
                  Nous contacter
                </button>
              </div>
            </div>

            {/* menu icon */}
            <img
              src="/icons/menu-icon.svg"
              alt=""
              className="lg:hidden w-7 h-7 relative top-1 object-contain"
              onClick={() => menuToogle()}
            />
          </div>
        </motion.nav>
      </div>
      <LandingNavResponsive />
    </Fragment>
  );
};

export default LandingNav;
