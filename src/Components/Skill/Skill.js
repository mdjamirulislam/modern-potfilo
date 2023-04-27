import { motion } from "framer-motion";
import React from "react";

const web = {
  initial: {
    y: 0,
  },
  whileInView: {
    y: 10,
    transition: {
      duration: 1.5,
    },
  },
};
const Skill = () => {
  return (
    <div className="flex justify-center items-center flex-col py-20 bg-[#FAFAFA] dark:bg-dark dark:text-light ">
      <div className="flex justify-center items-center mb-[-20px] text-9xl overflow-hidden font-bold  z-10   ">
        <h1 className="text-gray-600 font-semibold">Skills</h1>
      </div>
      <div className=" w-[90%] h-screen bg-circle rounded-full mt-10 dark:bg-dark flex justify-center items-center">
        <motion.div
          className=" bg-dark  text-light cursor-pointer  px-5 text-xl rounded-3xl flex justify-center items-center py-3"
          initial={{ y: 0 }}
          whileInView={{ y: 50,x:60, transition: { duration: 1.5 } }}
          whileHover={{ scale: 0.8 }}
          viewport={{ once: true }}
        >
          web
        </motion.div>

        <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: 200, x: 200, transition: { duration: 1.5 } }}
          whileHover={{ scale: 0.8 }}
          className=" bg-dark text-light justify-center items-center cursor-pointer flex px-5 text-xl rounded-3xl py-3"
        >
          HTML
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          whileInView={{ x: 30, transition: { duration: 1.5 } }}
          whileHover={{ scale: 0.8 }}
          className=" bg-dark text-light justify-center items-center cursor-pointer flex px-5 text-xl rounded-3xl py-3"
        >
          CSS
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: -160, transition: { duration: 1.5 } }}
          whileHover={{ scale: 0.8 }}
          className=" bg-dark text-light justify-center items-center cursor-pointer flex px-5 text-xl rounded-3xl py-3"
        >
          JAVASCRIPT
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: 90, transition: { duration: 1.5 } }}
          whileHover={{ scale: 0.8 }}
          className=" bg-dark text-light justify-center items-center cursor-pointer flex px-5 text-xl rounded-3xl py-3"
        >
          REACT
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          whileInView={{ x: 200, transition: { duration: 1.5 } }}
          whileHover={{ scale: 0.8 }}
          className=" bg-dark text-light justify-center  items-center cursor-pointer flex px-5 text-xl rounded-3xl py-3"
        >
          NEXTJS
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: 200, transition: { duration: 1.5 } }}
          whileHover={{ scale: 0.8 }}
          className=" bg-dark text-light justify-center items-center cursor-pointer flex px-5 text-xl rounded-3xl py-3"
        >
          TAILWILDCSS
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: -150, transition: { duration: 1.5 } }}
          whileHover={{ scale: 0.8 }}
          className=" bg-dark text-light justify-center items-center cursor-pointer flex px-5 text-xl rounded-3xl py-3"
        >
          REDUX
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: 50, x: 20, transition: { duration: 1.5 } }}
          whileHover={{ scale: 0.8 }}
          className=" bg-dark text-light justify-center items-center cursor-pointer flex px-5 text-xl rounded-3xl py-3"
        >
          FIREBASE
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: -235, x: -500, transition: { duration: 1.5 } }}
          whileHover={{ scale: 0.8 }}
          className=" bg-dark text-light justify-center items-center cursor-pointer flex px-5 text-xl rounded-3xl py-3"
        >
          webesign
        </motion.div>
      </div>
    </div>
  );
};

export default Skill;
