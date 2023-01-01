import {  DiLaravel, DiPhp, DiNodejs  } from "react-icons/di";
import { SiJava, SiGit, SiSpring, SiReact, SiAngular  } from "react-icons/si";
// import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "laravel",
    Component: DiLaravel,
    title: "Laravel",
    Description: () => <>I have working experience in laravel</>,
  },
  {
    slug: "php",
    Component: DiPhp,
    title: "Php",
    Description: () => <>I use Laravel framework of this programming language. </>,
  },
  
  {
    slug: "react",
    Component: SiReact,
    title: "React",
    Description: () => <>I used react in many projects</>,
  },
  {
    slug: "nextjs",
    Component: SiReact,
    title: "Nextjs",
    Description: () => <>I have used next js in many project and also used for fiverr freelance.</>,
  },
  {
    slug: "nestjs",
    Component: DiNodejs,
    title: "Nest Js",
    Description: () => <>I have used nest js in a recent project. It is a frmework of node js</>,
  },
  {
    slug: "java",
    Component: SiJava,
    title: "Java",
    Description: () => <>I code in Java. But I mainly use it for Web app development. Spring Boot</>,
  },
  {
    slug: "spring",
    Component: SiSpring,
    title: "spring",
    Description: () => <>I currently working in a project</>,
  },
  {
    slug: "angular",
    Component: SiAngular,
    title: "Angular",
    Description: () => <>I currently working in a project</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code.</>,
  },
];
