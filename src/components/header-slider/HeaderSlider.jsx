import React from "react";

import "./index.css";

const HeaderSlider = (props) => {
  return (
    <section class="container">
      <div class="slider-wrapper">
        <div class="slider">
          <img
            id="slide-1"
            src={props.img1}
            alt="3D rendering of an imaginary orange planet in space"
          />
          <img
            id="slide-2"
            src={props.img2}
            alt="3D rendering of an imaginary green planet in space"
          />
          <img
            id="slide-3"
            src={props.img3}
            alt="3D rendering of an imaginary blue planet in space"
          />
          <img
            id="slide-4"
            src={props.img4}
            alt="3D rendering of an imaginary blue planet in space"
          />
          <img
            id="slide-5"
            src={props.img5}
            alt="3D rendering of an imaginary blue planet in space"
          />
        </div>
        <div class="slider-nav">
          <a href="#slide-1"></a>
          <a href="#slide-2"></a>
          <a href="#slide-3"></a>
          <a href="#slide-4"></a>
          <a href="#slide-5"></a>
        </div>
      </div>
    </section>
  );
};

export default HeaderSlider;
