"use client";
import Image from "next/image";

type Company = { name: string; logo: string };

export default function CompaniesMarquee({
  companies,
  duration = 30,
}: { companies: Company[]; duration?: number }) {
  const track = [...companies, ...companies]; // duplicate for seamless loop

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Companies I have Worked With
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-white/90 to-gray-400/60 mx-auto" />
        </div>

        <div className="group relative overflow-hidden">
          {/* edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

          <div
            className="flex w-[200%] gap-16 animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]"
            style={{ ["--marquee-duration" as any]: `${duration}s` }}
          >
            {track.map((c, i) => (
              <div key={`${c.name}-${i}`} className="flex min-w-max items-center justify-center px-4">
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={160}
                  height={80}
                  className="h-10 md:h-12 w-auto grayscale opacity-60 contrast-125 brightness-110 transition-all duration-300 group-hover:opacity-70 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
