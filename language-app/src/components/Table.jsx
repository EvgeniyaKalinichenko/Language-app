import words from "../data";
import TableRow from "./TableRow";
import styles from "./Card.module.css";

const Table = () => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <td className={styles.td}>Word</td>
          <td className={styles.td}>Transcription</td>
          <td className={styles.td}>Translation</td>
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
