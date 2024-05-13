import { makeAutoObservable } from 'mobx';

const API_ALL_WORDS = 'http://itgirlschool.justmakeit.ru/api/words';
class WordsStore {
    words = [];

    constructor() {
        makeAutoObservable(this);
    }

    loadData = async () => {
        try {
            const response = await fetch(`${API_ALL_WORDS}`);
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
            const response = await fetch(`/api/words/add`, {
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
                throw new Error("Failed to fetch add words");
            }
            this.loadData();
        } catch (error) {
            console.error("Error fetching words:", error);
        }
    };

    handleDeleteWord = async (id) => {
        console.log("id", id);
        try {
            const response = await fetch(`${API_ALL_WORDS}/${id}/delete`, {
                method: "POST",
            });

            if (!response.ok) {
                throw new Error("Failed to delete word");
            }
            this.words = this.words.filter((word) => word.id !== id);
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };


    handleUpdateWord = async (id, updatedWord) => {
        const body = {
            id: id,
            english: updatedWord.english,
            transcription: updatedWord.transcription,
            russian: updatedWord.russian,
            tags: "",
            tags_json: "[\"\"]",
        }

        try {
            const response = await fetch(
                `${API_ALL_WORDS}/${id}/update`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to update word");
            }
            // const data = await response.json();
            const updatedWords = this.words.map((word) => (word.id === id ? updatedWord : word));
            this.words = updatedWords;
            // setWords((prevWords) =>
            //     prevWords.map((word) => (word.id === id ? data : word))
            // );
        } catch (error) {
            console.error("Error updating word:", error);
        }
    };


}

export default WordsStore;