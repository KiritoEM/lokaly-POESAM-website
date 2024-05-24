import { partnerList } from "@/helpers/constants";
import { useEffect } from "react";
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";

const LandingPatenary = (): JSX.Element => {
  const router = useRouter()
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
          soutenant les producteurs locaux et en -luttant contre le gaspillage
          alimentaire
        </p>
      </div>
      <div className="container2 w-full flex justify-center">
        <motion.div
          variants={variants.varient2}
          initial="hidden"
          animate={controls}
          className="partners-content grid grid-cols-2 md:grid-cols-3 mt-14 w-max flex justify-center gap-20"
        >
          {partnerList.map((item, index) => (
            <div
              className={`logo-container flex items-center w-full cursor-pointer ${item.colspan ? `col-span-${item.colspan}` : ''} ${index === partnerList.length - 1 && partnerList.length % 2 !== 0
                ? 'col-span-2 md:col-span-0 justify-center'
                : ''} md:col-span-1`}
              key={index}
            >

              <img
                src={`/icons/${item.img}`}
                className="w-20 md:w-24 object-contain"
                onClick={() => router.push(item.link)}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LandingPatenary;
