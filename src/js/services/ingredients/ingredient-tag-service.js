import StaticListContainer from "../../components/static-list-container";
import { displayTagsLists } from "../tags/tag-display-service";

export const ingredientsEventListener = () => {
    const ingredientElements = document.getElementsByClassName("ingredient-element");

    let staticListContainer = new StaticListContainer();

    Array.from(ingredientElements).forEach((element) => {
        element.addEventListener("click", () => {
            staticListContainer.ingredientTags.push({
                text: element.innerHTML,
                class: "bg-azure",
                type: "ingredientTag"
            });

            element.classList.toggle("ingredient-element-selected");

            displayTagsLists();
        });
    });
}
