import { lazy, Suspense } from "react";
// import Header from "../components/Header";
// import About from "../components/About";
// import Reservation from "../components/Reservation";
// import Footer from "../components/Footer";
// import Highlight from "../components/Highlight";
// import Events from "../components/Events";
import { Helmet } from "react-helmet-async";
import logoImage from "../assets/logo.svg";
import { Link } from "react-router-dom";

import "../components/Header.css";

const Header = lazy(() => import("../components/Header"));
const About = lazy(() => import("../components/About"));
const Reservation = lazy(() => import("../components/Reservation"));
const Footer = lazy(() => import("../components/Footer"));
const Highlight = lazy(() => import("../components/Highlight"));
const Events = lazy(() => import("../components/Events"));

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Dine Restaurant</title>
        <meta
          name="description"
          content="Restaurant intended for family gatherings, special events and social events "
        />
        <meta
          name="keywords"
          content="dine restaurant,restaurant, best food, social events, special events, family gathering  "
        />
      </Helmet>

      <Suspense fallback={<p>...loading</p>}>
        <Header>
          <header className="header-container">
            <div className="section-center">
              <div className="header-content">
                <div className="logo">
                  <img src={logoImage} alt="" />
                </div>
                <h1 className="header-title">Exquisite dining since 1989</h1>
                <p className="header-paragraph">
                  Experience our seasonal menu in beautiful country
                  surroundings. Eat the freshest produce from the comfort of our
                  farmhouse.
                </p>
                <Link to="/booking">
                  <button className="btn">book a table</button>
                </Link>
              </div>
            </div>
          </header>
        </Header>
      </Suspense>

      <Suspense fallback={<p>...loading</p>}>
        <About />
      </Suspense>
      <Suspense fallback={<p>...loading</p>}>
        <Highlight />
      </Suspense>
      <Suspense fallback={<p>...loading</p>}>
        <Events />
      </Suspense>
      <Suspense fallback={<p>...loading</p>}>
        <Reservation />
      </Suspense>
      <Suspense fallback={<p>...loading</p>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
