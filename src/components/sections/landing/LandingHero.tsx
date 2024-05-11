import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const LandingHero = (): JSX.Element => {
  const [imgPositionClass, setImgPositionClass] = useState(
    "absolute left-0 top-0"
  );
  let transition = {};

  useEffect(() => {
    const timer = setTimeout(() => {
      setImgPositionClass("absolute ml-32");
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
    <section className="landing__hero px-44 mt-28 items-start flex w-screen relative  overflow-hidden">
      <div className="hero-header flex justify-center relative z-30">
        <div className="hero-header__container w-96 flex flex-col gap-3 mt-32 ">
          <div className="title">
            <motion.h2
              initial={{ opacity: 0, y: 17, x: 30, scale: 0 }}
              animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              transition={{ delay: 5 }}
              className="hero-title calSans text-green02 leading-tight flex flex-col w-full"
            >
              {title}
            </motion.h2>
            <motion.span
              initial={{ opacity: 0, y: 20, x: 35, scale: 0 }}
              animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              transition={{ delay: 5 }}
              className="hero-title calSans text-green01 leading-tight flex flex-row"
            >
              reponsable
            </motion.span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: -55, x: -30 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 5.2 }}
            className="text-gray01 text-lg"
          >
            Valorisez les produits locaux et contribuez à un mode de vie plus
            durable.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: -45, x: -25, scale: 0 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            transition={{ delay: 5.2 }}
            className="text-white bg-green01 rounded-3xl px-6 py-3 flex items-center gap-2 w-max mt-8"
          >
            Télécharger l' app{" "}
            <img src="/icons/download-icon.svg" className=" w-5" alt="" />
          </motion.button>
        </div>
      </div>
      <motion.video
        src="/hero-scene.mp4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        autoPlay
        muted
        transition={transition}
        className={`hero-video z-20 ${imgPositionClass} transition-ml justify-center`}
      ></motion.video>
    </section>
  );
};

export default LandingHero;
