import Tab from "./Tab";
import styles from "./TabBar.module.css";

const TabBar = ({ tabs }) => {
  return (
    <div className={styles.tabBar}>
      <div style={{flex: 1}}></div>
      <div className={styles.tabContainer}>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            tab={tab}
          />
        ))}
      </div>
      <div style={{flex: 1}}></div>
    </div>
  );
};

export default TabBar;
