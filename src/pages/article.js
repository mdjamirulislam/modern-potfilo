import Head from "next/head";
import React from "react";
import projectone from "../../public/image/projectone.webp";
import Animationtext from "../Components/Healper/Animationtext/Animationtext";
import Article from "../Components/Healper/Articlehelper";
import Animtedarticle from "../Components/Animtedarticle";
const article = () => {
  return (
    <>
      <Head>
        <title>portfilo || article</title>
      </Head>
      <meta name="description" content=" any description" />

      <main>
        <div className="py-10">
          <Animationtext
            className="w-full text-[6.5rem]"
            text="Words Can Change The World!"
          />
          <div>
            <Article
              image={projectone}
              heading="Build A Custom Pagination Component In Reactjs From Scratch"
              ptag=" A feature-rich cryto screener app using react tailwind csss,context
            api ,react router and recharts.it shows detail regrading almost all
            the cryptocurrency.you can easyly convert the price in your local
            currency"
              link="9 min read"
            />
          </div>

          {/* article wraper */}
          <div >
              <h1 className="text-5xl mx-auto py-8 text-center items-center capitalize">About Article</h1>
                
                <div className="flex flex-col gap-6">
                    <Animtedarticle
                    heading="from validation in react build a reusable custome hook for inputs and error handling for any"
                    date="april 25,2023"
                    
                    />
                    <Animtedarticle
                    heading="Redux Simplified: A Beginner's Guide For Web Developers"
                    date="april 25,2023"
                    
                    />
                    <Animtedarticle
                    heading="What Is Higher Order Component (Hoc) In React?"
                    date="april 25,2023"
                    
                    />
                    <Animtedarticle
                    heading="Creating An Efficient Modal Component In React Using Hooks And Portals"
                    date="april 25,2023"
                    />
                    <Animtedarticle
                    heading="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
                    date="april 25,2023"
                    
                    />
                    <Animtedarticle
                    heading="from validation in react build a reusable custome hook for inputs and error handling for any"
                    date="april 25,2023"
                    
                    />
                    <Animtedarticle
                    heading="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
                    date="april 25,2023"
                    
                    />
                </div>





          </div>
        </div>
      </main>
    </>
  );
};

export default article;
