export default function ContactPage() {
  return (
    <main className="flex flex-col bg-background">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-end pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="w-[600px] h-[600px] rounded-full border border-gold" />
        </div>
        <div className="max-w-7xl mx-auto w-full">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Get in Touch
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-cream italic">
            Contact
          </h1>
          <div className="w-16 h-px bg-gold/60 mt-6" />
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info */}
          <div className="space-y-12">
            {[
              {
                label: "Address",
                lines: [
                  "Kaiserstraße 42",
                  "60329 Frankfurt am Main",
                  "Germany",
                ],
              },
              {
                label: "Hours",
                lines: [
                  "Tuesday – Friday: 12:00 – 15:00 / 18:00 – 23:00",
                  "Saturday – Sunday: 12:00 – 23:00",
                  "Monday: Closed",
                ],
              },
              {
                label: "Contact",
                lines: ["+49 69 123 456 78", "hello@saffronpalace.de"],
              },
            ].map((block) => (
              <div key={block.label} className="border-t border-gold/20 pt-8">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                  {block.label}
                </p>
                <div className="space-y-1">
                  {block.lines.map((line) => (
                    <p key={line} className="font-body text-cream/60 text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="relative aspect-square lg:aspect-auto bg-gold/5 border border-gold/10 flex items-center justify-center min-h-[400px]">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold/30">
              Map Placeholder
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
