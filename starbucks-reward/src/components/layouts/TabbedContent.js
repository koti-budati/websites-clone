import classes from "./TabbedContent.module.css";

const TabbedContent = (props) => {
  return (
    <div
      id={`${props.id_tag}`}
      className={`tabbed_content_select ${classes.tabbedcontent}`}
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
