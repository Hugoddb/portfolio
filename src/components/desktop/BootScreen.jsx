import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lock } from "lucide-react";
import StarryBackground from "./StarryBackground";
import projects from "../../data/projects";
import experiences from "../../data/experiences";
import useClock from "../../hooks/useClock";
import useLanguage from "../../i18n/LanguageContext";

const bootLines = [
    "Started kernel (Epitech Lyon edition)",
    "Mounted /home/hugo",
    `Loaded ${experiences.length} experiences`,
    `Loaded ${projects.length} projects`,
    "Loaded skills: C, C++, Rust, Python, React",
    "Started network services: github, linkedin",
    "Reached target Graphical Interface",
];

const LINE_DELAY = 140;

const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function BootScreen({ onDone }) {

    // "boot" : lignes de démarrage, "lock" : écran de verrouillage
    const [phase, setPhase] = useState(() => (prefersReducedMotion() ? "lock" : "boot"));
    const [visibleLines, setVisibleLines] = useState(0);
    const now = useClock();
    const { lang, t } = useLanguage();

    // affiche les lignes une par une, puis passe à l'écran de verrouillage
    useEffect(() => {
        if (phase !== "boot") return;
        const delay = visibleLines < bootLines.length ? LINE_DELAY : 600;
        const timeout = setTimeout(() => {
            if (visibleLines < bootLines.length) setVisibleLines((n) => n + 1);
            else setPhase("lock");
        }, delay);
        return () => clearTimeout(timeout);
    }, [phase, visibleLines]);

    // n'importe quelle touche : passe le boot, puis déverrouille
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.metaKey || e.ctrlKey || e.altKey) return;
            if (phase === "boot") setPhase("lock");
            else onDone();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [phase, onDone]);

    const time = now.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
    });

    const date = now.toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    return (
        <motion.div
            className="fixed inset-0 z-[60] overflow-hidden bg-black"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        >

        <AnimatePresence>
        {phase === "boot" ? (
            <motion.div
                key="boot"
                className="absolute inset-0 p-6 sm:p-10 font-mono text-sm sm:text-base text-slate-300 cursor-pointer"
                onClick={() => setPhase("lock")}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <p className="text-white font-bold mb-4">HugoOS 1.0 (tty1)</p>

                {bootLines.slice(0, visibleLines).map((line) => (
                    <p key={line} className="leading-7">
                        <span className="text-slate-500">[</span>
                        <span className="text-green-400 whitespace-pre">  OK  </span>
                        <span className="text-slate-500">]</span> {line}
                    </p>
                ))}

                <span className="inline-block mt-1 animate-pulse">▋</span>

                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDone();
                    }}
                    className="absolute bottom-6 right-6 text-slate-500 hover:text-white transition-colors text-sm"
                >
                    {t({ en: "Skip", fr: "Passer" })} ›
                </button>
            </motion.div>
        ) : (
            <motion.button
                key="lock"
                type="button"
                autoFocus
                onClick={onDone}
                aria-label={t({ en: "Unlock and enter the portfolio", fr: "Déverrouiller et entrer dans le portfolio" })}
                className="absolute inset-0 w-full h-full text-white cursor-pointer outline-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                <StarryBackground className="absolute inset-0" />
                <div className="absolute inset-0 bg-slate-950/50" />

                <div className="relative h-full flex flex-col items-center justify-between py-20 sm:py-24 px-6">

                    <div className="text-center">
                        <p className="font-title text-7xl sm:text-8xl font-semibold tracking-tight">
                            {time}
                        </p>
                        <p className="mt-2 text-lg sm:text-xl capitalize text-white/90">
                            {date}
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <div className="w-20 h-20 rounded-full bg-slate-900/70 border border-white/20 flex items-center justify-center font-title text-2xl font-semibold">
                            HD
                        </div>

                        <p className="text-xl font-medium">
                            Hugo de Dreux-Brézé
                        </p>

                        <p className="flex items-center gap-2 text-sm text-white/80 animate-pulse">
                            <Lock size={14} />
                            <span className="md:hidden">{t({ en: "Tap to enter", fr: "Touchez pour entrer" })}</span>
                            <span className="hidden md:inline">{t({ en: "Click or press any key to enter", fr: "Cliquez ou appuyez sur une touche pour entrer" })}</span>
                        </p>
                    </div>

                </div>
            </motion.button>
        )}
        </AnimatePresence>

        </motion.div>
    );
}

export default BootScreen;
