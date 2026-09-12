"use client";

import { LazyMotion, domAnimation } from "framer-motion";

/**
 * Loads only the animation features we use (enter/exit, tweens, height) so
 * framer-motion ships as the small `m` bundle instead of the full `motion` one.
 * Components that need layout animations opt into `domMax` locally.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
