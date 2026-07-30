// src/components/Footer.tsx
import Link from "next/link";

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-4 h-4"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const links = {
  Explore: [
    { label: "Menu", href: "/menu" },
    { label: "About", href: "/about" },
    { label: "Reservation", href: "/reservation" },
    { label: "Contact", href: "/contact" },
  ],
  Experience: [
    { label: "Private Dining", href: "#" },
    { label: "Events", href: "#" },
    { label: "Gift Cards", href: "#" },
    { label: "Press", href: "#" },
  ],
};

const socialLinks = [
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: TwitterIcon, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark-secondary)] border-t border-[var(--color-gold)]/10 pt-20 pb-10 px-6 ">
      <div className="max-w-7xl mx-auto py-60">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center ">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col items-center text-center gap-4">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-3xl text-gold-gradient block">
                Saffron Palace
              </span>
              <span className="text-xs tracking-[0.4em] uppercase text-[var(--color-cream)]/40">
                Authentic Persian Cuisine
              </span>
            </Link>
            <p className="text-[var(--color-cream)]/50 text-sm leading-relaxed max-w-md mx-auto mb-8">
              A sanctuary of fine dining where the ancient flavors of Persia
              come alive — rooted in tradition, perfected through generations.
            </p>

            <p className="text-xs text-[var(--color-cream)]/30   mb-8  ">
              © 2024 Saffron Palace. All rights reserved.
            </p>
            {/* Socials */}
            <div className="flex gap-4 justify-center mb-8">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 border border-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-cream)]/40 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-xs tracking-[0.4em] uppercase text-[var(--color-gold)] mb-6">
                {title}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-[var(--color-cream)]/50 hover:text-[var(--color-cream)] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--color-gold)]/10 pt-8 flex justify-center md:justify-end">
          <p className="text-xs text-[var(--color-cream)]/30  ">
            Tehran · Tabriz
          </p>
        </div>
      </div>
    </footer>
  );
}
