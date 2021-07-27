import classes from "./Payment.module.css";
import PaymentCard from "./PaymentCard";
import logo_1A from "../images/1A.png";
import logo_2A from "../images/2A.png";
import logo_1B from "../images/1B.png";
import logo_2B from "../images/2B.png";
import logo_3A from "../images/3A.png";
const Payment = () => {
  return (
    <div className={classes.payment}>
      <h2>Cash or card, you earn Stars</h2>
      <p>
        No matter how you pay, you can earn Stars with your morning coffee.
        Those Stars add up to (really delicious) Rewards.
      </p>
      <div>
        <div className={classes.cards}>
          <div>
            <h2>1★ per dollar</h2>
            <p>Pay as you go</p>
          </div>
          <PaymentCard
            logo={logo_1A}
            h4={"Scan and pay separately"}
            p={"Use cash or credit/debit card at the register."}
          />
          <PaymentCard
            logo={logo_1B}
            h4={"Save payment in the app"}
            p={
              "Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step."
            }
          />
        </div>
        <hr className={classes.hr} />
        <div className={classes.cards}>
          <div>
            <h2>2★ per dollar</h2>
            <p>Add funds in the app</p>
          </div>

          <PaymentCard
            logo={logo_2A}
            h4={"Preload"}
            p={
              "To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app."
            }
          />
          <PaymentCard
            logo={logo_2B}
            h4={"Register your gift card"}
            p={
              "Then use it to pay through the app. You can even consolidate balances from multiple cards in one place."
            }
          />
        </div>
        <hr className={classes.hr} />
        <div className={classes.cards}>
          <div>
            <h2>Up to 3★ per dollar</h2>
            <p>With Starbucks Rewards Visa Card</p>
          </div>

          <PaymentCard
            logo={logo_3A}
            h4={"Earn Stars even faster"}
            p={
              "Earn Stars on all purchases you make with our credit cardopens in new window in and outside of Starbucks. Earn 1 Star per $1 when you digitally preload your Starbucks Card with your Starbucks® Rewards Visa® Card, and earn 2 Stars per $1 when you pay with that preloaded Starbucks Card."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
