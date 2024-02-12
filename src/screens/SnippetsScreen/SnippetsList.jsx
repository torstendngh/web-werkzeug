import styles from "./SnippetsList.module.css";
import Button from "../../components/Button/Button";
import Code from "../../components/Code/Code";

const SnippetsList = ({ snippets }) => {
  const copyToClipboard = (string) => {
    navigator.clipboard.writeText(string);
  };
  return (
    <div className={styles.body}>
      {snippets.map((snippet, index) => (
        <div className={styles.container} key={index}>
          <h1 className={styles.title}>{snippet.title}</h1>
          <span className={styles.description}>{snippet.description}</span>
          <Button
            icon={"copyToClipboard"}
            style={{ alignSelf: "flex-start" }}
            onClick={() => copyToClipboard(snippet.code)}
          >
            Copy to Clipboard
          </Button>
          <Code language={snippet.language}>{snippet.code}</Code>
        </div>
      ))}
    </div>
  );
};

export default SnippetsList;
