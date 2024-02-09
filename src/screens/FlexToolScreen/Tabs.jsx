import styles from "./Tabs.module.css";
import { useEffect, useState } from "react";
import Icon from "../../components/Icon/Icon"

const Tabs = ({ tabs, iconRotation = 0, onChange = () => null, selectedIndex, label }) => {
  const [selected, setSelected] = useState(selectedIndex || 0);

  const handleClick = (index) => {
    setSelected(index)
    onChange(tabs[index])
  }

  useEffect(() => {
    const defaultIndex = tabs.findIndex(value => value?.isDefault === true)
    setSelected(defaultIndex == -1 ? 0 : defaultIndex)
  }, [])

  return (
    <div className={styles.tabsContainer}>
        <span className={styles.label}>{label}: <span className={styles.value}>{!!tabs[selected]?.css ? tabs[selected].css + ";" : tabs[selected].name}</span></span>
        <div className={styles.tabs}>
        {tabs.map((tab, index) => (
            <button
            key={index}
            className={`${styles.tab} ${selected == index ? styles.isSelected : ""}`}
            onClick={() => handleClick(index)}
            >
            <Icon icon={tab.icon} style={{rotate: `${iconRotation}deg`}}/>
            </button>
        ))}
        </div>
    </div>
  );
};

export default Tabs;
