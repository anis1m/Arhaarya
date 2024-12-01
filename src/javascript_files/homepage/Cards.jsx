import React from "react";
import land1 from "../../assets/Land_Images/WhatsApp Image 2024-11-27 at 6.28.28 AM (1).jpeg";
import "../../css_files/homepage/Cards.css";

function Cards({ isclose }) {
  return (
    <>
      <div className="card" onClick={() => isclose(true)}>
        <img src={land1} />
        <aside>
          <h1>In League City 1.37 Acres property</h1>
          <h3>League City, Texas, USA</h3>
          {/*
          <blockquote>
            <button>5</button>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star-half-stroke"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </blockquote>*/}
        </aside>
        {/*<blockquote className="card-footer">
          <mark>
            <h4>$55000</h4>
          </mark>
          <mark>
            <i class="fa-solid fa-chart-area"></i>
            <h4>1.37 Acres</h4>
          </mark>
          <mark>
            <h4 style={{ color: "green" }}>Available</h4>
          </mark>
        </blockquote>*/}
      </div>
    </>
  );
}

export default Cards;
