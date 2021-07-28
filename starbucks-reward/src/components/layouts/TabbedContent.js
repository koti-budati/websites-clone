import classes from "./TabbedContent.module.css";

const TabbedContent = (props) => {
  var tabbed = {
    display: "flex",
  };
  if (props.id_tag !== "25") {
    tabbed = {
      display: "none",
    };
  }
  return (
    <div
      id={`${props.id_tag}`}
      className={`tabbed_content_select ${classes.tabbedcontent}`}
      style={tabbed}
    >
      <img src={props.logo} alt={"Logo"} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default TabbedContent;
