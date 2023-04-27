import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import photo from "../../public/image/myphoto.png";
import AboutEducation from "../Components/AboutEducation";
import Experience from "../Components/Experience/Experience";
import Animationtext from "../Components/Healper/Animationtext/Animationtext";
import Spring from "../Components/Healper/Spring/Spring";
import Skill from "../Components/Skill/Skill";

const ptext = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};
const About = () => {
  return (
    <>
      <Head>
        <title>portfilo || about</title>
        <meta name="description" content="any description" />
      </Head>
      <main>
        <div>
          <Animationtext text="Passion Fuels  Purpose! " />
        </div>

        <div className=" flex justify-between gap-5 dark:text-light ">
          {/* bio graphy */}
          <motion.div
            className="flex flex-col font-semibold text-[1.1rem] dark:text-light text-textlight justify-start items-start w-[45%] py-3 "
            variants={ptext}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-2xl py-3 font-bold dark:text-light text-textlight uppercase">
              BioGraphy
            </h1>
            <p className="mb-2">
              Hi, I m{" "}
              <span className="text-[#1b1b1b] pr-2 dark:text-primary font-bold text-lg hover:underline hover:cursor-pointer ">
                md jamirul
              </span>
               a web developer and UI/UX designer with a passion for creating
              beautiful, functional, and user-centered digital experiences. With
              4 years of experience in the field. I am always looking for new
              and innovative ways to bring my clents visions to life.
            </p>
            <p className="mb-2">
              I believe that design is about more than just making things look
              pretty - its about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p className="mb-2">
              Whether I m working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </motion.div>

          {/* image slider middle */}
          <motion.div
            className="my-5 w-1/3 flex relative justify-center items-center  "
            variants={ptext}
            initial="initial"
            animate="animate"
          >
            <div className="pr-3 pb-3 pl-[-30px] bg-black z-10 rounded-[10%] ">
              <div className=" border-2 overflow-hidden bg-white rounded-3xl border-black   ">
                <Image
                  src={photo}
                  alt="loading fail"
                  width={350}
                  height={100}
                  className=" rounded-[10%] p-5 "
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-[20%] col-span-3 flex gap-16 flex-col py-5"
            variants={ptext}
            initial="initial"
            animate="animate"
          >
            <div className=" flex flex-col justify-end items-end ">
              <span className="text-7xl flex gap-3 font-bold">
                <Spring one={40} />+
              </span>
              <h1 className="text-xl capitalize text-gray-500 font-bold">
                satiesfied Clients
              </h1>
            </div>
            <div className=" flex flex-col justify-end items-end ">
              <span className="text-7xl flex gap-3 font-bold ">
                <Spring one={50} />+
              </span>
              <h1 className="text-xl capitalize text-gray-500 font-bold">
                Project Clients
              </h1>
            </div>
            <div className=" flex flex-col justify-end items-end ">
              <span className="text-7xl flex gap-3 font-bold">
                <Spring one={4} />+
              </span>
              <h1 className="text-xl capitalize text-gray-500 font-bold">
                Years of experiences
              </h1>
            </div>
          </motion.div>
        </div>

        {/* skill component */}

        <div className=" ">
          <Skill />
        </div>
        {/* Experience */}

        <div>
          <Experience />
        </div>
        <div>
          <AboutEducation />
        </div>
      </main>
    </>
  );
};

export default About;
