import "./Navigation.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div id={"container"}>
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
          <button>Sign in</button>
        </Link>
        <Link to={"#"} className={"right-nav"}>
          <button>Join now</button>
        </Link>
      </header>
      <div className={"second-nav"}>
        <h4>STARBUCKS REWARDS</h4>
      </div>
    </div>
  );
};

export default Navigation;
