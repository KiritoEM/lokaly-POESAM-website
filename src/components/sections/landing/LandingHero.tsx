import { motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const LandingHero = (): JSX.Element => {
  const [imgPositionClass, setImgPositionClass] = useState(
    "absolute left-0 top-0 z-70"
  );
  let transition = {};

  useEffect(() => {
    const timer = setTimeout(() => {
      setImgPositionClass("absolute image-position top-0 z-70");
      transition = {
        duration: 2,
      };
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  transition = {
    duration: 2,
  };

  let title = "Pour une consommation";
  return (
    <Fragment>
      <section
        className="landing__hero px-10 md:px-20 lg:pl-36  lg:pr-60 pt-16 mt-24 lg:mt-18 lg:mt-28 items-start flex flex-col gap-20 md:flex-row w-screen  relative overflow-hidden pb-20  justify-between pb-20 md:pb-32"
        id="hero"
      >
        <div className="hero-header flex md:justify-center relative z-30">
          <div className="hero-header__container md:w-72 lg:w-96 flex flex-col gap-3 md:mt-14 lg:mt-20">
            <div className="title">
              <div
                style={{
                  overflow: "hidden",
                  position: "relative",
                  width: "fit-content",
                }}
              >
                <motion.h2
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  className="hero-title calSans text-green02 leading-tight flex flex-col w-full hidden lg:flex"
                >
                  {title}
                </motion.h2>
              </div>

              {/* h2 responsive */}
              <motion.h2
                initial={{ opacity: 0, y: 17, x: 30, scale: 0 }}
                animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                transition={{ delay: 1 }}
                className="hero-title calSans text-green02 leading-tight flex flex-col w-full  flex lg:hidden"
              >
                {title}
              </motion.h2>
              <motion.span
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="hero-title calSans text-green01 leading-tight flex flex-row  hidden lg:flex"
              >
                reponsable
              </motion.span>

              {/* span responsive */}
              <motion.span
                initial={{ opacity: 0, y: 20, x: 35, scale: 0 }}
                animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                transition={{ delay: 1.4 }}
                className="hero-title calSans text-green01 leading-tight flex flex-row  flex lg:hidden"
              >
                reponsable
              </motion.span>
            </div>
            <motion.p
              initial={{ opacity: 0, y: -55, x: -30 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1 }}
              className="text-gray01 lg:text-lg w-full hidden lg:flex"
            >
              Valorisez les produits locaux et contribuez à un mode de vie plus
              durable.
            </motion.p>

            {/* p responsive */}
            <motion.p
              initial={{ opacity: 0, y: -55, x: -30 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.6 }}
              className="text-gray01 lg:text-lg w-full flex lg:hidden"
            >
              Valorisez les produits locaux et contribuez à un mode de vie plus
              durable.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: -45, x: -25, scale: 0 }}
              animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              transition={{ delay: 1 }}
              className="text-white bg-green01 rounded-3xl px-6 py-3 flex items-center gap-2 w-max mt-8 hidden lg:flex"
            >
              Télécharger l' app{" "}
              <img src="/icons/download-icon.svg" className=" w-5" alt="" />
            </motion.button>

            {/* button responsive */}
            <motion.button
              initial={{ opacity: 0, y: -45, x: -25, scale: 0 }}
              animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              transition={{ delay: 1.8 }}
              className="text-white bg-green01 rounded-3xl px-6 py-3 flex items-center gap-2 w-max mt-8  flex lg:hidden"
            >
              Télécharger l' app{" "}
              <img src="/icons/download-icon.svg" className=" w-5" alt="" />
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 17, x: 30, scale: 0 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          transition={{ delay: 2 }}
          className="hero-img flex justify-center w-full md:w-96"
        >
          <img src="/home-img.png" className="md:w-full" />
        </motion.div>
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
