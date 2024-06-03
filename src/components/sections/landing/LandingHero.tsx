import FadeReveal from "@/components/animations/FadeReveal";
import { motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";

const LandingHero = (): JSX.Element => {

  let title = "Pour une consommation";
  return (
    <div className="container mx-auto overflow-hidden">
      <section
        className="landing__hero px-8 md:px-20 lg:pl-40 lg:pr-52 pt-10 mt-24 lg:mt-0 md:items-center flex flex-col gap-20 md:flex-row w-full relative overflow-hidden pb-20 justify-between pb-20 md:pb-32"
        id="hero"
      >
        <div className="hero-header flex md:justify-center relative z-30">
          <div className="hero-header__container md:w-72 lg:w-96 flex flex-col gap-3">
            <div className="title">
              <FadeReveal>
                <h2 className="hero-title calSans text-green02 leading-tight flex flex-col w-full">
                  {title}
                </h2>
              </FadeReveal>

              <FadeReveal>
                <span className="hero-title calSans text-green01 leading-tight flex flex-row">
                  reponsable
                </span>
              </FadeReveal>
            </div>

            <FadeReveal>
              <p className="text-gray01 lg:text-lg w-full">
                Valorisez les produits locaux et contribuez à un mode de vie
                plus durable.
              </p>
            </FadeReveal>

            <FadeReveal>
              <a href="https://drive.usercontent.google.com/download?id=1Lv6Sz0P6ONNX3jto4s0Sw7USoQdjZIYp&export=download&authuser=0" download target="_blank">
                <button className="text-white bg-green01 hover:bg-green02 rounded-3xl px-6 py-3 flex items-center gap-2 w-max mt-8">
                  Tester pour android{" "}
                  <img src="/icons/download-icon.svg" className=" w-5" alt="" />
                </button>
              </a>
              {/* <button className="text-white bg-gray03 rounded-3xl px-6 py-3 flex items-center gap-2 w-max mt-8">
                Téléchargeable bientôt{" "}
                <img src="/icons/download-icon.svg" className=" w-5" alt="" />
              </button> */}
            </FadeReveal>
          </div>
        </div>

        <div className="hero-img w-full flex justify-center md:w-5/12">
          <motion.div
            initial={{ opacity: 0, y: 17, x: 30, scale: 0 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            transition={{ delay: 1, duration: 0.9 }}
            className="hero-img flex justify-center w-full relative"
          >
            <img src="/home-img.svg" className="object-contain md:max-w-full	md:h-auto" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingHero;
