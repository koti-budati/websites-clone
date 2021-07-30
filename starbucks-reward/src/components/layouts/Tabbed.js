import classes from "./Tabbed.module.css";
import { useState } from "react";
import TabbedContent from "./TabbedContent";
import logo_1 from "../images/025.webp";
import logo_2 from "../images/050.webp";
import logo_3 from "../images/150.webp";
import logo_4 from "../images/200.webp";
import logo_5 from "../images/400.webp";

const tabsData = {
  25: {
    title: "Customize your drink",
    logo: logo_1,
    para: "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.",
  },

  50: {
    title: "Brewed hot coffee, bakery item or hot tea",
    logo: logo_2,
    para: "Pair coffee cake or an almond croissant with your fresh cup of hot brew.",
  },

  150: {
    title: "Handcrafted drink, hot breakfast or parfait",
    logo: logo_3,
    para: "Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.",
  },

  200: {
    title: "Salad, sandwich or protein box",
    logo: logo_4,
    para: "Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.",
  },

  400: {
    title: "Select merchandise or at-home coffee",
    logo: logo_5,
    para: "Take home a signature cup, a bag of coffee or your choice of select coffee accessories.",
  },
};

const Tabbed = () => {
  var [currentTab, changeTab] = useState(tabsData[25]);

  function link_tag(text) {
    return (
      <div onClick={() => changeTab(tabsData[text])}>
        {text}
        <span id={classes.star}>★</span>
        <mark className={classes.under}></mark>
      </div>
    );
  }

  return (
    <div className={classes.tabbed}>
      <div className={classes.topTabbed}>
        <h2>Get your favorites for free</h2>
        <div id={classes.nav}>
          {link_tag(25)}
          {link_tag(50)}
          {link_tag(150)}
          {link_tag(200)}
          {link_tag(400)}
        </div>
      </div>
      <div>
        <TabbedContent
          logo={currentTab.logo}
          title={currentTab.title}
          para={currentTab.para}
        />
      </div>
    </div>
  );
};

export default Tabbed;
