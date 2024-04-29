// import words from "../data";
import CardComponent from "./CardTestPage/CardComponent";
import styles from "./CardTestPage/Card.module.css";
import { inject, observer } from "mobx-react";
import { useEffect } from "react";


function CardForm({words}) {
  return (
    <div className={styles.cards}>
      {words.map((word) => (
        <CardComponent
          key={words.id}
          english={words.english}
          transcription={words.transcription}
          russian={words.russian}
          {...word}
        />
      ))}
    </div>
  );
}

export default inject(({wordsStore})=>{
  const {words, loadData} = wordsStore;

  useEffect(()=>{
    loadData()
  },[]);

  return {
    words,
    loadData
  }
})(observer(CardForm));
