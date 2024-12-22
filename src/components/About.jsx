import React from "react";
import Markdown from "react-markdown";
import { DATA } from "../constants/index.js";

const About = () => {
  return (
    <section className="mx-auto w-full max-w-2xl px-0 md:px-4 mt-6">
      <h2 className="text-xl font-poppins text-[#08090a] font-bold">About</h2>
      <Markdown className="text-pretty font-poppins text-sm sm:text-base font-normal text-[#4d4d4d]">
        {DATA.summary}
      </Markdown>
    </section>
  );
};

export default About;
