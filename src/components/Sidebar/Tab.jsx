import { NavLink } from "react-router-dom";
import Icon from "../Icon/Icon";
import styles from "./Tab.module.css";

const Tab = ({ tab }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${styles.isSelected} ${styles.tab}` : styles.tab
      }
      to={tab.path}
      style={tab.style}
    >
      <div className={styles.icon} style={{ color: tab.color }}>
        <Icon icon={tab.icon} />
      </div>
      {tab.label}
    </NavLink>
  );
};

export default Tab;
