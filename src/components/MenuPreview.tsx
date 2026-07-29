// src/components/MenuPreview.tsx
import Link from "next/link";

const categories = [
  {
    title: "Persian Classics",
    description: "Time-honored recipes from the royal kitchens of Persia",
    items: [
      {
        name: "Chelo Kebab Koobideh",
        price: "€28",
        note: "Saffron rice, grilled tomato",
      },
      {
        name: "Ghormeh Sabzi",
        price: "€26",
        note: "Slow-cooked herb stew, fenugreek",
      },
      {
        name: "Fesenjan",
        price: "€30",
        note: "Duck confit, walnut & pomegranate",
      },
    ],
  },
  {
    title: "Royal Soups & Stews",
    description: "Aromatic slow-cooked dishes from ancient Persian tradition",
    items: [
      {
        name: "Ash-e Reshteh",
        price: "€18",
        note: "Herb & noodle soup, kashk, caramelized onion",
      },
      {
        name: "Dizi (Abgoosht)",
        price: "€24",
        note: "Lamb shank, chickpeas, dried lime",
      },
      {
        name: "Khoresh-e Bademjan",
        price: "€26",
        note: "Braised lamb, smoked eggplant, saffron",
      },
    ],
  },
  {
    title: "Sweet Endings",
    description: "Desserts where rose water meets saffron honey",
    items: [
      {
        name: "Saffron Crème Brûlée",
        price: "€14",
        note: "Cardamom, pistachio dust",
      },
      {
        name: "Baklava Selection",
        price: "€16",
        note: "Pistachio, walnut, rose",
      },
      {
        name: "Bastani Royal",
        price: "€12",
        note: "Persian ice cream, saffron, rosewater",
      },
    ],
  },
];

export default function MenuPreview() {
  return (
    <section className="py-32  bg-surface">
      <div className="">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-body text-xs tracking-[0.5em] uppercase text-gold mb-4">
            Our Offerings
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-6">
            The Art of Persian Cuisine
          </h2>
          <div className="divider-gold" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-surface p-10 hover:bg-surface-2 transition-colors duration-300"
            >
              {/* Category Header */}
              <h3 className="font-display text-2xl text-gold mb-2">
                {cat.title}
              </h3>
              <p className="font-body text-cream/40 text-sm mb-8">
                {cat.description}
              </p>

              {/* Items */}
              <ul className="space-y-6">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between items-start gap-4"
                  >
                    <div>
                      <p className="font-body text-cream font-medium">
                        {item.name}
                      </p>
                      <p className="font-body text-cream/40 text-sm mt-0.5">
                        {item.note}
                      </p>
                    </div>
                    <span className="font-display text-gold shrink-0">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/menu" className="btn-gold">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
