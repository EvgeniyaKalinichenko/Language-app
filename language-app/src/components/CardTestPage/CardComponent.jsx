import styles from "./Card.module.css";
import { useEffect } from "react";

const CardComponent = ({
  english,
  transcription,
  russian,
  btnClicked,
  showTranslation,
  position,
  wordId,
}) => {

  useEffect(() => {
    console.log("positions", position);
  }, [position]);

  return (
    <div className={styles.cardContainer}>
      <div english={english} className="englishWord">
        {english}
      </div>
      <div className="transcription">{transcription}</div>
      {showTranslation && <div className="russianWord">{russian}</div>}
      {!showTranslation && (
        <button
          className={styles.checkButton}
          onClick={btnClicked(wordId)}
        >
          Проверить
        </button>
      )}
    </div>
  );
};

export default CardComponent;
