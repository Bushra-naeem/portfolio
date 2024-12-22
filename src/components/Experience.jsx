import React from "react";
import { experience } from "../constants";

const Experience = () => {
  return (
    <section className="mx-auto w-full max-w-2xl mt-4 mb-2 px-0 md:px-4">
      <h2 className="text-xl font-poppins text-[#08090a] font-bold">
        Work Experience
      </h2>
      {experience.map((exp, index) => (
        <div key={index} className="rounded-lg flex mt-4">
          <a
            className="relative flex-shrink-0 overflow-hidden rounded-full border size-12 mt-0.5 bg-muted-background"
            rel="noopener noreferrer"
            target="_blank"
            href={exp?.href}
          >
            <img
              src={exp.logoUrl}
              alt="image"
              className="aspect-square h-full w-full object-contain"
            />
          </a>
          <div className="flex-grow ml-4 items-center flex-col group">
            <div className="flex flex-col">
              <div className="flex items-center justify-between gap-x-2 text-base">
                <a
                  className="inline-flex items-center justify-center font-poppins mt-[5px] font-semibold leading-none text-xs sm:text-sm"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={exp?.href}
                >
                  {exp.work}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right size-4 translate-x-0 transform 
                      opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100
                      rotate-0"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
                <div className="text-[10px] text-[#4d4d4d] md:text-xs lg:text-sm font-poppins tabular-nums text-right">
                  {exp.period}
                </div>
              </div>
              <div className="font-poppins text-[#08090a] text-xs">
                {exp.role}
              </div>
            </div>
            <ul className="list-disc mt-2 pl-3 text-[#08090a] text-xs sm:text-sm font-poppins space-y-2">
              {exp.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
