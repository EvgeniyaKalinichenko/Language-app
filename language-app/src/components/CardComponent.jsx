import styles from "./Card.module.css";
import React, { useState } from "react";

const CardComponent = ({ english, transcription, russian }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const handleShowTranslation = () => {
    setShowTranslation(true);
  };

  return (
    <div className={styles.cardContainer}>
      <div className="englishWord">{english}</div>
      <div className="transcription">{transcription}</div>
      {showTranslation && <div className="russianWord">{russian}</div>}
      {!showTranslation && (
        <button className={styles.checkButton} onClick={handleShowTranslation}>
          Проверить
        </button>
      )}
    </div>
  );
};

export default CardComponent;
