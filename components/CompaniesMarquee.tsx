"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, useReducedMotion } from "framer-motion";

type Company = { name: string; logo: string };

export default function CompaniesMarquee({
  companies,
  duration = 28, // seconds to slide one full set
}: {
  companies: Company[];
  duration?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const controls = useAnimation();

  // Measure the width of ONE set so we can:
  // 1) limit the viewport to that width (no duplicate visible)
  // 2) animate exactly that distance
  const firstSetRef = useRef<HTMLDivElement>(null);
  const [firstSetWidth, setFirstSetWidth] = useState(0);

  const measure = () =>
    setFirstSetWidth(firstSetRef.current?.scrollWidth ?? 0);

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
    // re-run when width/duration/reduced-motion changes
  }, [firstSetWidth, duration, prefersReducedMotion]);

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
          {/* edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 md:w-20 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 md:w-20 bg-gradient-to-l from-black to-transparent z-10" />

          <motion.div
            className="flex gap-16 will-change-transform"
            initial={{ x: 0 }}
            animate={prefersReducedMotion ? { x: 0 } : controls}
          >
            {/* FIRST SET (measured) */}
            <div ref={firstSetRef} className="flex gap-16 pr-16">
              {companies.map((c) => (
                <div
                  key={`a-${c.name}`}
                  className="flex min-w-max items-center justify-center px-4"
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

            {/* SECOND SET (for seamless loop, hidden initially by maxWidth) */}
            <div aria-hidden className="flex gap-16 pr-16">
              {companies.map((c) => (
                <div
                  key={`b-${c.name}`}
                  className="flex min-w-max items-center justify-center px-4"
                >
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={160}
                    height={80}
                    className="h-10 md:h-12 w-auto grayscale opacity-70 contrast-125 brightness-110
                                [mix-blend-mode:multiply]"  // hides white-ish boxes on dark bg
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
