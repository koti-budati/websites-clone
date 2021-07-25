import classes from "./PaymentCard.module.css";
import payment_logo from "../images/1A.png";

const PaymentCard = () => {
  return (
    <div className={classes.paymentcard}>
      <div>
        <h2>1★ per dollar</h2>
        <p>Pay as you go</p>
      </div>
      <div className={classes.card}>
        <img src={payment_logo} alt={"payment"} />
        <div>
          <h3>Scan and pay separately</h3>
          <p>Use cash or credit/debit card at the register.</p>
        </div>
      </div>
      <div className={classes.card}>
        <img src={payment_logo} alt={"payment"} />
        <div>
          <h3>Save payment in the app</h3>
          <p>
            Check-out faster by saving a credit/debit card or PayPal to your
            account. You’ll be able to order ahead or scan and pay at the
            register in one step.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
