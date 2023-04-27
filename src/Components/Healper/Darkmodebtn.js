import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
const Darkmodebtn = () => {
  const { systemtheme, theme, setTheme } = useTheme();
  const [mounted, setmounted] = useState(false);
  useEffect(() => {
    setmounted(true);
  }, []);

  const randerthemechaner = () => {
    const currenttheme = theme === "system" ? systemtheme : theme;
    if (!mounted) return null;
    if (currenttheme === "dark") {
      return (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          onClick={() => setTheme("light")}
          className="bg-light animate-spin text-dark rounded-full p-1"
        >
          <BsFillSunFill className="w-6 rounded-full h-auto" />
        </motion.button>
      );
    } else {
      return (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          onClick={() => setTheme("dark")}
          className="bg-dark text-light rounded-full  p-1  "
        >
          <BsFillMoonFill className="w-6  rounded-full h-auto" f />
        </motion.button>
      );
    }
  };
  return <div>{randerthemechaner()}</div>;
};

export default Darkmodebtn;
