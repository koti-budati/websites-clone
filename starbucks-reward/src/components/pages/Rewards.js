import React from "react";
import Navigation from "../layouts/Navigation";
import Hero from "../layouts/Hero";
import Getting from "../layouts/Getting";
import Tabbed from "../layouts/Tabbed";
import Payment from "../layouts/Payment";
import StartNow from "../layouts/StartNow";
import InfoAdd from "../layouts/InfoAdd";
import Footer from "../layouts/Footer";
import logo_1 from "../images/getting-started-1@2x.webp";
import logo_2 from "../images/getting-started-2@2x.webp";
import logo_3 from "../images/getting-started-3@2x.webp";
import logo1_1 from "../images/1-fun-freebies.webp";
import logo1_2 from "../images/2-order-and-pay-ahead.webp";
import logo1_3 from "../images/3-get-to-free-faster.webp";

const Rewards = () => {
  document.title =
    "Starbucks Rewards- Order Ahead, Endless Extras, Free Coffee: Starbucks Coffee Company";
  return (
    <div>
      <Navigation />
      <Hero />
      <Getting
        h2={"Getting started is easy"}
        paragraph={"Earn Stars and get rewarded in a few easy steps."}
        logo_1={logo_1}
        logo_1_h3={"Create an account"}
        logo_2={logo_2}
        logo_2_h3={"Order and pay how you’d like"}
        logo_3={logo_3}
        logo_3_h3={"Earn Stars, get Rewards"}
      />
      <Tabbed />
      <Getting
        h2={"Endless Extras"}
        paragraph={
          "Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee."
        }
        logo_1={logo1_1}
        logo_1_h3={"Fun freebies"}
        logo_2={logo1_2}
        logo_2_h3={"Order & pay ahead"}
        logo_3={logo1_3}
        logo_3_h3={"Get to free faster"}
      />
      <Payment />
      <StartNow />
      <InfoAdd />
      <hr />
      <Footer />
    </div>
  );
};

export default Rewards;
