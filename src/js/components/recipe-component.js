export default class RecipeComponent {
    constructor(recipeData) {
        this.state = {
            ...recipeData,
            nameMatch: recipeData.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
            descriptionMatch: recipeData.description.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
            applianceMatch: recipeData.appliance.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
            ingredientsMatch: [],
            ustensilsMatch: [],
            displayed: true
        };

        this.state.ingredients.forEach((ingredient) => {
            this.state.ingredientsMatch.push(ingredient.ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
        });

        this.state.ustensils.forEach((ustensil) => {
            this.state.ustensilsMatch.push(ustensil.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
        });
    }
}
