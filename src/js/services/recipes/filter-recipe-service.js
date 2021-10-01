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
        for (let i = 0; i < storeRecipeComponents.length; i++) {
            let recipeComponent = storeRecipeComponents[i];

            recipeComponent.state.displayed = true;
        }
    } else {
        for (let i = 0; i < storeRecipeComponents.length; i++) {
            let displayRecipe = true;
            let recipeComponent = storeRecipeComponents[i];
    
            if (!myArrayIncludes(recipeComponent.state.ingredientsMatch, storeMainInputValue) &&
                !recipeComponent.state.descriptionMatch.includes(storeMainInputValue) &&
                !recipeComponent.state.nameMatch.includes(storeMainInputValue)) {
                    displayRecipe = false;
            }
    
            for (let y = 0; y < storeFiltersList.length; y++) {
                let filter = storeFiltersList[y];
    
                switch (filter.type) {
                    case "ingredients":
                        if (!myArrayIncludes(recipeComponent.state.ingredientsMatch, filter.title)) {
                            displayRecipe = false;
                        }
                        break;
                    case "machines":
                        if (recipeComponent.state.applianceMatch !== filter.title) {
                            displayRecipe = false;
                        }
                        break;
                    case "ustensils":
                        if (!myArrayIncludes(recipeComponent.state.ustensilsMatch, filter.title)) {
                            displayRecipe = false;
                        }
                        break;
                    default:
                        break;
                }
            }
    
            recipeComponent.state.displayed = displayRecipe;
        }
    }

    displayAllRecipes();
    updateFiltersLists();
}

const updateFiltersLists = () => {
    let store = Store.getStore();

    for (let x = 0; x < store.ingredientDropdown.state.filterComponents.length; x++) {
        let filterComponent = store.ingredientDropdown.state.filterComponents[x];

        filterComponent.state.isInDisplayedRecipe = myArraySome(store.recipeComponents, (recipeComponent) => 
            recipeComponent.state.displayed && myArrayIncludes(recipeComponent.state.ingredientsMatch, filterComponent.state.titleMatch)
        );
    }

    displayFilterElements(store.ingredientDropdown);
    eventFilterElement(store.ingredientDropdown);

    for (let y = 0; y < store.machineDropdown.state.filterComponents.length; y++) {
        let filterComponent = store.machineDropdown.state.filterComponents[y];

        filterComponent.state.isInDisplayedRecipe = myArraySome(store.recipeComponents, (recipeComponent) => 
            recipeComponent.state.displayed && recipeComponent.state.applianceMatch === filterComponent.state.titleMatch
        );
    }

    displayFilterElements(store.machineDropdown);
    eventFilterElement(store.machineDropdown);

    for (let z = 0; z < store.ustensilDropdown.state.filterComponents.length; z++) {
        let filterComponent = store.ustensilDropdown.state.filterComponents[z];

        filterComponent.state.isInDisplayedRecipe = myArraySome(store.recipeComponents, (recipeComponent) => 
            recipeComponent.state.displayed && myArrayIncludes(recipeComponent.state.ustensilsMatch, filterComponent.state.titleMatch)
        );
    }

    displayFilterElements(store.ustensilDropdown);
    eventFilterElement(store.ustensilDropdown);
}

const myArrayIncludes = (array, matchParam) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(matchParam)) {
            return true;
        }
    }

    return false;
}

const myArraySome = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }

    return false;
}