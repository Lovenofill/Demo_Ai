import { makeAutoObservable } from "mobx";
import { Book } from "../data/mockdata";

class ItemStore {
    items: Book[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    getItem(items: Book[]) {
        this.items = items
    }

    setItem(items: Book[]) {
        this.items = items

        window.localStorage.setItem("product", JSON.stringify(this.items))
    }

    get itemCount() {
        const count = this.items?.length
        if (count !== undefined) {
            return this.items?.length
        }
        return [];
    }
}

const itemStore = new ItemStore();
export default itemStore;
