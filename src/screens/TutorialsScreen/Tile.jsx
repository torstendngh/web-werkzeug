import { useEffect, useRef, useState } from "react";
import styles from "./Tile.module.css";
import {generateRandomPastelColor} from '../../utils/color'

const Tile = ({ tutorial, onClick }) => {
  const tileRef = useRef(null);
  const [currentColor, setCurrentColor] = useState(generateRandomPastelColor())

  useEffect(() => {
    tileRef.current.style.setProperty("--glowColor", `${currentColor}1A`);
    tileRef.current.style.setProperty("--backgroundColor", `${currentColor}4A`);
    tileRef.current.style.setProperty("--borderColor", `${currentColor}`);

    const handleMouseMove = (e) => {
      const rect = tileRef.current.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      tileRef.current.style.setProperty("--mouse-x", `${x}px`);
      tileRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    const tileContainer = tileRef.current;

    if (tileContainer) {
      tileContainer.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (tileContainer) {
        tileContainer.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <button className={styles.tile} ref={tileRef} onClick={onClick}>
      <span className={styles.title}>{tutorial.title}</span>
      <div className={styles.tagsContainer}>
        {tutorial.tags.map((tag, index) => (
          <div key={index} className={styles.tag}>
            {tag}
          </div>
        ))}
      </div>
    </button>
  );
};

export default Tile;
