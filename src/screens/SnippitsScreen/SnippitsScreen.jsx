import React, { useState } from "react";
import TabBar from "../../components/TabBar/TabBar";
import styles from "./SnippitsScreen.module.css";
import tabs from "../../constants/snippits.js";
import { Outlet } from "react-router-dom";

const SnippitsScreen = () => {
  return (
    <div className={styles.snippitsScreen}>
      <TabBar tabs={tabs}/>
      <Outlet />
    </div>
  );
};

export default SnippitsScreen;
