import portfolio from "../assets/projects/portfolio.png";
import pomodocus from "../assets/projects/pomodocus.png";
import codewash from "../assets/projects/codewash.png"
import wolf3D from "../assets/projects/wolf3D.jpg"
import zappy from "../assets/projects/zappy.png"
import rmrf from "../assets/projects/rmrf.png"
import { technologies } from "./technologies";

const projects = [

    {
        id: 1,
        title: "Portfolio",
        image: portfolio,
        description:
        "Interactive portfolio inspired by a desktop operating system.",
        technologies: [
        technologies.React,
        technologies.Tailwind,
        technologies.Vite,
        ],
        team: 1,
        duration: "...",
        github: "https://github.com/Hugoddb/portfolio",
        private: false,
        
    },

    {
        id: 2,
        title: "Pomodocus",
        image: pomodocus,
        description:
        "Pomodocus is a 10-hour hackathon project. Pomodocus is a gamified Pomodoro app featuring collectable dinosaurs! Stay productive whilst collecting adorable dinosaurs.",
        technologies: [
        technologies.React,
        technologies.Tailwind,
        technologies.TypeScript,
        technologies.Vite,
        ],
        team: 2,
        duration: "1 day",
        github: "https://github.com/lucasskvn/Pomodocus",
        private: false,
    },

    {
        id: 3,
        title: "Zappy",
        image: zappy,
        description:
        "Zappy - Network Game Server. Zappy is a real-time multiplayer network game in which several teams compete to reach level 8.",
        technologies: [
        technologies.C,
        technologies["C++"],
        technologies.Python,
        ],

        team: 5,
        duration: "1 month",
        private: true,

    },

    {
        id: 4,
        title: "RMRF",
        image: rmrf,
        description:
        "Chunk-based deduplicated backup tool for files and VM disks. Uses FastCDC (content-defined chunking), BLAKE3 hashing, and zstd compression. Supports Proxmox (QEMU/LXC) VM suspension for consistent snapshots. ",
        technologies: [
        technologies.Rust,
        ],
        team: 2,
        duration: "2 weeks",
        github: "https://github.com/Hugoddb/Rmrf",
        private: false,

    },

    {
        id: 5,
        title: "Codewash",
        image: codewash,
        description:
        "Codewash is a complete refactoring project of an existing application, aiming to improve code quality, maintainability, and ease the implementation of new features.",
        technologies: [
        technologies.React,
        technologies.Tailwind,
        technologies.TypeScript,
        technologies.Vite,
        ],
        team: 2,
        duration: "1 month",
        private: true,

    },
    {
        id: 6,
        title: "Wolf3D",
        image: wolf3D,
        description:
        "A 3D game project made in C and CSFML. Inspired by the classic Wolfenstein 3D, it features player movement, raycasting, and real-time rendering.",
        technologies: [
        technologies.C,
        technologies.Sfml,
        ],

        team: 2,
        duration: "1 month",
        private: true,

    },

    {
        id: 7,
        title: "My_teams",
        description:
        "The MyTeams Application Protocol (MAP) is a client-server protocol inspired by collaborative tools such as Microsoft Teams.",
        technologies: [
        technologies.Rust
        ],
        team: 3,
        duration: "1 month",
        private: true,

    },

    {
        id: 8,
        title: "My_hunter",
        description:
        "A 2D game project made in C and CSFML. Players must shoot moving targets while improving their score and reflexes.",
        technologies: [
        technologies.C,
        technologies.Sfml,
        ],
        team: 1,
        duration: "2 weeks",
        private: true,

    },

];

export default projects;