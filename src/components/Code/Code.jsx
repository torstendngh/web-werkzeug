import { useEffect, useRef } from "react";
import hljs from "highlight.js";
import styles from "./Code.module.css";
import './customTheme.css';

const Code = ({ children, language }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      if (codeRef.current.dataset.highlighted) {
        delete codeRef.current.dataset.highlighted;
      }
      hljs.highlightElement(codeRef.current);
    }
  }, [children, language]);

  return (
    <pre className={styles.code}>
      <code ref={codeRef} className={`language-${language}`}>
        {children}
      </code>
    </pre>
  );
};

export default Code;
