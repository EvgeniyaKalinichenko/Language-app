import { makeAutoObservable } from "mobx";

const API_BASE = "https://itgirlschool.justmakeit.ru/api";

class WordsStore {
  words = [];

  constructor() {
    makeAutoObservable(this);
  }

  loadData = async () => {
    try {
      const response = await fetch(`${API_BASE}/words`);
      if (!response.ok) {
        throw new Error("Failed to fetch words");
      }
      const data = await response.json();
      this.words = data;
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };

  addWord = async (value) => {
    try {
      const response = await fetch(`${API_BASE}/words/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          id: Math.random(),
          english: value.english,
          transcription: value.transcription,
          russian: value.russian,
          tags: [],
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to add word");
      }
      this.loadData();
    } catch (error) {
      console.error("Error adding word:", error);
    }
  };

  handleDeleteWord = async (id) => {
    try {
      const response = await fetch(`${API_BASE}/words/${id}/delete`, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Failed to delete word");
      }
      this.words = this.words.filter((word) => word.id !== id);
    } catch (error) {
      console.error("Error deleting word:", error);
    }
  };

  handleUpdateWord = async (id, updatedWord) => {
    try {
      const response = await fetch(`${API_BASE}/words/${id}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          english: updatedWord.english,
          transcription: updatedWord.transcription,
          russian: updatedWord.russian,
          tags: "",
          tags_json: '[""]',
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to update word");
      }
      this.words = this.words.map((word) =>
        word.id === id ? updatedWord : word
      );
    } catch (error) {
      console.error("Error updating word:", error);
    }
  };
}

export default WordsStore;
