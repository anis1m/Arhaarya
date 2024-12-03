import React, { useRef } from "react";
import "../../css_files/homepage/Gallery.css";
import i1 from "../../assets/Image 662.png";
import i2 from "../../assets/Image 663.png";

function Gallery() {
  const showimage = useRef([]);
  return (
    <div className="gallery">
      <hr />
      <h1>Gallery</h1>
      <aside>
        <img
          src={i1}
          ref={(el) => (showimage.current[0] = el)}
          onMouseEnter={() => {
            showimage.current[0].style.position = "absolute";
            showimage.current[0].style.width = "100%";
            showimage.current[0].style.bottom = "5rem";
            showimage.current[0].style.left = 0;
          }}
          onMouseLeave={() => {
            showimage.current[0].style.position = "unset";
          }}
        />
        <img
          src={i2}
          ref={(el) => (showimage.current[1] = el)}
          onMouseEnter={() => {
            showimage.current[1].style.position = "absolute";
            showimage.current[1].style.width = "100%";
            showimage.current[1].style.bottom = "5rem";
            showimage.current[1].style.left = 0;
          }}
          onMouseLeave={() => {
            showimage.current[1].style.position = "unset";
          }}
        />
      </aside>
    </div>
  );
}

export default Gallery;
