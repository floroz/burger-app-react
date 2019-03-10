import React from "react";
import img from "../../assets/images/burger-logo.png";
import classes from './Logo.css'

const logo = props => (
  <div className={classes.Logo}>
    <img src={img} alt="burger logo" />
  </div>
);

export default logo;
