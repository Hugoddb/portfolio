import { useEffect, useRef } from "react";
import { motion, useDragControls } from "framer-motion";
import { X } from "lucide-react";
import useLanguage from "../../i18n/LanguageContext";
import useMediaQuery from "../../hooks/useMediaQuery";

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

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

function Window({ title,content,width,height,theme,onClose,}) {

    const currentTheme = themes[theme];
    const { t } = useLanguage();
    const dialogRef = useRef(null);
    const overlayRef = useRef(null);
    const pressedOverlay = useRef(false);
    const dragControls = useDragControls();

    // fenêtres déplaçables seulement sur ordinateur (en plein écran sur mobile)
    const canDrag = useMediaQuery("(min-width: 768px)");

    // à l'ouverture : focus sur la fenêtre, à la fermeture : on rend le focus (ex: au dossier cliqué)
    useEffect(() => {
        const previous = document.activeElement;
        dialogRef.current?.focus();
        return () => previous?.focus?.();
    }, []);

    // touche Échap => ferme la fenêtre, Tab => le focus reste dans la fenêtre
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key !== "Tab" || !dialogRef.current) return;

            const focusables = dialogRef.current.querySelectorAll(FOCUSABLE);
            if (!focusables.length) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            const inside = dialogRef.current.contains(document.activeElement);

            if (e.shiftKey && (!inside || document.activeElement === first || document.activeElement === dialogRef.current)) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && (!inside || document.activeElement === last)) {
                e.preventDefault();
                first.focus();
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [onClose]);

    return (
        <motion.div
            ref={overlayRef}
            className="fixed inset-x-0 top-0 bottom-14 z-40 flex items-center justify-center md:p-6 bg-slate-950/30"
            // ferme seulement si le clic commence ET finit sur le fond (pas à la fin d'un déplacement)
            onPointerDown={(e) => (pressedOverlay.current = e.target === e.currentTarget)}
            onClick={(e) => {
                if (pressedOverlay.current && e.target === e.currentTarget) onClose();
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
        >

        <motion.div
            ref={dialogRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onClick={(e) => e.stopPropagation()}
            className={`${currentTheme.background} ${currentTheme.border} flex flex-col w-full h-full md:w-(--w) md:h-(--h) md:max-w-full md:max-h-full md:rounded-xl md:border shadow-2xl overflow-hidden outline-none`}
            style={{ "--w": width, "--h": height }}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            drag={canDrag}
            dragListener={false}
            dragControls={dragControls}
            dragConstraints={overlayRef}
            dragElastic={0}
            dragMomentum={false}
        >

        <div
        className={`h-12 shrink-0 ${currentTheme.header} flex items-center justify-between pl-4 pr-2 ${canDrag ? "cursor-grab active:cursor-grabbing select-none" : ""}`}
        onPointerDown={(e) => canDrag && dragControls.start(e)}
        >
            <span className="text-white font-medium uppercase tracking-wide"> {title} </span>
            <button
                type="button"
                onClick={onClose}
                onPointerDown={(e) => e.stopPropagation()}
                aria-label={t({ en: "Close", fr: "Fermer" })}
                className="text-white hover:text-red-400 transition-colors p-2 rounded-md cursor-pointer"
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
