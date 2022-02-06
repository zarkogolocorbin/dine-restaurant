import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

import iconDivide from "../assets/patterns/pattern-divide.svg";

import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="section-center">
        <div className="first-part">
          <div className="about-image">
            <picture>
              <source
                srcSet="/assets/about/enjoyable-place-desktop.jpg"
                type="image/jpg"
                media="(min-width: 1110px)"
              />
              <source
                srcSet="/assets/about/enjoyable-place-tablet.jpg"
                type="image/jpg"
                media="(min-width: 768px)"
              />
              <LazyLoadImage
                className="abc"
                src="/assets/about/enjoyable-place-mobile.jpg"
                alt="about img"
              />
            </picture>
          </div>
          <div className="a">
            <img src={iconDivide} alt="icon-divide" className="icon-divide" />
            <h2 className="about-title">Enjoyable place for all the family</h2>
            <p className="about-paragraph">
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
        </div>
        <div className="second-part">
          <div className="about-img">
            <picture>
              <source
                srcSet="/assets/about/locally-sourced-desktop.jpg"
                type="image/jpg"
                media="(min-width: 1110px)"
              />
              <source
                srcSet="/assets/about/locally-sourced-tablet.jpg"
                type="image/jpg"
                media="(min-width: 768px)"
              />
              <LazyLoadImage
                src="/assets/about/locally-sourced-mobile.jpg"
                alt="about img"
              />
            </picture>
          </div>
          <div className="b">
            <img src={iconDivide} alt="icon-divide" className="icon-divide" />
            <h2 className="about-title">The most locally sourced food</h2>
            <p className="about-paragraph">
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you’re eating the freshest, most
              sustainable food.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
