import { displayTag } from "../tags/display-tag-service";
import { eventTag } from "../tags/event-tag-service";
import Store from "../../components/store";
import { filterRecipes } from "../recipes/filter-recipe-service";

export const eventFilterElement = (dropdownComponent) => {
    dropdownComponent.state.filterComponents.forEach((filterComponent) => {
        let store = new Store();

        if (filterComponent.state.displayed && filterComponent.state.isInDisplayedRecipe) {
            const filterHtmlElement = document.getElementById(filterComponent.state.uuid);

            filterHtmlElement.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopImmediatePropagation();

                if (filterComponent.state.disabled) {
                    return;
                }

                filterComponent.state.disabled = true;
                filterHtmlElement.disabled = true;
                filterHtmlElement.classList.add(filterComponent.getCssSelectedClass());
                
                store.filtersList.push({
                    type: filterComponent.state.type,
                    title: filterComponent.state.titleMatch
                });

                filterRecipes();

                displayTag(filterComponent);
                eventTag(filterComponent);
            });
        }
    });
}