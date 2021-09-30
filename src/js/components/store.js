export default class Store {
    constructor() {
        if (!Store._instance) {
            this.filtersList = [];
            this.recipeComponents = [];
            this.mainInputValue = "";

            Store._instance = this;
        }

        return Store._instance;
    }
}