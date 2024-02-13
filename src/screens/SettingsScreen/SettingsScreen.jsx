import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import Toggle from "../../components/Toggle/Toggle";
import styles from './SettingsScreen.module.css'

const SettingsScreen = () => {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage(true, "isDarkTheme");

  const handleThemeChange = () => {
    setIsDarkTheme(!isDarkTheme)
    window.location.reload();
  }

  return (
    <div className={styles.settingsScreen}>
      <div className={styles.toggleContainer}>
        <Toggle onChange={handleThemeChange} value={isDarkTheme}/>
        Dark Mode
      </div>
    </div>
  );
};

export default SettingsScreen;
