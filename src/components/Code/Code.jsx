import { useEffect, useRef } from "react";
import hljs from "highlight.js";
import styles from "./Code.module.css";
import './customTheme2.css';

const Code = ({ children, language }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      // Check if the element has already been highlighted
      if (codeRef.current.dataset.highlighted) {
        // Unset the `dataset.highlighted` to allow re-highlighting
        delete codeRef.current.dataset.highlighted;
      }
      // Apply highlighting
      hljs.highlightElement(codeRef.current);
    }
  }, [children, language]); // Depend on code and language to re-highlight if they change

  return (
    <pre className={styles.code}>
      <code ref={codeRef} className={`language-${language}`}>
        {children}
      </code>
    </pre>
  );
};

export default Code;
