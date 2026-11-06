"use client";

import { useEffect, useRef, useState } from "react";
import { DosIntro } from "@/components/home/dos-intro";

type Point = { x: number; y: number };
type Game = "intro" | "snake" | "pong";
const directions: Record<string, Point> = {
  ArrowUp: { x: 0, y: -1 }, w: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 }, s: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 }, a: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }, d: { x: 1, y: 0 },
};
function initialState() {
  return { snake: [{ x: 5, y: 7 }, { x: 4, y: 7 }, { x: 3, y: 7 }],
    direction: { x: 1, y: 0 }, next: { x: 1, y: 0 }, food: { x: 14, y: 7 },
    ball: { x: 120, y: 90 }, velocity: { x: 3, y: 2 }, paddle: 90, opponent: 90,
    score: 0, computer: 0, over: false, elapsed: 0 };
}

export function DosBackdrop() {
  const [game, setGame] = useState<Game>("intro");
  const [running, setRunning] = useState(false);
  const [frame, setFrame] = useState(initialState);
  const state = useRef(initialState());
  const board = useRef<HTMLDivElement>(null);
  const held = useRef(new Set<string>());

  function steer(key: string) {
    const direction = directions[key];
    const current = state.current.direction;
    if (direction && (direction.x !== -current.x || direction.y !== -current.y)) {
      state.current.next = direction;
    }
  }
  function reset(nextGame = game) {
    state.current = initialState();
    held.current.clear();
    setFrame({ ...state.current });
    setRunning(false);
    setGame(nextGame);
  }

  useEffect(() => {
    if (!running || game === "intro") return;
    const timer = window.setInterval(() => {
      if (document.hidden || document.documentElement.dataset.theme !== "apple2") {
        setRunning(false);
        return;
      }
      const current = state.current;
      if (game === "snake") {
        current.elapsed += 30;
        if (current.elapsed < 150) return;
        current.elapsed = 0;
        current.direction = current.next;
        const head = { x: current.snake[0].x + current.direction.x, y: current.snake[0].y + current.direction.y };
        const eating = head.x === current.food.x && head.y === current.food.y;
        const body = eating ? current.snake : current.snake.slice(0, -1);
        if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 15 || body.some(p => p.x === head.x && p.y === head.y)) {
          current.over = true;
        } else {
          current.snake = [head, ...body];
          if (eating) {
            current.score += 1;
            const empty: Point[] = [];
            for (let y = 0; y < 15; y++) for (let x = 0; x < 20; x++) {
              if (!current.snake.some(p => p.x === x && p.y === y)) empty.push({ x, y });
            }
            if (!empty.length) current.over = true;
            else current.food = empty[Math.floor(Math.random() * empty.length)];
          }
        }
      } else {
        if (held.current.has("ArrowUp") || held.current.has("w")) current.paddle -= 5;
        if (held.current.has("ArrowDown") || held.current.has("s")) current.paddle += 5;
        current.paddle = Math.max(18, Math.min(162, current.paddle));
        current.opponent += Math.max(-2, Math.min(2, current.ball.y - current.opponent));
        current.opponent = Math.max(18, Math.min(162, current.opponent));
        const previousX = current.ball.x;
        current.ball.x += current.velocity.x;
        current.ball.y += current.velocity.y;
        if (current.ball.y <= 3 || current.ball.y >= 177) {
          current.ball.y = Math.max(3, Math.min(177, current.ball.y));
          current.velocity.y *= -1;
        }
        const leftHit = current.velocity.x < 0 && previousX >= 15 && current.ball.x <= 15 && Math.abs(current.ball.y - current.paddle) <= 21;
        const rightHit = current.velocity.x > 0 && previousX <= 225 && current.ball.x >= 225 && Math.abs(current.ball.y - current.opponent) <= 21;
        if (leftHit || rightHit) {
          const paddle = leftHit ? current.paddle : current.opponent;
          current.ball.x = leftHit ? 15 : 225;
          current.velocity.x *= -1;
          current.velocity.y = (current.ball.y - paddle) / 6;
        }
        if (current.ball.x < 0 || current.ball.x > 240) {
          if (current.ball.x > 240) current.score++; else current.computer++;
          current.ball = { x: 120, y: 90 };
          current.velocity = { x: current.ball.x > previousX ? 3 : -3, y: 2 };
          if (current.score >= 7 || current.computer >= 7) current.over = true;
        }
      }
      setFrame({ ...current });
      if (current.over) setRunning(false);
    }, 30);
    return () => window.clearInterval(timer);
  }, [game, running]);

  function togglePlay() {
    if (state.current.over) {
      state.current = initialState();
      setFrame({ ...state.current });
    }
    setRunning(!running);
    board.current?.focus();
  }

  return (
    <section className="dos-arcade" aria-label="Intro and retro games">
      <div className="dos-game-picker" aria-label="Choose Intro, Snake, or Pong">
        {(["intro", "snake", "pong"] as const).map(name => (
          <button key={name} type="button" aria-pressed={game === name} onClick={() => reset(name)}>{name}</button>
        ))}
      </div>
      {game === "intro" ? <DosIntro /> : <>
      <div ref={board} className="dos-game-board" tabIndex={0}
        role="group" aria-label={`${game}. ${game === "snake" ? "Use arrow keys or WASD to steer." : "Use up and down arrows, W and S, or drag to move your paddle."}`}
        onKeyDown={event => {
          if (directions[event.key]) {
            event.preventDefault();
            held.current.add(event.key);
            steer(event.key);
          } else if (event.code === "Space" && !event.repeat) {
            event.preventDefault(); togglePlay();
          }
        }}
        onKeyUp={event => held.current.delete(event.key)}
        onBlur={() => { held.current.clear(); setRunning(false); }}
        onPointerDown={event => {
          event.currentTarget.focus();
          if (game === "pong") event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={event => {
          if (game !== "pong" || event.buttons !== 1) return;
          const rect = event.currentTarget.getBoundingClientRect();
          state.current.paddle = Math.max(18, Math.min(162, (event.clientY - rect.top) / rect.height * 180));
          setFrame({ ...state.current });
        }}>
        <svg viewBox="0 0 240 180" fill="currentColor" shapeRendering="crispEdges" aria-hidden="true">
          {game === "snake" ? <>
            <rect x={frame.food.x * 12 + 3} y={frame.food.y * 12 + 3} width="6" height="6" />
            {frame.snake.map((p, i) => <rect key={i} x={p.x * 12 + 1} y={p.y * 12 + 1} width="10" height="10" />)}
          </> : <>
            <path d="M120 0V180" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" opacity="0.4" />
            <rect x="7" y={frame.paddle - 18} width="5" height="36" />
            <rect x="228" y={frame.opponent - 18} width="5" height="36" />
            <rect x={frame.ball.x - 3} y={frame.ball.y - 3} width="6" height="6" />
          </>}
        </svg>
      </div>
      <div className="dos-game-status" role="status">
        {frame.over ? (game === "pong" && frame.score === 7 ? "YOU WIN! " : "GAME OVER ") : ""}
        {game === "snake" ? `SCORE ${frame.score}` : `YOU ${frame.score} : ${frame.computer} CPU`}
      </div>
      <div className="dos-game-actions">
        <button type="button" onPointerDown={event => event.preventDefault()} onClick={togglePlay}>{running ? "Pause" : frame.over ? "Play again" : "Play"}</button>
        <button type="button" onClick={() => reset()}>Reset</button>
      </div>
      <p className="dos-game-help">{game === "snake" ? "Arrow keys / WASD to steer" : "↑ ↓ / W S or drag · First to 7"}</p>
      {game === "snake" && <div className="dos-game-dpad" aria-label="Snake direction controls">
        {[["ArrowUp", "↑"], ["ArrowLeft", "←"], ["ArrowDown", "↓"], ["ArrowRight", "→"]].map(([key, label]) =>
          <button type="button" key={key} aria-label={key.replace("Arrow", "Move ")} onPointerDown={event => event.preventDefault()} onClick={() => { steer(key); board.current?.focus(); }}>{label}</button>)}
      </div>}
      </>}
    </section>
  );
}
