import { useEffect, useState } from "react";
import { Wifi, Volume2, BatteryFull } from "lucide-react";

function Taskbar() {

    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

    //récupere l'heure et la date
    useEffect(() => {
    const updateDateTime = () => {
        const now = new Date();

        setTime(
        now.toLocaleTimeString("fr-FR", {
            hour: "2-digit",
            minute: "2-digit",
        })
        );

        setDate(
        now.toLocaleDateString("fr-FR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        })
        );
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed bottom-0 left-0 w-full h-14 bg-slate-900 border-t border-slate-700 flex items-center justify-between px-6">

        <div className="bg-slate-700 hover:bg-slate-600 transition-colors rounded-full px-5 py-2">
        <span className="text-slate-200 text-sm">
            Portfolio - Hugo de Dreux-Brézé
        </span>
        </div>

        <div className="flex items-center gap-4">

        <div className="flex items-center gap-3">
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