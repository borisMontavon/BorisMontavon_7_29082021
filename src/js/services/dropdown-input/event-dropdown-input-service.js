// Manage the typed search in the inputs' dropdowns

import { displayFilterElements } from "../filter-elements/display-filter-elements-service";
import { eventFilterElement } from "../filter-elements/event-filter-element-service";

export const eventDropdownInput = (dropdownComponent) => {
    const input = document.getElementById(dropdownComponent.state.inputHtmlId);

    input.addEventListener("input", (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();

        // Get the value of what the user type in the input (ingredients, machines or ustensils)
        let inputValue = e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        dropdownComponent.state.filterComponents.map((filterComponent) => {
            if (filterComponent.state.titleMatch.includes(inputValue)) {
                filterComponent.state.displayed = true;
            } else {
                filterComponent.state.displayed = false;
            }
        });

        displayFilterElements(dropdownComponent);
        eventFilterElement(dropdownComponent);
    });
}