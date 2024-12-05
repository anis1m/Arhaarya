import React, { useEffect, useRef } from "react";
import "../css_files/AboutUs.css";
import Navbar from "./homepage/Navbar";

function AboutUs({ sash }) {
  const aboutusheight = useRef();
  useEffect(() => {
    sash(aboutusheight.current.scrollHeight);
  }, []);
  return (
    <>
      <section className="about-us" ref={aboutusheight}>
        <h1>About Us</h1>
        <p>
          At Arhaarya, we're dedicated to transforming the way people invest in
          land and real estate.
        </p>
        <p>
          Our mission is to provide exceptional services, unparalleled market
          expertise, and a commitment to building long-term relationships with
          our clients.
        </p>
        <h3>Our Values :</h3>
        <ol>
          <li>
            <strong>Customer-Centric:</strong>
            We put our clients at the heart of everything we do.
          </li>
          <li>
            <strong>Integrity:</strong> We operate with transparency, honesty,
            and ethics.
          </li>
          <li>
            <strong>Innovation:</strong> We stay ahead of the curve, embracing
            new technologies and strategies.
          </li>
          <li>
            <strong>Collaboration:</strong> We work together as a team to
            achieve exceptional results.
          </li>
        </ol>
        <h3>Our Expertise :</h3>
        <p>Our team has extensive expertise in:</p>
        <ol>
          <li>
            <strong>Land Acquisition: </strong> We help clients find and acquire
            the perfect land for their needs.
          </li>
          <li>
            <strong>Real Estate Development: </strong> We provide expert
            guidance on developing land into profitable real estate ventures.
          </li>
          <li>
            <strong>Investment Advisory: </strong> We offer tailored investment
            advice to help clients achieve their financial goals.
          </li>
        </ol>
        <p>
          Join the Arhaarya Family At Arhaarya, we're passionate about helping
          our clients achieve their dreams. Whether you're a seasoned investor
          or just starting out, we invite you to join the Arhaarya family and
          experience the difference for yourself.
        </p>
        <p>
          Contact us today to learn more about our services and how we can help
          you achieve your real estate goals.
        </p>
      </section>
    </>
  );
}

export default AboutUs;
