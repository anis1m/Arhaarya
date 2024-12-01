import React from "react";
import "../../css_files/homepage/Hero.css";

function Hero() {
  return (
    <div className="hero">
      <img src="/hero_image_1.jpg" />
      <aside>
        <h2 style={{ color: "red" }}>Build For Land Business</h2>
        <h1>Create Best Plan For the Future</h1>
        <p>
          Our aim is to acquire, develop, and manage land assets to maximize
          value through strategic investments, efficient utilization, and
          sustainable development. This may involve buying and selling land,
          leasing, or transforming raw land into profitable ventures such as
          residential communities, commercial spaces, or agricultural
          operations, all while ensuring compliance with regulatory and
          environmental standards.
        </p>
        <blockquote>
          <button
            onClick={() => {
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              });
            }}
          >
            CONTACT US
          </button>
        </blockquote>
      </aside>
    </div>
  );
}

export default Hero;
