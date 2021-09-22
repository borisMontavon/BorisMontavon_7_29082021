export default class TagComponent {
    constructor(tagData) {
        this.state = {
            ...tagData, // uuid title type
            tagHtmlId: "tag-" + tagData.uuid,
            tagCloseHtmlId: "tag-close-" + tagData.uuid
        };
    }

    getBgColor() {
        switch (this.state.type) {
            case "ingredients":
                return "bg-azure";
            case "machines":
                return "bg-mediumGreen";
            case "ustensils":
                return "bg-fireOpal";
            default:
                break;
        }

        return "";
    }
}