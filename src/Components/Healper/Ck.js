import { motion } from "framer-motion";
import React from "react";

const mo = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      
      delay: 0.5,
      staggerChildren: 0.05,
    },
  },
};
const ma = {
  initial: {
    opacity: 0,
    y:50,
  },
  animate: {
    opacity: 1,
    y:0,
    transition: {
      duration: 1,
     
    },
  },
};
const Ck = () => {
  return (
    <motion.div
      className="font-bold text-8xl text-center "
     variants={mo}
     initial="initial"
     animate="animate"
    >
     <motion.h1
     variants={ma}
     
     >
     framer motion trying solved in the company description for meta country
      bangladesh.
     </motion.h1>
    </motion.div>
  );
};

export default Ck;
