import styles from "./SnippitsList.module.css";
import Button from '../../components/Button/Button'

const SnippitsList = ({ snippits }) => {
  const copyToClipboard = (string) => {
    navigator.clipboard.writeText(string);
  };
  return (
    <div className={styles.body}>
      {snippits.map((snippit, index) => (
        <div className={styles.container} key={index}>
          <h1 className={styles.title}>{snippit.title}</h1>
          <span className={styles.description}>{snippit.description}</span>
          <Button
            icon={"copyToClipboard"}
            style={{ alignSelf: "flex-start" }}
            onClick={() => copyToClipboard(snippit.code)}
          >
            Copy to Clipboard
          </Button>
          <span className={styles.code}>{snippit.code}</span>
        </div>
      ))}
    </div>
  );
};

export default SnippitsList;
