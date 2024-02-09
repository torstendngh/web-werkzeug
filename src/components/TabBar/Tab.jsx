import { NavLink } from "react-router-dom";
import Icon from "../Icon/Icon";
import styles from "./Tab.module.css";

const Tab = ({ tab }) => {
  return (
    <NavLink
      to={tab.path}
      className={({ isActive }) =>
        isActive ? `${styles.isSelected} ${styles.tab}` : styles.tab
      }
    >
      <div className={styles.icon} style={{ color: tab.color }}>
        <Icon icon={tab.icon} />
      </div>
      {tab.label}
    </NavLink>
  );
};

export default Tab;
