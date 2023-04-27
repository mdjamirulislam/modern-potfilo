import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";
import Darkmodebtn from "../Healper/Darkmodebtn";
import Logo from "../Healper/Logo";
const Navbar = () => {
  return (
    <header className="flex flex-wrap relative w-full  px-10 justify-between dark:text-light items-center py-5 font-semibold ">
      <nav className="flex  flex-wrap justify-between gap-5 capitalize ">
        <div className="relative   group">
          <Link href="./">Home</Link>
          <span className="h-[2px] rounded-full transition-all duration-300  w-0 inline-block bg-dark dark:bg-light group-hover:w-full absolute left-0 bottom-[-4px]">
            &nbsp;
          </span>
        </div>
        <div className="relative  group">
          <Link href="/about">about</Link>
          <span className="h-[2px] rounded-full transition-all duration-300  w-0 inline-block bg-dark dark:bg-light group-hover:w-full absolute left-0 bottom-[-4px]">
            &nbsp;
          </span>
        </div>
        <div className="relative  group">
          <Link href="./project">project</Link>
          <span className="h-[2px] rounded-full transition-all duration-300  w-0 inline-block bg-dark dark:bg-light group-hover:w-full absolute left-0 bottom-[-4px]">
            &nbsp;
          </span>
        </div>
        <div className="relative  group">
          <Link href="./article">Articles</Link>
          <span className="h-[2px] rounded-full transition-all duration-300  w-0 inline-block bg-dark dark:bg-light group-hover:w-full absolute left-0 bottom-[-4px]">
            &nbsp;
          </span>
        </div>
      </nav>

      <nav className="md:flex  hidden  gap-6  ">
        <motion.a
          href="./"
          whileHover={{ y: 4 }}
          whileTap={{ scale: 0.8 }}
          className="text-3xl text-[#007DC3]"
        >
          {" "}
          <BsFacebook />
        </motion.a>
        <motion.a
          href="./"
          whileHover={{ y: 4 }}
          whileTap={{ scale: 0.8 }}
          className="text-3xl dark:text-light text-[#2A2F35]"
        >
          {" "}
          <BsGithub />
        </motion.a>
        <motion.a
          href="./"
          whileHover={{ y: 4 }}
          whileTap={{ scale: 0.8 }}
          className="text-3xl  text-[#FF0000]"
        >
          {" "}
          <AiFillYoutube />
        </motion.a>
        <motion.a
          href="./"
          whileHover={{ y: 4 }}
          whileTap={{ scale: 0.8 }}
          className="text-3xl   text-[#0F66B4]"
        >
          {" "}
          <AiFillLinkedin />
        </motion.a>
        <motion.a
          href="./"
          whileHover={{ y: 4 }}
          whileTap={{ scale: 0.8 }}
          className="text-3xl text-[#1C9CEA]"
        >
          {" "}
          <BsTwitter />
        </motion.a>
        <motion.h1
          whileHover={{ y: 4 }}
          whileTap={{ scale: 0.8 }}
          className="text-3xl text-[#1C9CEA]"
        >
          {" "}
          <Darkmodebtn />
        </motion.h1>
      </nav>
      <div className="absolute top-4 left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
