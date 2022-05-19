import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { events } from "../events";
import { Link } from "react-router-dom";

import "./Events.css";
const Events = () => {
  const [event, setEvent] = useState(events[0]);
  return (
    <section className="section-center">
      <div className="events">
        <div>
          <picture>
            <source
              srcSet={`/assets/events/${event.imgDesktop}`}
              type="image/jpg"
              media="(min-width: 1110px)"
            />
            <source
              srcSet={`/assets/events/${event.imgTablet}`}
              type="image/jpg"
              media="(min-width: 768px)"
            />
            <LazyLoadImage
              src={`/assets/events/${event.imgMobile}`}
              alt="about img"
            />
          </picture>
        </div>

        <div className="right-side">
          <h2>{event.title}</h2>
          <p>{event.text}</p>
          <Link to={"/booking"}>
            <button className="btn btn-dark">book a table</button>
          </Link>
          <div className="btn-events">
            <button
              className={`button-event ${event.id === 0 ? "active" : ""}`}
              onClick={() => setEvent(events[0])}
            >
              FAMILY GATHERING
            </button>
            <button
              className={`button-event ${event.id === 1 ? "active" : ""}`}
              onClick={() => setEvent(events[1])}
            >
              SPECIAL EVENTS
            </button>

            <button
              className={`button-event ${event.id === 2 ? "active" : ""}`}
              onClick={() => setEvent(events[2])}
            >
              SOCIAL EVENTS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
