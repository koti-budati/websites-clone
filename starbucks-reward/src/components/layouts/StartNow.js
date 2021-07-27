import classes from "./StartNow.module.css";
import { Link } from "react-router-dom";
const StartNow = () => {
  return (
    <div id={classes.startnow}>
      <h2>Star Codes</h2>
      <p>
        Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll
        add Stars to your account.
      </p>
      <input type={"text"} placeholder={"Enter your Star Code"} />
      <br />
      <button>Submit</button>
      <br />
      <div id={classes.link}>
        <p>Have a receipt but don't have a code?</p>
        <p>
          Go to <Link to={"starbucks-stars.com"}>starbucks-stars.com</Link> to
          upload your receipt and collect your Stars.
        </p>
      </div>
      <div>
        <h1>Questions?</h1>
        <p>
          We want to help in any way we can. You can ask your barista anytime or
          we’ve answered the most commonly asked questions <Link>right over here. </Link>
        </p>
      </div>
    </div>
  );
};

export default StartNow;
