import React from "react";

const Title = (props) => {
  document.title = props.title;
  return <div></div>;
};

export default Title;
