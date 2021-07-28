import classes from "./Footer.module.css";
import FooterContent from "./FooterContent";
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
      <hr />
    </footer>
  );
};

export default Footer;
