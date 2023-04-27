import { motion } from "framer-motion";
import React from "react";



const Experiencecontent = ({ heading, link, slink, ptag }) => {
  return (
    <motion.div
      className="w-full dark:text-light mx-auto py-5"
      initial={{ y: 0 }}
      whileInView={{ y: -70, transition:{duration:0.5,type:"spring"} }}
      
    >
      <h1 className="text-2xl font-bold flex gap-5">
        {heading}
        <a href="./" className="text-[#B63E96] dark:text-primaryDark">
          {link}
        </a>
      </h1>
      <span className="text-gray-600">{slink}</span>
      <p className="text-lg text-gray-700 ">{ptag}</p>
    </motion.div>
  );
};

export default Experiencecontent;
