import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div className="pt-12 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* WORK PART */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-200">Experience</span>
          </h1>
          <div 
            className="mt-10"  
            data-aos="zoom-in" 
            data-aos-anchor-placement="top-center" 
          >
            <ResumeCard
              icon={FaCodepen}
              role="Full-Stack Developer"
              description="Built and maintained scalable web applications using both front-end and back-end technologies."
            />
            <ResumeCard
              icon={FaReact}
              role="Front-End Developer"
              description="Specialized in creating responsive user interfaces with React and modern JavaScript frameworks."
            />
            <ResumeCard
              icon={BsDatabase}
              role="Back-End Developer"
              description="Designed and managed databases, APIs, and server-side logic for robust application performance."
            />
          </div>
        </div>
        {/* EDUCATION PART */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Education <span className="text-cyan-200">Background</span>
          </h1>
          <div 
            className="mt-10" 
            data-aos="zoom-out" 
            data-aos-anchor-placement="top-center" 
            data-aos-delay="300"
          >
            <ResumeCard
              icon={BiBadge}
              role="MSc. Computer Science"
              date="Oct, 2023 – Sep, 2024"
              description="University of Ghana, Legon"
            />
            <ResumeCard
              icon={BiBadge}
              role="BA. Information Studies"
              date="Aug, 2018 – Oct, 2022"
              description="University of Ghana, Legon"
            />

            <ResumeCard
              icon={BiBadge}
              role="ISC2 Certified in Cybersecurity (CC)"
              date="Jan, 2025"
              description="ISC2"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
