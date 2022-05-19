import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ highlight }) => {
  return (
    <div
      className="highlight-card"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
    >
      <picture>
        <source
          srcSet={`/assets/highlights/${highlight.imgDesk}`}
          type="image/jpg"
          media="(min-width: 768px)"
        />
        <LazyLoadImage
          src={`/assets/highlights/${highlight.imgMobile}`}
          alt="about img"
          effect="blur"
        />
      </picture>
      <div className="card-content">
        <h3>{highlight.title}</h3>
        <p>{highlight.text}</p>
      </div>
    </div>
  );
};

export default Card;
