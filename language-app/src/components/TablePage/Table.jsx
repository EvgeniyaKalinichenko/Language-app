// import words from "../../data";
import TableRow from "./TableRow";
import styles from "./Table.module.css";
import { useContext } from "react";
import { WordContext } from "../Context";
import AddNewWord from "./NewWordInputs";

const Table = () => {
  const { words } = useContext(WordContext);
  return (
    <div className="homePage">
      <AddNewWord />
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
    </div>
  );
};

export default Table;
