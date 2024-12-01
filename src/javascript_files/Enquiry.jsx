import React from "react";
import "../css_files/Enquiry.css";

function Enquiry({ isclose }) {
  return (
    <>
      <section className="enquiry">
        <form>
          <blockquote>
            <label>Name :</label>
            <input type="text" placeholder="Enter Name" />
          </blockquote>
          <blockquote>
            <label>Email :</label>
            <input type="email" placeholder="Enter Email" />
          </blockquote>
          <blockquote>
            <label>Subject :</label>
            <input type="text" placeholder="Enter Subject" />
          </blockquote>
          <blockquote>
            <label>Description :</label>
            <textarea rows={10} placeholder="Enter Description"></textarea>
          </blockquote>
          <button type="submit" id="form-submit">
            Submit
          </button>
          <button
            id="close-form"
            onClick={() => {
              isclose(false);
            }}
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </form>
      </section>
    </>
  );
}

export default Enquiry;
