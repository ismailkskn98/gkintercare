"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useAnimation, useMotionValue } from "motion/react";

export function HoverCard({ className = "", children, buttonText = "VISIT SITE ▶", arrowColor = "#4318FF", buttonColor = "#4318FF" }) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const pillRef = useRef(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [arrowPath, setArrowPath] = useState("");

  const updateArrowPath = useCallback(() => {
    if (!buttonRef.current || !pillRef.current || !containerRef.current) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const pillRect = pillRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    // Calculate relative positions within the container
    const startX = buttonRect.left - containerRect.left + buttonRect.width / 2;
    const startY = buttonRect.top - containerRect.top + buttonRect.height / 2;
    const endX = pillRect.left - containerRect.left + pillRect.width / 2;
    const endY = pillRect.top - containerRect.top + pillRect.height / 2;

    // Calculate the angle of the line
    const angle = Math.atan2(endY - startY, endX - startX);

    // Calculate the position of the arrow tip (slightly before the end point)
    const arrowLength = 10;
    const tipX = endX - Math.cos(angle) * arrowLength;
    const tipY = endY - Math.sin(angle) * arrowLength;

    // Calculate the positions of the arrow head
    const arrowSize = 6;
    const arrowAngle = Math.PI / 6; // 30 degrees
    const arrowPoint1X = tipX - arrowSize * Math.cos(angle - arrowAngle);
    const arrowPoint1Y = tipY - arrowSize * Math.sin(angle - arrowAngle);
    const arrowPoint2X = tipX - arrowSize * Math.cos(angle + arrowAngle);
    const arrowPoint2Y = tipY - arrowSize * Math.sin(angle + arrowAngle);

    // Create the path
    const path = `M ${startX} ${startY} L ${tipX} ${tipY} M ${arrowPoint1X} ${arrowPoint1Y} L ${tipX} ${tipY} L ${arrowPoint2X} ${arrowPoint2Y}`;
    setArrowPath(path);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate relative position (0 to 1)
    const relativeX = mouseX / rect.width;
    const relativeY = mouseY / rect.height;

    // Add subtle movement to the button (-5px to 5px)
    x.set((relativeX - 0.5) * 50);
    y.set((relativeY - 0.5) * 50);

    // Update arrow path after position change
    requestAnimationFrame(updateArrowPath);
  };

  useEffect(() => {
    if (isHovered) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.2 },
      });
      // Small delay to ensure elements are rendered
      setTimeout(updateArrowPath, 50);
    } else {
      controls.start({
        opacity: 0,
        scale: 0.9,
        transition: { duration: 0.2 },
      });
    }
  }, [isHovered, controls, updateArrowPath]);

  return (
    <div ref={containerRef} className={`relative z-10 rounded-lg ${className}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onMouseMove={handleMouseMove}>
      <motion.div ref={buttonRef} className="absolute right-4 top-4 z-10" initial={{ opacity: 0, scale: 0.9 }} animate={controls} style={{ x, y }}>
        <span className="inline-flex items-center gap-2 px-4 py-2 text-sm max-w-[100px] font-medium text-white transition-colors hover:opacity-90" style={{ backgroundColor: buttonColor }}>
          {buttonText}
        </span>
      </motion.div>

      {isHovered && (
        <>
          <motion.div
            ref={pillRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
            style={{ color: arrowColor }}
          />
          <svg className="absolute inset-0 h-full w-full pointer-events-none" style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.1))" }}>
            <motion.path
              d={arrowPath}
              stroke={arrowColor}
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </svg>
        </>
      )}

      <div className="p-6">{children}</div>
    </div>
  );
}

export function Demo() {
  return (
    <div>
      {/* Default Style */}
      <HoverCard className="h-full w-full aspect-square">
        <div className="flex items-center justify-center">
          <span className="text-lg font-semibold">Hover over this card to see the effect</span>
        </div>
      </HoverCard>
    </div>
  );
}
