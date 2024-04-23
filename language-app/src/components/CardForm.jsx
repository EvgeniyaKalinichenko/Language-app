import { WordContext } from "./Context";
import CardComponent from "./CardTestPage/CardComponent";
import styles from "./CardTestPage/Card.module.css";
import { useContext } from "react";

function CardForm() {
  const { words } = useContext(WordContext);

  return (
    <div className={styles.cards}>
      {words.map((word) => (
        <CardComponent
          key={words.id}
          english={words.english}
          transcription={words.transcription}
          russian={words.russian}
          {...word}
        />
      ))}
    </div>
  );
}

export default CardForm;
