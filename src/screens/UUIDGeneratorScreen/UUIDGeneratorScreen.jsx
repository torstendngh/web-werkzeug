import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import styles from "./UUIDGeneratorScreen.module.css";
import Icon from "../../components/Icon/Icon";

const UUIDGeneratorScreen = () => {
  const [uuid, setUuid] = useState("");

  // Function to generate a new UUID and set it to state
  const generateUUID = () => {
    const newUuid = uuidv4();
    setUuid(newUuid);
  };

  const uuidv4 = () => {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  };

  const copyToClipboard = () => {
    if (uuid) {
      navigator.clipboard
        .writeText(uuid)
        .then(() => null)
        .catch((err) => alert("Failed to copy UUID: ", err));
    }
  };

  useEffect(() => {
    generateUUID();
  }, []);

  return (
    <div className={styles.uuidGenerator}>
      <div className={styles.inputContainer}>
        <button onClick={generateUUID}>
          <Icon icon={"refresh"}/>
        </button>
        <span className={styles.uuid}>{uuid}</span>
        <button onClick={copyToClipboard}>
          <Icon icon={"copyToClipboard"}/>
        </button>
      </div>
    </div>
  );
};

export default UUIDGeneratorScreen;
