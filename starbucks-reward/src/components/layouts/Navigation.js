import Button from "./Button";
import "./Navigation.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
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
      <Link to={"#"} id={"left"} className={"right-nav"}>
        Find a Store
      </Link>
      <Link to={"#"} className={"right-nav"}>
        <Button text={"Sign in"} />
      </Link>
      <Link to={"#"} className={"right-nav"}>
        <Button text={"Join now"} />
      </Link>
    </header>
  );
};

export default Navigation;
