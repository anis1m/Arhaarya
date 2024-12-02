import React, { useState } from "react";
import Cards from "./homepage/Cards";
import "../css_files/Homepage.css";
import Navbar from "./homepage/Navbar";
import Hero from "./homepage/Hero";
import Footer from "./homepage/Footer";
import Goal from "./homepage/Goal";
import Enquiry from "./Enquiry";
import Gallery from "./homepage/Gallery";
import land1 from "../assets/Land_Images/WhatsApp Image 2024-11-27 at 6.28.28 AM (1).jpeg";
import land2 from "../assets/Land_Images/WhatsApp Image 2024-11-27 at 6.28.28 AM.jpeg";
import land3 from "../assets/Land_Images/WhatsApp Image 2024-11-27 at 6.28.29 AM.jpeg";
import land4 from "../assets/Land_Images/WhatsApp Image 2024-11-27 at 6.28.30 AM.jpeg";
import land5 from "../assets/Land_Images/WhatsApp Image 2024-11-27 at 6.28.31 AM.jpeg";
import land6 from "../assets/Land_Images/WhatsApp Image 2024-11-27 at 6.28.33 AM.jpeg";

function Homepage() {
  const [close, setclose] = useState(false);

  function isclose(issetclose) {
    setclose(issetclose);
  }
  return (
    <>
      <section className="homepage">
        <Navbar />
        <Hero />
        <Goal />
        <blockquote className="homepage-card-header">
          <hr />
          <h1>Latest Properties for Rent</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus
            libero consectetur, aliquam mi vel, rhoncus diam.
          </p>
        </blockquote>

        <div className="homepage-cards">
          <Cards
            isclose={isclose}
            land={land1}
            title={"In League City 1.37 Acres property"}
            location={"Plot 1"}
          />
          <Cards
            isclose={isclose}
            land={land2}
            title={"In League City 1.32 Acres property"}
            location={"Plot 2"}
          />
          <Cards
            isclose={isclose}
            land={land3}
            title={"In League City 0.42 Acres property"}
            location={"Plot 3"}
          />
          <Cards
            isclose={isclose}
            land={land4}
            title={"In Oak Harbor 0.52 Acre property"}
            location={"Plot 4"}
          />
          <Cards
            isclose={isclose}
            land={land5}
            title={"In Oak Harbor 0.56 Acre property"}
            location={"Plot 5"}
          />
          <Cards
            isclose={isclose}
            land={land6}
            title={"In Oak Harbor 0.57 Acre property"}
            location={"Plot 6"}
          />
        </div>
        <Gallery />
        <Footer />
        {close && <Enquiry isclose={isclose} />}
      </section>
    </>
  );
}

export default Homepage;
