"use client";

import { Children } from "react";
import { motion, useReducedMotion } from "motion/react";

const revealEase = [0.22, 1, 0.36, 1];
const revealDuration = 0.45;
const staggerDelay = 0.12;

function getTransition(delay) {
  return {
    delay,
    duration: revealDuration,
    ease: revealEase,
  };
}

function getViewport(once, amount) {
  return {
    amount,
    once,
  };
}

export function MotionSlideUp({
  children,
  className = "",
  delay = 0,
  amount = 0.18,
  once = true,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
      viewport={getViewport(once, amount)}
      whileInView={
        shouldReduceMotion
          ? undefined
          : { opacity: 1, y: 0, transition: getTransition(delay) }
      }
      style={shouldReduceMotion ? undefined : { willChange: "transform, opacity" }}
    >
      {children}
    </motion.section>
  );
}

export function MotionLeftView({
  children,
  className = "",
  delay = 0,
  amount = 0.18,
  once = true,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, x: -32 }}
      viewport={getViewport(once, amount)}
      whileInView={
        shouldReduceMotion
          ? undefined
          : { opacity: 1, x: 0, transition: getTransition(delay) }
      }
      style={shouldReduceMotion ? undefined : { willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

export function MotionRightView({
  children,
  className = "",
  delay = 0,
  amount = 0.18,
  once = true,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, x: 32 }}
      viewport={getViewport(once, amount)}
      whileInView={
        shouldReduceMotion
          ? undefined
          : { opacity: 1, x: 0, transition: getTransition(delay) }
      }
      style={shouldReduceMotion ? undefined : { willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

export function MotionFadeIn({
  children,
  className = "",
  delay = 0,
  amount = 0.18,
  once = true,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      viewport={getViewport(once, amount)}
      whileInView={
        shouldReduceMotion
          ? undefined
          : { opacity: 1, transition: getTransition(delay) }
      }
      style={shouldReduceMotion ? undefined : { willChange: "opacity" }}
    >
      {children}
    </motion.div>
  );
}

export function MotionScaleIn({
  children,
  className = "",
  delay = 0,
  amount = 0.18,
  once = true,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
      viewport={getViewport(once, amount)}
      whileInView={
        shouldReduceMotion
          ? undefined
          : { opacity: 1, scale: 1, transition: getTransition(delay) }
      }
      style={shouldReduceMotion ? undefined : { willChange: "transform, opacity" }}
    >
      {children}
    </motion.article>
  );
}

export function MotionStagger({
  children,
  className = "",
  childClassName = "",
  delay = 0,
  amount = 0.18,
  once = true,
}) {
  const shouldReduceMotion = useReducedMotion();
  const container = shouldReduceMotion
    ? undefined
    : {
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren: staggerDelay,
          },
        },
      };
  const item = shouldReduceMotion
    ? undefined
    : {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: getTransition(0) },
      };

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      variants={container}
      viewport={getViewport(once, amount)}
      whileInView={shouldReduceMotion ? undefined : "show"}
    >
      {Children.map(children, (child, index) => (
        <motion.article
          className={childClassName}
          key={index}
          variants={item}
          style={shouldReduceMotion ? undefined : { willChange: "transform, opacity" }}
        >
          {child}
        </motion.article>
      ))}
    </motion.div>
  );
}
