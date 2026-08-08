import type { MenuItem, MenuCategory } from "@/types";


export default function MenuHero() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center pb-16 px-6 bg-background overflow-hidden">
      {/* Background line decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="w-[600px] h-[600px] rounded-full border border-gold" />
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
          Saffron Palace
        </p>
        <h1 className="font-display text-6xl md:text-8xl text-cream italic">
          Our Menu
        </h1>
        <div className="w-16 h-px bg-gold/60 mt-6" />
      </div>
    </section>
  );
}
