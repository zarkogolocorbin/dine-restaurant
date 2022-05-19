import React from "react";
import Card from "./Card";

import { highlights } from "../highlights";

import "./Highlight.css";

const Highlight = () => {
  return (
    <section className="highlight">
      <div className="section-center highlight-center">
        <div className="highlight-header">
          <h2>A few highlights from our menu</h2>
          <p>
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </p>
        </div>
        <div className="section-content">
          {highlights.map((highlight) => {
            return <Card highlight={highlight} key={highlight.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlight;
