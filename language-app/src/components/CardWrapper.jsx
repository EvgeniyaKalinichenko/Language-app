import CardComponent from "./CardComponent";
import words from "../data";
import React, { useState } from "react";
import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";
import styles from "./Button.module.css";
import style from "./CardWrapper.module.css";

// export const Carousel = ({ cards }) => {
//   const [position, setPosition] = useState(0);
// };
const CardWrapper = () => {
  const [position, setPosition] = useState(0);

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
  return (
    <div className={style.cardWrapper}>
      <button
        className={styles.buttonArrow}
        style={{ fontSize: "42px" }}
        onClick={showPrevious}
      >
        <TiArrowLeftOutline />
      </button>
      <CardComponent
        // name={words[position].name}
        english={words[position].english}
        transcription={words[position].transcription}
        russian={words[position].russian}
      />
      <button
        className={styles.buttonArrow}
        style={{ fontSize: "42px" }}
        onClick={showNext}
      >
        <TiArrowRightOutline />
      </button>

      {/* <p className="number_of_card">
        {position + 1}/{wordsLength}
      </p> */}
    </div>
  );
};

export default CardWrapper;
