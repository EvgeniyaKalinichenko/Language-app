import words from "./data";
import TableRow from "./TableRow";
import styles from "./Card.module.css";

const Table = () => {
  return (
    <table className={styles.cardForm}>
      <thead className={styles.thead}>
        <tr>
          <td>Word</td>
          <td>Transcription</td>
          <td>Translation</td>
        </tr>
      </thead>
      <tbody>
        {words.map((word) => (
          <TableRow key={words.id} {...word} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
