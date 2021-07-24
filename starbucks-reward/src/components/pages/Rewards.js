import React from "react";
import Navigation from "../layouts/Navigation";
import Hero from "../layouts/Hero";
import Getting from "../layouts/Getting";

const Rewards = () => {
  document.title =
    "Starbucks Rewards- Order Ahead, Endless Extras, Free Coffee: Starbucks Coffee Company";
  return (
    <div>
      <Navigation />
      <Hero />
      <Getting />
    </div>
  );
};

export default Rewards;
