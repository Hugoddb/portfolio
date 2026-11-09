import { useEffect, useState } from "react";

// renvoie true si la media query correspond, mis à jour au redimensionnement
function useMediaQuery(query) {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {
        const media = window.matchMedia(query);
        const onChange = () => setMatches(media.matches);
        onChange();
        media.addEventListener("change", onChange);
        return () => media.removeEventListener("change", onChange);
    }, [query]);

    return matches;
}

export default useMediaQuery;
