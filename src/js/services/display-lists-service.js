import Singleton from "./static-list-container"

export const displayList = () => {
    let singleton = new Singleton();

    const ingredientsHtmlElement = document.getElementById("ingredients-list");
    const machinesHtmlElement = document.getElementById("machines-list");
    const ustensilsHtmlElement = document.getElementById("ustensils-list");

    singleton.ingredientsList.forEach((element) => {
        ingredientsHtmlElement.insertAdjacentHTML("beforeend", `<p>${element}</p>`);
    });

    singleton.machinesList.forEach((element) => {
        machinesHtmlElement.insertAdjacentHTML("beforeend", `<p>${element}</p>`);
    });

    singleton.ustensilsList.forEach((element) => {
        ustensilsHtmlElement.insertAdjacentHTML("beforeend", `<p>${element}</p>`);
    });
}