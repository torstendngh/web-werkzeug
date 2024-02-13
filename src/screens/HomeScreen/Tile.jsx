import styles from "./Tile.module.css";
import Icon from "../../components/Icon/Icon";
import { useRef, useEffect } from "react";

const Tile = ({ title, description, color, icon, onClick }) => {
  const tileRef = useRef(null);

  useEffect(() => {

    tileRef.current.style.setProperty("--glowColor", `${color}1A`);
    tileRef.current.style.setProperty("--backgroundColor", `${color}4A`);
    tileRef.current.style.setProperty("--borderColor", `${color}`);

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
    <button className={styles.tile} ref={tileRef} style={{ '--tile-color': color }} onClick={onClick}>
      <div className={styles.icon} style={{color: color}}>
        <Icon icon={icon} />
      </div>
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
    </button>
  );
};

export default Tile;
