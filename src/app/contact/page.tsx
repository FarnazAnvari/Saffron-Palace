export default function ContactPage() {
  return (
    <main className="flex flex-col bg-background items-center">
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
                lines: ["24 Fayazi St", "Tehran", "Iran"],
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
                lines: ["+98 69 123 456 78", "hello@saffronpalace.com"],
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

          {/* Map */}
          <div className="relative w-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1226.430577605662!2d51.4272839938348!3d35.78596606178102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e066d90516a99%3A0x69690293d8b58a8e!2sDivan%20Restaurant!5e0!3m2!1sen!2s!4v1785574937214!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
