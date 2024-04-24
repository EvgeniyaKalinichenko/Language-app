import React, { useState, createContext, useEffect } from "react";

const WordContext = createContext();

const WordProvider = ({ children }) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const addWord = async (newWord) => {
    console.log("newWord", newWord);
    try {
      const response = await fetch(`api/words/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          english: newWord.english,
          transcription: newWord.transcription,
          russian: newWord.russian,
          tags: [],
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch add words");
      }

      setWords([...words, newWord]);
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };

  const loadData = async () => {
    try {
      const response = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch words");
      }
      const data = await response.json();
      setWords(data);
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };

  const handleDeleteWord = async (wordId) => {
    console.log("id", wordId);
    try {
      const response = await fetch(`api/words/${wordId}/delete`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to delete word");
      }
      console.log(words);
      setWords(words.filter((word) => word.id !== wordId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <WordContext.Provider
      value={{ words, addWord, setWords, handleDeleteWord }}
    >
      {children}
    </WordContext.Provider>
  );
};

export { WordProvider, WordContext };
