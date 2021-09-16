export default class StaticListContainer {
    constructor() {
        if (!StaticListContainer._instance) {
            this.ingredientTags = [];
            this.machineTags = [];
            this.ustensilTags = [];

            StaticListContainer._instance = this;
        }

        return StaticListContainer._instance;
    }
}