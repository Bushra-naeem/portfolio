import { Globe, Github } from "lucide-react";
import image1 from "./../assets/images/image1.png";
import image2 from "./../assets/images/image2.png";
import image3 from "./../assets/images/image3.png";
import image4 from "./../assets/images/image4.png";
import unilogo from "./../assets/images/unilogo.jpeg";
import kplogo from "./../assets/images/kplogo.jpg";
import gothinklogo from "./../assets/images/gothinklogo.jpeg";
import HomeIcon from "../assets/icons/HomeIcon";
import GithubIcon from "../assets/icons/GithubIcon";
import InstagramIcon from "../assets/icons/InstagramIcon";
import LinkedinIcon from "../assets/icons/LinkedinIcon";

export const DATA = {
  name: "Bushra Naeem",
  role: "Software Engineer",
  description:
    "Hey there! I’m Bushra—an undergraduate in Software Engineering, specializing in Frontend Engineering, with a passion for crafting intuitive user experiences and turning innovative ideas into reality through code.",
  summary:
    "I'm a frontend developer who creates functional, user-friendly interfaces. I focus on simplifying complex tasks with clear, effective design to deliver seamless experiences.",
  skills: [
    "Html",
    "CSS",
    "JavaScript",
    "React.js",
    "Redux",
    "Next.js",
    "Typescript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Framer Motion",
    "API Integration",
    "Postman",
    "Git",
    "Github",
    "Slack",
    "Ant Design",
    "Chakra UI",
    "webpack",
    "Agile Methodologies",
  ],
};

export const projects = [
  {
    image: image1,
    title: "CodeSphere - Online Code Editor",
    href: "https://codesphere-code-editor.vercel.app/",
    dates: "May 2023 - Sept 2023",
    active: true,
    description:
      "CodeSphere is a web-based code editor supporting multiple programming languages. It offers a seamless coding experience with syntax highlighting, code execution, and real-time output visualization. Built with React, Chakra UI, and powered by the Piston API, it provides a clean and efficient coding environment.",
    technologies: ["React.js", "Javascript", "Chakra UI", "Monaco Editor"],
    links: [
      {
        type: "Website",
        href: "https://codesphere-code-editor.vercel.app/",
        icon: <Globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/Bushra-naeem/code-editor",
        icon: <Github className="size-3" />,
      },
    ],
  },

  {
    image: image2,
    title: "Crypto App",
    href: "https://crypto-application-react.netlify.app/",
    dates: "May 2023 - Sept 2023",
    active: true,
    description:
      "This crypto app, utilizes cryptocurrency APIs to provide real-time data and features three main pages: Crypto, Trending, and Saved. The Crypto page displays a list of cryptocurrencies, the Trending page highlights the most popular coins, and the Saved page allows users to save their favorite coins.",
    technologies: ["React.js", "Javascript", "Tailwind CSS"],
    links: [
      {
        type: "Website",
        href: "https://crypto-application-react.netlify.app/",
        icon: <Globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/Bushra-naeem/react-crypto-app",
        icon: <Github className="size-3" />,
      },
    ],
  },
  {
    image: image3,
    title: "Shopix - Ecommerce App",
    href: "https://shopix-ecommerce-app.netlify.app/",
    dates: "May 2023 - Sept 2023",
    active: true,
    description:
      "This ecommerce app, allows users to browse separate categories for men and women and use a search bar to find specific products. Users can add items to the cart, remove items, and view the total price. The app also suggests related products and includes a simple checkout form.",
    technologies: ["React.js", "Javascript", "Tailwind CSS"],
    links: [
      {
        type: "Website",
        href: "https://shopix-ecommerce-app.netlify.app/",
        icon: <Globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/Bushra-naeem/ecommerce-store",
        icon: <Github className="size-3" />,
      },
    ],
  },
  {
    image: image4,
    title: "Vocabulary Spark - Chrome Extension",
    href: "https://github.com/Bushra-naeem/vocab-spark-chrome-extension",
    dates: "May 2023 - Sept 2023",
    active: true,
    description:
      "This chrome extension is designed to enhance your vocabulary effortlessly! With just a click, this user-friendly tool delivers a new word each time, complete with its meaning and pronunciation.",
    technologies: ["HTML", "CSS", "Javascript"],
    links: [
      {
        type: "Source",
        href: "https://github.com/Bushra-naeem/vocab-spark-chrome-extension",
        icon: <Github className="size-3" />,
      },
    ],
  },
];

export const education = [
  {
    school: "Karachi University, UBIT",
    href: "https://www.uok.edu.pk/",
    degree: "Bachelor’s in Software Engineering",
    logoUrl: unilogo,
    period: "2022 - Present",
  },
  {
    school: "Khatoon-e-Pakistan College",
    href: "https://www.facebook.com/KPIAN.Official/",
    degree: "Intermediate",
    logoUrl: kplogo,
    period: "2019 - 2021",
  },
];

export const experience = [
  {
    logoUrl: gothinklogo,
    work: "Go Think Digital",
    href: "https://gothinkdigital.com/",
    role: "Frontend Developer Intern",
    period: "Sep 2024 - Nov 2024",
    description: [
      "Crafted and optimized responsive, intuitive web interfaces with React.js and tailwind CSS, ensuring seamless user experiences across different devices and screen sizes.",
      "Collaborated with senior developers to create reusable UI components and integrate them into the application, improving development efficiency and maintainability.",
      "Participated in code reviews and bug fixes, ensuring high-quality, scalable, and well-documented code in an Agile development environment.",
    ],
  },
];

export const personal_data = [
  {
    icon: HomeIcon,
    href: "/",
  },
  {
    icon: GithubIcon,
    href: "https://github.com/Bushra-naeem",
  },
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/_.bushra.00/",
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/bushra-naeem-5b9329246/",
  },
];
