import { createContext, useContext } from "react";

export const LanguageContext = createContext(null);

// renvoie { lang, setLang, toggleLang, t }
// t accepte un texte simple ou un objet { en, fr }
function useLanguage() {
    return useContext(LanguageContext);
}

export default useLanguage;
