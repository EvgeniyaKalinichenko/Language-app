import { makeAutoObservable } from 'mobx';

class WordsStore {
    words = [];

    constructor() {
        makeAutoObservable(this);
    }
}