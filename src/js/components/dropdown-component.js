import FilterComponent from "./filter-component";

export default class DropdownComponent {
    constructor(dropdownData) {
        this.state = {
            ...dropdownData,
            filterComponents: []
        };

        dropdownData.filterElements.forEach((filterElement) => {
            this.state.filterComponents.push(new FilterComponent({
                title: filterElement,
                type: this.state.type,
                uuid: ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
                )
            }));
        });
    }
}