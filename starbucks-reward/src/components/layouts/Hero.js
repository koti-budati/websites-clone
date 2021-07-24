import React from "react";
import { Link } from "react-router-dom";
// import logo from "../images/xl-hero-desktop_2021.webp";
import classes from "./Hero.module.css";
const Hero = () => {
  return (
    <div id={classes.hero}>
      <h1>
        FREE COFFEE
        <br />
        IS A TAP AWAY
      </h1>
      <h3>Join now to start earning Rewards.</h3>
      <button>Join now</button>
      <h3>
        Or <Link to={"#"}>join in the app</Link> for the best experience
      </h3>
    </div>
  );
};

export default Hero;
