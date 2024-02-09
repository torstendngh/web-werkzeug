import styles from "./HomeScreen.module.css";
import Tile from "./Tile";
import tiles from "../../constants/screens";
import { useNavigate } from "react-router-dom";
import profilePicture from "../../assets/images/torstendngh.jpg";
import Icon from "../../components/Icon/Icon";

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homeScreen}>
      <div className={styles.body}>
        <div className={styles.container}>
          <h1 className={styles.title}>👋 Welcome</h1>
          <span className={styles.description}>
            This is WebWerkzeug.com, a collection of tools to help
            Web-Developers
          </span>
          <div className={styles.notification}>
            <Icon icon={"warning"}/>
            Under Development
          </div>
          <div className={styles.grid}>
            {tiles.slice(1).map((tile, index) => (
              <Tile
                key={index}
                title={tile.label}
                description={tile.description}
                icon={tile.icon}
                color={tile.color}
                onClick={() => navigate(tile.path)}
              />
            ))}
          </div>
        </div>
        <div className={styles.container}>
          <h1 className={styles.title}>Credits</h1>
          <span className={styles.description}>
            This is a work in progress project by:
          </span>
          <button className={styles.profileContainer} onClick={() => window.open("https://twitter.com/torstendngh", "_blank")}>
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
    </div>
  );
};

export default HomeScreen;
