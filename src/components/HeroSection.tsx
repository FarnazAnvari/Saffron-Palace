"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 70%" }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Label */}
        {/* ✅ Istanbul حذف شد */}
        <p className="font-body text-xs tracking-[0.5em] uppercase text-gold mb-6 animate-fade-in">
          Est. 2024 · Tehran & Tabriz
        </p>

        {/* Title */}
        {/* ✅ عنوان کامل بازنویسی شد */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream mb-6 animate-fade-up leading-tight">
          Where Ancient
          <br />
          <span className="text-gold-gradient italic">Persia</span> Dines
        </h1>

        {/* Subtitle */}
        {/* ✅ Ottoman حذف شد */}
        <p className="font-body text-cream/60 text-lg md:text-xl max-w-xl mb-10 animate-fade-up animation-delay-200">
          A culinary journey through three thousand years of Persian tradition,
          reimagined for the modern palate.
        </p>

        {/* Divider */}
        <div className="divider-gold mb-10 animate-fade-in animation-delay-400" />

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-400">
          <Link href="/menu" className="btn-gold">
            Explore Menu
          </Link>
          <Link href="/reservation" className="btn-outline">
            Make a Reservation
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animation-delay-800">
        <span className="font-body text-xs tracking-widest uppercase text-cream/40">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
