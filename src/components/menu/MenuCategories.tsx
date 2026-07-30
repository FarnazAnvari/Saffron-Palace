const categories = [
  {
    title: "Starters",
    subtitle: "پیش غذا",
    items: [
      {
        name: "Mirza Ghasemi",
        note: "Smoky aubergine with eggs & garlic",
        price: "€12",
      },
      {
        name: "Kashk-e Bademjan",
        note: "Whey & aubergine dip, walnuts, mint oil",
        price: "€11",
      },
      {
        name: "Mast-o Khiar",
        note: "Strained yoghurt, cucumber, dried roses",
        price: "€8",
      },
      {
        name: "Dolmeh",
        note: "Vine leaves stuffed with herbed rice & lamb",
        price: "€13",
      },
    ],
  },
  {
    title: "Main Courses",
    subtitle: "غذای اصلی",
    items: [
      {
        name: "Ghormeh Sabzi",
        note: "Herb stew, kidney beans, dried limes, lamb",
        price: "€24",
      },
      {
        name: "Fesenjan",
        note: "Pomegranate & walnut stew with duck confit",
        price: "€26",
      },
      {
        name: "Chelo Kabab Koobideh",
        note: "Grilled minced lamb, saffron rice, grilled tomato",
        price: "€22",
      },
      {
        name: "Baghali Polo",
        note: "Dill & broad bean rice, slow-braised lamb shank",
        price: "€28",
      },
      {
        name: "Zereshk Polo Morgh",
        note: "Barberry rice, saffron chicken, caramelised onion",
        price: "€21",
      },
    ],
  },
  {
    title: "Desserts",
    subtitle: "دسر",
    items: [
      {
        name: "Sholeh Zard",
        note: "Saffron rice pudding, rosewater, cinnamon",
        price: "€9",
      },
      {
        name: "Bastani Sonnati",
        note: "Persian ice cream, saffron, pistachios",
        price: "€10",
      },
      {
        name: "Zoolbia & Bamieh",
        note: "Persian funnel cake & honey fritters",
        price: "€8",
      },
    ],
  },
  {
    title: "Beverages",
    subtitle: "نوشیدنی",
    items: [
      {
        name: "Doogh",
        note: "Persian sparkling yoghurt drink, dried mint",
        price: "€5",
      },
      {
        name: "Sharbat-e Sekanjabin",
        note: "Mint & vinegar syrup, cucumber",
        price: "€6",
      },
      {
        name: "Saffron Lemonade",
        note: "Fresh lemon, saffron, rosewater",
        price: "€7",
      },
    ],
  },
];

export default function MenuCategories() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {categories.map((cat, i) => (
          <div
            key={cat.title}
            className={`mb-24 ${i !== categories.length - 1 ? "border-b border-gold/10 pb-24" : ""}`}
          >
            {/* Category Header */}
            <div className="flex items-baseline gap-6 mb-12">
              <h2 className="font-display text-4xl md:text-5xl text-cream italic">
                {cat.title}
              </h2>
              <span className="font-body text-sm text-gold/60 tracking-widest">
                {cat.subtitle}
              </span>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-start justify-between gap-4 group"
                >
                  <div>
                    <h3 className="font-body text-cream text-base font-medium group-hover:text-gold transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="font-body text-cream/50 text-sm mt-1">
                      {item.note}
                    </p>
                  </div>
                  <span className="font-body text-gold text-sm shrink-0 mt-0.5">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
