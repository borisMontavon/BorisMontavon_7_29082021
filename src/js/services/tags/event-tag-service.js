export const eventTag = (filterComponent) => {
    let tagComponent = filterComponent.state.tagComponent;
    const tagHtmlElement = document.getElementById(tagComponent.state.tagHtmlId);
    const tagCloseHtmlElement = document.getElementById(tagComponent.state.tagCloseHtmlId);

    tagCloseHtmlElement.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();

        filterComponent.state.disabled = false;

        if (filterComponent.state.displayed) {
            const filterHtmlElement = document.getElementById(filterComponent.state.uuid);

            filterHtmlElement.disabled = false;
            filterHtmlElement.classList.remove(filterComponent.getCssSelectedClass());
        }

        tagHtmlElement.remove();
    });
}