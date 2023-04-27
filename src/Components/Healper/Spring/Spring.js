import React from "react";
import { animated, useSpring } from "react-spring";

import { motion } from "framer-motion";

const effec = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    tansition: {
      delay: 1,
      staggerchildren: 0.08,
    },
  },
};
const effectone = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const Number = ({ value }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,

    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

const Spring = ({ one }) => {
  return (
    <motion.div variants={effec} initial="initial" animate="animate">
      <motion.h1 variants={effectone}>
        <Number value={one} />
      </motion.h1>
    </motion.div>
  );
};

export default Spring;
