"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, useReducedMotion } from "framer-motion";

type Company = { name: string; logo: string };

// tune these once
const MIN_W = 64;    // clamp so tiny logos aren't too small
const MAX_W = 220;   // clamp so very wide logos don't dominate
const H_SM = 48;     // logo height on small screens
const H_MD = 56;     // logo height on md+
const GAP_CLASS = "gap-8 pr-8"; // tighter & consistent spacing

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

  // natural aspect ratios by name: width/height
  const [ratios, setRatios] = useState<Record<string, number>>({});
  // responsive logo height
  const [logoH, setLogoH] = useState(H_SM);

  const firstSetRef = useRef<HTMLDivElement>(null);
  const [firstSetWidth, setFirstSetWidth] = useState(0);

  const measure = () => setFirstSetWidth(firstSetRef.current?.scrollWidth ?? 0);

  // preload to get natural sizes -> ratios
  useEffect(() => {
    let cancelled = false;

    const load = (src: string) =>
      new Promise<{ w: number; h: number }>((resolve) => {
        const img = new window.Image();
        img.src = src;
        img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
        img.onerror = () => resolve({ w: 160, h: 80 }); // sensible fallback
      });

    Promise.all(companies.map((c) => load(c.logo))).then((dims) => {
      if (cancelled) return;
      const map: Record<string, number> = {};
      dims.forEach(({ w, h }, i) => {
        const name = companies[i].name;
        map[name] = h > 0 ? w / h : 2; // fallback 2:1
      });
      setRatios(map);
    });

    return () => {
      cancelled = true;
    };
  }, [companies]);

  // responsive logo height (simple: md breakpoint)
  useEffect(() => {
    const update = () => setLogoH(window.innerWidth >= 768 ? H_MD : H_SM);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // re-measure when sizes change
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
    const ratio = ratios[name] ?? 2; // default 2:1 until loaded
    return clamp(Math.round(ratio * logoH), MIN_W, MAX_W);
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

        {/* Viewport is clamped to one set width */}
        <div
          className="relative overflow-hidden mx-auto"
          style={{ maxWidth: firstSetWidth ? `${firstSetWidth}px` : undefined }}
          onMouseEnter={() => controls.stop()}
          onMouseLeave={startLoop}
        >
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
