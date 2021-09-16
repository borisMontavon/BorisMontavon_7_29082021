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

            // On enlève la dernière lettre (marque du pluriel, "s" ou "x")
            currentValue = currentValue.substring(0, currentValue.length - 1);

            // On vérifie si la valeur à l'itérateur currentIndex n'existe pas sans le "s" ou le "x" à la fin
            if (ustensilsSet.findIndex((item) => item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === currentValue) === -1) {
                currentValue += pluralCharacter;
            }
        }

        const duplicateIndex = ustensilsSet.findIndex((item) => item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === currentValue);

        if (duplicateIndex === currentIndex || duplicateIndex === -1) {
            distinctUstensils.push(ustensilsSet[currentIndex]);
        }
    }

    return distinctUstensils;
}
