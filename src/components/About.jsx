import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-overlay">
        <div className="about-content">
          <h1 className="about-title">About John Wick</h1>
          <p className="about-text">
            John Wick, known in whispers as the "Baba Yaga", is more than just a name — he’s a legend.
            Trained by the Ruska Roma, forged in fire and vengeance, he’s a master assassin, a dog lover, and a man of code.
            After the death of his beloved wife, all he wanted was peace — but fate had other plans.
          </p>
          <p className="about-text">
            He’s fluent in nine languages, walks in tailored bulletproof suits, and eliminates enemies with everything from pencils to pistols.
            Whether it’s a quiet bourbon night or a brutal headshot duel, he does it with precision, pain, and poise.
          </p>
          <p className="about-quote">
            <em>"People keep asking if I'm back... Yeah, I'm thinkin' I'm back!"</em>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
