import InputComponent01 from "@/components/inputs/InputComponent01";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const LandingContact = (): JSX.Element => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.3 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const variants = {
        varient1: {
            hidden: { opacity: 0, x: -55 },
            visible: {
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 0.7, type: "spring" },
            },
        },
        varient2: {
            hidden: { opacity: 0, x: 55 },
            visible: {
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 0.7, type: "spring" },
            },
        },
    };

    return (
        <div className="container mx-auto" id="contact" ref={ref}>
            <section className="landing__contact bg-[url('/contact-bg.svg')] pb-24 px-10 md:pl-12  md:pr-10 lg:pl-36 lg:pr-40 mt-24  w-full bg-cover bg-no-repeat bg-bottom flex flex-col md:flex-row  items-end gap-12 md:gap-10">
                <motion.div
                    variants={variants.varient1}
                    initial="hidden"
                    animate={controls}
                    className="contact-header md:w-1/2 lg:w-3/5 flex flex-col gap-3 md:mb-20">
                    <h2 className="text-3xl md:text-text-3xl lg:text-4xl text-blue01 calSans">Prenez contact avec nous</h2>
                    <p className="text-blue02 md:text-lg">Vous avez quelque chose à ajouter? Un partenariat à discuter? ou quelque chose à faire passer?
                        Remplissez le formulaire suivant</p>
                </motion.div>
                <motion.div
                    variants={variants.varient2}
                    initial="hidden"
                    animate={controls} className="contact-form w-full md:w-1/2 lg:w-3/5 h-max bg-white rounded-xl p-9 flex flex-col gap-6">
                    <InputComponent01 type="text" placeholder="Votre nom" />
                    <InputComponent01 type="email" placeholder="Adresse mail" />
                    <InputComponent01 type="email" placeholder="Numéro de téléphone" />

                    {/* text-area */}
                    <textarea placeholder="Votre message" className="w-full h-40 border border-blue01 opacity-30 placeholder:text-blue01 py-4 px-4 rounded-md text-sm"></textarea>
                    <button className="text-sm bg-green01 w-max px-12 py-3 rounded-xl text-white mt-6">Envoyer</button>
                </motion.div>
            </section>
        </div>
    );
};

export default LandingContact