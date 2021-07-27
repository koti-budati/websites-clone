import classes from "./PaymentCard.module.css";

const PaymentCard = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.logo} alt={"payment"} />
      <div>
        <h4>{props.h4}</h4>
        <p>{props.p}</p>
      </div>
    </div>
  );
};

export default PaymentCard;
