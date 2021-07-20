import React from "react";
import "./Card.css";

const Card = (props) => {
  // const classes = "card " + props.className;
  // return <div className={classes}>{props.children}</div>;
  // const classes = "card " + props.className;
  return <div className={"cd-card " + props.className}>{props.children}</div>;
};

export default Card;
