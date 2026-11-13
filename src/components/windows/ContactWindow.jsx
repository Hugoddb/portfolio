import { useEffect, useRef, useState } from "react";
import { links } from "../../data/links";
import projects from "../../data/projects";
import skills from "../../data/skills";
import useLanguage from "../../i18n/LanguageContext";

const PROMPT = "$hugodedreux-breze";
const CV_URL = "/cv/Hugo_de_Dreux-Breze_CV.pdf";

const contacts = [
    { label: { en: "Name", fr: "Nom" }, value: "Hugo de Dreux-Brézé" },
    { label: { en: "Personal Email", fr: "Email perso" }, value: links.email, href: `mailto:${links.email}` },
    { label: { en: "Student Email", fr: "Email étudiant" }, value: links.studentEmail, href: `mailto:${links.studentEmail}` },
    { label: "GitHub", value: "github.com/Hugoddb", href: links.github, external: true },
    { label: "LinkedIn", value: "linkedin.com/in/hugo-de-dreux-brézé", href: links.linkedin, external: true },
];

const SECTIONS = ["about", "experiences", "projects", "skills", "browser"];

const openWindow = (id) => {
    window.location.hash = id;
};

const openUrl = (url) => window.open(url, "_blank", "noopener,noreferrer");

function ContactList({ t }) {
    return (
        <dl className="space-y-3 md:space-y-2">
            {contacts.map((contact) => (
                <div key={contact.value} className="flex flex-col md:flex-row md:items-baseline md:gap-3">
                    <dt className="flex md:w-56 shrink-0 items-baseline gap-2 text-white">
                        {t(contact.label)}
                        <span className="hidden md:block flex-1 border-b-2 border-dotted border-slate-600" />
                    </dt>
                    <dd className="text-slate-300 break-all">
                        {contact.href ? (
                            <a
                                href={contact.href}
                                {...(contact.external && { target: "_blank", rel: "noopener noreferrer" })}
                                className="underline hover:text-green-400"
                            >
                                {contact.value}
                            </a>
                        ) : (
                            contact.value
                        )}
                    </dd>
                </div>
            ))}
        </dl>
    );
}

const COMMANDS = {
    help: {
        desc: { en: "list available commands", fr: "liste des commandes" },
        run: () => (t) => (
            <ul className="space-y-0.5">
                {Object.entries(COMMANDS).map(([name, cmd]) => (
                    <li key={name} className="flex gap-3">
                        <span className="text-green-400 w-28 shrink-0">{name}</span>
                        <span className="text-slate-400">{t(cmd.desc)}</span>
                    </li>
                ))}
            </ul>
        ),
    },
    contact: {
        desc: { en: "show my contact details", fr: "affiche mes coordonnées" },
        run: () => (t) => <ContactList t={t} />,
    },
    whoami: {
        desc: { en: "who am I?", fr: "qui suis-je ?" },
        run: () => (t) => (
            <p className="text-slate-300">
                Hugo de Dreux-Brézé — {t({
                    en: "Full Stack developer, 3rd year student at Epitech Lyon.",
                    fr: "développeur Full Stack, étudiant en 3e année à Epitech Lyon.",
                })}
            </p>
        ),
    },
    ls: {
        desc: { en: "list sections", fr: "liste les sections" },
        run: () => () => (
            <p className="flex flex-wrap gap-x-6 text-sky-400">
                {SECTIONS.map((s) => <span key={s}>{s}/</span>)}
                <span className="text-white">cv.pdf</span>
            </p>
        ),
    },
    cd: {
        desc: { en: "open a section (cd projects)", fr: "ouvre une section (cd projects)" },
        run: (args) => {
            const target = args[0]?.replace(/\/$/, "");
            if (SECTIONS.includes(target)) {
                openWindow(target);
                return null;
            }
            return (t) => (
                <p className="text-red-400">
                    cd: {target ?? ""} {t({ en: "no such section — try", fr: "section introuvable — essaie" })} <span className="text-white">ls</span>
                </p>
            );
        },
    },
    projects: {
        desc: { en: "list my projects", fr: "liste mes projets" },
        run: () => (t) => (
            <div>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-6">
                    {projects.map((p) => <li key={p.id} className="text-slate-300">• {p.title}</li>)}
                </ul>
                <p className="text-slate-500 mt-1">
                    {t({ en: "→ type", fr: "→ tape" })} <span className="text-white">cd projects</span> {t({ en: "for details", fr: "pour le détail" })}
                </p>
            </div>
        ),
    },
    skills: {
        desc: { en: "list my skills", fr: "liste mes compétences" },
        run: () => (t) => (
            <ul className="space-y-0.5">
                {skills.filter((s) => s.items?.length).map((s) => (
                    <li key={t(s.category)}>
                        <span className="text-green-400">{t(s.category)}:</span>{" "}
                        <span className="text-slate-300">{s.items.map((i) => t(i.name)).join(", ")}</span>
                    </li>
                ))}
            </ul>
        ),
    },
    cv: {
        desc: { en: "open my resume", fr: "ouvre mon CV" },
        run: () => {
            openUrl(CV_URL);
            return (t) => <p className="text-slate-400">{t({ en: "Opening cv.pdf…", fr: "Ouverture de cv.pdf…" })}</p>;
        },
    },
    github: {
        desc: { en: "open my GitHub", fr: "ouvre mon GitHub" },
        run: () => {
            openUrl(links.github);
            return () => <p className="text-slate-400">→ github.com/Hugoddb</p>;
        },
    },
    linkedin: {
        desc: { en: "open my LinkedIn", fr: "ouvre mon LinkedIn" },
        run: () => {
            openUrl(links.linkedin);
            return () => <p className="text-slate-400">→ linkedin.com</p>;
        },
    },
    email: {
        desc: { en: "send me an email", fr: "m'envoyer un email" },
        run: () => {
            window.location.href = `mailto:${links.email}`;
            return () => <p className="text-slate-400">→ {links.email}</p>;
        },
    },
    lang: {
        desc: { en: "switch language (lang fr / lang en)", fr: "change la langue (lang fr / lang en)" },
        run: (args, ctx) => {
            const next = args[0] === "fr" || args[0] === "en" ? args[0] : ctx.lang === "fr" ? "en" : "fr";
            ctx.setLang(next);
            return () => <p className="text-slate-400">lang = {next}</p>;
        },
    },
    echo: {
        desc: { en: "print text", fr: "affiche du texte" },
        run: (args) => () => <p className="text-slate-300 break-all">{args.join(" ")}</p>,
    },
    date: {
        desc: { en: "current date", fr: "date actuelle" },
        run: (_, ctx) => () => <p className="text-slate-300">{new Date().toLocaleString(ctx.lang === "fr" ? "fr-FR" : "en-GB")}</p>,
    },
    sudo: {
        desc: { en: "nice try", fr: "bien essayé" },
        run: () => (t) => <p className="text-red-400">{t({ en: "Permission denied", fr: "Permission refusée" })}</p>,
    },
    clear: {
        desc: { en: "clear the terminal", fr: "efface le terminal" },
        run: (_, ctx) => {
            ctx.clear();
            return null;
        },
    },
    exit: {
        desc: { en: "close the terminal", fr: "ferme le terminal" },
        run: () => {
            window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
            return null;
        },
    },
};

