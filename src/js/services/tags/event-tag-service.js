import Store from "../../components/store";
import { filterRecipes } from "../recipes/filter-recipe-service";

export const eventTag = (filterComponent) => {
    let tagComponent = filterComponent.state.tagComponent;
    const tagHtmlElement = document.getElementById(tagComponent.state.tagHtmlId);
    const tagCloseHtmlElement = document.getElementById(tagComponent.state.tagCloseHtmlId);
    let store = Store.getStore();

    tagCloseHtmlElement.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();

        filterComponent.state.disabled = false;

        if (filterComponent.state.displayed && filterComponent.state.isInDisplayedRecipe) {
            const filterHtmlElement = document.getElementById(filterComponent.state.uuid);

            filterHtmlElement.disabled = false;
            filterHtmlElement.classList.remove(filterComponent.getCssSelectedClass());
        }

        store.filtersList.forEach((element) => {
            if (element.type === filterComponent.state.type && element.title === filterComponent.state.titleMatch) {
                let index = store.filtersList.indexOf(element);

                store.filtersList.splice(index, 1);
            }
        });

        filterRecipes();

        tagHtmlElement.remove();
    });
}