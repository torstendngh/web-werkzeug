import TabBar from "../../components/TabBar/TabBar.jsx";
import styles from "./SnippetsScreen.module.css";
import tabs from "../../constants/snippets.js";
import { Outlet } from "react-router-dom";

const SnippetsScreen = () => {
  return (
    <div className={styles.snippetsScreen}>
      <TabBar tabs={tabs}/>
      <Outlet />
    </div>
  );
};

export default SnippetsScreen;
