import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  
  starbucks,
  
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Software Development Engineer Intern",
    companyName: "Monyble pvt.ltd.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2023-July 2023",
    points: [
      "Significantly contributed to the development and upkeep of web applications, leveraging technologies like React, Tailwind Css.",
      "Collaborated closely with interdisciplinary teams, including product managers, designers, and fellow developers, to conceptualize and execute the integration of new functionalities.",
      "Proposed and implemented innovative solutions to improve existing workflows and enhance application performance.",
    ],
  },
  {
    title: "Technical Content Writer",
    companyName: "GeeksforGeeks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2024-Feb 2024",
    points: [
      "Authored 15+ articles on core Data Structures and Algorithms, including arrays,dynamic programming, and greedy techniques.",
      "Explained complex algorithms with step-by-step logic, code snippets, and time/space complexity analysis for better reader comprehension.",
    ],
  },
  
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Vikas Verma's development skills brought speed, structure, and seamless interactivity to our web platform. His attention to detail and clean code made a lasting impact on our product's quality.",
    name: "Sayyam",
    designation: "Sr.Software Engieer",
    company: "Monyble pvt.ltd.",
    image: "https://res.cloudinary.com/dtavbfyze/image/upload/v1741969681/sayyam_gxtrpz.jpg",
  },
  {
    testimonial:
      "Working with Vikas Verma on Moksha and Resonance was a game-changer. His intuitive designs and quick implementation skills helped us create the most visually stunning festival experience NSUT has seen.",
    name: "Shivanshu",
    designation: "Fest head",
    company: "Nsut",
    image: "https://res.cloudinary.com/dtavbfyze/image/upload/v1741969869/WhatsApp_Image_2024-03-27_at_9.07.01_PM_nlswa4.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Jobsphere",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://res.cloudinary.com/dsjh0tsei/image/upload/v1747942558/Screenshot_832_vz4okj.png",
    sourceCodeLink: "https://github.com/VikasVerma-15/jobport-mern",
  },
  {
    name: "Nutrify",
    description:
      "Nutrify is a full-stack MERN application that helps users track their daily food intake and monitor macronutrients. It feature personalized diet history tracking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: "https://res.cloudinary.com/dsjh0tsei/image/upload/v1747942788/Screenshot_833_wnkh5n.png",
    sourceCodeLink: "https://github.com/VikasVerma-15/nutify-mern",
  },
  {
    name: "Rhino Text",
    description:
      "Rhino Text is a Chrome Extension that lets users dynamically fill placeholders in templates and insert customized text into any website efficiently.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      
    ],
    image: "https://res.cloudinary.com/dsjh0tsei/image/upload/v1747942831/Screenshot_834_kgbs8d.png",
    sourceCodeLink: "https://github.com/VikasVerma-15/extension-",
  },
];

export { services, technologies, experiences, testimonials, projects };
