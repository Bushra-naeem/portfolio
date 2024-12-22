import React from "react";
import profile from "./../assets/images/me.jpg";
import { DATA } from "../constants";
import ResumeIcon from "../assets/icons/ResumeIcon";
import resume from "../Resume.pdf";

const Info = () => {
  return (
    <section className="mx-auto w-full max-w-2xl mt-10 px-0 md:px-4">
      <div className="flex flex-wrap">
        <img
          src={profile}
          alt="Profile"
          className="w-[70px] h-[70px] rounded-full border-1"
        />

        <div className="flex flex-col ml-4 mt-2">
          <h1 className="text-xl text-[#08090a] font-poppins font-bold">
            {DATA.name}
          </h1>
          <p className="text-sm text-gray-800 font-poppins font-medium mb-4">
            {DATA.role}
          </p>
        </div>
        <p className="max-w-[600px] text-[#090a0b] font-poppins font-medium text-sm sm:text-base mt-6">
          {DATA.description}
        </p>

        <a
          download="Bushra Naeem - Resume.pdf"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Download Resume"
          className="inline-flex bg-[#141516fa] font-poppins text-[#ffffff] items-center justify-center gap-2 whitespace-nowrap 
         rounded-md text-xs md:text-sm font-medium
         shadow h-9 px-3 md:px-4 py-1.5 md:py-2 mt-3"
          href={resume}
        >
          <ResumeIcon /> Resume
        </a>
      </div>
    </section>
  );
};

export default Info;
