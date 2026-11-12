import { MapPin, Cake, GraduationCap, FolderGit2, FileText, Mail } from "lucide-react";
import useLanguage from "../../i18n/LanguageContext";
import projects from "../../data/projects";
import { links } from "../../data/links";
import githubIcon from "../../assets/icons/github.webp";
import linkedinIcon from "../../assets/icons/linkedin.webp";

const BIRTH_DATE = new Date(2004, 8, 13); // 13 septembre 2004
const CV_URL = "/cv/Hugo_de_Dreux-Breze_CV.pdf";

// calcule l'âge à partir de la date de naissance
const getAge = () => {
    const today = new Date();
    const age = today.getFullYear() - BIRTH_DATE.getFullYear();
    const birthdayPassed =
        today.getMonth() > BIRTH_DATE.getMonth() ||
        (today.getMonth() === BIRTH_DATE.getMonth() && today.getDate() >= BIRTH_DATE.getDate());
    return birthdayPassed ? age : age - 1;
};

const passions = [
    { emoji: "💻", label: { en: "Development", fr: "Développement" } },
    { emoji: "⚽", label: "Football" },
    { emoji: "🎬", label: { en: "Cinema", fr: "Cinéma" } },
    { emoji: "🎵", label: { en: "Music", fr: "Musique" } },
];

function AboutWindow() {

    const { t } = useLanguage();

    const facts = [
        { icon: MapPin, label: { en: "City", fr: "Ville" }, value: "Lyon, France" },
        { icon: Cake, label: { en: "Age", fr: "Âge" }, value: `${getAge()} ${t({ en: "years old", fr: "ans" })}` },
        { icon: GraduationCap, label: { en: "School", fr: "École" }, value: t({ en: "Epitech · 3rd year", fr: "Epitech · 3e année" }) },
        { icon: FolderGit2, label: { en: "Projects", fr: "Projets" }, value: `${projects.length}`, href: "#projects" },
    ];

    return (
        <div className="text-white p-5 md:p-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

            {/* colonne profil */}
            <aside className="lg:w-72 shrink-0 lg:border-r lg:border-slate-700 lg:pr-10 flex flex-col items-center lg:items-start text-center lg:text-left">

                <h1 className="font-title text-3xl md:text-4xl font-bold leading-tight">
                    Hugo
                    <br />
                    de Dreux-Brézé
                </h1>

                <h2 className="text-sky-400 text-lg md:text-xl mt-2">
                    {t({ en: "Full Stack Developer", fr: "Développeur Full Stack" })}
                </h2>

                <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                    <span className="relative flex w-2 h-2">
                        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                        <span className="relative w-2 h-2 rounded-full bg-green-400" />
                    </span>
                    {t({ en: "Available for internship", fr: "Disponible pour un stage" })}
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-6">
                    <a
                        href={CV_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transition px-4 py-2.5 rounded-lg font-medium text-sm"
                    >
                        <FileText size={16} />
                        {t({ en: "View CV", fr: "Voir le CV" })}
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 transition px-4 py-2.5 rounded-lg font-medium text-sm"
                    >
                        <Mail size={16} />
                        Contact
                    </a>
                </div>

                <div className="flex gap-3 mt-4">
                    {[
                        { name: "GitHub", icon: githubIcon, url: links.github },
                        { name: "LinkedIn", icon: linkedinIcon, url: links.linkedin },
                    ].map((s) => (
                        <a
                            key={s.name}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.name}
                            className="p-2 rounded-lg bg-slate-700/60 hover:bg-slate-600 transition"
                        >
                            <img src={s.icon} alt="" className="w-6 h-6" />
                        </a>
                    ))}
                </div>
            </aside>

            {/* contenu */}
            <div className="flex-1 min-w-0 flex flex-col gap-8 md:gap-10">

            <section>
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                    {t({ en: "About Me", fr: "À propos de moi" })}
                </h3>

                <div className="space-y-3 text-slate-300 leading-7 md:leading-8 max-w-3xl">
                    <p>
                        {t({
                            en: "I am a third-year student at Epitech Lyon passionate about software development and modern user interfaces. I enjoy building clean, intuitive and high-performance applications while continuously learning new technologies.",
                            fr: "Étudiant en troisième année à Epitech Lyon, je suis passionné par le développement logiciel et les interfaces modernes. J'aime concevoir des applications claires, intuitives et performantes, tout en continuant à apprendre de nouvelles technologies.",
                        })}
                    </p>
                    <p>
                        {t({
                            en: "After two years of maths and computer science at Université Lyon 1, I joined Epitech and completed a 6-month internship at Inetum, working on Python tools and data validation.",
                            fr: "Après deux ans de licence maths-info à l'Université Lyon 1, j'ai rejoint Epitech et réalisé un stage de 6 mois chez Inetum, sur des outils Python et de la validation de données.",
                        })}
                    </p>
                </div>
            </section>

            <section>
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
                    {facts.map(({ icon: Icon, label, value, href }) => {
                        const Tag = href ? "a" : "div";
                        return (
                            <Tag
                                key={t(label)}
                                {...(href && { href })}
                                className={`bg-slate-700/60 border border-slate-600/50 rounded-xl p-4 flex flex-col gap-2 ${href ? "hover:border-sky-400/60 hover:bg-slate-700 transition" : ""}`}
                            >
                                <Icon size={20} className="text-sky-400" />
                                <div>
                                    <p className="text-xs md:text-sm text-slate-400">{t(label)}</p>
                                    <p className="font-medium text-sm md:text-base">{value}</p>
                                </div>
                            </Tag>
                        );
                    })}
                </div>
            </section>

            <section>
                <h3 className="text-xl md:text-2xl font-semibold mb-5">
                    Passions
                </h3>

                <ul className="flex flex-wrap gap-3">
                    {passions.map((p) => (
                        <li
                            key={t(p.label)}
                            className="bg-slate-700/60 border border-slate-600/50 hover:border-sky-400/60 transition px-4 py-2 md:py-2.5 rounded-full text-sm md:text-base"
                        >
                            <span aria-hidden="true">{p.emoji}</span> {t(p.label)}
                        </li>
                    ))}
                </ul>
            </section>
            </div>

        </div>
        </div>
    );
}

export default AboutWindow;
