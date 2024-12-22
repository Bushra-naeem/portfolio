import React from "react";
import { DATA } from "../constants/index.js";

const Skills = () => {
  return (
    <section className="mx-auto w-full max-w-2xl px-0 md:px-2 mt-6">
      <h2 className="text-xl font-poppins text-[#08090a] font-bold mb-2">
        Skills
      </h2>
      <div className="flex flex-wrap gap-1">
        {DATA.skills.map((skill, index) => (
          <div
            key={index}
            className="inline-flex items-center font-poppins bg-[#141516] text-[#ffffff] rounded-md
                    border-1 px-2.5 
                    py-0.5 text-[10px] sm:text-xs font-medium transition-colors focus:outline-none
                    focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
