import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Framerone = motion(Image);

const Projecthelpertwo = ({
  className = "",
  image,
  heading,
  sheading,
  icon,
  link,
}) => {
  return (
    <div className="flex w-full gap-5">
      <div
        className={`w-[50%] bg-dark dark:bg-light  rounded-3xl pr-3 pb-3 ${className}`}
      >
        <div
          className={`w-[100%] overflow-hidden  bg-light dark:bg-dark border-2 dark:border-light border-dark rounded-xl p-5 ${className}`}
        >
          <div className="w-full">
            <Framerone
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              src={image}
              alt="project loading fail"
              className="w-full rounded-md h-full"
            />
          </div>
          <div className="flex w-full flex-col py-2 px-4">
            <h1 className="text-[#B63E96] text-xl font-semibold">{heading}</h1>
            <span className="text-3xl font-semibold  ">{sheading}</span>

            <div className="flex gap-5 justify-between  items-center">
              <Link
                href="./"
                className=" text-dark dark:text-light hover:underline  text-xl font-semibold capitalize"
              >
                {link}
              </Link>

              <Link href="./">
                {" "}
                <Image
                  src={icon}
                  alt="net load github icon"
                  className="w-12 dark:w-8 dark:bg-light dark:rounded-full"
                />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-[50%] bg-dark dark:bg-light  rounded-3xl pr-3 pb-3 ${className}`}
      >
        <div
          className={`w-[100%] overflow-hidden  bg-light dark:bg-dark border-2 dark:border-light border-dark rounded-xl p-5 ${className}`}
        >
          <div className="w-full">
            <Framerone
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              src={image}
              alt="project loading fail"
              className="w-full rounded-md h-full"
            />
          </div>
          <div className="flex w-full flex-col py-2 px-4">
            <h1 className="text-[#B63E96] text-xl font-semibold">{heading}</h1>
            <span className="text-3xl font-semibold  ">{sheading}</span>

            <div className="flex gap-5 justify-between  items-center">
              <Link
                href="./"
                className=" text-dark dark:text-light hover:underline  text-xl font-semibold capitalize"
              >
                {link}
              </Link>

              <Link href="./">
                {" "}
                <Image
                  src={icon}
                  alt="net load github icon"
                  className="w-12 dark:w-8 dark:bg-light dark:rounded-full"
                />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projecthelpertwo;
