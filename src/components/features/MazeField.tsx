import { useEffect, useRef } from "react";

const COLS = 18;
const ROWS = 12;

const DIRS = [
  { dx: 0, dy: -1, wall: 0, opp: 2 },
  { dx: 1, dy: 0, wall: 1, opp: 3 },
  { dx: 0, dy: 1, wall: 2, opp: 0 },
  { dx: -1, dy: 0, wall: 3, opp: 1 },
] as const;

type Walls = [boolean, boolean, boolean, boolean];

interface Maze {
  walls: Walls[];
  visitOrder: number[];
}

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generate(seed: number): Maze {
  const rand = mulberry32(seed || 1);
  const walls: Walls[] = Array.from({ length: COLS * ROWS }, () => [true, true, true, true]);
  const seen = new Uint8Array(COLS * ROWS);
  const stack = [0];
  const visitOrder = [0];
  seen[0] = 1;

  while (stack.length) {
    const i = stack[stack.length - 1];
    if (i === undefined) break;
    const x = i % COLS;
    const y = Math.floor(i / COLS);
    const options = DIRS.filter((dir) => {
      const nx = x + dir.dx;
      const ny = y + dir.dy;
      if (nx < 0 || ny < 0 || nx >= COLS || ny >= ROWS) return false;
      return !seen[ny * COLS + nx];
    });

    if (options.length === 0) {
      stack.pop();
      continue;
    }

    const dir = options[Math.floor(rand() * options.length)];
    if (!dir) continue;
    const ni = (y + dir.dy) * COLS + (x + dir.dx);
    walls[i][dir.wall] = false;
    walls[ni][dir.opp] = false;
    seen[ni] = 1;
    stack.push(ni);
    visitOrder.push(ni);
  }

  walls[0][0] = false;
  walls[COLS * ROWS - 1][2] = false;
  return { walls, visitOrder };
}

function draw(ctx: CanvasRenderingContext2D, width: number, height: number, maze: Maze, revealedCount: number) {
  const pad = 16;
  const cell = Math.min((width - pad * 2) / COLS, (height - pad * 2) / ROWS);
  const gridW = cell * COLS;
  const gridH = cell * ROWS;
  const ox = (width - gridW) / 2;
  const oy = (height - gridH) / 2;
  const revealed = new Set(maze.visitOrder.slice(0, revealedCount));

  ctx.clearRect(0, 0, width, height);
  ctx.lineCap = "square";
  ctx.lineJoin = "miter";

  ctx.strokeStyle = "hsla(30, 10%, 12%, 0.16)";
  ctx.lineWidth = Math.max(1, cell * 0.045);
  ctx.beginPath();
  for (let y = 0; y <= ROWS; y += 1) {
    ctx.moveTo(ox, oy + y * cell);
    ctx.lineTo(ox + gridW, oy + y * cell);
  }
  for (let x = 0; x <= COLS; x += 1) {
    ctx.moveTo(ox + x * cell, oy);
    ctx.lineTo(ox + x * cell, oy + gridH);
  }
  ctx.stroke();

  ctx.strokeStyle = "hsl(30, 10%, 14%)";
  ctx.lineWidth = Math.max(2, cell * 0.12);
  ctx.beginPath();
  for (let y = 0; y < ROWS; y += 1) {
    for (let x = 0; x < COLS; x += 1) {
      const i = y * COLS + x;
      if (!revealed.has(i)) continue;
      const wall = maze.walls[i];
      if (wall[0]) {
        ctx.moveTo(ox + x * cell, oy + y * cell);
        ctx.lineTo(ox + (x + 1) * cell, oy + y * cell);
      }
      if (wall[1]) {
        ctx.moveTo(ox + (x + 1) * cell, oy + y * cell);
        ctx.lineTo(ox + (x + 1) * cell, oy + (y + 1) * cell);
      }
      if (wall[2]) {
        ctx.moveTo(ox + x * cell, oy + (y + 1) * cell);
        ctx.lineTo(ox + (x + 1) * cell, oy + (y + 1) * cell);
      }
      if (wall[3]) {
        ctx.moveTo(ox + x * cell, oy + y * cell);
        ctx.lineTo(ox + x * cell, oy + (y + 1) * cell);
      }
    }
  }
  ctx.stroke();

  if (revealed.has(0)) {
    ctx.fillStyle = "hsl(18, 70%, 36%)";
    ctx.beginPath();
    ctx.arc(ox + cell * 0.5, oy + cell * 0.5, Math.max(3, cell * 0.16), 0, Math.PI * 2);
    ctx.fill();
  }

  const last = COLS * ROWS - 1;
  if (revealed.has(last)) {
    ctx.strokeStyle = "hsl(18, 70%, 36%)";
    ctx.lineWidth = Math.max(2, cell * 0.08);
    const inset = cell * 0.24;
    ctx.strokeRect(ox + (COLS - 1) * cell + inset, oy + (ROWS - 1) * cell + inset, cell - inset * 2, cell - inset * 2);
  }
}

interface MazeFieldProps {
  seed: number;
}

const MazeField = ({ seed }: MazeFieldProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const maze = generate(seed);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let progress = reduced ? 1 : 0;
    let startedAt = 0;
    let frame = 0;

    const paint = () => {
      const rect = wrap.getBoundingClientRect();
      const cssW = Math.max(1, rect.width);
      const cssH = Math.max(1, rect.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const nextW = Math.floor(cssW * dpr);
      const nextH = Math.floor(cssH * dpr);
      if (canvas.width !== nextW || canvas.height !== nextH) {
        canvas.width = nextW;
        canvas.height = nextH;
      }
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(1, Math.round(progress * maze.visitOrder.length));
      draw(ctx, cssW, cssH, maze, count);
    };

    const tick = (now: number) => {
      if (!startedAt) startedAt = now;
      const t = Math.min(1, (now - startedAt) / 1700);
      progress = 1 - (1 - t) ** 3;
      paint();
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    const observer = new ResizeObserver(() => paint());
    observer.observe(wrap);
    if (reduced) paint();
    else frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [seed]);

  return (
    <div
      ref={wrapRef}
      className="maze-field absolute inset-0"
      role="img"
      aria-label="Preview of a maze generated on this page. The walls draw in from the copper start mark and stop at the copper square."
    >
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
    </div>
  );
};

export default MazeField;
