import { useEffect } from "react";
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LandingFeatures = (): JSX.Element => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    varient1: {
      hidden: { opacity: 0, y: -55 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.4, duration: 0.5, type: "spring" },
        stiffness: 100,
      },
    },
    varient2: {
      hidden: { opacity: 0, y: -55 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.8, duration: 0.5, type: "spring" },
        stiffness: 100,
      },
    },
  };

  return (
    <section className="landing__features pt-36 px-32 bg-white" ref={ref}>
      <motion.div
        variants={variants.varient1}
        initial="hidden"
        animate={controls}
        className="features-header flex flex-col items-center gap-2"
      >
        <h4 className="text-5xl text-green01 calSans">
          Connecter, Promouvoir, Agir
        </h4>
        <p className="text-white01 w-96 text-center  text-lg">
          pour une Alimentation Locale et Durable à Madagascar
        </p>
      </motion.div>
      <div className="features-content flex gap-20 mt-16">
        <motion.div
          variants={variants.varient2}
          initial="hidden"
          animate={controls}
          className="header w-1/3 flex flex-col gap-12"
        >
          <div className="text-container flex flex-col gap-5">
            <h3 className="text-3xl calSans text-gray02">
              Moins de gaspillage, Plus de soutien aux producteurs, <br /> Une
              différence délicieuse
            </h3>
            <p className="text-gray01">
              Soyez notifiés de nos superbes offres et ne ratez rien{" "}
            </p>
          </div>
          <div
            className="relative mb-4 flex items-stretch bg-white02 rounded-3xl py-2 pr-2 pl-7"
            data-twe-input-wrapper-init
            data-twe-input-group-ref
          >
            <span
              className="flex items-center whitespace-nowrap"
              id="basic-addon1"
              data-twe-input-group-text-ref
            >
              <img src="/icons/email-icon.svg" className="w-9" />
            </span>
            <input
              type="text"
              className="min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem]  outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-gray03 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray03 dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-gray03 [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-1 text-gray03"
              id="exampleFormControlInput"
              placeholder="votre adresse email"
            />
            <span
              className="flex items-center whitespace-nowrap"
              id="basic-addon1"
              data-twe-input-group-text-ref
            >
              <img src="/icons/send-icon.png" className="w-20" />
            </span>
          </div>
        </motion.div>
        <motion.div
          variants={variants.varient2}
          initial="hidden"
          animate={controls}
          className="features flex gap-7 w-2/3 overflow-hidden"
        >
          <div className="features-card w-2/4 bg-green03 rounded-lg  flex flex-col items-center p-8 gap-10">
            <div className="header flex flex-col items-center gap-2">
              <h3 className="calSans text-gray02 text-3xl">
                Facile à installer
              </h3>
              <p className="text-gray02 text-center">
                Téléchargez, installez l’application et ....c’est prêt
              </p>
            </div>
            <img src="/home-img.png" alt="" />
          </div>
          <motion.div
            variants={variants.varient2}
            initial="hidden"
            animate={controls}
            className="features-card w-2/4 bg-green04 rounded-lg flex flex-col items-center p-8 gap-10"
          >
            <div className="header flex flex-col items-center gap-2">
              <h3 className="calSans text-gray02 text-3xl opacity-40	">
                Acces direct
              </h3>
              <p className="text-gray02 text-center opacity-40">
                Accédez et Explorez nos superbes offres avec ou sans compte
              </p>
            </div>
            <img src="/home-img.png" className="opacity-40	" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingFeatures;
