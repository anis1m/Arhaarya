import React from "react";
import "../../css_files/homepage/Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <figure
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img src="/Image 661.png" />
          <h1>METROLINK CITY</h1>
        </figure>

        <blockquote>
          <mark>
            <h3>Home</h3>
            <i class="fa-solid fa-angle-down" />
          </mark>
          <mark>
            <h3>About Us</h3>
            <i class="fa-solid fa-angle-down" />
          </mark>
          <mark>
            <h3>Services</h3>
            <i class="fa-solid fa-angle-down" />
          </mark>
          <mark
            onClick={() => {
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              });
            }}
          >
            <h3>Contact Us</h3>
            <i class="fa-solid fa-angle-down" />
          </mark>

          <i class="fa-solid fa-search"></i>
          <button>Ask For Quote</button>
        </blockquote>
      </nav>
      <div className="below-navbar"></div>
    </>
  );
}

export default Navbar;
