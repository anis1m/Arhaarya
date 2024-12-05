import React, { useEffect, useRef, useState } from "react";
import "../../css_files/homepage/Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar({ fh, ash, sc, gallery }) {
  const show = useRef();
  const nav = useNavigate();

  return (
    <>
      <nav className="navbar">
        <figure
          onClick={() => {
            nav("/");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img src="/Image 661.png" />
          <h1>ARHAARYA</h1>
        </figure>

        <blockquote ref={show}>
          <mark
            onClick={() => {
              nav("/");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <h3>Home</h3>
            <i class="fa-solid fa-angle-down" />
          </mark>
          <mark
            onClick={() => {
              window.scrollTo({
                top: document.documentElement.scrollHeight - 1.2 * (fh + ash),
                behavior: "smooth",
              });
            }}
          >
            <h3>About Us</h3>
            <i class="fa-solid fa-angle-down" />
          </mark>
          <mark
            onClick={() => {
              window.scrollTo({
                top:
                  document.documentElement.scrollHeight -
                  fh +
                  ash +
                  gallery +
                  sc,
                behavior: "smooth",
              });
            }}
          >
            <h3>Services</h3>
            <i class="fa-solid fa-angle-down" />
          </mark>
          <mark
            onClick={() => {
              window.scrollTo({
                top: document.documentElement.scrollHeight - 1.5 * fh,
                behavior: "smooth",
              });
            }}
          >
            <h3>Contact Us</h3>
            <i class="fa-solid fa-angle-down" />
          </mark>
          <mark
            onClick={() => {
              window.scrollTo({
                top:
                  document.documentElement.scrollHeight -
                  1.1 * (fh + ash + gallery),
                behavior: "smooth",
              });
            }}
          >
            <h3>Gallery</h3>
            <i class="fa-solid fa-angle-down" />
          </mark>
          <mark>
            <i class="fa-solid fa-search"></i>
          </mark>
          <button>Ask For Quote</button>
        </blockquote>
        <mark
          id="hamberger_menu"
          onClick={() => {
            if (show.current.style.display === "block") {
              show.current.style.display = "none";
            } else {
              show.current.style.display = "block";
            }
          }}
        >
          <i class="fa-solid fa-bars"></i>
        </mark>
      </nav>
      <div className="below-navbar"></div>
    </>
  );
}

export default Navbar;
