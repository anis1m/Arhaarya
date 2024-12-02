import React from "react";
import "../../css_files/homepage/Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div>
          <aside>
            <h2>About Company</h2>
            <hr />
            <figure>
              <img src="/Image 661.png" />
              <h1>ARHAARYA</h1>
            </figure>
            <p>621 Columbia Rd #38, Magnolia</p>
            <mark>
              <i class="fa-solid fa-phone"></i>
              +123 456 7890
            </mark>
            <mark>
              <i class="fa-solid fa-envelope"></i>
              support@example.com
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
              <h4>In League City 1.37 Acres Property</h4>
              <p>By Arhaarya | August 17, 2024</p>
            </blockquote>
            <blockquote>
              <h4>In League City 1.32 Acres Property</h4>
              <p>By Arhaarya | August 19, 2024</p>
            </blockquote>
            <blockquote>
              <h4>In League City 0.42 Acres Property</h4>
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
