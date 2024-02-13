import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import tutorials from "../../../constants/tutorials";
import styles from "./TutorialScreen.module.css";
import Code from "../../../components/Code/Code";
import Icon from '../../../components/Icon/Icon'

const TutorialScreen = () => {
  const { tutorialId } = useParams();

  const navigate = useNavigate()

  const [currentTutorial, setCurrentTutorial] = useState(
    tutorials.find((tutorial) => tutorial.id === tutorialId)
  );

  return (
    <div className={styles.tutorialScreen}>
      <div className={styles.container}>
        <button className={styles.backButton} onClick={() => navigate("/tutorials")}>
          <Icon icon={"arrowLeft"}/>
          Back
        </button>
        {currentTutorial.content.map((component, index) =>
          component.type == "text" ? (
            <div key={index} className={styles.text}>{component.value}</div>
          ) : component.type == "title" ? (
            <div key={index} className={styles.title}>{component.value}</div>
          ) : component.type == "subtitle" ? (
            <div key={index} className={styles.subtitle}>{component.value}</div>
          ) : component.type == "code" ? (
            <Code key={index} language={component.language}>{component.value}</Code>
          ) : component.type == "list" ? (
            component.value.map((listItem, index) => (
                <div key={index} className={styles.listItem}><span className={styles.star}>✦</span> {listItem}</div>
            ))
          ): null
        )}
      </div>
    </div>
  );
};

export default TutorialScreen;
