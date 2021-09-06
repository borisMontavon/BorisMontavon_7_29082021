import { handleDropdown } from "./components/filter-button";
import { recipeDisplay } from "./components/recipe-display";
import { toggleDarkMode } from "./components/dark-mode";

// Recipes' data fetch from json
const getData = async (url) => {
    const response = await fetch(url);

    return response.json();
};

// Home page initialization with json's data
const initializeData = async () => {
    const data = await getData("assets/data.json");

    console.log(data);

    handleDropdown(data);

    const recipesContainer = document.getElementById("recipes-container");

    data.forEach((recipe) => {
        recipesContainer.insertAdjacentHTML("beforeend", recipeDisplay(recipe));
    });
};

window.addEventListener("load", () => {
    initializeData();
    toggleDarkMode();
});