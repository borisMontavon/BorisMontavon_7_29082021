import StaticListContainer from "../../components/static-list-container";
import { displayTagsLists } from "../tags/tag-display-service";

export const machinesEventListener = () => {
    const machineElements = document.getElementsByClassName("machine-element");

    let staticListContainer = new StaticListContainer();

    Array.from(machineElements).forEach((element) => {
        element.addEventListener("click", () => {
            staticListContainer.machineTags.push({
                text: element.innerHTML,
                class: "bg-mediumGreen",
                type: "machineTag"
            });

            element.classList.toggle("machine-element-selected");

            displayTagsLists();
        });
    });
}
