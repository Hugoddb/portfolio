import { useEffect, useRef, useState } from "react";
import useLanguage from "../../i18n/LanguageContext";
import { technologies } from "../../data/technologies";

// --- réglages du jeu ---
const HEIGHT = 220;
const GROUND = 190;
const LOGO = 30; // taille d'un logo obstacle
const GRAVITY = 0.6;
const JUMP = -10.5;
const START_SPEED = 5;
const MAX_SPEED = 13;
const HS_KEY = "offline-runner-highscore";

const COLORS = {
    sky: "#0f172a",
    ground: "#475569",
    player: "#38bdf8",
    visor: "#0f172a",
    text: "#cbd5e1",
};

// petit robot en pixels (1 = corps, 2 = visière)
const ROBOT = [
    "..1111..",
    ".111111.",
    ".122221.",
    ".122221.",
    ".111111.",
    "11111111",
    "1.1111.1",
    "..1111..",
    "..1..1..",
];
const ROBOT_RUN = [
    "..1..1..",
    ".1....1.",
];
const PX = 4;
const PLAYER_W = 8 * PX;
const PLAYER_H = ROBOT.length * PX;

const readHighScore = () => {
    try { return Number(localStorage.getItem(HS_KEY)) || 0; } catch { return 0; }
};
const saveHighScore = (v) => {
    try { localStorage.setItem(HS_KEY, String(v)); } catch { /* stockage indisponible */ }
};

function drawRobot(ctx, x, y, frame) {
    const rows = [...ROBOT.slice(0, -1), frame === null ? ROBOT.at(-1) : ROBOT_RUN[frame]];
    rows.forEach((row, j) => {
        [...row].forEach((c, i) => {
            if (c === ".") return;
            ctx.fillStyle = c === "2" ? COLORS.visor : COLORS.player;
            ctx.fillRect(x + i * PX, y + j * PX, PX, PX);
        });
    });
}

// les "cactus" : des logos de langages de programmation
const LANGUAGES = ["C", "C++", "Python", "JavaScript", "TypeScript", "Rust", "Haskell", "Bash", "Html", "Css", "Sql"]
    .map((key) => technologies[key]?.icon)
    .filter(Boolean)
    .map((src) => {
        const img = new Image();
        img.src = src;
        return img;
    });

const randomLogo = () => LANGUAGES[Math.floor(Math.random() * LANGUAGES.length)];

function drawObstacle(ctx, o, t) {
    // les logos volants flottent un peu
    const bob = o.flying ? Math.sin(t / 8) * 3 : 0;
    o.logos.forEach((img, k) => {
        const x = o.x + k * (o.size + 2);
        if (img.complete && img.naturalWidth) {
            ctx.drawImage(img, x, o.y + bob, o.size, o.size);
        } else {
            ctx.fillStyle = "#64748b";
            ctx.fillRect(x, o.y + bob, o.size, o.size);
        }
    });
}

