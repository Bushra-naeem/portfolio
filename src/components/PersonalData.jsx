import React from "react";
import { personal_data } from "../constants";

const PersonalData = () => {
  return (
    <section className="mx-auto w-full max-w-2xl flex justify-center items-center px-0 md:px-4">
      <div
        className="fixed bottom-0 bg-white opacity-95
        border-1 border-transparent to-transparent shadow-lg
        py-4 px-5 flex justify-center items-center
         rounded-full z-50 space-x-5 mb-4
         [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]
        transform-gpu
         "
      >
        {personal_data.map((link, index) => (
          <a
            key={index}
            className={`text-gray-900 flex justify-center text-lg ${
              index === 0
                ? "relative after:content-[''] after:h-8 after:w-[1px] after:bg-gray-500 after:ml-9 after:absolute after:top-1/2 after:-translate-y-1/2"
                : ""
            }`}
            data-state="closed"
            rel="noopener noreferrer"
            target="_blank"
            href={link.href}
          >
            <link.icon />
          </a>
        ))}
      </div>
    </section>
  );
};

export default PersonalData;
