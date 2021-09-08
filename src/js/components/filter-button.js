export const handleDropdown = () => {
    const dropdowns = document.getElementsByClassName("toggle-dropdown");

    Array.from(dropdowns).forEach((dropdown) => {
        dropdown.addEventListener("click", (e) => {
            // Cancels the propagation of the event so that the click event set on the body is not triggered
            e.preventDefault();
            e.stopImmediatePropagation();

            // Get the parent of the element we are focusing
            const container = dropdown.closest(".imu-container");

            // Get the current dropdown element
            const dropdownId = e.currentTarget.dataset.dropdown;
            const dropdownElement = document.getElementById(dropdownId);
            
            // Keeps in memory the visible state of the dropdown
            const isDropdownNotVisible = !dropdownElement.classList.contains("dropdown-fadeIn");
            
            // Get the current input
            const inputId = e.currentTarget.dataset.input;
            const input = document.getElementById(inputId);
            const icon = dropdown.querySelector("i");

            resetDropdownsState(dropdowns);

            if (isDropdownNotVisible) {
                updatePlaceholder(inputId, input);

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
        resetDropdownsState(dropdowns);        
    });
}

// Collapses all the dropdowns and sets them all to their initial state (dropdown, icon, placeholder and css)
const resetDropdownsState = (dropdowns) => {
    Array.from(dropdowns).forEach((dropdown) => {
        // Get the parent of the dropdown element
        const container = dropdown.closest(".imu-container");
        // Get the current dropdown element
        const dropdownId = dropdown.dataset.dropdown;
        const dropdownElement = document.getElementById(dropdownId);
        // Get the current input
        const inputId = dropdown.dataset.input;
        const input = document.getElementById(inputId);
        const icon = dropdown.querySelector("i");

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
    document.getElementById("machine-input").placeholder = "Appareil";
    document.getElementById("ustensils-input").placeholder = "Ustensiles";
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
