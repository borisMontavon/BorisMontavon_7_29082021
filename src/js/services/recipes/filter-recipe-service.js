// For each recipes, if one have the value of the main input, we display it

import Store from "../../components/store";
import displayFilterElements from "../filter-elements/display-filter-elements-service";
import eventFilterElement from "../filter-elements/event-filter-element-service";
import displayAllRecipes from "./display-recipe-service";

const myArrayIncludes = (array, matchParam) => {
    for (let i = 0; i < array.length; i += 1) {
        if (array[i].includes(matchParam)) {
            return true;
        }
    }

    return false;
};

const myArraySome = (array, callback) => {
    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i])) {
            return true;
        }
    }

    return false;
};

// Updating the 3 dropdowns' lists based on "filtersList" (tags)
const updateFiltersLists = () => {
    const store = Store.getStore();

    for (let x = 0; x < store.ingredientDropdown.state.filterComponents.length; x += 1) {
        const filterComponent = store.ingredientDropdown.state.filterComponents[x];

        filterComponent.state.isInDisplayedRecipe = myArraySome(store.recipeComponents, (recipeComponent) =>
            recipeComponent.state.displayed && myArrayIncludes(recipeComponent.state.ingredientsMatch, filterComponent.state.titleMatch));
    }

    displayFilterElements(store.ingredientDropdown);
    eventFilterElement(store.ingredientDropdown);

    for (let y = 0; y < store.machineDropdown.state.filterComponents.length; y += 1) {
        const filterComponent = store.machineDropdown.state.filterComponents[y];

        filterComponent.state.isInDisplayedRecipe = myArraySome(store.recipeComponents, (recipeComponent) => 
            recipeComponent.state.displayed && recipeComponent.state.applianceMatch === filterComponent.state.titleMatch);
    }

    displayFilterElements(store.machineDropdown);
    eventFilterElement(store.machineDropdown);

    for (let z = 0; z < store.ustensilDropdown.state.filterComponents.length; z += 1) {
        const filterComponent = store.ustensilDropdown.state.filterComponents[z];

        filterComponent.state.isInDisplayedRecipe = myArraySome(store.recipeComponents, (recipeComponent) => 
            recipeComponent.state.displayed && myArrayIncludes(recipeComponent.state.ustensilsMatch, filterComponent.state.titleMatch));
    }

    displayFilterElements(store.ustensilDropdown);
    eventFilterElement(store.ustensilDropdown);
};

export default function filterRecipes() {
    const store = Store.getStore();
    const storeMainInputValue = store.mainInputValue;
    const storeFiltersList = store.filtersList;
    const storeRecipeComponents = store.recipeComponents;

    // If main input value is less than 3 characters and there is no tags displayed, the recipe is displayed
    if (!storeMainInputValue.length && !storeFiltersList.length) {
        for (let i = 0; i < storeRecipeComponents.length; i += 1) {
            const recipeComponent = storeRecipeComponents[i];

            recipeComponent.state.displayed = true;
        }
    // Else we browse the recipe datas to see if it match the main input value / tags displayed
    } else {
        for (let i = 0; i < storeRecipeComponents.length; i += 1) {
            let displayRecipe = true;
            const recipeComponent = storeRecipeComponents[i];
    
            // Filter with the main input value
            if (!myArrayIncludes(recipeComponent.state.ingredientsMatch, storeMainInputValue)
                && !recipeComponent.state.descriptionMatch.includes(storeMainInputValue)
                && !recipeComponent.state.nameMatch.includes(storeMainInputValue)) {
                    displayRecipe = false;
            }
    
            // Filter with the "filtersList" (tags)
            for (let y = 0; y < storeFiltersList.length; y += 1) {
                const filter = storeFiltersList[y];
    
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
