import { useContext, useState } from "react";
import { WordContext } from "../Context";
import styles from "./Table.module.css";

const AddNewWord = () => {
  const { addWord } = useContext(WordContext);
  const [newWord, setNewWord] = useState({
    english: "",
    transcription: "",
    russian: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    setNewWord((word) => {
      return { ...word, [name]: value };
    });
  };

  const handleAddWord = (e) => {
    e.preventDefault();
    console.log("i/m here");
    console.log(newWord);
    addWord(newWord);
    setNewWord({ english: "", transcription: "", russian: "" });
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
        <button type="submit" onClick={handleAddWord}>
          Add
        </button>
      </form>
    </div>
  );
};
export default AddNewWord;
