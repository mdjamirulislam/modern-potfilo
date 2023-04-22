import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const one = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerchildren: 0.08,
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
const Animationtext = ({ text }) => {
  return (
    <>
      <div className="w-full px-7  mx-auto">
        <motion.div
          className="flex justify-center   flex-col  leading-tight  py-4  items-center text-center font-bold text-8xl text-[#1b1b1b]"
          variants={one}
          initial="initial"
          animate="animate"
        >
          <motion.h1 className="w-2/3" variants={two}>
            {text}
          </motion.h1>
        </motion.div>
        {/* next slider full description */}

       
      </div>
    </>
  );
};

export default Animationtext;
