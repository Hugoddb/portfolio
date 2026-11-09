import { Wifi, Volume2, BatteryFull } from "lucide-react";
import useClock from "../../hooks/useClock";
import useLanguage from "../../i18n/LanguageContext";

function Taskbar({ onHome }) {

    const now = useClock();
    const { lang, toggleLang, t } = useLanguage();

    const time = now.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
    });

    const date = now.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-14 bg-slate-900 border-t border-slate-700 flex items-center justify-between px-3 md:px-6">

        <button
            type="button"
            onClick={onHome}
            disabled={!onHome}
            className="bg-slate-700 hover:bg-slate-600 transition-colors rounded-full px-4 md:px-5 py-2 cursor-pointer disabled:cursor-default"
        >
        <span className="text-slate-200 text-sm">
            <span className="hidden sm:inline">Portfolio - </span>Hugo de Dreux-Brézé
        </span>
        </button>

        <div className="flex items-center gap-4">

        <button
            type="button"
            onClick={toggleLang}
            aria-label={t({ en: "Passer en français", fr: "Switch to English" })}
            className="flex items-center rounded-full bg-slate-700 hover:bg-slate-600 transition-colors p-1 text-xs font-semibold cursor-pointer"
        >
            {["en", "fr"].map((code) => (
                <span
                    key={code}
                    className={`px-2 py-1 rounded-full uppercase transition-colors ${
                        lang === code ? "bg-slate-200 text-slate-900" : "text-slate-300"
                    }`}
                >
                    {code}
                </span>
            ))}
        </button>

        <div className="hidden sm:flex items-center gap-3">
            <BatteryFull size={18} className="text-white" />
            <Wifi size={18} className="text-white" />
            <Volume2 size={18} className="text-white" />
        </div>

        <div className="flex flex-col items-end leading-none">
        <span className="text-white text-sm font-medium">
            {time}
        </span>

        <span className="text-slate-400 text-xs mt-1">
            {date}
        </span>
        </div>

        </div>

        </div>
    );
}

export default Taskbar;
