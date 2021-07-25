import classes from "./Getting.module.css";
import Cards from "./Cards";

const Getting = (props) => {
  return (
    <div className={classes.main}>
      <h2>{props.h2}</h2>
      <p>{props.paragraph}</p>
      <div className={classes.cards}>
        <Cards location={props.logo_1} h3={props.logo_1_h3} />
        <Cards location={props.logo_2} h3={props.logo_2_h3} />
        <Cards location={props.logo_3} h3={props.logo_3_h3} />
      </div>
    </div>
  );
};

export default Getting;
