export const getDistinctMachineList = (recipes) => {
    const machinesArray = [];

    recipes.forEach((recipe) => {
        machinesArray.push(recipe.appliance);
    });

    const machinesSet = [...new Set(machinesArray)];

    return removeDuplicates(machinesSet);
}

const removeDuplicates = (machinesSet) => {
    let distinctMachines = [];

    for (let currentIndex = 0; currentIndex < machinesSet.length; currentIndex++) {
        let currentValue = machinesSet[currentIndex].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        if (currentValue[currentValue.length - 1] === "s" || currentValue[currentValue.length - 1] === "x") {
            const pluralCharacter = currentValue[currentValue.length - 1];

            // On enlève la dernière lettre (marque du pluriel, "s" ou "x")
            currentValue = currentValue.substring(0, currentValue.length - 1);

            // On vérifie si la valeur à l'itérateur currentIndex n'existe pas sans le "s" ou le "x" à la fin
            if (machinesSet.findIndex((item) => item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === currentValue) === -1) {
                currentValue += pluralCharacter;
            }
        }

        const duplicateIndex = machinesSet.findIndex((item) => item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === currentValue);

        if (duplicateIndex === currentIndex || duplicateIndex === -1) {
            distinctMachines.push(machinesSet[currentIndex]);
        }
    }

    return distinctMachines;
}
