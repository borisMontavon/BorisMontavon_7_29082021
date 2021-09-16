import StaticListContainer from "../../components/static-list-container";

export const displayIngredientsList = () => {
    let staticListContainer = new StaticListContainer();

    const ingredientsHtmlElement = document.getElementById("ingredients-list");

    staticListContainer.ingredientsList.forEach((ingredient) => {
        displayIngredient(ingredientsHtmlElement, ingredient, "ingredient-element text-left");
    });
}

export const displayIngredient = (ingredientsHtmlElement, ingredient, ingredientClass) => {
    ingredientsHtmlElement.insertAdjacentHTML("beforeend", `<button class="${ingredientClass}">${ingredient}</button>`);
}