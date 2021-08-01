import { Link } from "react-router-dom";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav id={classes.nav}>
      <div id={classes.left_nav}>
        <img src={""} alt={"alt"} />
        <Link to={"#"}>monogram</Link>
      </div>
      <div id={classes.right_nav}>
        <Link to={"#"}>How it works</Link>

        <Link to={"#"}>workflows</Link>

        <Link to={"#"}>download</Link>

        <Link to={"#"}>support</Link>

        <Link to={"#"}>
          <b>shop</b>
        </Link>
        <Link to={"#"}>
          <img src={""} alt={"shoping"} id={classes.shoping_bag} />{" "}
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
