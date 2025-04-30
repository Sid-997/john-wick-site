import React from "react";
import "./Weapon.css";

const weapons = [
  {
    name: "Heckler & Koch P30L",
    description:
      "His primary handgun, fitted with a compensator for close-quarters combat.",
    image:
      "https://blog.gritrsports.com/wp-content/uploads/2023/01/john-wick-p30l-1.jpg",
  },
  {
    name: "Coharie Arms CA-415",
    description:
      "A compact assault rifle with a holographic sight, used in tactical shootouts.",
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/06/john-wick-coharie-arms-ca-415-2.png?q=70&fit=crop&w=750&h=422&dpr=1",
  },
  {
    name: "TTI SIG-Sauer MPX Carbine",
    description: "A rapid-fire carbine for intense battles in later missions.",
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/05/John-Wick-Weapons-Carbine.jpg?q=70&fit=crop&w=825&dpr=1",
  },
  {
    name: "Knives and Blades",
    description:
      "John’s mastery of knives, including throwing them, makes him deadly in melee.",
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/05/John-Wick-Weapons-Knives.jpg?q=70&fit=crop&w=750&h=422&dpr=1",
  },
  {
    name: "Pencil",
    description:
      "Infamously used to kill three men, proving John can weaponize anything.",
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/06/john-wick-killing-a-guy-with-a-pencil-1.png?q=70&fit=crop&w=750&h=422&dpr=1",
  },
  {
    name: "Improvised Weapons",
    description:
      "Library books, belts, and tomahawks become lethal in his hands.",
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/John-Wick-Chapter-3-Parabellum-Shinobi-fight-scene-pic.jpg?q=70&fit=crop&w=825&dpr=1",
  },
];

const Weapon = () => {
  return (
    <section className="weapon-section">
      <h1>Weapons of Choice</h1>
      <p className="weapon-intro">
        John’s arsenal is a testament to his lethal precision, blending
        firearms, blades, and improvised tools with unmatched skill.
      </p>
      <div className="weapon-list">
        {weapons.map((weapon, index) => (
          <div
            key={index}
            className={`weapon-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <img src={weapon.image} alt={weapon.name} />
            <div className="weapon-text">
              <h2>{weapon.name}</h2>
              <p>{weapon.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Weapon;
