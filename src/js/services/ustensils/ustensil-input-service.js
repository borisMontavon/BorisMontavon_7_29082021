import { displayUstensil } from "./display-ustensils-list-service";
import { ustensilsEventListener } from "./ustensil-tag-service";
import StaticListContainer from "../../components/static-list-container";

export const filterUstensilsList = () => {
    const input = document.getElementById("ustensils-input");
    const ustensilsHtmlElement = document.getElementById("ustensils-list");

    input.addEventListener("input", (e) => {
        let staticListContainer = new StaticListContainer();
        let inputValue = e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        ustensilsHtmlElement.innerHTML = "";

        if (inputValue === "") {
            staticListContainer.ustensilsList.forEach((ustensil) => {
                if (staticListContainer.ustensilTags.some((tag) => tag.text === ustensil)) {
                    displayUstensil(ustensilsHtmlElement, ustensil, "ustensil-element text-left ustensil-element-selected");
                } else {
                    displayUstensil(ustensilsHtmlElement, ustensil, "ustensil-element text-left");
                }
            });
        } else {
            const filteredList = staticListContainer.ustensilsList.filter((ustensil) => ustensil.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(inputValue));

            filteredList.forEach((ustensil) => {
                if (staticListContainer.ustensilTags.some((tag) => tag.text === ustensil)) {
                    displayUstensil(ustensilsHtmlElement, ustensil, "ustensil-element text-left ustensil-element-selected");
                } else {
                    displayUstensil(ustensilsHtmlElement, ustensil, "ustensil-element text-left");
                }
            });
        }

        ustensilsEventListener();
    });
}