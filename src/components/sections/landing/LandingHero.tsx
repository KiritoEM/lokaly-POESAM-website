import FadeReveal from "@/components/animations/FadeReveal";
import { motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";

const LandingHero = (): JSX.Element => {

  let title = "Pour une consommation";
  return (
    <Fragment>
      <section
        className="landing__hero px-10 md:px-20 lg:pl-40  lg:pr-52 pt-16 mt-24 lg:mt-18 lg:mt-28 items-start flex flex-col gap-20 md:flex-row w-screen  relative overflow-hidden pb-20  justify-between pb-20 md:pb-32"
        id="hero"
      >
        <div className="hero-header flex md:justify-center relative z-30">
          <div className="hero-header__container md:w-72 lg:w-96 flex flex-col gap-3 md:mt-14 lg:mt-20">
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
              <button className="text-white bg-green01 hover:bg-green02 rounded-3xl px-6 py-3 flex items-center gap-2 w-max mt-8">
                Télécharger l' app{" "}
                <img src="/icons/download-icon.svg" className=" w-5" alt="" />
              </button>
            </FadeReveal>
          </div>
        </div>

        <div className="w-full flex justify-center md:w-5/12">
          <motion.div
            initial={{ opacity: 0, y: 17, x: 30, scale: 0 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            transition={{ delay: 1, duration: 0.9 }}
            className="hero-img flex justify-center w-full relative"
          >
            <img src="/home-img.png" className="md:max-w-full	md:h-auto" />
          </motion.div>
        </div>
        {/* <DotLottiePlayer
        autoplay={true}
        loop={true}
        src={"/lottie.json"}
        style={{ width: "658em", height: "25em", objectFit: "cover" }}
      /> */}
        {/* <motion.video
        src="/hero-scene.mp4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        autoPlay
        muted
        transition={transition}
        className={`hero-video z-20 absolute top-0 ${imgPositionClass} transition-ml justify-center hidden lg:flex`}
      ></motion.video> */}

        {/* image pour le responsive */}
      </section>
    </Fragment>
  );
};

export default LandingHero;
