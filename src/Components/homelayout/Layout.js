import { motion } from "framer-motion";
import images from "../../../public/image/mak.webp"
import Image from "next/image"

import { BiCartDownload } from 'react-icons/bi';
import Link from "next/link";
const Layout = () => {
  const quote = {
    initial: {
      oppacity: 0,
    },
    animate: {
      oppacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };
  const single = {
    initial: {
      oppacity: 0,
      y: -50,
    },
    animate: {
      oppacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const simple = {
    initial: {
      oppacity: 0,
      y: 50,
    },
    animate: {
      oppacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="w-full overflow-hidden h-screen flex justify-between">
      {/* left image */}

    
      <div className="w-[50%] py-0 my-0">
      <div className="fixed left-9 bottom-14">
      <Link href="https://www.facebook.com">
        <motion.h1 className="w-20 font-semibold h-20 text-white flex justify-center rounded-full bg-[#1b1b1b]  items-center  hover:bg-inherit hover:border-black hover:text-black hover:border hover:cursor-pointer"
        whileHover={{ backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
        transition:{duration:1, repeat:Infinity}
  }}
        
        >Hire Me</motion.h1>
        </Link>
        
        </div>

           <div className="w-[90%] ml-10">
           <Image src={images} alt="hellwo" className="w-[100%] " />
           </div>


      </div>
      {/* al text */}
      <div className="w-[50%] py-10">
        <div className="">
          <motion.span
            className="flex flex-col text-7xl items-center self-center my-3 text-left font-bold"
            variants={quote}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className=" inline-block"
              variants={single}
              initial="initial"
              animate="animate"
            >
              Turning Vision Into Reality With Code And Design with my.{" "}
            </motion.h1>
          </motion.span>
          <motion.p
            className="font-semibold my-5"
            variants={simple}
            initial="initial"
            animate="animate"
          >
            As a skilled full-website application developer, I am dedicated to
            turning ideas into innovative web applications. Explore my latest
            projects and articles, showcasing my expertise in React.js and web
            development.
          </motion.p>

          <div className="flex gap-6">
            <button className="  px-4 py-2 bg-black text-white font-bold rounded-md shadow-md hover:bg-inherit hover:text-black border-black border-2 "><a href="./"download className="flex justify-center items-center gap-4">Resume <BiCartDownload size={20}/></a></button>
            <button><a href="./" target="-blank" className="font-semibold underline text-2xl">Contact</a></button>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Layout;
