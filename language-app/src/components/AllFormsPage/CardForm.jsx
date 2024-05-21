import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import CardComponent from "../CardTestPage/CardComponent";
import styles from "../CardTestPage/Card.module.css";

function CardForm ({words}) {
  const [position, setPosition] = useState(0);

  const handleShowTranslation = (index) => {
    const updatedWords = [...words]; 
    updatedWords[index].showTranslation= true;
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
    loadData,
  }
})(observer(CardForm));
