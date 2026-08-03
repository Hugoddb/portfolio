import portfolio from "../assets/projects/portfolio.png";
import pomodocus from "../assets/projects/pomodocus.png";
import { technologies } from "./technologies";

const projects = [
    {
        id: 1,
        title: "Portfolio",
        image: portfolio,
        description: "Interactive portfolio inspired by a desktop operating system.",

        technologies: [
        technologies.React,
        technologies.Tailwind,
        technologies.Vite,
        ],

        team: 1,
        duration: "...",

        github: "https://github.com/...",
        demo: "https://github.com/...",
    },

    {
        id: 2,
        title: "Pomodocus",
        image: pomodocus,
        description:
        "Pomodocus is a gamified Pomodoro app featuring collectable dinosaurs! Stay productive whilst collecting adorable dinosaurs.",

        technologies: [
        technologies.React,
        technologies.Tailwind,
        technologies.TypeScript,
        technologies.Vite,
        ],

        team: 2,
        duration: "1 week",

        github: "https://github.com/lucasskvn/Pomodocus",
    },
];

export default projects;