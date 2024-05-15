import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";
import CardComponent from "./CardComponent";
import style from "./CardWrapper.module.css";



function CardWrapper ({words}) {
  const [position, setPosition] = useState(0);
  const [count, setCount] = useState(0);

  function showPrevious() {
    if (position === 0) {
      setPosition(words.length - 1);
    } else {
      setPosition(position - 1);
    }
  }
  function showNext() {
    if (position === words.length - 1) {
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
  }
  const handleShowTranslation = (index) => {
    setCount(count + 1);
    const updatedWords = [...words];
    updatedWords[index].showTranslation = true;
    setPosition(index);
  };

  return (
    <div>
      <p className={style.counter}>Изучено слов: {count} </p>
      <div className={style.cardWrapper}>
        <button className={style.buttonArrow} onClick={showPrevious}>
          <TiArrowLeftOutline />
        </button>
        <CardComponent
          english={words[position].english}
          transcription={words[position].transcription}
          russian={words[position].russian}
          btnClicked={() => handleShowTranslation(position)}
          showTranslation={words[position].showTranslation}
        />
        <button className={style.buttonArrow} onClick={showNext}>
          <TiArrowRightOutline />
        </button>
      </div>
      <p className={style.counter}>
        {position + 1}/{words.length}
      </p>
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
})(observer(CardWrapper));

