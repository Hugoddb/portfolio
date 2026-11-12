import { useEffect, useRef } from "react";

// Couches d'étoiles : plus la profondeur est grande, plus elles bougent avec la souris.
const LAYERS = [
    { density: 0.00018, size: [0.4, 0.9], depth: 8 },
    { density: 0.00008, size: [0.8, 1.3], depth: 18 },
    { density: 0.00003, size: [1.2, 1.8], depth: 32 },
];

function createStars(width, height) {
    // un peu plus dense sur petit écran, sinon le ciel paraît vide sur téléphone
    const boost = width < 768 ? 1.8 : 1;
    const area = width * height * boost;
    return LAYERS.flatMap((layer) =>
        Array.from({ length: Math.round(area * layer.density) }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            r: layer.size[0] + Math.random() * (layer.size[1] - layer.size[0]),
            depth: layer.depth,
            alpha: 0.4 + Math.random() * 0.6,
            phase: Math.random() * Math.PI * 2,
            speed: 0.5 + Math.random() * 1.5,
        }))
    );
}

function StarryBackground({ className = "" }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        // souris = parallaxe ; écran tactile = lente dérive automatique
        const hasMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

        let width = 0;
        let height = 0;
        let fieldHeight = 0; // hauteur sur laquelle les étoiles sont réparties
        let stars = [];
        let frame = 0;
        const target = { x: 0, y: 0 };
        const current = { x: 0, y: 0 };

        const resize = () => {
            // limité à 2 pour ne pas surcharger les téléphones à très haute densité
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const newWidth = canvas.clientWidth;
            height = canvas.clientHeight;
            canvas.width = newWidth * dpr;
            canvas.height = height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            // sur mobile la barre d'adresse qui apparaît/disparaît change la hauteur :
            // on garde les mêmes étoiles tant que la largeur ne change pas (pas de "saut")
            if (newWidth !== width || height > fieldHeight) {
                width = newWidth;
                fieldHeight = Math.max(height, window.screen?.height || 0);
                stars = createStars(width, fieldHeight);
            }
        };

        const draw = (time) => {
            if (!hasMouse) {
                target.x = Math.sin(time * 0.00007);
                target.y = Math.cos(time * 0.00005);
            }
            current.x += (target.x - current.x) * 0.05;
            current.y += (target.y - current.y) * 0.05;

            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = "#fff";
            for (const s of stars) {
                // Décalage selon la souris, avec retour de l'autre côté de l'écran.
                const x = (((s.x + current.x * s.depth) % width) + width) % width;
                const y = (((s.y + current.y * s.depth) % fieldHeight) + fieldHeight) % fieldHeight;
                if (y > height) continue;
                const twinkle = reduceMotion ? 1 : 0.75 + 0.25 * Math.sin(time * 0.001 * s.speed + s.phase);
                ctx.globalAlpha = s.alpha * twinkle;
                ctx.beginPath();
                ctx.arc(x, y, s.r, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.globalAlpha = 1;

            if (!reduceMotion) frame = requestAnimationFrame(draw);
        };

        const onPointerMove = (e) => {
            if (e.pointerType !== "mouse") return;
            // Position de la souris entre -1 et 1, sens inverse pour l'effet de profondeur.
            target.x = -((e.clientX / window.innerWidth) * 2 - 1);
            target.y = -((e.clientY / window.innerHeight) * 2 - 1);
        };

        const onResize = () => {
            resize();
            if (reduceMotion) draw(0);
        };

        resize();
        if (reduceMotion) draw(0);
        else frame = requestAnimationFrame(draw);

        window.addEventListener("resize", onResize);
        if (!reduceMotion && hasMouse) window.addEventListener("pointermove", onPointerMove);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("resize", onResize);
            window.removeEventListener("pointermove", onPointerMove);
        };
    }, []);

    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none bg-[radial-gradient(ellipse_at_top,#1b2d6b_0%,#0b1433_55%,#050a1c_100%)] ${className}`}
        >
            <canvas ref={canvasRef} className="w-full h-full block" />
        </div>
    );
}

export default StarryBackground;
