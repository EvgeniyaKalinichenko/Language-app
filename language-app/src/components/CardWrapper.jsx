import CardComponent from "./CardComponent";
import words from "../data";

const CardWrapper = () => {
  return (
    <>
      <button>Next</button>
      <CardComponent
        english={words.english}
        transcription={words.transcription}
        russian={words.russian}
      />
      <button>Previous</button>
    </>
  );
};

export default CardWrapper;
