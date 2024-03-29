import Button from "./Button";
import { useState } from "react";
import styles from "./Card.module.css";

const TableRow = ({ english, transcription, russian }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState({ english, transcription, russian });

  function handleChange(event) {
    setValue((prevValue) => {
      return {
        ...prevValue,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleEdit() {
    setIsSelected(!isSelected);
  }

  function handleSave() {
    setValue({ ...value });
    setIsSelected(!isSelected);
  }

  function handleClose() {
    setIsSelected(!isSelected);
    setValue({ english, transcription, russian });
  }

  return isSelected ? (
    <tr>
      <td>
        <input
          type="text"
          onChange={handleChange}
          value={value.english}
          name={"english"}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handleChange}
          value={value.transcription}
          name={"transcription"}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handleChange}
          value={value.russian}
          name={"russian"}
        />
      </td>
      <td className={styles.tdButton}>
        <Button text="Save" onClick={handleSave} />
        <Button text="Close" onClick={handleClose} />
      </td>
    </tr>
  ) : (
    <tr>
      <td>{value.english}</td>
      <td>{value.transcription}</td>
      <td>{value.russian}</td>
      <td className={styles.tdButton}>
        <Button text="Edit" onClick={handleEdit} />
        <Button text="Delete" />
      </td>
    </tr>
  );
};

export default TableRow;
