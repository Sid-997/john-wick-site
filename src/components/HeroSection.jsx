/* eslint-disable react/style-prop-object */
import React from "react";
import Friends from "./friends";
import Enemies from "./Enemies";
import Car from "./Car";
import Weapon from "./Weapon";
import Career from "./Career";
import Traits from "./Traits";
function Hero() {
  return (
    <div>
      <div class="container">
        <img src="https://wallpapercave.com/wp/wp10815186.jpg" alt="johnWick" />
        <div class="content">
          <h1>Background</h1>
          <p>
            Born Jardani Jovonovich on September 2, 1964, in a Byelorussian SSR
            village to a Ruska Roma family, John Wick’s early life was shaped by
            loss and resilience. Orphaned young, he was taken in by Winston, a
            close friend of his father and manager of the Continental Hotel in
            New York, who became a mentor. Spending part of his youth in El
            Sauzal de Rodriguez, Ensenada, Mexico, John was later recruited by
            the Ruska Roma crime syndicate. Under The Director’s guidance in New
            York City, he trained to become a master assassin, his stateless
            upbringing forging a code of honor and unmatched determination that
            would define his legendary status in the underworld.

            
          </p>
        </div>
      </div>
      <div className="Friend-Allies">
        <img src="https://wallpapercave.com/wp/wp13352974.jpg" alt="johnWick" />
        <h1>Friends and Allies</h1>
        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            paddingBottom: "30px",
            fontSize: "18px",
            color: "#ccc",
          }}
        >
          John Wick, though often solitary, has earned the loyalty of a
          tight-knit group of allies in the criminal underworld, each bound to
          him by trust and shared history.
        </p>
        <Friends />
        <Enemies />
        <Car />
        <Weapon />
        <Career />
        <Traits />
      </div>
    </div>
  );
}
export default Hero;
