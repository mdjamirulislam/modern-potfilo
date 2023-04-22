import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import Experiencecontent from "../Healper/Experiencecontent";
import Roundedsvg from "../Healper/Roundedsvg";
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="w-[40%] mx-auto  py-20">
      <div className="flex mb-16 font-bold justify-center items-center">
        <h1 className="text-8xl">Exprience</h1>
      </div>
      {/* experiecne conponent for wrapper */}
      <div ref={ref} className=" pt-11 mb-0 pb-0 relative ">
        <div className="absolute left-[-8.3rem] z-10   top-0">
          <Roundedsvg />
        </div>

        <motion.div
          style={{ scale: scrollYProgress }}
          className="absolute left-[-5rem] origin-top  top-0  h-[95%] w-[4px] bg-black"
        />

        <Experiencecontent
          heading="Software Engineer"
          link="@Google"
          slink="2022-Present | Mountain View, CA"
          ptag="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
        />

        <Experiencecontent
          heading="Intern"
          link="@Facebook"
          slink="Summer 2021 | Menlo Park, CA."
          ptag="Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature."
        />
        <Experiencecontent
          heading="Sofware Developer"
          link="@Amazon"
          slink="2020-2021 | Seattle, WA."
          ptag="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability."
        />
        <Experiencecontent
          heading="Sofware Developer Intern"
          link="@Microsoft"
          slink="Summer 2019 | Redmond, WA."
          ptag="Worked on a team responsible for developing new features for Microsoft's Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component."
        />
        <Experiencecontent
          heading="Teaching Assistant "
          link="@MIT"
          slink="Summer 2019 | Redmond, WA."
          ptag="Fall 2018 | Massachusetts Ave, Cambridge, MA.
          Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments."
        />
      </div>
    </div>
  );
};

export default Experience;
