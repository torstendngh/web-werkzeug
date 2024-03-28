import React from "react";
import styles from "./SettingsScreen.module.css";
import Icon from "../../components/Icon/Icon";
import profilePicture from "../../assets/images/torstendngh.jpg";

const SettingsScreen = () => {
  return (
    <div className={styles.settingsScreen}>
      <div className={styles.container}>
        <span className={styles.description}>
          This is a work in progress project by:
        </span>
        <button
          className={styles.profileContainer}
          onClick={() =>
            window.open("https://twitter.com/torstendngh", "_blank")
          }
        >
          <div className={styles.profilePic}>
            <img src={profilePicture} alt="torstendngh's profile picture" />
          </div>
          <div className={styles.profileTextContainer}>
            <span className={styles.profileName}>@torstendngh</span>
            <span className={styles.profileDescription}>
              Software Developer
            </span>
          </div>
          <Icon icon={"openLink"} />
        </button>
      </div>
    </div>
  );
};

export default SettingsScreen;
