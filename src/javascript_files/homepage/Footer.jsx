import React, { useEffect, useRef, useState } from "react";
import "../../css_files/homepage/Footer.css";

function Footer({ sfh }) {
  const footerheight = useRef();

  useEffect(() => {
    sfh(footerheight.current.scrollHeight);
  }, []);

  return (
    <>
      <footer className="footer" ref={footerheight}>
        <div>
          <aside>
            <h2>About Company</h2>
            <hr />
            <figure>
              <img src="/Image 661.png" />
              <mark>
                <h1>ARHAARYA</h1>
                <h4>PARTNETS PVT. LTD.</h4>
              </mark>
            </figure>
            <p>Saidnagar, near viskarma mandir , Darbhanga.</p>
            <mark>
              <i class="fa-solid fa-phone"></i>
              +91 7004995400
            </mark>
            <mark>
              <i class="fa-solid fa-envelope"></i>
              Arhaaryapartnerspvtltd@gmail.com
            </mark>
            <mark>
              <i class="fa-solid fa-city"></i>
              CIN: U68100BR2024PTC071908
            </mark>
            <mark>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-x-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-whatsapp"></i>
              <i class="fa-brands fa-pinterest"></i>
            </mark>
          </aside>
          <aside>
            <h2>Categories</h2>
            <hr />
            <p>Best Lands</p>
            <p>Community Life</p>
            <p>Interior Design</p>
            <p>Living Style</p>
            <p>Luxury Space</p>
            <p>Suitable Place</p>
          </aside>

          <aside>
            <h2>Hot Property</h2>
            <hr />
            <blockquote>
              <h4>In Metrolink City 1.37 Acres Property</h4>
              <p>By Arhaarya | August 17, 2024</p>
            </blockquote>
            <blockquote>
              <h4>In Metrolink City 1.32 Acres Property</h4>
              <p>By Arhaarya | August 19, 2024</p>
            </blockquote>
            <blockquote>
              <h4>In Metrolink City 0.42 Acres Property</h4>
              <p>By Arhaarya | August 20, 2024</p>
            </blockquote>
          </aside>
        </div>
      </footer>
      <div className="below-footer">
        <div>
          <p>
            &copy; Copyright Arhaarya Partners Pvt. Ltd. 2024. All Right
            Reserved{" "}
          </p>
          <blockquote>
            <p>Home</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Blogs</p>
          </blockquote>
        </div>
      </div>
    </>
  );
}

export default Footer;
