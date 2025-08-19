"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useReducedMotion } from "framer-motion";

type Company = { name: string; logo: string };

export default function CompaniesMarquee({
  companies,
  duration = 28, // seconds to move half the track
}: {
  companies: Company[];
  duration?: number;
}) {
  // duplicate once so the end joins the start
  const track = [...companies, ...companies];

  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  const startLoop = async () => {
    await controls.start({
      x: "-50%",
      transition: { duration, ease: "linear", repeat: Infinity },
    });
  };

  useEffect(() => {
    if (!prefersReducedMotion) startLoop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion, duration]);

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Companies I have Worked With
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-white/90 to-gray-400/60 mx-auto" />
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => controls.stop()}
          onMouseLeave={startLoop}
        >
          {/* edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 md:w-20 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 md:w-20 bg-gradient-to-l from-black to-transparent z-10" />

          <motion.div
            className="flex flex-none gap-16 pr-16 will-change-transform"
            initial={{ x: 0 }}
            animate={prefersReducedMotion ? { x: 0 } : controls}
          >
            {track.map((c, i) => (
              <div
                key={`${c.name}-${i}`}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
