import { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import Tab from "./Tab";
import Icon from "../Icon/Icon";
import tabs from '../../constants/screens'
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Sidebar = () => {

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 960);

  const navigate = useNavigate()
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 960);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.sidebar}>
      <div className={styles.titleContainer}>
        <Icon icon={"toolbox"} />
        <span className={styles.title}>WebWerkzeug</span>
      </div>
      {!!isWideScreen &&
        tabs.map((tab, index) => (
          <Tab
            key={index}
            tab={tab}
          />
        ))}
      {(!isWideScreen && location.pathname !== '/home') && (
        <button className={styles.menuButton} onClick={() => navigate("/")}>
          <Icon icon={"home"} />
        </button>
      )}
    </div>
  );
};

export default Sidebar;
