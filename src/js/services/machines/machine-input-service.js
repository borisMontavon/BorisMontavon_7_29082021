import { displayMachine } from "./display-machines-list-service";
import { machinesEventListener } from "./machine-tag-service";
import StaticListContainer from "../../components/static-list-container";

export const filterMachinesList = () => {
    const input = document.getElementById("machines-input");
    const machinesHtmlElement = document.getElementById("machines-list");

    input.addEventListener("input", (e) => {
        let staticListContainer = new StaticListContainer();
        let inputValue = e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        machinesHtmlElement.innerHTML = "";

        if (inputValue === "") {
            staticListContainer.machinesList.forEach((machine) => {
                if (staticListContainer.machineTags.some((tag) => tag.text === machine)) {
                    displayMachine(machinesHtmlElement, machine, "machine-element text-left machine-element-selected");
                } else {
                    displayMachine(machinesHtmlElement, machine, "machine-element text-left");
                }
            });
        } else {
            const filteredList = staticListContainer.machinesList.filter((machine) => machine.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(inputValue));

            filteredList.forEach((machine) => {
                if (staticListContainer.machineTags.some((tag) => tag.text === machine)) {
                    displayMachine(machinesHtmlElement, machine, "machine-element text-left machine-element-selected");
                } else {
                    displayMachine(machinesHtmlElement, machine, "machine-element text-left");
                }
            });
        }

        machinesEventListener();
    });
}