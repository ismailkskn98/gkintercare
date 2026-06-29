"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function ThreadsBackground({ className = "", amplitude = 1.2, distance = 0.12, enableMouseInteraction = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    if (!context) return undefined;

    let frame = 0;
    let width = 0;
    let height = 0;
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const onMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (event.clientX - rect.left) / width - 0.5;
      mouseY = (event.clientY - rect.top) / height - 0.5;
    };

    resize();
    window.addEventListener("resize", resize);
    if (enableMouseInteraction) {
      window.addEventListener("pointermove", onMove);
    }

    const draw = () => {
      frame += 1;
      context.clearRect(0, 0, width, height);

      const lines = Math.max(18, Math.floor(width / 70));
      const gap = height / lines;

      for (let i = 0; i < lines; i += 1) {
        const y = i * gap;
        const shift = enableMouseInteraction ? mouseX * 24 * amplitude : 0;
        const wave = Math.sin(frame * 0.012 + i * distance) * 18 * amplitude + shift;

        context.beginPath();
        context.moveTo(0, y);
        context.bezierCurveTo(width * 0.25, y + wave, width * 0.75, y - wave, width, y);
        context.strokeStyle = "rgba(11, 60, 93, 0.08)";
        context.lineWidth = 1;
        context.stroke();
      }

      requestAnimationFrame(draw);
    };

    const animation = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener("resize", resize);
      if (enableMouseInteraction) {
        window.removeEventListener("pointermove", onMove);
      }
    };
  }, [amplitude, distance, enableMouseInteraction]);

  return <canvas aria-hidden="true" className={cn("pointer-events-none absolute inset-0 h-full w-full", className)} ref={canvasRef} />;
}
