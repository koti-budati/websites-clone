import Button from "./Button";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <div id={"container"}>
        
        <li>menu</li>
        <li>Rewards</li>
        <li>Gift Cards</li>
        <li id={"left"}>Find a store</li>

        <Button text="Sign in" />
        <Button text="Join now" />
      </div>
    </nav>
  );
};

export default Navigation;
