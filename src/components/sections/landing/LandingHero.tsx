import { AnimatePresence, motion } from "framer-motion";

const LandingHero = (): JSX.Element => {
  let title = "Pour une consommation";
  return (
    <section className="landing__hero px-44 mt-2 items-start flex 	 w-full overflow-hidden">
      <div className="hero-header flex justify-center relative z-30">
        <div className="hero-header__container w-96 flex flex-col gap-3 mt-32 ">
          <div className="title">
            <motion.h2
              initial={{ opacity: 0, y: 17, x: 30, scale: 0 }}
              animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              transition={{ delay: 3.2 }}
              className="hero-title calSans text-green02 leading-tight flex flex-col w-full"
            >
              {title}
            </motion.h2>
            <motion.span
              initial={{ opacity: 0, y: 20, x: 35, scale: 0 }}
              animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              transition={{ delay: 3.4 }}
              className="hero-title calSans text-green01 leading-tight flex flex-row"
            >
              reponsable
            </motion.span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: -55, x: -30 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 4 }}
            className="text-gray01 text-lg"
          >
            Valorisez les produits locaux et contribuez à un mode de vie plus
            durable.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: -45, x: -25, scale: 0 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            transition={{ delay: 4.3 }}
            className="text-white bg-green01 rounded-3xl px-6 py-3 flex items-center gap-2 w-max mt-8"
          >
            Télécharger l' app{" "}
            <img src="/icons/download-icon.svg" className=" w-5" alt="" />
          </motion.button>
        </div>
      </div>
      <div className="hero-img absolute z-20 left-96">
        <video
          src="/hero-scene.mp4"
          autoPlay
          muted
          // className="w-full h-full"
        ></video>
      </div>
    </section>
  );
};

export default LandingHero;
