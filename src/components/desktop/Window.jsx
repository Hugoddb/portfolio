import { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const themes = {
    about: {
        background: "bg-slate-800",
        header: "bg-slate-900",
        border: "border-slate-700",
    },

    terminal: {
        background: "bg-black",
        header: "bg-zinc-950",
        border: "border-green-500",
    },

    projects: {
        background: "bg-slate-900",
        header: "bg-blue-950",
        border: "border-blue-500",
    },

    skills: {
        background: "bg-slate-900",
        header: "bg-indigo-900",
        border: "border-indigo-500",
    },

    experience: {
        background: "bg-slate-900",
        header: "bg-emerald-900",
        border: "border-emerald-500",
    },
};

function Window({ title,content,width,height,theme,onClose,}) {

    const currentTheme = themes[theme];

    // touche Échap => ferme la fenêtre
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [onClose]);

    return (
        <motion.div
            className="fixed inset-x-0 top-0 bottom-14 z-40 flex items-center justify-center md:p-6 bg-slate-950/30"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
        >

        <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onClick={(e) => e.stopPropagation()}
            className={`${currentTheme.background} ${currentTheme.border} flex flex-col w-full h-full md:w-(--w) md:h-(--h) md:max-w-full md:max-h-full md:rounded-xl md:border shadow-2xl overflow-hidden`}
            style={{ "--w": width, "--h": height }}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >

        <div
        className={`h-12 shrink-0 ${currentTheme.header} flex items-center justify-between pl-4 pr-2`}
        >
            <span className="text-white font-medium uppercase tracking-wide"> {title} </span>
            <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="text-white hover:text-red-400 transition-colors p-2 rounded-md"
            >
                <X size={22} />
            </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto">
            {content}
        </div>

        </motion.div>
      </motion.div>
    );
}

export default Window;
