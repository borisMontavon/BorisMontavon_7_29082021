// Get main input search value and saving it in the store

import Store from "../../components/store";
import filterRecipes from "../recipes/filter-recipe-service";

export default function mainInputSearch() {
    const store = Store.getStore();

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
