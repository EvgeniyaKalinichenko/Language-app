import {  useState } from "react";
import { inject, observer } from "mobx-react";
import styles from "./Table.module.css";

const AddNewWord = ({addWord}) => {
  const [newWord, setNewWord] = useState({
    english: "",
    transcription: "",
    russian: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log(value);
    setNewWord(newWord => {
      return {...newWord, [name]: value}
    });
  };

  const handleAddWord = (e) => {
    e.preventDefault();
    addWord(newWord);
    setNewWord({english:"", transcription:"", russian: ""})
  };

  return (
    <div className={styles.input}>
      <p className={styles.firstParagraph}>Add New Word</p>
      <form className={styles.formInputs}>
        <input
          type="text"
          name={"english"}
          placeholder="New word"
          value={newWord.english}
          onChange={handleChange}
        />
        <input
          type="text"
          name={"transcription"}
          placeholder="Transcription"
          value={newWord.transcription}
          onChange={handleChange}
        />
        <input
          type="text"
          name={"russian"}
          placeholder="Translation"
          value={newWord.russian}
          onChange={handleChange}
        />
        <button type="button" onClick={handleAddWord}>
          Add
        </button>
      </form>
    </div>
  );
};
export default inject(({wordsStore})=>{
    const {addWord} = wordsStore;

    return {
        addWord
    }
})(observer(AddNewWord));
