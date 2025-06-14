import React from "react";

const categories = [
  {
    title: "Cricket",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/642/325/small_2x/professional-engineer-in-protective-helmet-and-blueprints-paper-at-house-building-construction-site-photo.jpg",
  },
  {
    title: "Football",
    image:
      "https://e7.pngegg.com/pngimages/767/690/png-clipart-bookmaker-sport-ukraine-national-football-team-game-football-players-game-sports-equipment-thumbnail.png",
  },
];

const PopularCategories = () => {
  return (
    <section
      className="py-16 text-center"
      style={{ color: "var(--text-color)" }}
    >
      <h2
        className="text-4xl font-bold"
        style={{ color: "var(--heading-color, var(--text-color))" }}
      >
        Popular Sports
      </h2>
      <p
        className="mt-4 max-w-xl mx-auto"
        style={{ color: "var(--text-muted-color, var(--text-color))" }}
      >
        Uniquely promote adaptive quality vectors rather than stand-alone
        e-markets. Pontificate alternative architectures whereas iterate.
      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="w-60 h-96 rounded-2xl overflow-hidden relative shadow-lg"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute bottom-4 left-4 p-4 text-xl font-semibold drop-shadow-lg"
              style={{
                color: "var(--overlay-text-color, white)",
                backgroundColor: "var(--overlay-bg-color, rgba(0,0,0,0.7))",
              }}
            >
              {category.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
