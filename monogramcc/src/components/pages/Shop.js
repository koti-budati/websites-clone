import Navigation from "../layouts/navigation/Navigation";
import Hero from "../layouts/hero/Hero";
import Card from "../layouts/card/Card";
import classes from "./Shop.module.css";
import card_1 from "../images/1.webp";

const Shop = () => {
  return (
    <div id={classes.shop}>
      <Navigation />
      <Hero />
      <div id={classes.card_layout}>
        <Card img_alt="one" img_src={card_1}  />
        <Card img_alt="one" img_src={card_1} />
        <Card img_alt="one" img_src={card_1} />
      </div>
    </div>
  );
};

export default Shop;
