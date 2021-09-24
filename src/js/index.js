import DropdownComponent from "./components/dropdown-component";
import RecipeComponent from "./components/recipe-component";
import Store from "./components/store";
import { toggleDarkMode } from "./services/dark-mode/dark-mode-service";
import { eventDropdownInput } from "./services/dropdown-input/event-dropdown-input-service";
import { toggleDropdowns } from "./services/dropdowns/dropdown-service";
import { displayFilterElements } from "./services/filter-elements/display-filter-elements-service";
import { eventFilterElement } from "./services/filter-elements/event-filter-element-service";
import { getDistinctIngredientsList } from "./services/ingredients/get-ingredients-list-service";
import { getDistinctMachineList } from "./services/machines/get-machines-list-service";
import { displayAllRecipes } from "./services/recipes/display-recipe-service";
import { topButton } from "./services/top-button/top-button-service";
import { getDistinctUstensilsList } from "./services/ustensils/get-ustensils-list-service";

// Recipes' data fetch from json
const getData = async (url) => {
    const response = await fetch(url);

    return response.json();
};

// Home page initialization with json's data
const initializeData = async () => {
    const data = await getData("assets/data.json");
    let store = new Store();

    // Recipes management
    data.forEach((recipeData) => {
        store.recipeComponents.push(new RecipeComponent(recipeData));
    });

    displayAllRecipes();

    // Dropdowns management
    store.ingredientDropdown = new DropdownComponent({
        type: "ingredients",
        containerHtmlId: "ingredients-dropdown-container",
        toggleDropdownHtmlId: "ingredients-search",
        dropdownHtmlId: "ingredients-list",
        inputHtmlId: "ingredients-input",
        iconHtmlId: "ingredients-dropdown-icon",
        filterElements: getDistinctIngredientsList(data)
    });

    store.machineDropdown = new DropdownComponent({
        type: "machines",
        containerHtmlId: "machines-dropdown-container",
        toggleDropdownHtmlId: "machine-search",
        dropdownHtmlId: "machines-list",
        inputHtmlId: "machines-input",
        iconHtmlId: "machines-dropdown-icon",
        filterElements: getDistinctMachineList(data)
    });

    store.ustensilDropdown = new DropdownComponent({
        type: "ustensils",
        containerHtmlId: "ustensils-dropdown-container",
        toggleDropdownHtmlId: "ustensils-search",
        dropdownHtmlId: "ustensils-list",
        inputHtmlId: "ustensils-input",
        iconHtmlId: "ustensils-dropdown-icon",
        filterElements: getDistinctUstensilsList(data)
    });

    displayFilterElements(store.ingredientDropdown);
    displayFilterElements(store.machineDropdown);
    displayFilterElements(store.ustensilDropdown);

    eventFilterElement(store.ingredientDropdown);
    eventFilterElement(store.machineDropdown);
    eventFilterElement(store.ustensilDropdown);

    eventDropdownInput(store.ingredientDropdown);
    eventDropdownInput(store.machineDropdown);
    eventDropdownInput(store.ustensilDropdown);

    // Handle the behavior of the dropdowns
    toggleDropdowns([store.ingredientDropdown, store.machineDropdown, store.ustensilDropdown]);
};

window.addEventListener("load", () => {
    initializeData();
    toggleDarkMode();
    topButton();
});