import { technologies } from "./technologies";

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
    ],
  },

  {
    category: "Framework",
    items: [
      technologies.Sfml,
    ],
  },

];

export default skills;