import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import TableRow from "./TableRow";
import NewWordInput from './NewWordInput';
import styles from "./Table.module.css";

function Table  ({words})  {
  return (
    <div className="homePage">
    <NewWordInput />
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

