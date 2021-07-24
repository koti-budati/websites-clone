import classes from "./Getting.module.css";
import Cards from "./Cards";
import logo_1 from "../images/getting-started-1@2x.webp";
import logo_2 from "../images/getting-started-2@2x.webp";
import logo_3 from "../images/getting-started-3@2x.webp";

const Getting = () => {
  return (
    <div className={classes.main}>
      <h2>Getting started is easy</h2>
      <p>Earn Stars and get rewarded in a few easy steps.</p>
      <div className={classes.cards}>
        <Cards location={logo_1} h3={"Create an account"} />
        <Cards location={logo_2} h3={"Order and pay how you’d like"} />
        <Cards location={logo_3} h3={"Earn Stars, get Rewards"} />
      </div>
    </div>
  );
};

export default Getting;
