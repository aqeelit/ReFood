import React, { Fragment } from "react";
import foodBanner from "../../assets/food-banner.png";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return <Fragment>
    <header className={classes.header}>
        <h1>ReFood</h1>
        <HeaderCartButton/>
    </header>
    <div className={classes['main-image']}>
        <img src={foodBanner} alt="Refood Banner!" />
    </div>
  </Fragment>;
};

export default Header;
