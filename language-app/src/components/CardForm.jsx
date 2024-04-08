import words from "../data";
import CardComponent from "./CardTestPage/CardComponent";
import styles from "./CardTestPage/Card.module.css";

function CardForm() {
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
