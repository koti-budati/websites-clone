import classes from "./Tabbed.module.css";
import { Link } from "react-router-dom";
import TabbedContent from "./TabbedContent";
import logo_1 from "../images/025.webp";
import logo_2 from "../images/050.webp";
import logo_3 from "../images/150.webp";
import logo_4 from "../images/200.webp";
import logo_5 from "../images/400.webp";

const Tabbed = () => {
  // const id_tag = ["25", "50", "150", "200", "400"];
  function free(tag) {
    const x = document.getElementsByClassName("tabbed_content_select");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tag).style.display = "flex";
  }
  return (
    <div className={classes.tabbed}>
      <div className={classes.topTabbed}>
        <h2>Get your favorites for free</h2>
        <div id={classes.nav}>
          <Link to={"#"} onClick={() => free("25")}>
            25
            <span>★</span>
            {/* <div></div> */}
          </Link>
          <Link to={"#"} onClick={() => free("50")}>
            50<span>★</span>
          </Link>
          <Link to={"#"} onClick={() => free("150")}>
            150<span>★</span>
          </Link>
          <Link to={"#"} onClick={() => free("200")}>
            200<span>★</span>
          </Link>
          <Link to={"#"} onClick={() => free("400")}>
            400<span>★</span>
          </Link>
        </div>
      </div>
      <div>
        <TabbedContent
          logo={logo_1}
          title={"Customize your drink"}
          para={
            "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup."
          }
          id_tag={"25"}
        />
        <TabbedContent
          logo={logo_2}
          title={"Brewed hot coffee, bakery item or hot tea"}
          para={
            "Pair coffee cake or an almond croissant with your fresh cup of hot brew."
          }
          id_tag={"50"}
        />
        <TabbedContent
          logo={logo_3}
          title={"Handcrafted drink, hot breakfast or parfait"}
          para={
            "Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink."
          }
          id_tag={"150"}
        />
        <TabbedContent
          logo={logo_4}
          title={"Salad, sandwich or protein box"}
          para={
            "Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box."
          }
          id_tag={"200"}
        />
        <TabbedContent
          logo={logo_5}
          title={"Select merchandise or at-home coffee"}
          para={
            "Take home a signature cup, a bag of coffee or your choice of select coffee accessories."
          }
          id_tag={"400"}
        />
      </div>
    </div>
  );
};

export default Tabbed;
