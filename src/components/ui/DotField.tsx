"use client";

import { useEffect, useRef } from "react";

const RADIUS = 170;
const FRAME_MS = 1000 / 30;
const ALPHA_STEPS = 32;

// Pre-built fill styles so the draw loop never allocates strings.
const styles = Array.from({ length: ALPHA_STEPS + 1 }, (_, i) => `rgba(26, 26, 24, ${(i / ALPHA_STEPS).toFixed(3)})`);

/** Runs `fn` once the page is idle, so the canvas never competes with the first paint. */
function whenIdle(fn: () => void) {
  const run = () => {
    const ric = window.requestIdleCallback;
    if (ric) ric(fn, { timeout: 1500 });
    else setTimeout(fn, 200);
  };
  if (document.readyState === "complete") run();
  else window.addEventListener("load", run, { once: true });
}

export function DotField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // The drift and the cursor halo only exist for a real cursor. On touch devices
    // the field is painted once and the animation loop never starts.
    const interactive = window.matchMedia("(hover: hover) and (pointer: fine)").matches && !reduced;
    const mouse = { x: -9999, y: -9999 };
    let w = 0;
    let h = 0;
    let spacing = 26;
    let raf = 0;
    let t = 0;
    let last = performance.now();
    let lastFrame = 0;
    let onScreen = true;
    let started = false;
    let disposed = false;

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      spacing = w < 640 ? 34 : 26;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const paint = () => {
      ctx.clearRect(0, 0, w, h);
      const cols = Math.ceil(w / spacing) + 1;
      const rows = Math.ceil(h / spacing) + 1;
      const ox = (w - (cols - 1) * spacing) / 2;
      const oy = (h - (rows - 1) * spacing) / 2;
      const drift = interactive ? 2.5 : 0;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = ox + i * spacing;
          const y = oy + j * spacing;
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const d = Math.hypot(dx, dy);
          const influence = Math.max(0, 1 - d / RADIUS);
          const wave = interactive
            ? 0.5 + 0.25 * Math.sin(t * 0.9 + x * 0.016 + y * 0.012) + 0.25 * Math.sin(t * 1.4 - x * 0.009 + y * 0.021)
            : 0.5 + 0.25 * Math.sin(x * 0.016 + y * 0.012) + 0.25 * Math.sin(-x * 0.009 + y * 0.021);
          const r = 0.7 + wave * 1.4 + influence * 2.4;
          const alpha = Math.min(1, 0.1 + wave * 0.42 + influence * 0.5);
          const push = influence * influence * 14;
          const px = (d > 0 ? x + (dx / d) * push : x) + drift * Math.sin(t * 0.7 + y * 0.02);
          const py = (d > 0 ? y + (dy / d) * push : y) + drift * Math.cos(t * 0.6 + x * 0.02);
          ctx.fillStyle = styles[Math.round(alpha * ALPHA_STEPS)];
          ctx.beginPath();
          ctx.arc(px, py, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      canvas.style.opacity = "1";
    };

    const loop = (now: number) => {
      raf = 0;
      if (disposed || !onScreen || document.hidden) return;
      if (now - lastFrame >= FRAME_MS) {
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        lastFrame = now;
        t += dt;
        paint();
      }
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (!started || raf || disposed || !interactive) return;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const onMove = (e: PointerEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      if (onScreen) start();
      else stop();
    });
    const ro = new ResizeObserver(() => {
      if (!started) return;
      resize();
      paint();
    });

    whenIdle(() => {
      if (disposed) return;
      started = true;
      resize();
      paint();
      io.observe(parent);
      ro.observe(parent);
      if (interactive) {
        window.addEventListener("pointermove", onMove, { passive: true });
        document.addEventListener("pointerleave", onLeave);
        document.addEventListener("visibilitychange", onVisibility);
        start();
      }
    });

    return () => {
      disposed = true;
      stop();
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700"
    />
  );
}
