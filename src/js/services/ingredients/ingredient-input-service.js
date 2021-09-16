import { displayIngredient } from "./display-ingredients-list-service";
import { ingredientsEventListener } from "./ingredient-tag-service";
import StaticListContainer from "../../components/static-list-container";

export const filterIngredientsList = () => {
    const input = document.getElementById("ingredients-input");
    const ingredientsHtmlElement = document.getElementById("ingredients-list");

    input.addEventListener("input", (e) => {
        let staticListContainer = new StaticListContainer();
        let inputValue = e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        ingredientsHtmlElement.innerHTML = "";

        if (inputValue === "") {
            staticListContainer.ingredientsList.forEach((ingredient) => {
                if (staticListContainer.ingredientTags.some((tag) => tag.text === ingredient)) {
                    displayIngredient(ingredientsHtmlElement, ingredient, "ingredient-element text-left ingredient-element-selected");
                } else {
                    displayIngredient(ingredientsHtmlElement, ingredient, "ingredient-element text-left");
                }
            });
        } else {
            const filteredList = staticListContainer.ingredientsList.filter((ingredient) => ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(inputValue));

            filteredList.forEach((ingredient) => {
                if (staticListContainer.ingredientTags.some((tag) => tag.text === ingredient)) {
                    displayIngredient(ingredientsHtmlElement, ingredient, "ingredient-element text-left ingredient-element-selected");
                } else {
                    displayIngredient(ingredientsHtmlElement, ingredient, "ingredient-element text-left");
                }
            });
        }

        ingredientsEventListener();
    });
}
