// Return the filtered list of ingredients based on json's data (no plurial, no doubles/twins/lookalike)

const removeDuplicates = (ingredientsSet) => {
    const distinctIngredients = [];

    for (let currentIndex = 0; currentIndex < ingredientsSet.length; currentIndex += 1) {
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
        // eslint-disable-next-line max-len
        const duplicateIndex = ingredientsSet.findIndex((item) => item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === currentValue);

        // If not, we push the value located at "currentIndex"
        if (duplicateIndex === currentIndex || duplicateIndex === -1) {
            distinctIngredients.push(ingredientsSet[currentIndex]);
        }
    }

    return distinctIngredients;
};

export default function getDistinctIngredientsList(recipes) {
    const ingredientsArrays = [];

    recipes.forEach((recipe) => {
        recipe.ingredients.map((ingredient) => ingredientsArrays.push(ingredient.ingredient));
    });

    const ingredientsArray = Array.prototype.concat.apply([], ingredientsArrays);

    const ingredientsSet = [...new Set(ingredientsArray)];

    return removeDuplicates(ingredientsSet);
}
