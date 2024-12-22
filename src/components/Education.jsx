import React from "react";
import { education } from "../constants";

const Education = () => {
  return (
    <section className="mx-auto w-full max-w-2xl px-0 md:px-4 mt-4">
      <div className="flex flex-col">
        <h2 className="text-xl text-[#08090a] font-poppins font-bold">
          Education
        </h2>
        {education.map((edu, index) => (
          <div key={index} className="rounded-lg flex mt-4">
            <a
              className="relative flex-shrink-0 overflow-hidden rounded-full border size-12 m-auto"
              rel="noopener noreferrer"
              target="_blank"
              href={edu?.href}
            >
              <img
                src={edu.logoUrl}
                alt="image"
                className="aspect-square h-full w-full object-contain"
              />
            </a>
            <div className="flex-grow ml-4 items-center flex-col group">
              <div className="flex flex-col">
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <a
                    className="inline-flex items-center justify-center text-[#08090a] 
                    font-poppins mt-[5px] font-semibold leading-none text-xs sm:text-sm"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={edu?.href}
                  >
                    {edu.school}
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
                  <div className="text-[10px] md:text-xs lg:text-sm text-[#4d4d4d] tabular-nums font-poppins text-right">
                    {edu.period}
                  </div>
                </div>
                <div className="font-poppins text-[#08090a] text-xs">
                  {edu.degree}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
