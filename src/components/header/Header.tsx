import React from 'react';
import SearchContainer from "./search/Search.container";
import ProfileContainer from "./profile/Profile.container";
import classes from "./Header.module.scss";
import image from "../../assets/img/header/header.png";


const Header = () => {
  return(
    <header className={classes.header}>
      <div className={classes.headline}>
        <img src={image} width="40px" />
        Видеосервис
      </div>
      <div>
        <SearchContainer />
      </div>
      <div>
        <ProfileContainer />
      </div>
    </header>
  )
}

export default Header;