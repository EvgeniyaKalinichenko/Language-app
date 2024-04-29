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
}

export default WordsStore;