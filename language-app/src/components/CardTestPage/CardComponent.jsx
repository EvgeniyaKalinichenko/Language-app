import styles from "./Card.module.css";

const CardComponent = ({
  english,
  transcription,
  russian,
  btnClicked,
  showTranslation,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.englishWord}>
        {english}
      </div>
      <div className={styles.transcription}>{transcription}</div>
      {showTranslation ? (
        <div className={styles.russianWord}>{russian}</div>
      ) : (
        <button className={styles.checkButton} onClick={btnClicked}>
          Проверить
        </button>
      )}
    </div>
  );
};

export default CardComponent;

