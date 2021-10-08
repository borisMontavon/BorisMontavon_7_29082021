import TagComponent from "./tag-component";

export default class FilterComponent {
    constructor(filterData) {
        this.state = {
            ...filterData, // uuid title type
            titleMatch: filterData.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
            disabled: false,
            displayed: true,
            isInDisplayedRecipe: true,
            tagComponent: new TagComponent(filterData)
        };
    }

    getCssClass() {
        switch (this.state.type) {
            case "ingredients":
                return this.state.disabled ? "ingredient-element ingredient-element-selected" : "ingredient-element";
            case "machines":
                return this.state.disabled ? "machine-element machine-element-selected" : "machine-element";
            case "ustensils":
                return this.state.disabled ? "ustensil-element ustensil-element-selected" : "ustensil-element";
            default:
                break;
        }

        return "";
    }

    getCssSelectedClass() {
        switch (this.state.type) {
            case "ingredients":
                return "ingredient-element-selected";
            case "machines":
                return "machine-element-selected";
            case "ustensils":
                return "ustensil-element-selected";
            default:
                break;
        }

        return "";
    }
}
