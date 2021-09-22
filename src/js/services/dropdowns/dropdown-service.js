import { resetDropdownsState } from "./reset-dropdown-state-service";

export const toggleDropdowns = (dropdownComponents) => {
    dropdownComponents.forEach((dropdownComponent) => {
        const toggleDropdownElement = document.getElementById(dropdownComponent.state.toggleDropdownHtmlId);

        toggleDropdownElement.addEventListener("click", (e) => {
            // Cancels the propagation of the event so that the click event set on the body is not triggered
            e.preventDefault();
            e.stopImmediatePropagation();

            // Get the parent of the dropdown element
            const container = document.getElementById(dropdownComponent.state.containerHtmlId);
            
            // Get the current dropdown element
            const dropdownElement = document.getElementById(dropdownComponent.state.dropdownHtmlId);

            // Get the current input
            const input = document.getElementById(dropdownComponent.state.inputHtmlId);
            const icon = document.getElementById(dropdownComponent.state.iconHtmlId);
            
            // Keeps in memory the visible state of the dropdown
            const isDropdownNotVisible = !dropdownElement.classList.contains("dropdown-fadeIn");

            resetDropdownsState(dropdownComponents);

            if (isDropdownNotVisible) {
                updatePlaceholder(dropdownComponent.state.inputHtmlId, input);

                dropdownElement.classList.add("dropdown-fadeIn");
                dropdownElement.classList.add("p-4");

                icon.classList.toggle("icon-rotation");

                input.classList.remove("rounded");
                input.classList.add("rounded-t");
                input.focus();

                container.classList.add("lg:w-3/4");
            }
        });
    });

    document.body.addEventListener('click', () => {
        resetDropdownsState(dropdownComponents);        
    });
}

// Updates the placeholder for a visible dropdown
const updatePlaceholder = (inputId, input) => {
    switch(inputId) {
        case "ingredients-input":
            input.placeholder = "Rechercher un ingrédient";
            break;
        case "machine-input":
            input.placeholder = "Rechercher un appareil";
            break;
        case "ustensils-input":
            input.placeholder = "Rechercher un ustensile";
            break;
        default:
            break;
    }
}