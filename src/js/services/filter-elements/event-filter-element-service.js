import { displayTag } from "../tags/display-tag-service";
import { eventTag } from "../tags/event-tag-service";

export const eventFilterElement = (dropdownComponent) => {
    dropdownComponent.state.filterComponents.forEach((filterComponent) => {
        if (filterComponent.state.displayed) {
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

                displayTag(filterComponent);
                eventTag(filterComponent);
            });
        }
    });
}