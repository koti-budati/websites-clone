import Navigation from "../layouts/navigation/Navigation";
import Hero from "../layouts/hero/Hero";
import Card from "../layouts/card/Card";
import classes from "./Shop.module.scss";
import card_1 from "../images/1.webp";
import card_2 from "../images/2.webp";
import card_3 from "../images/3.webp";

const Shop = () => {
  return (
    <div id={classes.shop}>
      <Navigation />
      <Hero />
      <div id={classes.card_layout}>
        <Card
          img_alt="one"
          img_src={card_3}
          gridName={"one"}
          title={"Traveler Console"}
          desc={"Ideal for music & audio. Adaptable to any workflow."}
          key={1}
        />
        <Card
          img_alt="one"
          img_src={card_1}
          gridName={"two"}
          title={"Studio Console"}
          desc={"Ideal for photo & video. Adaptable to any workflow."}
          key={2}
        />
        <Card
          img_alt="one"
          img_src={card_2}
          gridName={"three"}
          title={"Master Console"}
          desc={
            "Ideal for Virtual Production & Film. Adaptable to any workflow."
          }
          key={3}
        />
      </div>
    </div>
  );
};

export default Shop;
