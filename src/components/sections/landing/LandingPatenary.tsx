import { partnerList } from "@/helpers/constants";
import { useEffect } from "react";
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LandingPatenary = (): JSX.Element => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });

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
        transition: { delay: 0.3, duration: 0.6, type: "spring" },
        stiffness: 100,
      },
    },
    varient2: {
      hidden: { opacity: 0, y: -65, scale: 0 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: 0.4, duration: 0.7, type: "spring" },
        stiffness: 100,
      },
    },
  };

  return (
    <section
      className="landing__partners pt-24 lg:pt-30 px-10 md:px-16 lg:px-40 bg-white"
      ref={ref}
      id="partners"
    >
      <div className="partners-header flex flex-col items-center gap-2">
        <h4 className="text-3xl md:text-4xl text-green01 calSans text-center">
          Ils nous font confiance
        </h4>
        <p className="text-white01  text-center  lg:text-lg">
          Grâce à des partenariats solides, nous sommes en mesure de vous offrir
          une sélection diversifiée de produits locaux de qualité, tout en
          soutenant les producteurs locaux et en luttant contre le gaspillage
          alimentaire
        </p>
      </div>
      <motion.div
        variants={variants.varient2}
        initial="hidden"
        animate={controls}
        className="partners-content grid grid-cols-1 md:grid-cols-1 gap-20 mt-14"
      >
        {partnerList.map((item, index) => (
          <div className="logo-container w-full flex justify-center" key={index}>
            <img src={`/icons/${item}`} className="w-32 md:w-28 object-cover" />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default LandingPatenary;
