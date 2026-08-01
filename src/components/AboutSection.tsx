import Image from "next/image";

// src/components/AboutSection.tsx
const stats = [
  { value: "2", label: "Cities" },
  { value: "18+", label: "Years of Craft" },
  { value: "200", label: "Seats" },
  { value: "3", label: "Michelin Stars" },
];

export default function AboutSection() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Images */}
        <div className="relative h-[560px]">
          <div className="absolute top-0 left-0 w-3/4 h-4/5 overflow-hidden border border-gold/10">
            <Image
              src="/images/4.jpg"
              alt="Persian fine dining experience"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="absolute bottom-0 right-0 w-3/5 h-3/5 overflow-hidden border border-gold/20">
            <Image
              src="/images/1.jpg"
              alt="Persian cuisine detail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="absolute -bottom-4 left-1/4 w-24 h-px " />
        </div>

        {/* Content */}
        <div>
          <p className="font-body text-xs tracking-[0.5em] uppercase text-gold mb-6">
            Our Story
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight mb-8">
            Born from the Silk Road,
            <br />
            <span className="italic text-gold-gradient">Served with Love</span>
          </h2>
          <div className="divider-gold mb-8 mx-0" />
          <p className="font-body text-cream/60 leading-relaxed mb-6">
            Saffron Palace was born from a deep reverence for Persian culinary
            heritage — a tradition spanning over three thousand years of
            artistry, spice, and ritual. From the royal kitchens of the
            Achaemenid court to the fragrant bazaars of Tabriz, our recipes
            carry the soul of ancient Persia.
          </p>
          <p className="font-body text-cream/60 leading-relaxed mb-12">
            Our chefs journey through Iran each season, sourcing the finest
            saffron from Khorasan, pomegranates from Saveh, pistachios from
            Rafsanjan, and dried limes from the Persian Gulf coast — bringing
            uncompromising authenticity to every plate.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-gold/10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-gold">{stat.value}</p>
                <p className="font-body text-xs tracking-widest uppercase text-cream/40 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
