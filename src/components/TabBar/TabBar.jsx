import Tab from "./Tab";
import styles from "./TabBar.module.css";

const TabBar = ({ tabs }) => {
  return (
    <div className={styles.tabBar}>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          tab={tab}
        />
      ))}
    </div>
  );
};

export default TabBar;
