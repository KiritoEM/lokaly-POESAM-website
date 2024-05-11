import { useEffect } from "react";
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Brand = (): JSX.Element => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20, x: 35, scale: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { delay: 0.4, duration: 0.8, type: "spring" },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="brand bg-green02 px-10 md:px-32 py-10 flex flex-wrap gap-7 md:gap-0 items-center justify-between"
    >
      <div className="partenary flex  gap-5 md:gap-4 items-center">
        <h4 className="text-5xl md:text-6xl text-white calSans pt-2">17</h4>
        <p className="text-white01">
          Partenaires <br />
          locaux
        </p>
      </div>
      <div className="job flex gap-5 md:gap-4 items-center">
        <h4 className="text-5xl md:text-6xl text-white calSans pt-2">+60</h4>
        <p className="text-white01">
          Emplois <br />
          crées
        </p>
      </div>
      <div className="food flex gap-5 md:gap-4 items-center">
        <h4 className="text-5xl md:text-6xl text-white calSans pt-2">600</h4>
        <p className="text-white01">
          Kilos de <br />
          nourriture sauvé
        </p>
      </div>
      <div className="selling flex gap-5 md:gap-4 items-center">
        <h4 className="text-5xl md:text-6xl text-white calSans pt-2">697</h4>
        <p className="text-white01">
          ventes
          <br />
          réalisés
        </p>
      </div>
    </motion.section>
  );
};

export default Brand;
