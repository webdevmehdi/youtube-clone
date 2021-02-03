import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import styles from "./Header.module.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <MenuIcon className={styles.MenuIcon} />
        <img
          className={styles.header__logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1920px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt=""
        />
      </div>

      <div className={styles.header__middle}>
        <input placeholder="Search" />
       <button className={styles.SearchIcon} ><SearchIcon /></button> 
        <MicIcon />
      </div>
      <div className={styles.Headerright}>
        <VideoCallIcon className={styles.header__icon} />
        <AppsIcon className={styles.header__icon } />
        <NotificationsIcon className={styles.header__icon} />
      </div>
    </div>
  );
};

export default Header;
