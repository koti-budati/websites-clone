import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div id={classes.card}>
      <img src={props.img_src} alt={props.img_alt} />
      <h4>{props.title}</h4>
      <p>{props.desc}</p>
    </div>
  );
};

export default Card;
