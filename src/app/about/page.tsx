import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center pb-16 px-6 bg-background overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="w-[600px] h-[600px] rounded-full border border-gold" />
        </div>
        <div className="max-w-7xl mx-auto w-full">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Our Story
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-cream italic">
            About Us
          </h1>
          <div className="w-16 h-px bg-gold/60 mt-6" />
        </div>
      </section>
      {/* Story Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Since 2010
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-cream italic leading-tight mb-8">
              A Palace Born from <br /> Persian Tradition
            </h2>
            <div className="space-y-5 font-body text-cream/60 text-base leading-relaxed">
              <p>
                Saffron Palace was founded with a singular vision: to bring the
                depth and elegance of Persian culinary heritage to the heart of
                Europe. Every dish tells a story — of ancient spice routes,
                family recipes passed through generations, and the poetry of
                Iranian culture.
              </p>
              <p>
                Our head chef, trained in both Tehran and Paris, curates a menu
                that honours tradition while embracing the finest local
                ingredients. Saffron, dried limes, pomegranate, rosewater — the
                soul of Persian cooking — meet European precision and
                presentation.
              </p>
              <p>
                We believe a great meal is more than food. It is memory, warmth,
                and belonging. Welcome to Saffron Palace.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/restaurant-interior3.jpg"
              alt="Saffron Palace restaurant interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>{" "}
        {/* ← بسته‌شدن grid div */}
      </section>{" "}
      {/* ← بسته‌شدن Story section */}
      {/* Values */}
      <section
        style={{ paddingTop: "6rem" }}
        className="pt-16 pb-24 px-6 bg-background border-t border-gold/10"
      >
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-12 text-center">
            What We Stand For
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                num: "01",
                title: "Authentic Flavours",
                body: "Every recipe is rooted in Persian culinary tradition, sourced from family archives and regional masters.",
              },
              {
                num: "02",
                title: "Seasonal Ingredients",
                body: "We partner with local European farmers to source the freshest produce, married with premium imported Persian spices.",
              },
              {
                num: "03",
                title: "Warm Hospitality",
                body: "In Persian culture, a guest is a gift. We honour every visitor with care, attention, and genuine warmth.",
              },
            ].map((v) => (
              <div key={v.num} className="border-t border-gold/20 pt-8">
                <span className="font-body text-xs tracking-[0.3em] text-gold/40 block mb-4">
                  {v.num}
                </span>
                <h3 className="font-display text-2xl text-cream italic mb-4">
                  {v.title}
                </h3>
                <p className="font-body text-cream/50 text-sm leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
