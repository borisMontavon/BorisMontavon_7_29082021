import StaticListContainer from "../../components/static-list-container";

export const displayMachinesList = () => {
    let staticListContainer = new StaticListContainer();

    const machinesHtmlElement = document.getElementById("machines-list");

    staticListContainer.machinesList.forEach((machine) => {
        displayMachine(machinesHtmlElement, machine, "machine-element text-left");
    });
}

export const displayMachine = (machinesHtmlElement, machine, machineClass) => {
    machinesHtmlElement.insertAdjacentHTML("beforeend", `<button class="${machineClass}">${machine}</button>`);
}