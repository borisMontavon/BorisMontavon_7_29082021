import Store from "../../components/store";
import { filterRecipes } from "../recipes/filter-recipe-service";

export const mainInputSearch = () => {
    let store = Store.getStore();

    const mainInput = document.getElementById("input-search");

    mainInput.addEventListener("input", (e) => {
        const inputValue = e.target.value;

        if (inputValue.length >= 3) {
            store.mainInputValue = inputValue.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        } else {
            store.mainInputValue = "";
        }

        filterRecipes();
    });
}