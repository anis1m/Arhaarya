import React, { useEffect, useRef, useState } from "react";
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
import AboutUs from "./AboutUs";

function Homepage() {
  const [close, setclose] = useState(false);
  const [footerheight, setfooterheight] = useState(0);
  const [aboutUsHeight, setaboutUsheight] = useState(0);
  const [services, servicesheight] = useState(0);
  const [gallery, galleryheight] = useState(0);
  const sh = useRef();

  function isclose(issetclose) {
    setclose(issetclose);
  }

  function sfh(setheight) {
    setfooterheight(setheight);
  }

  function sash(setash) {
    setaboutUsheight(setash);
  }
  function gheight(setgheight) {
    galleryheight(setgheight);
  }

  useEffect(() => {
    servicesheight(sh.current.scrollHeight);
  }, []);

  return (
    <>
      <section className="homepage">
        <Navbar
          fh={footerheight}
          ash={aboutUsHeight}
          sc={services}
          gallery={gallery}
          isclose={isclose}
        />
        <Hero />
        <Goal />
        <blockquote className="homepage-card-header">
          <hr />
          <h1>Latest Properties for Sale</h1>
          <p>
            Beautiful residential land located in a peaceful neighborhood, ideal
            for a mobile home or tiny house. Stunning mountain views, easy
            access to utilities, and a short drive to local amenities.
          </p>
        </blockquote>

        <div className="homepage-cards" ref={sh}>
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
        <Gallery gheight={gheight} />
        <AboutUs sash={sash} />
        <Footer sfh={sfh} />
        {close && <Enquiry isclose={isclose} />}
      </section>
    </>
  );
}

export default Homepage;
