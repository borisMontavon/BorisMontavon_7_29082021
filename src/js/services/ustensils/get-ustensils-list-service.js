// Return the filtered list of ustensils based on json's data (no plurial, no doubles/twins/lookalike)

export const getDistinctUstensilsList = (recipes) => {
    const ustensilsArray = [];

    recipes.forEach((recipe) => {
        recipe.ustensils.map((ustensil) => ustensilsArray.push(ustensil));
    });

    const ustensilsSet = [...new Set(ustensilsArray)];

    return removeDuplicates(ustensilsSet);
}

const removeDuplicates = (ustensilsSet) => {
    let distinctUstensils = [];

    for (let currentIndex = 0; currentIndex < ustensilsSet.length; currentIndex++) {
        let currentValue = ustensilsSet[currentIndex].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        if (currentValue[currentValue.length - 1] === "s" || currentValue[currentValue.length - 1] === "x") {
            const pluralCharacter = currentValue[currentValue.length - 1];

            // We remove the last letter of the word ("s" or "x" for plurial)
            currentValue = currentValue.substring(0, currentValue.length - 1);

            // We check if the value at "currentIndex" doesn't exist without an "s" or "x" as last letter
            if (ustensilsSet.findIndex((item) => item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === currentValue) === -1) {
                currentValue += pluralCharacter;
            }
        }

        // We check if there is another similar word at another index
        const duplicateIndex = ustensilsSet.findIndex((item) => item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === currentValue);

        // If not, we push the value located at "currentIndex"
        if (duplicateIndex === currentIndex || duplicateIndex === -1) {
            distinctUstensils.push(ustensilsSet[currentIndex]);
        }
    }

    return distinctUstensils;
}
