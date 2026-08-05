import { technologies } from "./technologies";
import inetum from "../assets/companies/inetum.png";
import epitech from "../assets/companies/epitech.png";
import ucb from "../assets/companies/ucb.png";
import althays from "../assets/companies/althays.png";
import lombardie from "../assets/companies/lombardie.webp";

const experiences = [
    {
        year: "2025",
        logo: inetum,
        title: "Software Engineering Intern",
        company: "Inetum",
        period: "Jul 2025 - Dec 2025",

        description:
        "Worked on Python tools and data validation around JD Edwards while collaborating with experienced developers.",

        technologies: [
        technologies.Python,
        technologies.React,
        technologies.Oracle,
        technologies.Sql,
        technologies.JDEdwards,
        ],
    },

    {
        year: "2024",
        logo: epitech,
        title: "Computer Science",
        company: "Epitech Lyon",
        period: "Sept 2024 - Present",

        description:
        "I am currently a computer science student at Epitech.",

        technologies: [
            technologies.C,
            technologies["C++"],
            technologies.Rust,
            technologies.Python,
            technologies.Linux,
            technologies.Bash,
            technologies.Git,
        ],
    },

    {
        year: "2022",
        logo: ucb,
        title: "Mathematics & Computer Science Studies",
        company: "Université Claude Bernard Lyon 1",
        period: "2022 - 2024",

        description:
        "Studied mathematics and computer science for two years before joining Epitech to specialize in software engineering."
    },

    {
        year: "2021",
        logo: althays,
        title: "Discovery Internship",
        company: "Althays",
        period: "Mar 2021",

        description:
        "Discovered software engineering and office workflows.",
    },

    {
        year: "2019",
        logo: lombardie,
        title: "Engineering Internship",
        company: "Lombardie",
        period: "Apr 2019",

        description:
        "Participated in testing procedures and result analysis.",
    },
];

export default experiences;