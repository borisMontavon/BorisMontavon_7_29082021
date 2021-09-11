import { displayList } from "./services/display-lists-service";
import { filterList } from "./services/filter-list";
import { getDistinctIngredientsList } from "./services/ingredients-list";
import { getDistinctMachineList } from "./services/machine-list";
import { getDistinctUstensilsList } from "./services/ustensils-list";
import { handleDropdown } from "./components/filter-button";
import { recipeDisplay } from "./components/recipe-display";
import Singleton from "./services/static-list-container";
import { toggleDarkMode } from "./components/dark-mode";
import topButton from "./components/top-button";

// Recipes' data fetch from json
const getData = async (url) => {
    const response = await fetch(url);

    return response.json();
};

// Home page initialization with json's data
const initializeData = async () => {
    const data = await getData("assets/data.json");

    // Handle the way the dropdown displays itself
    handleDropdown();

    // Render the list of ingredients, machines and ustensils in their respectives inputs
    let singleton = new Singleton();

    singleton.ingredientsList = getDistinctIngredientsList(data);
    singleton.machinesList = getDistinctMachineList(data);
    singleton.ustensilsList = getDistinctUstensilsList(data);

    displayList();
    filterList();

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