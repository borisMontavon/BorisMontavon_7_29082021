export const displayFilterElements = (dropdownComponent) => {
    const dropdownListHtmlElement = document.getElementById(dropdownComponent.state.dropdownHtmlId);

    dropdownListHtmlElement.innerHTML = "";

    dropdownComponent.state.filterComponents.forEach((filterComponent) => {
        if (filterComponent.state.displayed && filterComponent.state.isInDisplayedRecipe) {
            dropdownListHtmlElement.insertAdjacentHTML("beforeend", `<button id="${filterComponent.state.uuid}" class="${filterComponent.getCssClass()} text-left">${filterComponent.state.title}</button>`);
        }
    });
}