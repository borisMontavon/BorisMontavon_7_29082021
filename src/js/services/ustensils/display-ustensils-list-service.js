import StaticListContainer from "../../components/static-list-container";

export const displayUstensilsList = () => {
    let staticListContainer = new StaticListContainer();

    const ustensilsHtmlElement = document.getElementById("ustensils-list");

    staticListContainer.ustensilsList.forEach((ustensil) => {
        displayUstensil(ustensilsHtmlElement, ustensil, "ustensil-element text-left");
    });
}

export const displayUstensil = (ustensilsHtmlElement, ustensil, ustensilClass) => {
    ustensilsHtmlElement.insertAdjacentHTML("beforeend", `<button class="${ustensilClass}">${ustensil}</button>`);
}