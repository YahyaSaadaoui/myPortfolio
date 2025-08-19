"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, useReducedMotion } from "framer-motion";

type Company = { name: string; logo: string };

export default function CompaniesMarquee({
  companies,
  duration = 28,
}: {
  companies: Company[];
  duration?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const controls = useAnimation();
  const firstSetRef = useRef<HTMLDivElement>(null);
  const [firstSetWidth, setFirstSetWidth] = useState(0);

  const measure = () => setFirstSetWidth(firstSetRef.current?.scrollWidth ?? 0);

  useLayoutEffect(() => {
    measure();
  }, []);
  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const startLoop = async () => {
    if (prefersReducedMotion || firstSetWidth === 0) return;
    await controls.start({
      x: -firstSetWidth,
      transition: { duration, ease: "linear", repeat: Infinity },
    });
  };

  useEffect(() => {
    startLoop();
  }, [firstSetWidth, duration, prefersReducedMotion]);

  // ===== Pixel disperse overlays =====
  const FADE_WIDTH = 56; // px — how wide the pixel fade zone is on each side
  const PIXEL = 4;       // px — size of the little squares

  const pixelOverlayBase: React.CSSProperties = {
    // Checkerboard "pixels"
    backgroundImage:
      `repeating-conic-gradient(from 45deg, rgba(0,0,0,1) 0% 25%, transparent 0% 50%)`,
    backgroundSize: `${PIXEL}px ${PIXEL}px`,
    opacity: 1,
    pointerEvents: "none",
  };

  const pixelLeft: React.CSSProperties = {
    ...pixelOverlayBase,
    // Fade from solid pixels at the edge -> transparent toward center
    maskImage: "linear-gradient(to right, black, transparent)",
    WebkitMaskImage: "linear-gradient(to right, black, transparent)",
  };

  const pixelRight: React.CSSProperties = {
    ...pixelOverlayBase,
    maskImage: "linear-gradient(to left, black, transparent)",
    WebkitMaskImage: "linear-gradient(to left, black, transparent)",
  };

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Companies I have Worked With
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-white/90 to-gray-400/60 mx-auto" />
        </div>

        {/* Viewport is clamped to the width of one set */}
        <div
          className="relative overflow-hidden mx-auto"
          style={{ maxWidth: firstSetWidth ? `${firstSetWidth}px` : undefined }}
          onMouseEnter={() => controls.stop()}
          onMouseLeave={startLoop}
        >
          {/* pixelated fades (top layer) */}
          <div
            aria-hidden
            className="absolute left-0 top-0 h-full z-10"
            style={{ ...pixelLeft, width: FADE_WIDTH }}
          />
          <div
            aria-hidden
            className="absolute right-0 top-0 h-full z-10"
            style={{ ...pixelRight, width: FADE_WIDTH }}
          />

          <motion.div
            className="flex gap-12 will-change-transform"
            initial={{ x: 0 }}
            animate={prefersReducedMotion ? { x: 0 } : controls}
          >
            {/* FIRST SET (measured) */}
            <div ref={firstSetRef} className="flex gap-12 pr-12">
              {companies.map((c) => (
                <div
                  key={`a-${c.name}`}
                  className="flex min-w-max items-center justify-center px-2"
                >
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={160}
                    height={80}
                    className="h-10 md:h-12 w-auto grayscale opacity-60 contrast-125 brightness-110 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>

            {/* SECOND SET (for seamless loop) */}
            <div aria-hidden className="flex gap-12 pr-12">
              {companies.map((c) => (
                <div
                  key={`b-${c.name}`}
                  className="flex min-w-max items-center justify-center px-2"
                >
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={160}
                    height={80}
                    className="h-10 md:h-12 w-auto grayscale opacity-60 contrast-125 brightness-110 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
