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
        title: { en: "Software Engineering Intern", fr: "Stagiaire Ingénieur Logiciel" },
        company: "Inetum",
        period: { en: "Jul 2025 - Dec 2025", fr: "Juil. 2025 - Déc. 2025" },

        description: {
            en: "Worked on Python tools and data validation around JD Edwards while collaborating with experienced developers.",
            fr: "Développement d'outils Python et validation de données autour de JD Edwards, en collaboration avec des développeurs expérimentés.",
        },

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
        title: { en: "Computer Science", fr: "Informatique" },
        company: "Epitech Lyon",
        period: { en: "Sept 2024 - Present", fr: "Sept. 2024 - Aujourd'hui" },

        description: {
            en: "I am currently a computer science student at Epitech.",
            fr: "Je suis actuellement étudiant en informatique à Epitech.",
        },

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
        title: { en: "Mathematics & Computer Science Studies", fr: "Licence Mathématiques & Informatique" },
        company: "Université Claude Bernard Lyon 1",
        period: "2022 - 2024",

        description: {
            en: "Studied mathematics and computer science for two years before joining Epitech to specialize in software engineering.",
            fr: "Deux années d'études en mathématiques et informatique avant de rejoindre Epitech pour me spécialiser dans le développement logiciel.",
        }
    },

    {
        year: "2021",
        logo: althays,
        title: { en: "Discovery Internship", fr: "Stage de découverte" },
        company: "Althays",
        period: { en: "Mar 2021", fr: "Mars 2021" },

        description: {
            en: "Discovered software engineering and office workflows.",
            fr: "Découverte du développement logiciel et du fonctionnement d'une entreprise.",
        },
    },

    {
        year: "2019",
        logo: lombardie,
        title: { en: "Engineering Internship", fr: "Stage en ingénierie" },
        company: "Lombardie",
        period: { en: "Apr 2019", fr: "Avr. 2019" },

        description: {
            en: "Participated in testing procedures and result analysis.",
            fr: "Participation aux procédures de test et à l'analyse des résultats.",
        },
    },
];

export default experiences;