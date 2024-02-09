import { useNavigate } from "react-router-dom";
import Icon from "../Icon/Icon";
import styles from "./Tab.module.css";

const Tab = ({ tab }) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(tab.path)
  }

  return (
    <button
      className={`${styles.tab} ${window.location.pathname == tab.path ? styles.isSelected : ""}`}
      onClick={handleClick}
      style={tab.style}
    >
      <div className={styles.icon} style={{ color: tab.color }}>
        <Icon icon={tab.icon} />
      </div>
      {tab.label}
    </button>
  );
};

export default Tab;
