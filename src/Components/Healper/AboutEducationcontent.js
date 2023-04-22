import { motion } from "framer-motion";
import React from "react";
const AboutEducationcontent = ({ heading, link, slink, text, ptag }) => {
  return (
    <motion.div
      className="w-full mx-auto py-5"
      initial={{ y: 0 }}
      whileInView={{ y: -70, transition: { duration: 0.4 } }}
    >
      <h1 className="text-3xl font-bold flex gap-5">
        {heading}
        <a href="./" className="text-[#B63E96]">
          {link}
        </a>
      </h1>
      <span className="text-gray-600">{slink}</span>
      <p className="text-lg text-gray-700 ">{ptag}</p>
    </motion.div>
  );
};

export default AboutEducationcontent;
