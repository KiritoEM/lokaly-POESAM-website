import { Fragment, useEffect, useState } from "react";
import FAQCard from "@/components/cards/FAQCard";
import { FAQData } from "@/helpers/constants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LandingFAQ = (): JSX.Element => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    }

    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.3 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: -55 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: (index + 1) * 0.25, duration: 0.5, type: "spring" },
        }),
    };

    return (
        <div className="container mx-auto overflow-hidden pt-24" ref={ref}>
            <div className="illustration flex  justify-end md:justify-between">
                <img src="/cloud1.svg" className="relative top-48 hidden md:flex" />
                <img src="/cloud2.svg" className="w-48 md:w-80" />
            </div>
            <section className="landing__FAQ  lg:pt-30 pb-4 px-7 md:px-16 lg:px-56 bg-white" id="FAQ">
                <div className="FAQ-header flex flex-col items-center gap-2 mt-10 md:mt-13">
                    <h4 className="text-3xl md:text-4xl text-green01 calSans text-center">
                        Foire aux questions
                    </h4>
                    <p className="text-white01 text-center lg:text-lg">
                        Pour vous aider à comprendre notre essence
                    </p>
                </div>
                <div className="FAQ-content flex flex-col gap-10 mt-14">
                    {FAQData.map((item, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                        >
                            <FAQCard
                                {...item}
                                isActive={activeIndex === index}
                                handleToggle={() => handleToggle(index)}
                            />
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default LandingFAQ;
