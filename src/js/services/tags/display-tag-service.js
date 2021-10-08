// Template for the tag, and where to display it

export default function displayTag(filterComponent) {
    const { tagComponent } = filterComponent.state;

    const tagsContainer = document.getElementById("tags-section");

    // eslint-disable-next-line max-len
    const tagHtml = `<span id="${tagComponent.state.tagHtmlId}" class="${tagComponent.getBgColor()} py-2 px-4 mr-3 mb-3 rounded text-white flex items-center">
                        <p class="text-sm mr-2">${tagComponent.state.title}</p>
                        <button id="${tagComponent.state.tagCloseHtmlId}" class="close-tag">
                            <i class="far fa-times-circle text-lg"></i>
                        </button>
                    </span>`;

    tagsContainer.insertAdjacentHTML("beforeend", tagHtml);
}
