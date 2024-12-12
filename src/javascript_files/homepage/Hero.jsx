import React, { useEffect, useState } from "react";
import "../../css_files/homepage/Hero.css";
import i1 from "../../assets/Image 662.png";
import i2 from "../../assets/Image 663.png";

function Hero() {
  const arr = ["/hero_image_1.jpg", i1, i2];
  const [imageindex, setimageindex] = useState(0);

  function nextimage() {
    if (imageindex < arr.length - 1) {
      setimageindex(imageindex + 1);
    } else {
      setimageindex(0);
    }
  }

  function previousimage() {
    if (imageindex > 0) {
      setimageindex(imageindex - 1);
    } else {
      setimageindex(arr.length - 1);
    }
  }

  useEffect(() => {
    const intervalId = setInterval(nextimage, 5000);

    return () => clearInterval(intervalId);
  }, [imageindex]);

  return (
    <div className="hero">
      <img src={arr[imageindex]} />
      {imageindex === 0 && (
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
      )}
      <button id="previous-hero-image" onClick={previousimage}>
        <i class="fa-solid fa-angle-left"></i>
      </button>
      <button id="next-hero-image" onClick={nextimage}>
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
}

export default Hero;
