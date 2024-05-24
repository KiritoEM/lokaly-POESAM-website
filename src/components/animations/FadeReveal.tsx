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
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.54, duration: 0.7 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeReveal;
