// import words from "../../data";
import TableRow from "./TableRow";
import styles from "./Table.module.css";
import { inject, observer } from "mobx-react";
import { useEffect } from "react";

function Table  ({words})  {
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

export default inject(({wordsStore})=>{
  const {words, loadData} = wordsStore;

  useEffect(()=>{
    loadData()
  },[]);

  return {
    words,
    loadData
  }
})(observer(Table));

