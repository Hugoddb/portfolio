import FolderIcon from "./FolderIcon";
import Window from "./Window";
import Taskbar from "./TaskBar";
import StarryBackground from "./StarryBackground";
import githubIcon from "../../assets/icons/github.webp";
import linkedinIcon from "../../assets/icons/linkedin.webp";
import terminalIcon from "../../assets/icons/terminal.png";
import AppIcon from "./AppIcon";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { windowContent } from "../../data/windowContent";
import { links } from "../../data/links";
import useLanguage from "../../i18n/LanguageContext";

const folders = [
    { id: "about", name: { en: "About", fr: "À propos" } },
    { id: "experiences", name: { en: "Experiences", fr: "Expériences" } },
    { id: "projects", name: { en: "Projects", fr: "Projets" } },
    { id: "skills", name: { en: "Skills", fr: "Compétences" } },
    { id: "contact", name: "Contact", icon: terminalIcon },
];

const apps = [
    {
        name: "GitHub",
        icon: githubIcon,
        url: links.github,
    },
    {
        name: "LinkedIn",
        icon: linkedinIcon,
        url: links.linkedin,
    },
];

// lit la fenêtre à ouvrir depuis l'URL (ex: /#projects)
const getWindowFromHash = () => {
    const id = window.location.hash.slice(1);
    return windowContent[id] ? id : null;
};

function Desktop() {

    const [openWindow, setOpenWindow] = useState(getWindowFromHash);
    const { t } = useLanguage();

    // bouton "retour" du navigateur / téléphone => ferme la fenêtre
    useEffect(() => {
        const onPopState = () => setOpenWindow(getWindowFromHash());
        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
    }, []);

    const handleFolderClick = (id) => {
        history.pushState({ window: id }, "", `#${id}`);
        setOpenWindow(id);
    };

    const closeWindow = () => {
        if (history.state?.window) {
            history.back();
            return;
        }
        history.replaceState(null, "", window.location.pathname + window.location.search);
        setOpenWindow(null);
    };

    const currentWindow = windowContent[openWindow];
    const ActiveComponent = currentWindow?.component;

    return (

        <div
            className="relative isolate h-dvh w-screen overflow-hidden pb-14 flex flex-col bg-[#050a1c]"
        >

        <StarryBackground className="absolute inset-0 -z-10" />

        <div className="hidden md:flex absolute top-8 right-8 flex-col gap-6">
        {apps.map((app) => (
            <AppIcon
            key={app.name}
            {...app}
            />
        ))}
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">

            <h1 className="font-title text-4xl sm:text-5xl font-bold text-white">
                Hugo de <span className="whitespace-nowrap">Dreux-Brézé</span>
            </h1>

            <h2 className="text-slate-300 text-base sm:text-lg font-normal mt-2">
                {t({ en: "Developer", fr: "Développeur" })} / EPITECH Lyon
            </h2>

        </div>

    <div className="grid grid-cols-4 gap-y-4 px-3 mb-16 md:flex md:justify-center md:gap-20 md:px-0 md:mb-50">
        {folders.map((folder) => (
        <FolderIcon
            key={folder.id}
            folder={folder}
            onClick={handleFolderClick}
        />
        ))}

        {apps.map((app) => (
            <AppIcon
            key={app.name}
            {...app}
            className="md:hidden"
            labelClassName="text-white"
            />
        ))}
    </div>

    <AnimatePresence>
    {ActiveComponent && (
    <Window
        key={openWindow}
        title={t(currentWindow.title)}
        content={<ActiveComponent />}
        width={currentWindow.width}
        height={currentWindow.height}
        theme={currentWindow.theme}
        onClose={closeWindow}
    />
    )}
    </AnimatePresence>

    <Taskbar onHome={ActiveComponent ? closeWindow : undefined} />

    </div>
  );
}

export default Desktop;
