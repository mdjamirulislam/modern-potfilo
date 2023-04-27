import Head from "next/head";
import React from "react";
import github from "../../public/image/github.png";
import projectone from "../../public/image/projectone.webp";
import Animationtext from "../Components/Healper/Animationtext/Animationtext";
import Projecthelper from "../Components/Healper/Projecthelper";
import Projecthelpertwo from "../Components/Healper/Projecthelpertwo";

const Project = () => {
  return (
    <>
      <Head>
        <title>protfilo || project</title>
        <meta name="description" content="any decription" />
      </Head>

      <main>
        <div className="w-full py-10 dark:text-light">
          <div className="">
            <Animationtext
              text=" Imagination Trumps Knowledge! "
              className=" w-full"
            />
          </div>
          <div className="w-[90%] mx-auto ">
            <div className="py-10 dark:text-light">
              <Projecthelper
                image={projectone}
                heading="Featured Project"
                sheading=" Crypto Screener Application"
                ptag=" A feature-rich cryto screener app using react tailwind csss,context
              api ,react router and recharts.it shows detail regrading almost all
              the cryptocurrency.you can easyly convert the price in your local
              currency"
                icon={github}
                link="visit project"
              />
            </div>

            <div>
              <Projecthelpertwo
                image={projectone}
                heading="Featured Project"
                sheading=" Crypto Screener Application"
                icon={github}
                link="visit "
              />
            </div>
            <div className="py-10">
              <Projecthelper
                image={projectone}
                heading="Featured Project"
                sheading=" Crypto Screener Application"
                ptag=" A feature-rich cryto screener app using react tailwind csss,context
              api ,react router and recharts.it shows detail regrading almost all
              the cryptocurrency.you can easyly convert the price in your local
              currency"
                icon={github}
                link="visit project"
              />
            </div>

            <div>
              <Projecthelpertwo
                image={projectone}
                heading="Featured Project"
                sheading=" Crypto Screener Application"
                icon={github}
                link="visit "
              />
            </div>
            <div className="py-10">
              <Projecthelper
                image={projectone}
                heading="Featured Project"
                sheading=" Crypto Screener Application"
                ptag=" A feature-rich cryto screener app using react tailwind csss,context
              api ,react router and recharts.it shows detail regrading almost all
              the cryptocurrency.you can easyly convert the price in your local
              currency"
                icon={github}
                link="visit project"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;
