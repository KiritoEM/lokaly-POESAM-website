import { Ichildren } from "@/utils/interfaces";
import { motion } from "framer-motion";

const FadeReveal = ({ children }: Ichildren): JSX.Element => {
  return (
    <div
      style={{
        overflow: "hidden",
        width: "fit-content",
        position: "relative",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeReveal;
