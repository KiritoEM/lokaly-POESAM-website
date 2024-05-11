import { navList } from "@/helpers/constants";
import scrollSection from "@/helpers/scroll";
import { motion } from "framer-motion";
import React, { Fragment } from "react";
import LandingNavResponsive from "./LandingNavResponsive";
import { useNav } from "@/hooks/usenav";

const LandingNav = (): JSX.Element => {
  const { menuToogle } = useNav();
  return (
    <Fragment>
      <motion.nav
        initial={{ opacity: 0, y: -37 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 5.3 }}
        className="landing-nav absolute w-full top-0 z-50  bg-transparent overflow-hidden hidden lg:inline"
      >
        <div className="nav-container flex justify-between px-10 py-8 md:py-10 md:px-16  bg-transparent">
          {/* logo */}
          <div className="logo">
            <img src="/logo.svg" alt="" />
          </div>

          {/* menu-items */}
          <div className="menu-items  gap-10 items-center hidden lg:flex">
            <ul className="flex gap-10">
              {navList.map((item, index) => (
                <li
                  key={index}
                  className="general-sans-medium  text-green02 cursor-pointer"
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
              <button className="bg-green02 rounded-3xl py-3 text-white px-6 general-sans-medium">
                Nous contacter
              </button>
            </div>
          </div>

          {/* menu icon */}
          <img
            src="/icons/menu-icon.png"
            alt=""
            className="md:hidden w-8 h-8 relative top-1"
            onClick={() => menuToogle()}
          />
        </div>
      </motion.nav>
      <nav className="landing-nav absolute w-full top-0 z-50  bg-transparent overflow-hidden lg:hidden">
        <div className="nav-responsive-container flex justify-between px-10 py-8 md:py-10 md:px-16  bg-transparent">
          {/* logo */}
          <div className="logo">
            <img src="/logo.svg" alt="" />
          </div>

          {/* menu-items */}
          <div className="menu-items  gap-10 items-center hidden lg:flex">
            <ul className="flex gap-10">
              {navList.map((item, index) => (
                <li
                  key={index}
                  className="general-sans-medium  text-green02 cursor-pointer"
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
              <button className="bg-green02 rounded-3xl py-3 text-white px-6 general-sans-medium">
                Nous contacter
              </button>
            </div>
          </div>

          {/* menu icon */}
          <img
            src="/icons/menu-icon.png"
            alt=""
            className="lg:hidden w-8 h-8 relative top-1"
            onClick={() => menuToogle()}
          />
        </div>
      </nav>
      <LandingNavResponsive />
    </Fragment>
  );
};

export default LandingNav;
