import portfolio from "../assets/projects/portfolio.jpg";
import pomodocus from "../assets/projects/pomodocus.jpg";
import codewash from "../assets/projects/codewash.jpg"
import wolf3D from "../assets/projects/wolf3D.jpg"
import zappy from "../assets/projects/zappy.png"
import rmrf from "../assets/projects/rmrf.jpg"
import hunter from "../assets/projects/hunter.png"
import myteams from "../assets/projects/myteams.jpg"
import { technologies } from "./technologies";

const projects = [

    {
        id: 1,
        title: "Portfolio",
        title2: { en: "Portfolio - Website", fr: "Portfolio - Site web" },
        image: portfolio,
        description: {
            en: "Interactive portfolio inspired by a desktop operating system.",
            fr: "Portfolio interactif inspiré d'un système d'exploitation de bureau.",
        },
        technologies: [
        technologies.React,
        technologies.Tailwind,
        technologies.Vite,
        ],
        team: 1,
        duration: { en: "Ongoing", fr: "En cours" },
        github: "https://github.com/Hugoddb/portfolio",
        demo: "https://hugoddb-portfolio.vercel.app/",
        private: false,
    },

    {
        id: 2,
        title: "Pomodocus",
        title2: { en: "Pomodocus - Gamified Pomodoro", fr: "Pomodocus - Pomodoro gamifié" },
        image: pomodocus,
        description: {
            en: "Pomodocus is a 10-hour hackathon project. Pomodocus is a gamified Pomodoro app featuring collectable dinosaurs! Stay productive whilst collecting adorable dinosaurs.",
            fr: "Pomodocus est un projet de hackathon de 10 heures : une application Pomodoro gamifiée avec des dinosaures à collectionner ! Restez productif tout en collectionnant d'adorables dinosaures.",
        },
        technologies: [
        technologies.React,
        technologies.Tailwind,
        technologies.TypeScript,
        technologies.Vite,
        ],
        team: 2,
        duration: { en: "1 day", fr: "1 jour" },
        github: "https://github.com/lucasskvn/Pomodocus",
        private: false,
    },

    {
        id: 3,
        title: "Zappy",
        title2: { en: "Zappy - Network Game Server", fr: "Zappy - Serveur de jeu réseau" },
        image: zappy,
        description: {
            en: "Zappy is a real-time multiplayer network game in which several teams compete to reach level 8.",
            fr: "Zappy est un jeu réseau multijoueur en temps réel dans lequel plusieurs équipes s'affrontent pour atteindre le niveau 8.",
        },
        technologies: [
        technologies.C,
        technologies["C++"],
        technologies.Python,
        ],

        team: 5,
        duration: { en: "1 month", fr: "1 mois" },
        private: true,

    },

    {
        id: 4,
        title: "RMRF",
        title2: { en: "RMRF - Deduplicated Backup Tool", fr: "RMRF - Outil de sauvegarde dédupliquée" },
        image: rmrf,
        description: {
            en: "Chunk-based deduplicated backup tool for files and VM disks. Uses FastCDC (content-defined chunking), BLAKE3 hashing, and zstd compression. Supports Proxmox (QEMU/LXC) VM suspension for consistent snapshots.",
            fr: "Outil de sauvegarde dédupliquée par blocs pour fichiers et disques de VM. Utilise FastCDC (découpage défini par le contenu), le hachage BLAKE3 et la compression zstd. Prend en charge la suspension des VM Proxmox (QEMU/LXC) pour des snapshots cohérents.",
        },
        technologies: [
        technologies.Rust,
        ],
        team: 2,
        duration: { en: "2 weeks", fr: "2 semaines" },
        github: "https://github.com/Hugoddb/Rmrf",
        private: false,

    },

    {
        id: 5,
        title: "Codewash",
        title2: "Codewash - Refactoring",
        image: codewash,
        description: {
            en: "Codewash is a complete refactoring project of an existing application, aiming to improve code quality, maintainability, and ease the implementation of new features.",
            fr: "Codewash est un projet de refonte complète d'une application existante, visant à améliorer la qualité du code, sa maintenabilité et à faciliter l'ajout de nouvelles fonctionnalités.",
        },
        technologies: [
        technologies.React,
        technologies.Tailwind,
        technologies.TypeScript,
        technologies.Vite,
        ],
        team: 2,
        duration: { en: "1 month", fr: "1 mois" },
        private: true,

    },
    {
        id: 6,
        title: "Wolf3D",
        title2: "Wolfenstein3D",
        image: wolf3D,
        description: {
            en: "A 3D game project made in C and CSFML. Inspired by the classic Wolfenstein 3D, it features player movement, raycasting, and real-time rendering.",
            fr: "Un jeu 3D réalisé en C avec la CSFML. Inspiré du classique Wolfenstein 3D, il propose le déplacement du joueur, du raycasting et un rendu en temps réel.",
        },
        technologies: [
        technologies.C,
        technologies.Sfml,
        ],

        team: 2,
        duration: { en: "1 month", fr: "1 mois" },
        private: true,

    },

    {
        id: 7,
        title: "My_teams",
        title2: { en: "My_teams - Client/Server Chat", fr: "My_teams - Messagerie client/serveur" },
        image: myteams,
        description: {
            en: "The MyTeams Application Protocol (MAP) is a client-server protocol inspired by collaborative tools such as Microsoft Teams.",
            fr: "Le MyTeams Application Protocol (MAP) est un protocole client-serveur inspiré d'outils collaboratifs comme Microsoft Teams.",
        },
        technologies: [
        technologies.Rust
        ],
        team: 3,
        duration: { en: "1 month", fr: "1 mois" },
        private: true,

    },

    {
        id: 8,
        title: "My_hunter",
        title2: "My_hunter",
        image: hunter,
        description: {
            en: "A 2D game project made in C and CSFML. Players must shoot moving targets while improving their score and reflexes.",
            fr: "Un jeu 2D réalisé en C avec la CSFML. Le joueur doit tirer sur des cibles mobiles pour améliorer son score et ses réflexes.",
        },
        technologies: [
        technologies.C,
        technologies.Sfml,
        ],
        team: 1,
        duration: { en: "2 weeks", fr: "2 semaines" },
        private: true,

    },

];

export default projects;