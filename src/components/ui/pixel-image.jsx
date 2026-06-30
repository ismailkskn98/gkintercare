"use client";
import { useMemo, useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

const DEFAULT_GRIDS = {
  "6x4": { rows: 4, cols: 6 },
  "8x8": { rows: 8, cols: 8 },
  "8x3": { rows: 3, cols: 8 },
  "4x6": { rows: 6, cols: 4 },
  "3x8": { rows: 8, cols: 3 },
};

export const PixelImage = ({
  src,
  alt = "",
  className,
  grid = "6x4",
  grayscaleAnimation = true,
  pixelFadeInDuration = 1000,
  maxAnimationDelay = 1200,
  colorRevealDelay = 1300,
  amount = 0.18,
  once = true,
  customGrid,
}) => {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { amount, once });

  const MIN_GRID = 1;
  const MAX_GRID = 16;

  const { rows, cols } = useMemo(() => {
    const isValidGrid = (grid) => {
      if (!grid) return false;
      const { rows, cols } = grid;
      return Number.isInteger(rows) && Number.isInteger(cols) && rows >= MIN_GRID && cols >= MIN_GRID && rows <= MAX_GRID && cols <= MAX_GRID;
    };

    return isValidGrid(customGrid) ? customGrid : DEFAULT_GRIDS[grid];
  }, [customGrid, grid]);

  const isActive = shouldReduceMotion || isInView;

  const pieces = useMemo(() => {
    const total = rows * cols;
    return Array.from({ length: total }, (_, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;

      const clipPath = `polygon(
        ${col * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${(row + 1) * (100 / rows)}%,
        ${col * (100 / cols)}% ${(row + 1) * (100 / rows)}%
      )`;

      const seed = (index + 1) * 9301 + rows * 49297 + cols * 233280;
      const delay = ((seed % 233280) / 233280) * maxAnimationDelay;
      return {
        clipPath,
        delay,
      };
    });
  }, [rows, cols, maxAnimationDelay]);

  return (
    <div ref={ref} className={cn("relative h-full w-full select-none overflow-hidden", className)}>
      {pieces.map((piece, index) => (
        <div
          key={index}
          className={cn("absolute inset-0 transition-all ease-out", isActive ? "opacity-100" : "opacity-0")}
          style={{
            clipPath: piece.clipPath,
            transitionDelay: `${piece.delay}ms`,
            transitionDuration: `${pixelFadeInDuration}ms`,
          }}
        >
          <img
            src={src}
            alt={alt}
            className={cn("block h-full w-full object-cover", grayscaleAnimation && (isActive ? "grayscale-0" : "grayscale"))}
            style={{
              transition: grayscaleAnimation ? `filter ${pixelFadeInDuration}ms cubic-bezier(0.4, 0, 0.2, 1) ${isActive ? colorRevealDelay : 0}ms` : "none",
            }}
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};
