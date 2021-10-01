import Store from "../../components/store";

export const displayAllRecipes = () => {
    let store = new Store();
    const recipesContainer = document.getElementById("recipes-container");

    recipesContainer.innerHTML = "";

    store.recipeComponents.forEach((recipeComponent) => {
        if (recipeComponent.state.displayed) {
            recipesContainer.insertAdjacentHTML("beforeend", displayRecipe(recipeComponent));
        }
    });

    if (recipesContainer.innerHTML === "") {
        recipesContainer.insertAdjacentHTML("beforeend", '<p class="text-white-hover w-full absolute text-center">Aucune recette ne correspond à votre critère... vous pouvez chercher "tarte aux pommes", "poisson", etc.</p>');
    }
}

const displayRecipe = (recipeComponent) => {
    if (!recipeComponent.state.displayed) {
        return "";
    }
    
    const recipeHtml = `<div>
                        <div class="recipe-container bg-silver dark:bg-jet rounded">
                            <div class="img-bg-replacement w-full h-3/6 rounded-t"></div>
                            <div class="recipe-info bg-platinum dark:bg-onyx w-full h-3/6 rounded-b px-6 py-4 flex flex-col items-stretch">
                                <div class="title-time flex justify-between items-center mb-4 dark:text-darkWhite w-full">
                                    <h3 class="font-semibold w-8/12 pr-5">${recipeComponent.state.name}</h3>
                                    <div class="flex items-center">
                                        <i class="far fa-clock mr-1.5"></i>
                                        <p class="font-bold">${recipeComponent.state.time} min</p>
                                    </div>
                                </div>
                                <div class="ingredients-description text-xs flex justify-between dark:text-darkWhite">
                                    <div class="ingredients w-2/4 pr-1">
                                        <ul>
                                            ${getIngredientsHtml(recipeComponent.state.ingredients)}
                                        </ul>
                                    </div>
                                    <div class="description w-2/4">
                                        <p>${recipeComponent.state.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;

    return recipeHtml;
}

const getIngredientsHtml = (ingredients) => {
    let ingredientsHtml = "";

    ingredients.forEach((ingredient) => {
        let quantityAndUnit = "";
        const keys = Object.keys(ingredient);

        if (keys.length > 1) {
            quantityAndUnit = ": ";

            for (let i = 1; i < keys.length; i++) {
                quantityAndUnit += ingredient[keys[i]];

                if (i < keys.length - 1) {
                    quantityAndUnit += " ";
                }
            }
        }

        ingredientsHtml += `<li>
                                <p><strong>${ingredient.ingredient}</strong>${quantityAndUnit}</p>
                            </li>`;
    });

    return ingredientsHtml;
};