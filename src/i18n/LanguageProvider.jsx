import { useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

const getInitialLang = () => {
    try {
        const saved = localStorage.getItem("lang");
        if (saved === "en" || saved === "fr") return saved;
    } catch {
    }
    return navigator.language?.startsWith("fr") ? "fr" : "en";
};

function LanguageProvider({ children }) {

    const [lang, setLang] = useState(getInitialLang);

    useEffect(() => {
        document.documentElement.lang = lang;
        try {
            localStorage.setItem("lang", lang);
        } catch {
        }
    }, [lang]);

    const toggleLang = () => setLang((l) => (l === "en" ? "fr" : "en"));

    const t = (text) =>
        text && typeof text === "object" ? text[lang] ?? text.en : text;

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageProvider;
