import { useEffect } from "react";
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LandingFeatures = (): JSX.Element => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });

  if (inView) {
    console.log(inView);
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    varient2: {
      hidden: { opacity: 0, y: -55 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.4, duration: 0.6, type: "spring" },
      },
    },
  };

  return (
    <section
      className="landing__features pt-24 lg:pt-30 px-10 lg:px-28 bg-white"
      ref={ref}
      id="features"
    >
      <div className="features-header flex flex-col items-center gap-2">
        <h4 className="text-4xl lg:text-5xl text-green01 calSans text-center">
          Connecter, Promouvoir, Agir
        </h4>
        <p className="text-white01 w-full lg:w-96 text-center  text-lg">
          pour une Alimentation Locale et Durable à Madagascar
        </p>
      </div>
      <div className="features-content flex flex-col lg:flex-row gap-20 mt-16">
        <motion.div
          variants={variants.varient2}
          initial="hidden"
          animate={controls}
          className="header w-full lg:w-1/3 flex flex-col gap-12"
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
          className="features flex flex-col md:flex-row gap-7 lg:w-2/3 overflow-hidden"
        >
          <div className="features-card  md:w-1/2 lg:w-2/4 bg-green03 rounded-lg  flex flex-col items-center p-8 gap-10 overflow-hidden  cursor-pointer">
            <div className="header flex flex-col items-center gap-2">
              <h3 className="calSans text-gray02 text-3xl text-center">
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
            className="features-card  md:w-1/2 lg:w-2/4 bg-green03 lg:bg-green04 hover:bg-green03 rounded-lg flex flex-col items-center p-8 gap-10 overflow-hidden cursor-pointer"
          >
            <div className="header flex flex-col items-center gap-2">
              <h3 className="calSans text-gray02 text-3xl lg:opacity-40 hover:opacity-100  text-center">
                Acces direct
              </h3>
              <p className="text-gray02 text-center lg:opacity-40 hover:opacity-100">
                Accédez et Explorez nos superbes offres avec ou sans compte
              </p>
            </div>
            <img
              src="/home-img.png"
              className="lg:opacity-40	hover:opacity-100"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingFeatures;
