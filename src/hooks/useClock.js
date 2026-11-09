import { useEffect, useState } from "react";

// renvoie la date actuelle, mise à jour chaque seconde
function useClock() {
    const [now, setNow] = useState(() => new Date());

    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    return now;
}

export default useClock;
