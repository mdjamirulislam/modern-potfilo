import { motion } from "framer-motion";

const Any = () => {
  return (
    <div>
      <motion.div
        className="w-screen right-full bottom-0 z-30  h-screen fixed top-0 left-0 bg-primary"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="w-screen right-full bottom-0 z-20  h-screen fixed top-0 left-0 bg-light"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="w-screen right-full bottom-0 z-10   h-screen fixed top-0 left-0 bg-dark"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 1.5, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
};

export default Any;

