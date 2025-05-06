import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import CardComponent from "../CardTestPage/CardComponent";
import styles from "../CardTestPage/Card.module.css";

function CardForm({ wordsStore }) {
  const { words, loadData } = wordsStore;

  useEffect(() => {
    loadData();
  }, []);

  const handleShowTranslation = (index) => {
    if (words[index]) {
      words[index].showTranslation = true;
    }
  };

  return (
    <div className={styles.cards}>
      {words.map((word, index) => (
        <CardComponent
          key={word.id || index}
          english={word.english}
          transcription={word.transcription}
          russian={word.russian}
          btnClicked={() => handleShowTranslation(index)}
          showTranslation={word.showTranslation} 
        />
      ))}
    </div>
  );
}

export default inject("wordsStore")(observer(CardForm));
