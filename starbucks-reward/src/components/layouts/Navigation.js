import classes from "./Navigation.module.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div id={classes.container}>
      <header>
        <img src={logo} alt="logo" />
        <nav>
          <ul>
            <li>
              <Link to={"#"}>Menu</Link>
            </li>
            <li>
              <Link to={"#"}>Rewards</Link>
            </li>
            <li>
              <Link to={"#"}>Gift Cards</Link>
            </li>
          </ul>
        </nav>
        <Link to={"#"} id={classes.left} className={classes.right_nav}>
          Find a Store
        </Link>
        <Link to={"#"} className={classes.right_nav}>
          <button className={"sign-in"}>Sign in</button>
        </Link>
        <Link to={"#"} className={classes.right_nav}>
          <button className={classes.join_now}>Join now</button>
        </Link>
      </header>
      <div className={classes.second_nav}>
        <h4>STARBUCKS REWARDS</h4>
      </div>
    </div>
  );
};

export default Navigation;
