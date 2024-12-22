import React from "react";

const Contact = () => {
  return (
    <section className="mx-auto flex justify-center px-0 md:px-4 mt-20 mb-32">
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className="inline-block font-poppins rounded-lg bg-[#08090a] text-[#ffffff] px-3 py-1 text-sm">
          Contact
        </div>
        <h2 className="text-3xl font-poppins text-[#08090a] font-bold tracking-tighter sm:text-4xl">
          Let's Connect!
        </h2>
        <p
          className="mx-auto max-w-[450px] text-[#4d4d4d] font-medium font-poppins text-xs/relaxed md:text-sm/relaxed lg:text-xl/relaxed
        xl:text-base/relaxed text-center"
        >
          Have a query? Reach out to me on
          <a
            className="text-blue-500 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/bushra-naeem-5b9329246/"
          >
            {" "}
            LinkedIn
          </a>{" "}
          or
          <a
            className="text-blue-500 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:bushranaeem941@gmail.com"
          >
            {" "}
            email
          </a>{" "}
          and I’ll respond ASAP!
        </p>
      </div>
    </section>
  );
};

export default Contact;
