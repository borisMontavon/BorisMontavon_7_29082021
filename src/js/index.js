import { handleDropdown } from "./filter-button";
import { toggleDarkMode } from "./dark-mode";

// Recipes' data fetch from json
// const getData = async (url) => {
//     const response = await fetch(url);

//     return response.json();
// };

// // Home page initialization with json's data
// const initializeHomepage = async () => {
//     const data = await getData("assets/data.json");
// };

window.addEventListener("load", () => {
    // initializeHomepage();
    handleDropdown();
    toggleDarkMode();
});