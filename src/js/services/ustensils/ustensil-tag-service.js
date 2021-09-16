import StaticListContainer from "../../components/static-list-container";
import { displayTagsLists } from "../tags/tag-display-service";

export const ustensilsEventListener = () => {
    const ustensilElements = document.getElementsByClassName("ustensil-element");

    let staticListContainer = new StaticListContainer();

    Array.from(ustensilElements).forEach((element) => {
        element.addEventListener("click", () => {
            staticListContainer.ustensilTags.push({
                text: element.innerHTML,
                class: "bg-fireOpal",
                type: "ustensilTag"
            });

            element.classList.toggle("ustensil-element-selected");

            displayTagsLists();
        });
    });
}
