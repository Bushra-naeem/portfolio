import React from "react";

const ProjectItem = ({
  image,
  title,
  href,
  description,
  technologies,
  links,
}) => {
  return (
    <>
      <div
        className="flex flex-col rounded-lg h-full overflow-hidden border hover:shadow-lg transition-all 
        duration-300 ease-out"
      >
        <a
          className="block cursor-pointer"
          rel="noopener noreferrer"
          target="_blank"
          href={href}
        >
          <img
            src={image}
            alt="image"
            className="h-40 w-full object-cover overflow-hidden object-top"
          />
        </a>
        <div className="flex flex-col px-2">
          <div className="space-y-1">
            <h3 className="font-semibold font-poppins text-[#08090a] tracking-tight mt-1 text-base">
              {title}
            </h3>
            <div className="max-w-full font-poppins text-pretty text-xs font-normal text-[#4d4d4d]">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div
          className="text-pretty font-sans text-sm text-muted-foreground
    mt-auto flex flex-col px-2"
        >
          <div className="mt-2 flex flex-wrap gap-1">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="inline-flex items-center font-poppins mt-2 bg-gray-200 rounded-md border font-semibold transition-colors 
                    focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent 
                    bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        <div className="flex py-2 px-2">
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links.map((link, index) => (
              <a
                href={link?.href}
                key={index}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div
                  key={index}
                  className="items-center bg-[#08090a] text-[#ffffff] mb-2 rounded-md border px-2.5 
                    py-0.5 text-xs font-semibold transition-colors focus:outline-none
                    focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent
                    bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 text-[10px]"
                >
                  {link.icon}
                  {link.type}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
