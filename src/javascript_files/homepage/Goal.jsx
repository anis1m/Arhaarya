import React from "react";
import "../../css_files/homepage/Goal.css";
import land_image from "../../assets/Land_Images/WhatsApp Image 2024-11-27 at 6.28.31 AM.jpeg";

function Goal() {
  return (
    <section className="goal">
      <div>
        <blockquote className="goal-header">
          <hr />
          <h3>Best Way To Sale Property!</h3>
          <h1>About Our Goal</h1>
          <p>
            Our aim is to acquire, develop, and manage land assets to maximize
            value through strategic investments, efficient utilization, and
            sustainable development. This may involve buying and selling land,
            leasing, or transforming raw land into profitable ventures such as
            residential communities, commercial spaces, or agricultural
            operations, all while ensuring compliance with regulatory and
            environmental standards.
          </p>
        </blockquote>
        <figure>
          <img src={land_image} />
          <img src={land_image} />
          <img src={land_image} />
          <img src={land_image} />
        </figure>
        <aside>
          <blockquote>
            <h1>309</h1>
            <h2>SUCCESS</h2>
          </blockquote>
          <blockquote>
            <h1>478</h1>
            <h2>HAPPY CUSTOMER</h2>
          </blockquote>
          <blockquote>
            <h1>134</h1>
            <h2>ACTIVE PROPERTY</h2>
          </blockquote>
          <blockquote>
            <h1>134</h1>
            <h2>YEAR BUILD</h2>
          </blockquote>
        </aside>
      </div>
    </section>
  );
}

export default Goal;
