import styles from "./Card.module.css";
import { useRef, useEffect } from "react";

const CardComponent = ({
  english,
  transcription,
  russian,
  btnClicked,
  showTranslation,
  position,
}) => {
  const checkButtonRef = useRef(null);

  useEffect(() => {
    console.log("positions", position);
    checkButtonRef.current.focus();
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
          ref={checkButtonRef}
          className={styles.checkButton}
          onClick={btnClicked}
        >
          Проверить
        </button>
      )}
    </div>
  );
};

export default CardComponent;
