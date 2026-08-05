import { technologies } from "./technologies";
import fundamentals from "./fundamentals";

const skills = [
  {
    category: "Languages",
    items: [
      technologies.C,
      technologies["C++"],
      technologies.Python,
      technologies.TypeScript,
      technologies.Rust,
      technologies.Haskell,
    ],
  },

  {
    category: "Frontend",
    items: [
      technologies.React,
      technologies.Tailwind,
      technologies.Html,
      technologies.Css,
      technologies.JavaScript,
      technologies.Vite,
    ],
  },

  {
    category: "Tools",
    items: [
      technologies.Git,
      technologies.Github,
      technologies.Linux,
      technologies.VsCode,
      technologies.NodeJS,
      technologies.Bash,
      technologies.JDEdwards,
    ],
  },

  {
    category: "Frameworks",
    items: [
      technologies.Sfml,
    ],
  },

  {
    category: "Databases",
    items: [
      technologies.Oracle,
      technologies.Sql,
    ],
  },

  {
    category: "Computer Science",
    items: [
      fundamentals.Algorithms,
      fundamentals.DataStructures,
      fundamentals.ObjectOrientedProgramming,
      fundamentals.OperatingSystems,
      fundamentals.Networking,
      fundamentals.DatabaseDesign,
      fundamentals.ProblemSolving,
    ],
  },

];

export default skills;