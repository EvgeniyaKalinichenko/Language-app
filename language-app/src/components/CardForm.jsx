import words from "./data";
import CardComponent from "./CardComponent";
import styles from "./Card.module.css";

function CardForm() {
  return (
    <div className={styles.cards}>
      {words.map((word) => (
        <CardComponent key={words.id} {...word} />
      ))}
    </div>
  );
}

export default CardForm;
