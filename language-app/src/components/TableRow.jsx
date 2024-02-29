import Button from "./Button";

const TableRow = ({ english, transcription, russian }) => {
  return (
    <tr>
      <td>{english}</td>
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
