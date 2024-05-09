import { navList } from "@/helpers/constants";
import React from "react";

const LandingNav = () => {
  return (
    <nav className="landing-nav flex justify-between py-10 px-16">
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
    </nav>
  );
};

export default LandingNav;
