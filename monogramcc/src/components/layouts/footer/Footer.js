import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer id={classes.footer}>
      <div>
        <ul id={classes.address}>
          <li>monogram</li>
          <li>305 King St. W.</li>
          <li>Suite 502</li>
          <li>Kitchener, ON</li>
          <li>Canada</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
