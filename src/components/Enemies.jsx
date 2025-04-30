import React from "react";
import "./enimes.css"; // Replace with your actual CSS filename

const enemies = [
  {
    name: "Viggo Tarasov",
    role: "Former Employer - Tarasov Mob",
    description:
      "Turns enemy after his son Iosef kills John’s dog and steals his car.",
    image:
      "https://www.looper.com/img/gallery/why-viggo-from-john-wick-looks-so-familiar/intro-1611754422.jpg",
  },
  {
    name: "Iosef Tarasov",
    role: "Viggo’s Son",
    description:
      "Reckless actions ignite John’s vengeance, marking him for death.",
    image:
      "https://d2eib6r9tuf5y8.cloudfront.net/l/assets/img/article/article-2919-7pznpktm/article-2919-ji61y9n2.jpg",
  },

  {
    name: "Santino D’Antonio",
    role: "Camorra Warlord",
    description:
      "Forces John to kill his sister Gianna, then betrays him with a bounty.",
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6c53d96c-2321-49d1-a152-2a865bb274f4/de180hq-313d42d2-a66a-4caa-8f9f-483d81fb98a5.png/v1/fit/w_828,h_1280,q_70,strp/santino_d_antonio_by_lagattaraart_de180hq-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZjNTNkOTZjLTIzMjEtNDlkMS1hMTUyLTJhODY1YmIyNzRmNFwvZGUxODBocS0zMTNkNDJkMi1hNjZhLTRjYWEtOGY5Zi00ODNkODFmYjk4YTUucG5nIiwiaGVpZ2h0IjoiPD0xOTc5Iiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNmM1M2Q5NmMtMjMyMS00OWQxLWExNTItMmE4NjViYjI3NGY0XC9sYWdhdHRhcmFhcnQtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.y3oHgC9j9pvbMnReSJRIR1lp4nuljgXfj6CiCntqWvQ",
  },
  {
    name: "Cassian",
    role: "Gianna’s Bodyguard",
    description:
      "Hunts John out of loyalty; rivalry tempered by mutual respect.",
    image:
      "https://i.namu.wiki/i/vIAK16cchYaMMQS71xHQv-6h_tRUJCfCCE2eOrMvG4S_bf2rpqmapCsywsjGncyoEGyJTV9HtQZ21uaUjQcozG_FWgxK1XNp5PCro0W76jWz3mXqgUdY0yIfX5730GGfmRxj4YyW6sJgLaXQjkGNIA.webp",
  },
  {
    name: "Marquis Vincent de Gramont",
    role: "High Table Leader",
    description: "Leads a global manhunt to stop John’s quest for freedom.",
    image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/bill-skarsgard-as-the-marquis-vincent-de-gramont-in-john-wick-chapter-4.jpg?q=50&fit=crop&w=825&dpr=1.5",
  },
  {
    name: "Chidi",
    role: "Marquis’s Enforcer",
    description: "An honorless brute carrying out the Marquis’s dirty work.",
    image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/04/chidi-in-john-wick-chapter-4.jpg?q=50&fit=crop&w=825&dpr=1.5",
  },
  {
    name: "Killa Harkan",
    role: "Brutal Brawler",
    description: "Nearly defeats John with sheer strength in a savage brawl.",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/10/killa-harkin.jpg?q=49&fit=crop&w=825&dpr=2",
  },
  {
    name: "The Adjudicator",
    role: "High Table Enforcer",
    description:
      "Punishes John’s allies for aiding him; follows protocol ruthlessly.",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/10/the-adjudicator.jpg?q=49&fit=crop&w=825&dpr=2",
  },
  
];

const Enemies = () => {
  return (
    <section className="friends-section">
      <h1 className="Friend-Allies">Enemies</h1>
      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          paddingBottom: "30px",
          fontSize: "18px",
          color: "#ccc",
        }}
      >
        John’s career has made him a target for countless foes, from personal
        grudges to High Table elites, all fearing or envying the Baba Yaga.
      </p>
      <div className="friends-grid">
        {enemies.map((enemy, index) => (
          <div className="friend-card" key={index}>
            <img src={enemy.image} alt={enemy.name} />
            <div className="friend-details">
              <h2>{enemy.name}</h2>
              <h4>{enemy.role}</h4>
              <p>{enemy.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Enemies;
