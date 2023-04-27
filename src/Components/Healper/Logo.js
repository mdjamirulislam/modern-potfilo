import { motion } from "framer-motion";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <motion.div
        className="flex justify-center text-light dark:text-light  bg-[#1b1b1b] items-center rounded-full"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        <Link
          href="https://www.facebook.com"
          className="w-12 h-12 dark:text-light border-2 border-light    rounded-full flex justify-center items-center cursor-pointer text-2xl font-mono"
        >
          {" "}
          JK
        </Link>
      </motion.div>
    </div>
  );
};

export default Logo;
