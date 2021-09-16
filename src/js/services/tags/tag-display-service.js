import StaticListContainer from "../../components/static-list-container";

export const displayTagsLists = () => {
    const tagsContainer = document.getElementById("tags-section");
    let staticListContainer = new StaticListContainer();

    tagsContainer.innerHTML = "";
    
    displayTagsList(staticListContainer.ingredientTags);
    displayTagsList(staticListContainer.machineTags);
    displayTagsList(staticListContainer.ustensilTags);
}

const displayTagsList = (list) => {
    const tagsContainer = document.getElementById("tags-section");

    list.forEach((tag) => {
        tagsContainer.insertAdjacentHTML("beforeend", tagDisplay(tag.class, tag.text));
    });
}

const tagDisplay = (bgColor, listElementClicked) => {
    const tagHtml = `<span class="${bgColor} py-2 px-4 mr-3 mb-3 rounded text-white flex items-center">
                        <p class="text-sm mr-2">${listElementClicked}</p>
                        <button>
                            <i class="far fa-times-circle text-lg"></i>
                        </button>
                    </span>`;

    return tagHtml;
}