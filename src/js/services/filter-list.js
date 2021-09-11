import Singleton from "./static-list-container";

export const filterList = () => {
    const inputs = document.getElementsByClassName("dropdown-input");

    Array.from(inputs).forEach((input) => {
        const listId = input.dataset.dropdown;
        const listElement = document.getElementById(listId);

        input.addEventListener("input", (e) => {
            let singleton = new Singleton();
            let listToFilter;

            switch (listId) {
                case "ingredients-list":
                    listToFilter = singleton.ingredientsList;
                    break;
                case "machines-list":
                    listToFilter = singleton.machinesList;
                    break;
                case "ustensils-list":
                    listToFilter = singleton.ustensilsList;
                    break;
                default:
                    break;
            }

            let inputValue = e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

            if (inputValue === "") {
                listElement.innerHTML = "";

                return listToFilter.forEach((element) => {
                    listElement.insertAdjacentHTML("beforeend", `<p>${element}</p>`);
                });
            } else {
                listElement.innerHTML = "";

                let filteredList = listToFilter.filter((element) => element.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(inputValue));

                return filteredList.forEach((element) => {
                    listElement.insertAdjacentHTML("beforeend", `<p>${element}</p>`);
                });
            }
        });
    });
}
