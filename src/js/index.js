import { handleInputsDropdowns } from "./services/dropdowns/inputs-dropdowns-service";

import StaticListContainer from "./components/static-list-container";
import { getDistinctIngredientsList } from "./services/ingredients/get-ingredients-list-service";
import { getDistinctMachineList } from "./services/machines/get-machines-list-service";
import { getDistinctUstensilsList } from "./services/ustensils/get-ustensils-list-service";

import { displayIngredientsList } from "./services/ingredients/display-ingredients-list-service";
import { filterIngredientsList } from "./services/ingredients/ingredient-input-service";
import { ingredientsEventListener } from "./services/ingredients/ingredient-tag-service";
import { displayMachinesList } from "./services/machines/display-machines-list-service";
import { filterMachinesList } from "./services/machines/machine-input-service";
import { machinesEventListener } from "./services/machines/machine-tag-service";
import { displayUstensilsList } from "./services/ustensils/display-ustensils-list-service";
import { filterUstensilsList } from "./services/ustensils/ustensil-input-service";
import { ustensilsEventListener } from "./services/ustensils/ustensil-tag-service";

import { recipeDisplay } from "./services/recipes/recipe-display-service";

import { toggleDarkMode } from "./services/dark-mode/dark-mode-service";
import topButton from "./services/top-button/top-button-service";

// Recipes' data fetch from json
const getData = async (url) => {
    const response = await fetch(url);

    return response.json();
};

// Home page initialization with json's data
const initializeData = async () => {
    const data = await getData("assets/data.json");

    // Handle the way the dropdown displays itself
    handleInputsDropdowns();

    // Save the lists of ingredients, machines and ustensils after we removed the duplicates and plural
    let staticListContainer = new StaticListContainer();

    staticListContainer.ingredientsList = getDistinctIngredientsList(data);
    staticListContainer.machinesList = getDistinctMachineList(data);
    staticListContainer.ustensilsList = getDistinctUstensilsList(data);

    // Ingredients list display, input filter and event listener
    displayIngredientsList();
    filterIngredientsList();
    ingredientsEventListener();

    // Machines list display, input filter and event listener
    displayMachinesList();
    filterMachinesList();
    machinesEventListener();

    // Ustensils list display, input filter and event listener
    displayUstensilsList();
    filterUstensilsList();
    ustensilsEventListener();

    // Render all the recipes in its container
    const recipesContainer = document.getElementById("recipes-container");

    data.forEach((recipe) => {
        recipesContainer.insertAdjacentHTML("beforeend", recipeDisplay(recipe));
    });
};

window.addEventListener("load", () => {
    initializeData();
    toggleDarkMode();
    topButton();
});