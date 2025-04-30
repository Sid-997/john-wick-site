import React from "react";
import "./Traits.css";

const Traits = () => {
  const traits = [
    {
      title: "Personality",
      description:
        "Stoic and reserved, John’s calm demeanor hides grief for Helen. Polite yet lethal, he commands respect.",
    },
    {
      title: "Physical Traits",
      description:
        "At 6’1” with brown hair and eyes, John’s athletic build and stamina endure grueling fights. His “Fortis Fortuna Adiuvat” tattoo hints at a Marine past.",
    },
    {
      title: "Skills",
      description:
        "A master tactician, John excels in stealth, vehicular combat, and speaks English, Russian, Hebrew, Italian, Japanese, Indonesian, Cantonese, and American Sign Language.",
    },
    {
      title: "Favorite Drink",
      description:
        "Bourbon, especially Blanton’s The Original Single Barrel, savored in quiet moments.",
    },
    {
      title: "Fashion",
      description:
        "Tailored black suits, lined with ballistic armor, and a Carl F. Bucherer Manero AutoDate watch blend style and function.",
    },
    {
      title: "Code of Honor",
      description:
        "John values loyalty, honors blood oaths, and respects Continental rules until pushed, refusing to kill friends.",
    },
    {
      title: "Love for Dogs",
      description:
        "His bond with his dogs—a puppy from Helen and an adopted pit bull—reveals a protective, loving side.",
    },
  ];

  return (
    <section className="traits-section">
      <h1>Personal Traits and Preferences</h1>
      <div className="traits-grid">
        {traits.map((trait, index) => (
          <div key={index} className="trait-card">
            <h2>{trait.title}</h2>
            <p>{trait.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Traits;
