import Store from "../../components/store"
import { displayFilterElements } from "../filter-elements/display-filter-elements-service";
import { eventFilterElement } from "../filter-elements/event-filter-element-service";
import { displayAllRecipes } from "./display-recipe-service";

export const filterRecipes = () => {
    let store = new Store();

    store.recipeComponents.map((recipeComponent) => {
        let displayRecipe = true;

        if (store.mainInputValue.length) {
            if (!recipeComponent.state.ingredientsMatch.includes(store.mainInputValue) &&
                !recipeComponent.state.descriptionMatch.includes(store.mainInputValue) &&
                !recipeComponent.state.nameMatch.includes(store.mainInputValue)) {
                    displayRecipe = false;
            }
        }

        store.filtersList.forEach((filter) => {
            switch (filter.type) {
                case "ingredients":
                    if (!recipeComponent.state.ingredientsMatch.includes(filter.title)) {
                        displayRecipe = false;
                    }
                    break;
                case "machines":
                    if (recipeComponent.state.applianceMatch !== filter.title) {
                        displayRecipe = false;
                    }
                    break;
                case "ustensils":
                    if (!recipeComponent.state.ustensilsMatch.includes(filter.title)) {
                        displayRecipe = false;
                    }
                    break;
                default:
                    break;
            }
        });

        recipeComponent.state.displayed = displayRecipe;
    });

    displayAllRecipes();

    updateFiltersLists();
}

const updateFiltersLists = () => {
    let store = new Store();

    store.ingredientDropdown.state.filterComponents.forEach((filterComponent) => {
        filterComponent.state.isInDisplayedRecipe = store.recipeComponents.some((recipeComponent) => recipeComponent.state.displayed && recipeComponent.state.ingredientsMatch.includes(filterComponent.state.titleMatch));
    });

    displayFilterElements(store.ingredientDropdown);
    eventFilterElement(store.ingredientDropdown);

    store.machineDropdown.state.filterComponents.forEach((filterComponent) => {
        filterComponent.state.isInDisplayedRecipe = store.recipeComponents.some((recipeComponent) => recipeComponent.state.displayed && recipeComponent.state.applianceMatch === filterComponent.state.titleMatch);
    });

    displayFilterElements(store.machineDropdown);
    eventFilterElement(store.machineDropdown);

    store.ustensilDropdown.state.filterComponents.forEach((filterComponent) => {
        filterComponent.state.isInDisplayedRecipe = store.recipeComponents.some((recipeComponent) => recipeComponent.state.displayed && recipeComponent.state.ustensilsMatch.includes(filterComponent.state.titleMatch));
    });

    displayFilterElements(store.ustensilDropdown);
    eventFilterElement(store.ustensilDropdown);
}