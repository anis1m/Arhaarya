import React, { useState } from "react";
import Cards from "./homepage/Cards";
import "../css_files/Homepage.css";
import Navbar from "./homepage/Navbar";
import Hero from "./homepage/Hero";
import Footer from "./homepage/Footer";
import Goal from "./homepage/Goal";
import Enquiry from "./Enquiry";
import Gallery from "./homepage/Gallery";

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
          <Cards isclose={isclose} />
          <Cards isclose={isclose} />
          <Cards isclose={isclose} />
          <Cards isclose={isclose} />
          <Cards isclose={isclose} />
          <Cards isclose={isclose} />
        </div>
        <Gallery />
        <Footer />
        {close && <Enquiry isclose={isclose} />}
      </section>
    </>
  );
}

export default Homepage;
