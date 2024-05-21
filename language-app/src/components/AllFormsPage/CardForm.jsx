import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import CardComponent from "../CardTestPage/CardComponent";
import styles from "../CardTestPage/Card.module.css";

function CardForm ({words, id}) {
  const [position, setPosition] = useState(0);
  const wordId = words.id;

  const handleShowTranslation = (index) => {
    // if (position === 0) {
    //   setPosition(words.length - 1);
    // } else {
    //   setPosition(position - 1);
    // }
    const updatedWords = [...words];
    
    updatedWords[index].showTranslation = true;
    setPosition(index);

  };

  return (
    <div className={styles.cards}>
      {words.map((word) => (
        <CardComponent
          key={words.id}
          english={words.english}
          transcription={words.transcription}
          russian={words.russian}
          btnClicked={() => handleShowTranslation(position)}
          showTranslation={words[position].showTranslation}
          wordId={wordId}
          {...word}
        />
      ))}
    </div>
  );
}

export default inject(({wordsStore})=>{
  const {words, loadData, id} = wordsStore;

  useEffect(()=>{
    loadData()
  },[]);

  return {
    words,
    loadData,
    id
  }
})(observer(CardForm));
