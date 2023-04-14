import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";
import Logo from "../Healper/Logo";
const Navbar = () => {
  return (
    <header className="flex w-full justify-between items-center py-5 font-semibold relative">
      <nav className="flex gap-5 capitalize ">
        <div className="relative   group">
          <Link href="./">Home</Link>
          <span className="h-[2px] rounded-full transition-all duration-300  w-0 inline-block bg-black group-hover:w-full absolute left-0 bottom-[-4px]">
            &nbsp;
          </span>
        </div>
        <div className="relative  group">
          <Link href="/">about</Link>
          <span className="h-[2px] rounded-full transition-all duration-300  w-0 inline-block bg-black group-hover:w-full absolute left-0 bottom-[-4px]">
            &nbsp;
          </span>
        </div>
        <div className="relative  group">
          <Link href="/">project</Link>
          <span className="h-[2px] rounded-full transition-all duration-300  w-0 inline-block bg-black group-hover:w-full absolute left-0 bottom-[-4px]">
            &nbsp;
          </span>
        </div>
        <div className="relative  group">
          <Link href="/">Articles</Link>
          <span className="h-[2px] rounded-full transition-all duration-300  w-0 inline-block bg-black group-hover:w-full absolute left-0 bottom-[-4px]">
            &nbsp;
          </span>
        </div>
      </nav>

      <nav className="flex gap-6">
        <motion.a href="./" whileHover={{y:4}} whileTap={{scale:0.8}} className="text-3xl text-[#007DC3]">
          {" "}
          <BsFacebook />
        </motion.a>
        <motion.a href="./" whileHover={{y:4}} whileTap={{scale:0.8}} className="text-3xl text-[#2A2F35]">
          {" "}
          <BsGithub />
        </motion.a>
        <motion.a href="./" whileHover={{y:4}} whileTap={{scale:0.8}} className="text-3xl text-[#FF0000]">
          {" "}
          <AiFillYoutube />
        </motion.a>
        <motion.a href="./" whileHover={{y:4}} whileTap={{scale:0.8}} className="text-3xl text-[#0F66B4]">
          {" "}
          <AiFillLinkedin />
        </motion.a>
        <motion.a href="./"  whileHover={{y:4}} whileTap={{scale:0.8}} className="text-3xl text-[#1C9CEA]">
          {" "}
          <BsTwitter />
        </motion.a>
      </nav>
      <div className="absolute top-4 left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
