import Button from "./Button";
import "./Navigation.css";
import logo from "../images/logo.png";

const Navigation = () => {
  return (
    <nav>
      <div id={"container"}>
        <img src={logo} alt="logo" />
        <li>menu</li>
        <li>Rewards</li>
        <li>Gift Cards</li>
        <li id={"left"}>
          <i className={"fas fa-map-marker-alt"}></i>Find a store
        </li>

        <Button text="Sign in" />
        <Button text="Join now" />
      </div>
    </nav>
  );
};

export default Navigation;
