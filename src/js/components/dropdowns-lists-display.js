export const ingredientsDisplay = (distinctIngredientsList) => {
    const ingredientInputDropdown = document.getElementById("ingredients-list");

    distinctIngredientsList.forEach((ingredient) => {
        ingredientInputDropdown.insertAdjacentHTML("beforeend", `<p>${ingredient}</p>`);
    })
}

export const machinesDisplay = (distinctMachinesList) => {
    const machineInputDropdown = document.getElementById("machine-list");

    distinctMachinesList.forEach((machine) => {
        machineInputDropdown.insertAdjacentHTML("beforeend", `<p>${machine}</p>`);
    })
}

export const ustensilsDisplay = (distinctUstensilsList) => {
    const ustensilsInputDropdown = document.getElementById("ustensils-list");

    distinctUstensilsList.forEach((ustensil) => {
        ustensilsInputDropdown.insertAdjacentHTML("beforeend", `<p>${ustensil}</p>`);
    })
}