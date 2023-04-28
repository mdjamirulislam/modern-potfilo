import Image from "next/image";
import Link from "next/link";
import { BiCartDownload } from "react-icons/bi";
import images from "../../../public/image/mak.webp";
import Animationtext from "../Healper/Animationtext/Animationtext";
const Layout = () => {
  return (
    <div className="w-full overflow-hidden h-screen flex justify-between">
      {/* left image */}

      <div className="w-[50%] py-0 my-0">
        <div className="fixed left-9 bottom-14">
          <Link href="https://www.facebook.com">
            <h1
              className="w-20 font-semibold h-20 text-light flex justify-center rounded-full dark:bg-dark dark:text-light bg-[#1b1b1b]  items-center dark:border-light dark:border-2  hover:bg-inherit hover:border-light hover:text-black hover:border hover:cursor-pointer"
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
              Hire Me
            </h1>
          </Link>
        </div>

        <div className="w-[90%] ml-10">
          <Image src={images} alt="hellwo" className="w-[100%] " />
        </div>
      </div>
      {/* al text */}
      <div className="w-[50%] py-10 dark:text-light">
        <div className="">
          <Animationtext
            className="text-7xl font-bold w-full text-left flex justify-start items-start"
            text="Turning Vision Into Reality With Code And Design."
          />
          <p className="text-lg mb-5">
            As a skilled full-website application developer, I am dedicated to
            turning ideas into innovative web applications. Explore my latest
            projects and articles, showcasing my expertise in React.js and web
            development.
          </p>

          <div className="flex gap-6">
            <button className="  px-4 py-2  bg-dark text-light font-bold rounded-md shadow-md hover:bg-inherit hover:text-darj border-dark border-2 ">
              <a
                href="./"
                download
                className="flex justify-center items-center gap-4"
              >
                Resume <BiCartDownload size={20} />
              </a>
            </button>
            <button>
              <a
                href="./"
                target="-blank"
                className="font-semibold underline text-2xl"
              >
                Contact
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
