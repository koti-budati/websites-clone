import Navigation from "../layouts/navigation/Navigation";
import Hero from "../layouts/hero/Hero";
import Card from "../layouts/card/Card";
import Footer from "../layouts/footer/Footer";
import classes from "./Shop.module.scss";
import card_1 from "../images/1.webp";
import card_2 from "../images/2.webp";
import card_3 from "../images/3.webp";
import cover from "../images/cover.png";

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
          price={"399.00"}
        />
        <Card
          img_alt="one"
          img_src={card_1}
          gridName={"two"}
          title={"Studio Console"}
          desc={"Ideal for photo & video. Adaptable to any workflow."}
          price={"$499.00"}
        />
        <Card
          img_alt="one"
          img_src={card_2}
          gridName={"three"}
          title={"Master Console"}
          desc={
            "Ideal for Virtual Production & Film. Adaptable to any workflow."
          }
          price={"$799.00"}
        />
      </div>
      <div id={classes.cover}>
        <img src={cover} alt={"cover"} />
        <div>
          <h1>Create Your Own Console</h1>
          <p>Add-on to make it perfect.</p>
        </div>
      </div>
      <div id={classes.items}>
        <Card
          img_alt="one"
          img_src={card_2}
          title={"Monogram core"}
          price={"$149.00"}
        />
        <Card
          img_alt="one"
          img_src={card_2}
          title={"Orbiter module"}
          price={"$149.00"}
        />
        <Card
          img_alt="one"
          img_src={card_2}
          title={"dial module"}
          price={"$99.00"}
        />
        <Card
          img_alt="one"
          img_src={card_2}
          title={"slider module"}
          price={"$129.00"}
        />
        <Card
          img_alt="one"
          img_src={card_2}
          title={"essential keys module"}
          price={"$99.00"}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Shop;
