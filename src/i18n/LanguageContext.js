import { createContext, useContext } from "react";

export const LanguageContext = createContext(null);

function useLanguage() {
    return useContext(LanguageContext);
}

export default useLanguage;
