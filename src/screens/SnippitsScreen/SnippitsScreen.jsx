import React, { useState } from "react";
import TabBar from "../../components/TabBar/TabBar";
import styles from "./SnippitsScreen.module.css";
import snippits from "./Snippits";
import Button from "../../components/Button/Button";

const tabs = [
  {
    label: "JavaScript",
    icon: "javascript",
    iconColor: "#F7DF1E",
  },
  {
    label: "CSS",
    icon: "css",
    iconColor: "#93A9FF",
  },
  {
    label: "React JS",
    icon: "react",
    iconColor: "#93A9FF",
  },
];

const SnippitsScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const copyToClipboard = (string) => {
    navigator.clipboard.writeText(string)
  }

  return (
    <div className={styles.snippitsScreen}>
      <TabBar tabs={tabs} onChange={(x) => setSelectedTab(x)} />
      <div className={styles.body}>
        {selectedTab == 0 && (
          <>
            {snippits.javascript.map((snippit, index) => (
              <div className={styles.container} key={index}>
                <h1 className={styles.title}>{snippit.title}</h1>
                <span className={styles.description}>{snippit.description}</span>
                <Button icon={"copyToClipboard"} style={{alignSelf: "flex-start"}} onClick={() => copyToClipboard(snippit.code)}>Copy to Clipboard</Button>
                <span className={styles.code}>{snippit.code}</span>
              </div>
            ))}
          </>
        )}
        {selectedTab == 1 && (
          <>
            {snippits.css.map((snippit, index) => (
              <div className={styles.container} key={index}>
                <h1 className={styles.title}>{snippit.title}</h1>
                <span className={styles.description}>{snippit.description}</span>
                <Button icon={"copyToClipboard"} style={{alignSelf: "flex-start"}} onClick={() => copyToClipboard(snippit.code)}>Copy to Clipboard</Button>
                <span className={styles.code}>{snippit.code}</span>
              </div>
            ))}
          </>
        )}
        {selectedTab == 2 && (
          <>
            {snippits.react.map((snippit, index) => (
              <div className={styles.container} key={index}>
                <h1 className={styles.title}>{snippit.title}</h1>
                <span className={styles.description}>{snippit.description}</span>
                <Button icon={"copyToClipboard"} style={{alignSelf: "flex-start"}} onClick={() => copyToClipboard(snippit.code)}>Copy to Clipboard</Button>
                <span className={styles.code}>{snippit.code}</span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default SnippitsScreen;