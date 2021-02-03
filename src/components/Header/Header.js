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
      <div className={styles.header__right}>
        {" "}
        <MenuIcon />
        <img
          className={styles.header__logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1920px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt=""
        />
      </div>

      <div className={styles.header__middle}>
        <input placeholder="Search" />
       
        <button className={styles.searchicon__button}>
          <SearchIcon />
        </button>
       </div>
       <MicIcon className={styles.mic__button} />

      <div>
        <VideoCallIcon className={styles.header__right} />
        <AppsIcon className={styles.header__right} />
        <NotificationsIcon className={styles.header__right} />
      </div>
    </div>
  );
};

export default Header;
