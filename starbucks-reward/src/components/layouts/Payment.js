import classes from "./Payment.module.css";
import PaymentCard from "./PaymentCard";
const Payment = () => {
  return (
    <div className={classes.payment}>
      <h2>Cash or card, you earn Stars</h2>
      <p>
        No matter how you pay, you can earn Stars with your morning coffee.
        Those Stars add up to (really delicious) Rewards.
      </p>
      <div className={classes.cards}>
        <PaymentCard />
        <hr className={classes.hr} />
        <PaymentCard />
        <hr className={classes.hr} />
        <PaymentCard />
      </div>
    </div>
  );
};

export default Payment;
