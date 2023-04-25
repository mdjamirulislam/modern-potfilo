import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Framerone = motion(Image);
const Projecthelper = ({
  className = "",
  image,
  heading,
  sheading,
  ptag,
  icon,
  link,
}) => {
  return (
    <div className="w-[100%] h-[100%] rounded-2xl overflow-hidden pb-4 pr-4 bg-[#1b1b1b]">
      <div
        className={`w-full flex justify-between gap-3 bg-white border-2 border-gray-300 rounded-md p-10 ${className}`}
      >
        <div className="w-[50%]">
          <Framerone
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            src={image}
            alt="project loading fail"
            className="w-full rounded-md h-full"
          />
        </div>
        <div className="flex w-[50%] flex-col px-4">
          <h1 className="text-[#B63E96] text-2xl font-semibold">{heading}</h1>
          <span className="text-5xl font-semibold  ">{sheading}</span>
          <p className="text-semibold text-lg py-3 flex justify-start items-start">
            {ptag}
          </p>

          <div className="flex gap-5  items-center">
            <Link href="./">
              {" "}
              <Image
                src={icon}
                alt="net load github icon"
                className="w-12"
              />{" "}
            </Link>
            <Link
              href="./"
              className="bg-black text-white rounded-xl hover:underline border px-4 py-2 text-xl font-semibold capitalize"
            >
              {link}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projecthelper;
