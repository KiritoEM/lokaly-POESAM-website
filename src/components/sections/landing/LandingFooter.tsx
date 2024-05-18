import { useAnimation, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const LandingFooter = (): JSX.Element => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.3 });
    const router = useRouter()

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 55 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.7, type: "spring" },
        },
    };

    return (
        <motion.div variants={variants}
            initial="hidden"
            animate={controls} className="container mx-auto w-full" ref={ref}>
            <footer

                className="landing__footer flex flex-col md:flex-row md:justify-between items-center pt-10 md:pt-5 pb-10 md:pb-16 px-10 md:px-16 lg:px-44 bg-white gap-6">
                <div className="logo">
                    <img src="/logo.svg" alt="" />
                </div>
                <div className="copyright">
                    <p className="text-green05 text-center">© 2024 Lokaly. Tout droits réservés. </p>
                </div>
                <div className="social-icons flex gap-1">
                    <img src="/icons/fb-icon.svg" alt="fb" className="cursor-pointer" onClick={() => router.push("https://www.facebook.com/profile.php?id=61559917253920")} />
                    <img src="/icons/insta-icon.svg" alt="insta" className="cursor-pointer" />
                </div>
            </footer>
        </motion.div>
    );
};

export default LandingFooter;