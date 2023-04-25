import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Framerone = motion(Image);

const Article = ({
  className = "",
  image,
  heading,
  

  link,
  ptag,
}) => {
  return (
    <div className="flex w-full gap-5">
      <div className={`w-[50%] bg-black rounded-3xl pr-4 pb-4 ${className}`}>
        <div
          className={`w-[100%] overflow-hidden  bg-white border-2 border-gray-300 rounded-xl p-5 ${className}`}
        >
          <div className="w-full">
            <Framerone
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              src={image}
              alt="project loading fail"
              className="w-full rounded-md h-full  "
            />
          </div>
          <div className="flex w-full  flex-col py-2 px-4">
            <Link href="./" className="hover:underline"><h1 className="text-black text-2xl font-semibold">{heading}</h1></Link>
           
            <p className="py-2 text-gray-500">{ptag}</p>

            <div className="flex gap-5 justify-between  items-center">
              <Link
                href="./"
                className=" text-black hover:underline  text-xl font-semibold capitalize"
              >
                {link}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`w-[50%] bg-black rounded-3xl pr-4 pb-4 ${className}`}>
        <div
          className={`w-[100%] overflow-hidden  bg-white border-2 border-gray-300 rounded-xl p-5 ${className}`}
        >
          <div className="w-full">
            <Framerone
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              src={image}
              alt="project loading fail"
              className="w-full rounded-md h-full  "
            />
          </div>
          <div className="flex w-full  flex-col py-2 px-4">
            <Link href="./" className="hover:underline"><h1 className="text-black text-2xl font-semibold">{heading}</h1></Link>
           
            <p className="py-2  text-gray-500">{ptag}</p>

            <div className="flex gap-5 justify-between  items-center">
              <Link
                href="./"
                className=" text-black hover:underline  text-xl font-semibold capitalize"
              >
                {link}
              </Link>
            </div>
          </div>
        </div>
      </div>




    </div>
  );
};

export default Article;
