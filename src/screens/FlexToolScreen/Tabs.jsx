import styles from "./Tabs.module.css";
import { useEffect, useState } from "react";
import Icon from "../../components/Icon/Icon";

const Tabs = ({ tabs, iconRotation = 0, onChange = () => null, selectedValue, label = undefined }) => {
  const [selected, setSelected] = useState(selectedValue || 0);

  useEffect(() => {
    // Adjust this logic if `selectedValue` is not an index
    // For example, if `selectedValue` should match a `css` property of a tab:
    const index = tabs.findIndex(tab => tab.css === selectedValue);
    setSelected(index >= 0 ? index : 0);
  }, [selectedValue, tabs]);

  const handleClick = (index) => {
    setSelected(index);
    onChange(tabs[index]);
  };

  return (
    <div className={styles.tabsContainer}>
      {!!label && <span className={styles.label}>{label}: <span className={styles.value}>{!!tabs[selected]?.css ? tabs[selected].css + ";" : tabs[selected].name}</span></span>}
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tab} ${selected === index ? styles.isSelected : ""}`}
            onClick={() => handleClick(index)}
          >
            <Icon icon={tab.icon} style={{ rotate: `${iconRotation}deg` }} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
