import { makeAutoObservable } from 'mobx';

class WordsStore {
    words = [];

    constructor() {
        makeAutoObservable(this);
    }

    loadData = async () => {
        try {
            const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words`);
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
            const response = await fetch(`http://sandbox.itgirlschool.ru/api/words/add`, {
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


    // handleUpdateWord = async (id, updatedWord) => {
    //     const body = {
    //         english: updatedWord.english,
    //         id: id,
    //         russian: updatedWord.russian,
    //         tags: "",
    //         tags_json: "[\"\"]",
    //         transcription: updatedWord.transcription
    //     }

    //     try {
    //         const response = await fetch(
    //             `${API_ALL_WORDS}/${id}/update`,
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify(body),
    //             }
    //         );

    //         if (!response.ok) {
    //             throw new Error("Failed to update word");
    //         }
    //         const data = await response.json();

    //         setWords((prevWords) =>
    //             prevWords.map((word) => (word.id === id ? data : word))
    //         );
    //     } catch (error) {
    //         console.error("Error updating word:", error);
    //     }
    // };

    // handleDeleteWord = async (wordId) => {
    //     console.log("id", wordId);
    //     try {
    //         const response = await fetch(`api/words/${wordId}/delete`, {
    //             method: "POST",
    //         });

    //         if (!response.ok) {
    //             throw new Error("Failed to delete word");
    //         }
    //         console.log(words);
    //         setWords(words.filter((word) => word.id !== wordId));
    //     } catch (error) {
    //         console.error("Error deleting task:", error);
    //     }
    // };
}

export default WordsStore;