function OfflineRunner() {

    const { t } = useLanguage();
    const canvasRef = useRef(null);
    const game = useRef(null);
    const [status, setStatus] = useState("idle"); // idle | running | over
    const [highScore, setHighScore] = useState(readHighScore);

    const reset = () => {
        game.current = {
            y: GROUND - PLAYER_H,
            vy: 0,
            speed: START_SPEED,
            obstacles: [],
            nextSpawn: 60,
            score: 0,
            tick: 0,
            groundOffset: 0,
        };
    };

    if (!game.current) reset();

    const jump = () => {
        if (status !== "running") {
            reset();
            setStatus("running");
            return;
        }
        const g = game.current;
        if (g.y >= GROUND - PLAYER_H) g.vy = JUMP;
    };

    // contrôles clavier : espace / flèche haut
    useEffect(() => {
        const onKey = (e) => {
            if (e.code === "Space" || e.code === "ArrowUp") {
                e.preventDefault();
                jump();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    });

    // boucle de jeu
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let raf;

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            const w = canvas.clientWidth;
            canvas.width = w * dpr;
            canvas.height = HEIGHT * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        resize();
        window.addEventListener("resize", resize);

        const loop = () => {
            const g = game.current;
            const W = canvas.clientWidth;
            const px = 40;

            if (status === "running") {
                g.tick++;
                g.score += g.speed / 20;
                g.speed = Math.min(MAX_SPEED, START_SPEED + g.score / 150);

                // saut
                g.vy += GRAVITY;
                g.y = Math.min(GROUND - PLAYER_H, g.y + g.vy);
                if (g.y === GROUND - PLAYER_H) g.vy = 0;

                // obstacles
                g.groundOffset = (g.groundOffset + g.speed) % 24;
                g.obstacles.forEach((o) => (o.x -= g.speed));
                g.obstacles = g.obstacles.filter((o) => o.x + o.w > -10);

                if (--g.nextSpawn <= 0) {
                    const flying = g.score > 250 && Math.random() < 0.3;
                    if (flying) {
                        const high = Math.random() < 0.5;
                        g.obstacles.push({ flying: true, logos: [randomLogo()], size: LOGO, x: W + 10, y: GROUND - (high ? 90 : 60), w: LOGO, h: LOGO });
                    } else {
                        const count = 1 + Math.floor(Math.random() * (g.score > 120 ? 3 : 2));
                        const size = LOGO - 4 + Math.floor(Math.random() * 3) * 4;
                        const logos = Array.from({ length: count }, randomLogo);
                        g.obstacles.push({ logos, size, x: W + 10, y: GROUND - size, w: count * (size + 2) - 2, h: size });
                    }
                    const gap = 70 + Math.random() * 70;
                    g.nextSpawn = Math.max(38, gap - g.speed * 2);
                }

                // collision (hitbox un peu réduite pour être indulgent)
                const hit = g.obstacles.some((o) =>
                    px + 4 < o.x + o.w - 2 &&
                    px + PLAYER_W - 4 > o.x + 2 &&
                    g.y + 4 < o.y + o.h - 2 &&
                    g.y + PLAYER_H > o.y + 4
                );
                if (hit) {
                    const final = Math.floor(g.score);
                    if (final > highScore) {
                        saveHighScore(final);
                        setHighScore(final);
                    }
                    setStatus("over");
                }
            }

            // --- rendu ---
            ctx.fillStyle = COLORS.sky;
            ctx.fillRect(0, 0, W, HEIGHT);

            ctx.fillStyle = COLORS.ground;
            ctx.fillRect(0, GROUND, W, 2);
            for (let x = -g.groundOffset; x < W; x += 24) {
                ctx.fillRect(x, GROUND + 8, 6, 2);
                ctx.fillRect(x + 13, GROUND + 15, 3, 2);
            }

            g.obstacles.forEach((o) => drawObstacle(ctx, o, g.tick));

            const onGround = g.y >= GROUND - PLAYER_H;
            drawRobot(ctx, px, g.y, status === "running" && onGround ? Math.floor(g.tick / 5) % 2 : null);

            ctx.fillStyle = COLORS.text;
            ctx.font = "bold 14px monospace";
            ctx.textAlign = "right";
            const pad = (n) => String(Math.floor(n)).padStart(5, "0");
            ctx.fillText(`HI ${pad(highScore)}  ${pad(g.score)}`, W - 12, 24);

            if (status !== "running") {
                ctx.textAlign = "center";
                ctx.font = "bold 16px monospace";
                ctx.fillText(
                    status === "over" ? "G A M E   O V E R" : t({ en: "PRESS SPACE TO PLAY", fr: "ESPACE POUR JOUER" }),
                    W / 2,
                    HEIGHT / 2 - 10
                );
                if (status === "over") {
                    ctx.font = "12px monospace";
                    ctx.fillText(t({ en: "space / tap to retry", fr: "espace / toucher pour rejouer" }), W / 2, HEIGHT / 2 + 12);
                }
            }

            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
        };
    }, [status, highScore, t]);

    return (
        <canvas
            ref={canvasRef}
            onPointerDown={jump}
            className="w-full rounded-lg touch-none cursor-pointer"
            style={{ height: HEIGHT }}
            aria-label={t({ en: "Mini-game, press space to jump", fr: "Mini-jeu, espace pour sauter" })}
        />
    );
}

function BrowserWindow() {
    return (
        <div className="h-full flex items-center p-3 md:p-4 overflow-hidden">
            <OfflineRunner />
        </div>
    );
}

export default BrowserWindow;
