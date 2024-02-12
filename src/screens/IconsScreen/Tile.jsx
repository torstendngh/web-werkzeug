import { useEffect, useRef } from "react";
import Icon from "../../components/Icon/Icon";
import styles from "./Tile.module.css";

const Tile = ({ tile, onClick }) => {
    const tileRef = useRef(null);
  
    useEffect(() => {
  
      tileRef.current.style.setProperty("--glowColor", `${tile.color}1A`);
      tileRef.current.style.setProperty("--borderColor", `${tile.color}`);
  
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
      <button className={styles.tile} ref={tileRef} style={{ '--tile-color': tile.color }} onClick={onClick}>
        <div className={styles.icon} style={{color: tile.color}}>
          {
            !!tile.icons && tile.icons.map((icon, index) => <Icon key={index} icon={icon} />)
          }
        </div>
        <span className={styles.title}>{tile.title}</span>
        <span className={styles.description}>{tile.url}</span>
        <div className={styles.detailsContainer}>
          <div className={styles.detailContainer}>
            <Icon icon={"iconAmount"}/>
            {tile.amount}
          </div>
          {
            !!tile.hasStrokeWidth &&
            <div className={styles.detailContainer}>
              <Icon icon={"hasStrokeWidth"}/>
              Custom Stroke
            </div>
          }
          {
            !!tile.hasResize &&
            <div className={styles.detailContainer}>
              <Icon icon={"canResize"}/>
              Custom Size
            </div>
          }
          {
            !!tile.hasColor &&
            <div className={styles.detailContainer}>
              <Icon icon={"hasColor"}/>
              Custom Color
            </div>
          }
        </div>
      </button>
    );
  };
  
  export default Tile;