const COMMAND_NAMES = Object.keys(COMMANDS);

function ContactWindow() {

    const { t, lang, setLang } = useLanguage();
    const [lines, setLines] = useState(() => [
        { id: 0, cmd: "--contact", render: COMMANDS.contact.run() },
        {
            id: 1,
            render: (t) => (
                <p className="text-slate-500">
                    {t({ en: "Type", fr: "Tape" })} <span className="text-white">help</span> {t({ en: "to see the available commands.", fr: "pour voir les commandes disponibles." })}
                </p>
            ),
        },
    ]);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const inputRef = useRef(null);
    const endRef = useRef(null);
    const nextId = useRef(2);

    useEffect(() => {
        const id = setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 50);
        return () => clearTimeout(id);
    }, []);

    useEffect(() => {
        endRef.current?.scrollIntoView({ block: "end" });
    }, [lines]);

    const run = (raw) => {
        const value = raw.trim();
        const [name, ...args] = value.split(/\s+/);
        const command = COMMANDS[name?.toLowerCase()];
        let cleared = false;

        const ctx = { lang, setLang, clear: () => (cleared = true) };
        const render = !value
            ? null
            : command
                ? command.run(args, ctx)
                : (t) => (
                    <p className="text-red-400">
                        {name}: {t({ en: "command not found. Type", fr: "commande introuvable. Tape" })} <span className="text-white">help</span>
                    </p>
                );

        if (cleared) {
            setLines([]);
        } else {
            setLines((prev) => [...prev, { id: nextId.current++, cmd: value, render }]);
        }
        if (value) setHistory((h) => [...h, value]);
        setHistoryIndex(-1);
        setInput("");
    };

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            run(input);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (!history.length) return;
            const i = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
            setHistoryIndex(i);
            setInput(history[i]);
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex === -1) return;
            const i = historyIndex + 1;
            if (i >= history.length) {
                setHistoryIndex(-1);
                setInput("");
            } else {
                setHistoryIndex(i);
                setInput(history[i]);
            }
        } else if (e.key === "Tab") {
            e.preventDefault();
            e.stopPropagation();
            const [first, ...rest] = input.split(" ");
            if (!rest.length) {
                const matches = COMMAND_NAMES.filter((c) => c.startsWith(first.toLowerCase()));
                if (matches.length === 1) setInput(matches[0] + " ");
            } else if (first === "cd") {
                const matches = SECTIONS.filter((s) => s.startsWith(rest.join(" ")));
                if (matches.length === 1) setInput(`cd ${matches[0]}`);
            }
        } else if (e.key === "l" && e.ctrlKey) {
            e.preventDefault();
            setLines([]);
        }
    };

    return (
      <div
        className="font-mono text-white text-sm sm:text-base md:text-lg p-5 md:p-8 leading-relaxed min-h-full cursor-text"
        onClick={() => {
            if (!window.getSelection()?.toString()) inputRef.current?.focus({ preventScroll: true });
        }}
      >

        {lines.map((line) => (
            <div key={line.id} className="mb-3">
                {line.cmd !== undefined && (
                    <p>
                        <span className="text-green-400">{PROMPT}</span> <span className="break-all">{line.cmd}</span>
                    </p>
                )}
                {line.render && <div className="mt-1">{line.render(t)}</div>}
            </div>
        ))}

        <label className="flex items-baseline gap-2">
          <span className="text-green-400 shrink-0">{PROMPT}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            aria-label={t({ en: "Terminal command", fr: "Commande du terminal" })}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            enterKeyHint="send"
            className="flex-1 min-w-0 bg-transparent outline-none text-white caret-green-400 text-base sm:text-base md:text-lg"
          />
        </label>

        <div ref={endRef} />

      </div>
    );
  }

  export default ContactWindow;
