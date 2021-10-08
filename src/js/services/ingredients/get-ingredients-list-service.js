// Return the filtered list of ingredients based on json's data (no plurial, no doubles/twins/lookalike)

export const getDistinctIngredientsList = (recipes) => {
    const ingredientsArrays = [];

    recipes.forEach((recipe) => {
        recipe.ingredients.map((ingredient) => ingredientsArrays.push(ingredient.ingredient));
    });

    const ingredientsArray = Array.prototype.concat.apply([], ingredientsArrays);

    const ingredientsSet = [...new Set(ingredientsArray)];

    return removeDuplicates(ingredientsSet);
}

const removeDuplicates = (ingredientsSet) => {
    let distinctIngredients = [];

    for (let currentIndex = 0; currentIndex < ingredientsSet.length; currentIndex++) {
        let currentValue = ingredientsSet[currentIndex].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        if (currentValue[currentValue.length - 1] === "s" || currentValue[currentValue.length - 1] === "x") {
            const pluralCharacter = currentValue[currentValue.length - 1];

            // We remove the last letter of the word ("s" or "x" for plurial)
            currentValue = currentValue.substring(0, currentValue.length - 1);

            // We check if the value at "currentIndex" doesn't exist without an "s" or "x" as last letter
            if (ingredientsSet.findIndex((item) => item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === currentValue) === -1) {
                currentValue += pluralCharacter;
            }
        }

        // We check if there is another similar word at another index
        const duplicateIndex = ingredientsSet.findIndex((item) => item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === currentValue);

        // If not, we push the value located at "currentIndex"
        if (duplicateIndex === currentIndex || duplicateIndex === -1) {
            distinctIngredients.push(ingredientsSet[currentIndex]);
        }
    }

    return distinctIngredients;
}
