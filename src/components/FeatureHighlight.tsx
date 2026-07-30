"use client";

// src/components/FeatureHighlight.tsx
import { useRef } from "react";

export default function FeatureHighlight() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="py-32 px-6 bg-background">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Content — left */}
        <div>
          <p className="font-body text-xs tracking-[0.5em] uppercase text-gold mb-6">
            The Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight mb-8">
            Ancient Flavors,
            <br />
            <span className="italic text-gold-gradient">Crafted for Today</span>
          </h2>
          <div className="divider-gold mb-8 mx-0" />
          <p className="font-body text-cream/60 leading-relaxed mb-6">
            Every dish at Saffron Palace begins with a journey — through the
            spice markets of Isfahan, the saffron fields of Khorasan, and the
            centuries-old kitchens of Persian royalty. We bring that journey to
            your table.
          </p>
          <p className="font-body text-cream/60 leading-relaxed mb-12">
            Our culinary team blends traditional Persian techniques with
            contemporary plating, creating an experience that honors the past
            while celebrating the present.
          </p>
        </div>

        {/* Video — right */}
        <div className="relative h-[560px] overflow-hidden border border-gold/10">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/feature.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-background/30" />

          {/* bottom label */}
          <div className="absolute bottom-5 left-5 z-10">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold">
              Saffron Palace · Est. 2024
            </p>
          </div>

          {/* decorative line — mirror of AboutSection */}
          <div className="absolute -bottom-4 right-1/4 w-24 h-px bg-gold/60" />
        </div>
      </div>
    </section>
  );
}
