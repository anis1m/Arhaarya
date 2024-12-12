import React, { useEffect, useRef } from "react";
import "../../css_files/homepage/Gallery.css";
import i1 from "../../assets/Image 662.png";
import i2 from "../../assets/Image 663.png";
import i3 from "../../assets/Image 678.png";

function Gallery({ gheight }) {
  const showimage = useRef([]);
  const ght = useRef();

  useEffect(() => {
    gheight(ght.current.scrollHeight);
  }, []);
  return (
    <div className="gallery" ref={ght}>
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
            showimage.current[0].style.zIndex = 5;
          }}
          onMouseLeave={() => {
            showimage.current[0].style.position = "unset";
            showimage.current[0].style.zIndex = 1;
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
            showimage.current[1].style.zIndex = 5;
          }}
          onMouseLeave={() => {
            showimage.current[1].style.position = "unset";
            showimage.current[1].style.zIndex = 1;
          }}
        />
        <img
          src={i3}
          ref={(el) => (showimage.current[2] = el)}
          onMouseEnter={() => {
            showimage.current[2].style.position = "absolute";
            showimage.current[2].style.width = "100%";
            showimage.current[2].style.bottom = "5rem";
            showimage.current[2].style.left = 0;
            showimage.current[2].style.zIndex = 5;
          }}
          onMouseLeave={() => {
            showimage.current[2].style.position = "unset";
            showimage.current[2].style.zIndex = 1;
          }}
        />
      </aside>
    </div>
  );
}

export default Gallery;
