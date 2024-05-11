import { partnerList } from "@/helpers/constants";
import { useEffect } from "react";
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LandingPatenary = (): JSX.Element => {
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
        transition: { delay: 0.3, duration: 0.8, type: "spring" },
        stiffness: 100,
      },
    },
    varient2: {
      hidden: { opacity: 0, y: -65, scale: 0 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: 0.3, duration: 0.9, type: "spring" },
        stiffness: 100,
      },
    },
  };

  return (
    <section
      className="landing__partners pt-36 px-40 bg-white hidden"
      ref={ref}
      id="partners"
    >
      <motion.div
        variants={variants.varient1}
        initial="hidden"
        animate={controls}
        className="partners-header flex flex-col items-center gap-2"
      >
        <h4 className="text-4xl text-green01 calSans">
          Ils nous font confiance
        </h4>
        <p className="text-white01  text-center  text-lg">
          Grâce à des partenariats solides, nous sommes en mesure de vous offrir
          une sélection diversifiée de produits locaux de qualité, tout en
          soutenant les producteurs locaux et en luttant contre le gaspillage
          alimentaire
        </p>
      </motion.div>
      <motion.div
        variants={variants.varient2}
        initial="hidden"
        animate={controls}
        className="partners-content grid grid-cols-4 gap-20 mt-16"
      >
        {partnerList.map((item, index) => (
          <div className="container w-full">
            <img key={index} src={`/icons/${item}`} />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default LandingPatenary;
