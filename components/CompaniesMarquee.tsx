"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, useReducedMotion } from "framer-motion";

type Company = { name: string; logo: string };

// ---- sizing & spacing knobs ----
const MIN_W = 64;
const MAX_W = 220;
const H_SM = 48;
const H_MD = 56;
const GAP_CLASS = "gap-8 pr-8"; // tighter, even spacing

// ---- pixel edge effect knobs ----
const PIXEL = 6;          // px size of the little squares
const FADE_WIDTH = 72;    // px width of pixel zone on each side
const EDGE_COLOR = "rgb(0 0 0)"; // must match your background (here it's black)

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

export default function CompaniesMarquee({
  companies,
  duration = 28,
}: {
  companies: Company[];
  duration?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const controls = useAnimation();

  // natural aspect ratios by name (w/h)
  const [ratios, setRatios] = useState<Record<string, number>>({});
  const [logoH, setLogoH] = useState(H_SM);

  const firstSetRef = useRef<HTMLDivElement>(null);
  const [firstSetWidth, setFirstSetWidth] = useState(0);

  const measure = () => setFirstSetWidth(firstSetRef.current?.scrollWidth ?? 0);

  // preload to get natural sizes for aspect-ratio
  useEffect(() => {
    let cancelled = false;
    const load = (src: string) =>
      new Promise<{ w: number; h: number }>((resolve) => {
        const img = new window.Image();
        img.src = src;
        img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
        img.onerror = () => resolve({ w: 160, h: 80 }); // fallback 2:1
      });

    Promise.all(companies.map((c) => load(c.logo))).then((dims) => {
      if (cancelled) return;
      const map: Record<string, number> = {};
      dims.forEach(({ w, h }, i) => (map[companies[i].name] = h > 0 ? w / h : 2));
      setRatios(map);
    });
    return () => {
      cancelled = true;
    };
  }, [companies]);

  // responsive height
  useEffect(() => {
    const update = () => setLogoH(window.innerWidth >= 768 ? H_MD : H_SM);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useLayoutEffect(() => {
    measure();
  }, [ratios, logoH]);

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

  const widthFor = (name: string) => {
    const ratio = ratios[name] ?? 2;
    return clamp(Math.round(ratio * logoH), MIN_W, MAX_W);
  };

  // ---- pixel disperse overlays (pure CSS) ----
  const gridBg = `
    repeating-linear-gradient(0deg, ${EDGE_COLOR} 0 ${PIXEL}px, transparent ${PIXEL}px ${PIXEL * 2}px),
    repeating-linear-gradient(90deg, ${EDGE_COLOR} 0 ${PIXEL}px, transparent ${PIXEL}px ${PIXEL * 2}px)
  `;

  const leftPixelMask: React.CSSProperties = {
    WebkitMaskImage: "linear-gradient(to right, black, transparent)",
    maskImage: "linear-gradient(to right, black, transparent)",
  };
  const rightPixelMask: React.CSSProperties = {
    WebkitMaskImage: "linear-gradient(to left, black, transparent)",
    maskImage: "linear-gradient(to left, black, transparent)",
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

        {/* clamp viewport to one set */}
        <div
          className="relative overflow-hidden mx-auto"
          style={{ maxWidth: firstSetWidth ? `${firstSetWidth}px` : undefined, backgroundColor: EDGE_COLOR }}
          onMouseEnter={() => controls.stop()}
          onMouseLeave={startLoop}
        >
          {/* pixel overlays */}
          <div
            aria-hidden
            className="absolute left-0 top-0 h-full z-10"
            style={{
              width: FADE_WIDTH,
              backgroundImage: gridBg,
              opacity: 1,
              pointerEvents: "none",
              ...leftPixelMask,
            }}
          />
          <div
            aria-hidden
            className="absolute right-0 top-0 h-full z-10"
            style={{
              width: FADE_WIDTH,
              backgroundImage: gridBg,
              opacity: 1,
              pointerEvents: "none",
              ...rightPixelMask,
            }}
          />

          <motion.div
            className={`flex will-change-transform ${GAP_CLASS}`}
            initial={{ x: 0 }}
            animate={prefersReducedMotion ? { x: 0 } : controls}
          >
            {/* FIRST SET (measured) */}
            <div ref={firstSetRef} className={`flex ${GAP_CLASS}`}>
              {companies.map((c) => {
                const w = widthFor(c.name);
                return (
                  <div key={`a-${c.name}`} className="flex min-w-max items-center justify-center">
                    <div className="relative" style={{ width: w, height: logoH }}>
                      <Image
                        src={c.logo}
                        alt={c.name}
                        fill
                        sizes={`${w}px`}
                        className="object-contain grayscale opacity-60 contrast-125 brightness-110 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* SECOND SET (for seamless loop) */}
            <div aria-hidden className={`flex ${GAP_CLASS}`}>
              {companies.map((c) => {
                const w = widthFor(c.name);
                return (
                  <div key={`b-${c.name}`} className="flex min-w-max items-center justify-center">
                    <div className="relative" style={{ width: w, height: logoH }}>
                      <Image
                        src={c.logo}
                        alt={c.name}
                        fill
                        sizes={`${w}px`}
                        className="object-contain grayscale opacity-60 contrast-125 brightness-110 transition-all duration-300"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
