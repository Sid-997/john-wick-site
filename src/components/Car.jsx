import React from "react";
import "./Car.css";

const Car = () => {
  return (
    <section className="car-section">
      <div className="car-container">
        <div className="car-text">
          <h1>Favorite Car</h1>
          <p>
            John’s 1969 Ford Mustang Mach 1, a sleek black muscle car, is more than a vehicle—it’s a symbol of his love for his late wife, Helen. Its roaring V8 and classic design reflect his personality, and its theft by Iosef Tarasov sparks his return to violence. John uses the Mustang for transport and as a weapon, ramming enemies in high-speed chases, and his relentless fight to reclaim it underscores its emotional weight.
          </p>
        </div>
        <div className="car-image">
          <img
            src="https://wallpapercave.com/wp/wp13099614.jpg"
            alt="John Wick's 1969 Ford Mustang Mach 1"
          />
        </div>
      </div>
    </section>
  );
};

export default Car;
