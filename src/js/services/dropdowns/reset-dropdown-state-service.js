// Collapses all the dropdowns and sets them all to their initial state (dropdown, icon, placeholder and css)
export default function resetDropdownsState(dropdownComponents) {
    dropdownComponents.forEach((dropdownComponent) => {
        // Get the parent of the dropdown element
        const container = document.getElementById(dropdownComponent.state.containerHtmlId);
        
        // Get the current dropdown element
        const dropdownElement = document.getElementById(dropdownComponent.state.dropdownHtmlId);

        // Get the current input
        const input = document.getElementById(dropdownComponent.state.inputHtmlId);
        const icon = document.getElementById(dropdownComponent.state.iconHtmlId);

        if (dropdownElement.classList.contains("dropdown-fadeIn")) {
            icon.classList.toggle("icon-rotation");
        }

        dropdownElement.classList.remove("dropdown-fadeIn");
        dropdownElement.classList.remove("p-4");

        input.classList.add("rounded");
        input.classList.remove("rounded-t");
        
        container.classList.remove("lg:w-3/4");
    });

    document.getElementById("ingredients-input").placeholder = "Ingrédients";
    document.getElementById("machines-input").placeholder = "Appareil";
    document.getElementById("ustensils-input").placeholder = "Ustensiles";
}
