import Button from "./Button";
import { useState } from "react";

const TableRow = ({ english, transcription, russian }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState(english);
  // const [valueRussian, setValueRussian] = useState(russian);

  function getValue(event) {
    const newValue = event.target.value;
    setValue(newValue);
  }

  return (
    <tr>
      <td>
        {isSelected ? (
          <input
            type="text"
            onChange={getValue}
            value={value}
            onBlur={() => setIsSelected(false)}
          />
        ) : (
          <td onClick={() => setIsSelected(true)}>{value}</td>
        )}
      </td>
      <td>{transcription}</td>
      <td>{russian}</td>
      <td>
        <Button text="Save" />
        <Button text="Edit" />
        <Button text="Delete" />
      </td>
    </tr>
  );
};

export default TableRow;
