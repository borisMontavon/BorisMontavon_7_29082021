// Manage filter element state on "click" event

import displayTag from "../tags/display-tag-service";
import eventTag from "../tags/event-tag-service";
import Store from "../../components/store";
import filterRecipes from "../recipes/filter-recipe-service";

export default function eventFilterElement(dropdownComponent) {
    dropdownComponent.state.filterComponents.forEach((filterComponent) => {
        const store = Store.getStore();

        // If filter element is displayed and in a displayed recipe
        if (filterComponent.state.displayed && filterComponent.state.isInDisplayedRecipe) {
            const filterHtmlElement = document.getElementById(filterComponent.state.uuid);

            filterHtmlElement.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopImmediatePropagation();

                // If filter element disabled state is already at true, do nothing
                if (filterComponent.state.disabled) {
                    return;
                }

                // Else set disabled state to true, prevent another click on it and change its look
                filterComponent.state.disabled = true;
                filterHtmlElement.disabled = true;
                filterHtmlElement.classList.add(filterComponent.getCssSelectedClass());
                
                // Update filtersList with this new filter element
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
