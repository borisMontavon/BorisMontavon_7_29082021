// Small template and where to display filter elements

export default function displayFilterElements(dropdownComponent) {
    const dropdownListHtmlElement = document.getElementById(dropdownComponent.state.dropdownHtmlId);

    dropdownListHtmlElement.innerHTML = "";

    dropdownComponent.state.filterComponents.forEach((filterComponent) => {
        if (filterComponent.state.displayed && filterComponent.state.isInDisplayedRecipe) {
            // eslint-disable-next-line max-len
            dropdownListHtmlElement.insertAdjacentHTML("beforeend", `<button id="${filterComponent.state.uuid}" class="${filterComponent.getCssClass()} text-left">${filterComponent.state.title}</button>`);
        }
    });
}
