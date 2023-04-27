import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import AboutEducationcontent from "./Healper/AboutEducationcontent";
import Roundedtwo from "./Healper/Roundedtwo";
const AboutEducation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="w-[40%] flex flex-col dark:text-light justify-center items-ceter mx-auto">
      <div className="flex  mb-24 justify-center items-center font-bold">
        <h1 className="text-[7rem]">Eduaction</h1>
      </div>

      <div ref={ref} className=" pt-14 relative dark:text-light">
        <div className="absolute left-[-8.3rem] z-10   top-0">
          <Roundedtwo />
        </div>
        <motion.div
          style={{ scale: scrollYProgress }}
          className="absolute left-[-5rem] origin-top  top-0  h-[110%] w-[4px] bg-dark dark:bg-light"
        />
        <AboutEducationcontent
          heading="Bachelor Of Science In Computer Science"
          slink="2016-2020 | Massachusetts Institute Of Technology (MIT)"
          ptag="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
        />
        <AboutEducationcontent
          heading="Master Of Computer Science"
          slink="2020-2022 | Stanford University"
          ptag="Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding."
        />
        <AboutEducationcontent
          heading="Online Coursework"
          slink="2016-2020 | Coursera And EdX"
          ptag="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering."
        />
      </div>
    </div>
  );
};

export default AboutEducation;
