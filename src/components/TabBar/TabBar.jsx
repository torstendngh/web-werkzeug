import { useState } from "react";
import Tab from "./Tab";
import styles from "./TabBar.module.css";

const TabBar = ({ tabs, onChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
    onChange(index);
  };

  return (
    <div className={styles.tabBar}>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          icon={tab.icon}
          iconColor={tab.iconColor}
          isSelected={index == selectedTab}
          onClick={() => handleTabClick(index)}
        >
          {tab.label}
        </Tab>
      ))}
    </div>
  );
};

export default TabBar;
