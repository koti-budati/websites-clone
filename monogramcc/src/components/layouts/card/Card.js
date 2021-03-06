import classes from "./Card.module.scss";
import { useState } from "react";

const Card = (props) => {
  const styel = {
    gridArea: props.gridName,
  };
  let [originalText, changeText] = useState(props.price);
  return (
    <div
      id={classes.card}
      style={styel}
      onMouseEnter={() => changeText("Shop now")}
      onMouseLeave={() => changeText(props.price)}
    >
      <img src={props.img_src} alt={props.img_alt} />
      <div>
        <h4>{props.title}</h4>
        <button id={"btn"}>{originalText}</button>
      </div>
      <p>{props.desc}</p>
    </div>
  );
};

export default Card;
