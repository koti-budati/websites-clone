import classes from "./Footer.module.css";
import FooterContent from "./FooterContent";
import fb from "../images/fb.png";
import insta from "../images/instagram.png";
import youtube from "../images/youtube.png";
import twitter from "../images/twitter.png";
import spotify from "../images/spotify.png";
import pinterest from "../images/pinterest.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const footer_list = [
    [
      { id: 1, name: "Our Heritage" },
      { id: 2, name: "Our Coffee" },
      { id: 3, name: "Stories and News" },
      { id: 4, name: "Investor Relations" },
      { id: 5, name: "Policies and Standards" },
      { id: 6, name: "Customerservices" },
    ],
    [
      { id: 1, name: "Culture and Values" },
      { id: 2, name: "Inclusion, Diversity, and Equity" },
      { id: 3, name: "College Achievement Plan" },
      { id: 4, name: "U.S. Careers" },
      { id: 5, name: "Internation Careers" },
    ],
    [
      { id: 1, name: "Ethical Sourcing" },
      { id: 2, name: "Leading in Sustainability" },
      { id: 3, name: "Strengthening Communities" },
      { id: 4, name: "Creating Opportunities" },
      { id: 5, name: "Global Social Impact Report" },
    ],
    [
      { id: 1, name: "Landlord Support Center" },
      { id: 2, name: "Suppliers" },
      { id: 3, name: "Corporate Gift Card Sales" },
      { id: 4, name: "Office and Foodservice Coffee" },
    ],
    [
      { id: 1, name: "Order on the App" },
      { id: 2, name: "Order on the Web" },
      { id: 3, name: "Delivery" },
      { id: 4, name: "Order and Pickup Options" },
      { id: 5, name: "Explore and Find Coffee for Home" },
    ],
  ];

  return (
    <footer>
      <div className={classes.footer}>
        <div className={classes}>
          <FooterContent footer_list={footer_list[0]} title={"About Us"} />
        </div>
        <div>
          <FooterContent footer_list={footer_list[1]} title={"Careers"} />
        </div>
        <div>
          <FooterContent footer_list={footer_list[2]} title={"Social Impact"} />
        </div>
        <div>
          <FooterContent
            footer_list={footer_list[3]}
            title={"For Bussiness Partners"}
          />
        </div>
        <div>
          <FooterContent
            footer_list={footer_list[4]}
            title={"Order and Pickup"}
          />
        </div>
      </div>
      <div id={classes.socials}>
        <hr />
        <div>
          <Link to={"#"}>
            <img src={spotify} alt={"Spotify"} />
          </Link>
          <Link to={"#"}>
            <img src={fb} alt={"facebook"} />
          </Link>
          <Link to={"#"}>
            <img src={pinterest} alt={"Pinterest"} />
          </Link>
          <Link to={"#"}>
            <img src={insta} alt={"Instagram"} />
          </Link>
          <Link to={"#"}>
            <img src={youtube} alt={"Youtube"} />
          </Link>
          <Link to={"#"}>
            <img src={twitter} alt={"Twitter"} />
          </Link>
        </div>
      </div>
      <div id={classes.policy}>
        <Link>Privacy Policy</Link>
        <span>|</span>
        <Link>Terms of Use</Link>
        <span>|</span>
        <Link>CA Supply Chain Act</Link>
        <span>|</span>
        <Link>Submit Your Idea</Link>
        <span>|</span>
        <Link>Cookie Preferences</Link>
        <p>© 2021 Starbucks Coffee Company. All rights reserved.</p>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
