import styles from "./TutorialsScreen.module.css";
import tutorials from "../../constants/tutorials";
import Tile from "./Tile";
import { useNavigate } from "react-router-dom";

const TutorialsScreen = () => {
  const navigate = useNavigate();

  const stringToUrlSlug = (str) => {
    // First, use encodeURIComponent to encode the string
    const encoded = encodeURIComponent(str);
    // Then, replace %20 with - to make the string more URL/SEO friendly
    return encoded.replace(/%20/g, "-");
  };

  return (
    <div className={styles.tutorialsScreen}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>🎓 Tutorials</span>
        <span className={styles.description}>Tutorials to get started</span>
      </div>
      <div className={styles.body}>
        {tutorials.map((tutorial, index) => (
          <Tile
            key={index}
            tutorial={tutorial}
            onClick={() =>
              navigate(
                "/tutorials/" +
                  tutorial.id +
                  "/" +
                  stringToUrlSlug(tutorial.title)
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default TutorialsScreen;
