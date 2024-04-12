import Button from "../Button/Button";
import { useState } from "react";
import styles from "./Table.module.css";

const TableRow = ({ english, transcription, russian }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState({ english, transcription, russian });
  const [errors, setErrors] = useState({
    english: false,
    transcription: false,
    russian: false,
  });
  const disabledBtn = Object.values(errors).some((element) => element);

  function handleChange(event) {
    setValue((prevValue) => {
      return {
        ...prevValue,
        [event.target.name]: event.target.value,
      };
    });
    setErrors({
      ...errors,
      [event.target.name]:
        event.target.value.trim() === "" ? "Field cannot be empty" : false,
    });
  }

  function handleEdit() {
    setIsSelected(!isSelected);
  }

  function handleSave() {
    if (value.english.match(/[а-яА-ЯЁё0-9]/g)) {
      setErrors({
        ...errors,
        english: "Please use English alphabet".toUpperCase(),
      });
    } else if (value.russian.match(/[A-Za-z0-9]/g)) {
      setErrors({
        ...errors,
        russian: "Please use Cyrillic alphabet".toUpperCase(),
      });
    } else {
      setValue({ ...value });
      setIsSelected(!isSelected);
    }
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
          className={errors.english ? styles.errorInput : " "}
        />
        <p className={styles.errorParagraph}>
          {errors.english && errors.english}
        </p>
      </td>
      <td>
        <input
          type="text"
          onChange={handleChange}
          value={value.transcription}
          name={"transcription"}
          className={errors.transcription ? styles.errorInput : " "}
        />
        <p className={styles.errorParagraph}>
          {errors.transcription && errors.transcription}
        </p>
      </td>
      <td>
        <input
          type="text"
          onChange={handleChange}
          value={value.russian}
          name={"russian"}
          className={errors.russian ? styles.errorInput : " "}
        />
        <p className={styles.errorParagraph}>
          {errors.russian && errors.russian}
        </p>
      </td>
      <td className={styles.tdButton}>
        <Button text="Save" onClick={handleSave} disabled={disabledBtn} />
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
