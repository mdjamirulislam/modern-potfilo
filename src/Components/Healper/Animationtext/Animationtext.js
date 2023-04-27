import { motion } from "framer-motion";

const one = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.09,
    },
  },
};
const two = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const Animationtext = ({ text, className = "" }) => {
  return (
    <>
      <div className="w-full px-7  mx-auto">
        <motion.div
          className={`flex justify-center mx-auto dark:text-light    flex-col  leading-tight  py-4  items-center text-center font-bold text-8xl text-[#1b1b1b]  dark:bg-red-500 ${className}`}
          variants={one}
          initial="initial"
          animate="animate"
        >
          <motion.h1 className={` ${className}`} variants={two}>
            {text}
          </motion.h1>
        </motion.div>
        {/* next slider full description */}
      </div>
    </>
  );
};

export default Animationtext;
