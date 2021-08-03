import Navigation from "../layouts/navigation/Navigation";
import Hero from "../layouts/hero/Hero";
import Card from "../layouts/card/Card";
import classes from "./Shop.module.css";

const Shop = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <div id={classes.card_layout}>
        <Card img_alt="one" />
        <Card img_alt="one" />
        <Card img_alt="one" />
      </div>
    </div>
  );
};

export default Shop;
