import Store from "../../components/store"
import { displayFilterElements } from "../filter-elements/display-filter-elements-service";
import { eventFilterElement } from "../filter-elements/event-filter-element-service";
import { displayAllRecipes } from "./display-recipe-service";

export const filterRecipes = () => {
    let store = Store.getStore();
    const storeMainInputValue = store.mainInputValue;
    const storeFiltersList = store.filtersList;
    const storeRecipeComponents = store.recipeComponents;

    if (!storeMainInputValue.length && !storeFiltersList.length) {
        storeRecipeComponents.forEach((recipeComponent) => {
            recipeComponent.state.displayed = true;
        });
    } else {
        storeRecipeComponents.map((recipeComponent) => {
            let displayRecipe = true;

            if (!recipeComponent.state.ingredientsMatch.some((ingredient) => ingredient.includes(storeMainInputValue)) &&
                !recipeComponent.state.descriptionMatch.includes(storeMainInputValue) &&
                !recipeComponent.state.nameMatch.includes(storeMainInputValue)) {
                    displayRecipe = false;
            }

            storeFiltersList.forEach((filter) => {
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
    }

    displayAllRecipes();
    updateFiltersLists();
}

const updateFiltersLists = () => {
    let store = Store.getStore();

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