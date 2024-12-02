import React from "react";

import "../../css_files/homepage/Cards.css";

function Cards({ isclose, land, title, location }) {
  return (
    <>
      <div className="card">
        <img src={land} />
        <aside>
          <h1>{title}</h1>
          <h3>{location}</h3>
          {/*
          <blockquote>
            <button>5</button>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star-half-stroke"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </blockquote>*/}
          <button onClick={() => isclose(true)}>Enquire Now</button>
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
