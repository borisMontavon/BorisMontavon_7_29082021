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

            // On enlève la dernière lettre (marque du pluriel, "s" ou "x")
            currentValue = currentValue.substring(0, currentValue.length - 1);

            // On vérifie si la valeur à l'itérateur currentIndex n'existe pas sans le "s" ou le "x" à la fin
            if (ingredientsSet.findIndex((item) => item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === currentValue) === -1) {
                currentValue += pluralCharacter;
            }
        }

        const duplicateIndex = ingredientsSet.findIndex((item) => item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === currentValue);

        if (duplicateIndex === currentIndex || duplicateIndex === -1) {
            distinctIngredients.push(ingredientsSet[currentIndex]);
        }
    }

    return distinctIngredients;
}
