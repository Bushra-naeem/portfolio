import React from "react";
import { projects } from "../constants";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section className="mx-auto flex justify-center max-w-2xl px-0 md:pl-2 md:pr-2 mt-6">
      <div className="w-full pt-8 pb-6">
        <div
          className="flex flex-col items-center justify-center 
        space-y-4 text-center"
        >
          <div className="space-y-2">
            <div className="inline-block font-poppins rounded-lg bg-[#08090a] text-[#ffffff] px-3 py-1 text-sm">
              My Projects
            </div>
            <h2 className="text-3xl font-bold font-poppins tracking-tighter text-[#08090a] sm:text-4xl">
              Check out my latest work
            </h2>
            <p className="font-poppins text-[#4d4d4d] font-medium text-base md:text-sm/relaxed lg:text-sm/relaxed xl:text-base/relaxed">
              Here are a few projects I've worked on recently.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-3 max-w-[800px] mx-auto mt-12">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              image={project.image}
              title={project.title}
              href={project.href}
              description={project.description}
              technologies={project.technologies}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
