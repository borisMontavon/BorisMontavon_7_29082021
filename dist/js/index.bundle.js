/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/dropdown-component.js":
/*!*************************************************!*\
  !*** ./src/js/components/dropdown-component.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropdownComponent)\n/* harmony export */ });\n/* harmony import */ var _filter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-component */ \"./src/js/components/filter-component.js\");\n\r\n\r\nclass DropdownComponent {\r\n    constructor(dropdownData) {\r\n        this.state = {\r\n            ...dropdownData,\r\n            filterComponents: []\r\n        };\r\n\r\n        dropdownData.filterElements.forEach((filterElement) => {\r\n            this.state.filterComponents.push(new _filter_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n                title: filterElement,\r\n                type: this.state.type,\r\n                uuid: ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>\r\n                    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)\r\n                )\r\n            }));\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/components/dropdown-component.js?");

/***/ }),

/***/ "./src/js/components/filter-component.js":
/*!***********************************************!*\
  !*** ./src/js/components/filter-component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterComponent)\n/* harmony export */ });\n/* harmony import */ var _tag_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-component */ \"./src/js/components/tag-component.js\");\n\r\n\r\nclass FilterComponent {\r\n    constructor(filterData) {\r\n        this.state = {\r\n            ...filterData, // uuid title type\r\n            titleMatch: filterData.title.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\"),\r\n            disabled: false,\r\n            displayed: true,\r\n            isInDisplayedRecipe: true,\r\n            tagComponent: new _tag_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"](filterData)\r\n        };\r\n    }\r\n\r\n    getCssClass() {\r\n        switch (this.state.type) {\r\n            case \"ingredients\":\r\n                return this.state.disabled ? \"ingredient-element ingredient-element-selected\" : \"ingredient-element\";\r\n            case \"machines\":\r\n                return this.state.disabled ? \"machine-element machine-element-selected\" : \"machine-element\";\r\n            case \"ustensils\":\r\n                return this.state.disabled ? \"ustensil-element ustensil-element-selected\" : \"ustensil-element\";\r\n            default:\r\n                break;\r\n        }\r\n\r\n        return \"\";\r\n    }\r\n\r\n    getCssSelectedClass() {\r\n        switch (this.state.type) {\r\n            case \"ingredients\":\r\n                return \"ingredient-element-selected\";\r\n            case \"machines\":\r\n                return \"machine-element-selected\";\r\n            case \"ustensils\":\r\n                return \"ustensil-element-selected\";\r\n            default:\r\n                break;\r\n        }\r\n\r\n        return \"\";\r\n    }\r\n}\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/components/filter-component.js?");

/***/ }),

/***/ "./src/js/components/recipe-component.js":
/*!***********************************************!*\
  !*** ./src/js/components/recipe-component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RecipeComponent)\n/* harmony export */ });\nclass RecipeComponent {\r\n    constructor(recipeData) {\r\n        this.state = {\r\n            ...recipeData,\r\n            nameMatch: recipeData.name.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\"),\r\n            descriptionMatch: recipeData.description.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\"),\r\n            applianceMatch: recipeData.appliance.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\"),\r\n            ingredientsMatch: [],\r\n            ustensilsMatch: [],\r\n            displayed: true\r\n        };\r\n\r\n        this.state.ingredients.forEach((ingredient) => {\r\n            this.state.ingredientsMatch.push(ingredient.ingredient.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\"));\r\n        });\r\n\r\n        this.state.ustensils.forEach((ustensil) => {\r\n            this.state.ustensilsMatch.push(ustensil.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\"));\r\n        });\r\n    }\r\n} \n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/components/recipe-component.js?");

/***/ }),

/***/ "./src/js/components/store.js":
/*!************************************!*\
  !*** ./src/js/components/store.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Store)\n/* harmony export */ });\nclass Store {\r\n    constructor() {\r\n        if (!Store._instance) {\r\n            this.filtersList = [];\r\n            this.recipeComponents = [];\r\n            this.mainInputValue = \"\";\r\n\r\n            Store._instance = this;\r\n        }\r\n\r\n        return Store._instance;\r\n    }\r\n}\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/components/store.js?");

/***/ }),

/***/ "./src/js/components/tag-component.js":
/*!********************************************!*\
  !*** ./src/js/components/tag-component.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TagComponent)\n/* harmony export */ });\nclass TagComponent {\r\n    constructor(tagData) {\r\n        this.state = {\r\n            ...tagData, // uuid title type\r\n            tagHtmlId: \"tag-\" + tagData.uuid,\r\n            tagCloseHtmlId: \"tag-close-\" + tagData.uuid\r\n        };\r\n    }\r\n\r\n    getBgColor() {\r\n        switch (this.state.type) {\r\n            case \"ingredients\":\r\n                return \"bg-azure\";\r\n            case \"machines\":\r\n                return \"bg-mediumGreen\";\r\n            case \"ustensils\":\r\n                return \"bg-fireOpal\";\r\n            default:\r\n                break;\r\n        }\r\n\r\n        return \"\";\r\n    }\r\n}\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/components/tag-component.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dropdown-component */ \"./src/js/components/dropdown-component.js\");\n/* harmony import */ var _components_recipe_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/recipe-component */ \"./src/js/components/recipe-component.js\");\n/* harmony import */ var _components_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/store */ \"./src/js/components/store.js\");\n/* harmony import */ var _services_dark_mode_dark_mode_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/dark-mode/dark-mode-service */ \"./src/js/services/dark-mode/dark-mode-service.js\");\n/* harmony import */ var _services_dropdown_input_event_dropdown_input_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/dropdown-input/event-dropdown-input-service */ \"./src/js/services/dropdown-input/event-dropdown-input-service.js\");\n/* harmony import */ var _services_dropdowns_dropdown_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/dropdowns/dropdown-service */ \"./src/js/services/dropdowns/dropdown-service.js\");\n/* harmony import */ var _services_filter_elements_display_filter_elements_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/filter-elements/display-filter-elements-service */ \"./src/js/services/filter-elements/display-filter-elements-service.js\");\n/* harmony import */ var _services_filter_elements_event_filter_element_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/filter-elements/event-filter-element-service */ \"./src/js/services/filter-elements/event-filter-element-service.js\");\n/* harmony import */ var _services_ingredients_get_ingredients_list_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/ingredients/get-ingredients-list-service */ \"./src/js/services/ingredients/get-ingredients-list-service.js\");\n/* harmony import */ var _services_machines_get_machines_list_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/machines/get-machines-list-service */ \"./src/js/services/machines/get-machines-list-service.js\");\n/* harmony import */ var _services_main_input_main_input_search_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/main-input/main-input-search-service */ \"./src/js/services/main-input/main-input-search-service.js\");\n/* harmony import */ var _services_recipes_display_recipe_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/recipes/display-recipe-service */ \"./src/js/services/recipes/display-recipe-service.js\");\n/* harmony import */ var _services_top_button_top_button_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/top-button/top-button-service */ \"./src/js/services/top-button/top-button-service.js\");\n/* harmony import */ var _services_ustensils_get_ustensils_list_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/ustensils/get-ustensils-list-service */ \"./src/js/services/ustensils/get-ustensils-list-service.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Recipes' data fetch from json\r\nconst getData = async (url) => {\r\n    const response = await fetch(url);\r\n\r\n    return response.json();\r\n};\r\n\r\n// Home page initialization with json's data\r\nconst initializeData = async () => {\r\n    const data = await getData(\"assets/data.json\");\r\n    let store = new _components_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\r\n    // Recipes management\r\n    data.forEach((recipeData) => {\r\n        store.recipeComponents.push(new _components_recipe_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"](recipeData));\r\n    });\r\n\r\n    (0,_services_recipes_display_recipe_service__WEBPACK_IMPORTED_MODULE_11__.displayAllRecipes)();\r\n\r\n    // Dropdowns management\r\n    store.ingredientDropdown = new _components_dropdown_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n        type: \"ingredients\",\r\n        containerHtmlId: \"ingredients-dropdown-container\",\r\n        toggleDropdownHtmlId: \"ingredients-search\",\r\n        dropdownHtmlId: \"ingredients-list\",\r\n        inputHtmlId: \"ingredients-input\",\r\n        iconHtmlId: \"ingredients-dropdown-icon\",\r\n        filterElements: (0,_services_ingredients_get_ingredients_list_service__WEBPACK_IMPORTED_MODULE_8__.getDistinctIngredientsList)(data)\r\n    });\r\n\r\n    store.machineDropdown = new _components_dropdown_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n        type: \"machines\",\r\n        containerHtmlId: \"machines-dropdown-container\",\r\n        toggleDropdownHtmlId: \"machine-search\",\r\n        dropdownHtmlId: \"machines-list\",\r\n        inputHtmlId: \"machines-input\",\r\n        iconHtmlId: \"machines-dropdown-icon\",\r\n        filterElements: (0,_services_machines_get_machines_list_service__WEBPACK_IMPORTED_MODULE_9__.getDistinctMachineList)(data)\r\n    });\r\n\r\n    store.ustensilDropdown = new _components_dropdown_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n        type: \"ustensils\",\r\n        containerHtmlId: \"ustensils-dropdown-container\",\r\n        toggleDropdownHtmlId: \"ustensils-search\",\r\n        dropdownHtmlId: \"ustensils-list\",\r\n        inputHtmlId: \"ustensils-input\",\r\n        iconHtmlId: \"ustensils-dropdown-icon\",\r\n        filterElements: (0,_services_ustensils_get_ustensils_list_service__WEBPACK_IMPORTED_MODULE_13__.getDistinctUstensilsList)(data)\r\n    });\r\n\r\n    (0,_services_main_input_main_input_search_service__WEBPACK_IMPORTED_MODULE_10__.mainInputSearch)();\r\n\r\n    (0,_services_filter_elements_display_filter_elements_service__WEBPACK_IMPORTED_MODULE_6__.displayFilterElements)(store.ingredientDropdown);\r\n    (0,_services_filter_elements_display_filter_elements_service__WEBPACK_IMPORTED_MODULE_6__.displayFilterElements)(store.machineDropdown);\r\n    (0,_services_filter_elements_display_filter_elements_service__WEBPACK_IMPORTED_MODULE_6__.displayFilterElements)(store.ustensilDropdown);\r\n\r\n    (0,_services_filter_elements_event_filter_element_service__WEBPACK_IMPORTED_MODULE_7__.eventFilterElement)(store.ingredientDropdown);\r\n    (0,_services_filter_elements_event_filter_element_service__WEBPACK_IMPORTED_MODULE_7__.eventFilterElement)(store.machineDropdown);\r\n    (0,_services_filter_elements_event_filter_element_service__WEBPACK_IMPORTED_MODULE_7__.eventFilterElement)(store.ustensilDropdown);\r\n\r\n    (0,_services_dropdown_input_event_dropdown_input_service__WEBPACK_IMPORTED_MODULE_4__.eventDropdownInput)(store.ingredientDropdown);\r\n    (0,_services_dropdown_input_event_dropdown_input_service__WEBPACK_IMPORTED_MODULE_4__.eventDropdownInput)(store.machineDropdown);\r\n    (0,_services_dropdown_input_event_dropdown_input_service__WEBPACK_IMPORTED_MODULE_4__.eventDropdownInput)(store.ustensilDropdown);\r\n\r\n    // Handle the behavior of the dropdowns\r\n    (0,_services_dropdowns_dropdown_service__WEBPACK_IMPORTED_MODULE_5__.toggleDropdowns)([store.ingredientDropdown, store.machineDropdown, store.ustensilDropdown]);\r\n};\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n    initializeData();\r\n    (0,_services_dark_mode_dark_mode_service__WEBPACK_IMPORTED_MODULE_3__.toggleDarkMode)();\r\n    (0,_services_top_button_top_button_service__WEBPACK_IMPORTED_MODULE_12__.topButton)();\r\n});\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/index.js?");

/***/ }),

/***/ "./src/js/services/dark-mode/dark-mode-service.js":
/*!********************************************************!*\
  !*** ./src/js/services/dark-mode/dark-mode-service.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleDarkMode\": () => (/* binding */ toggleDarkMode)\n/* harmony export */ });\nconst toggleDarkMode = () => {\r\n    const switchMode = document.getElementById(\"modeToggle\");\r\n\r\n    if (localStorage.theme === \"dark\" || (!(\"theme\" in localStorage) && window.matchMedia(\"(prefers-color-scheme: dark)\").matches)) {\r\n        document.documentElement.classList.add(\"dark\");\r\n        switchMode.checked = true;\r\n    } else {\r\n        document.documentElement.classList.remove(\"dark\");\r\n        switchMode.checked = false;\r\n    }\r\n\r\n    switchMode.addEventListener(\"change\", (e) => {\r\n        e.preventDefault();\r\n        e.stopImmediatePropagation();\r\n\r\n        if (switchMode.checked) {\r\n            localStorage.theme = \"dark\";\r\n            document.documentElement.classList.add(\"dark\");\r\n        } else {\r\n            localStorage.theme = \"light\";\r\n            document.documentElement.classList.remove(\"dark\");\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/services/dark-mode/dark-mode-service.js?");

/***/ }),

/***/ "./src/js/services/dropdown-input/event-dropdown-input-service.js":
/*!************************************************************************!*\
  !*** ./src/js/services/dropdown-input/event-dropdown-input-service.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventDropdownInput\": () => (/* binding */ eventDropdownInput)\n/* harmony export */ });\n/* harmony import */ var _filter_elements_display_filter_elements_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter-elements/display-filter-elements-service */ \"./src/js/services/filter-elements/display-filter-elements-service.js\");\n/* harmony import */ var _filter_elements_event_filter_element_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-elements/event-filter-element-service */ \"./src/js/services/filter-elements/event-filter-element-service.js\");\n\r\n\r\n\r\nconst eventDropdownInput = (dropdownComponent) => {\r\n    const input = document.getElementById(dropdownComponent.state.inputHtmlId);\r\n\r\n    input.addEventListener(\"input\", (e) => {\r\n        e.preventDefault();\r\n        e.stopImmediatePropagation();\r\n\r\n        let inputValue = e.target.value.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\");\r\n\r\n        dropdownComponent.state.filterComponents.map((filterComponent) => {\r\n            if (filterComponent.state.titleMatch.includes(inputValue)) {\r\n                filterComponent.state.displayed = true;\r\n            } else {\r\n                filterComponent.state.displayed = false;\r\n            }\r\n        });\r\n\r\n        (0,_filter_elements_display_filter_elements_service__WEBPACK_IMPORTED_MODULE_0__.displayFilterElements)(dropdownComponent);\r\n        (0,_filter_elements_event_filter_element_service__WEBPACK_IMPORTED_MODULE_1__.eventFilterElement)(dropdownComponent);\r\n    });\r\n}\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/services/dropdown-input/event-dropdown-input-service.js?");

/***/ }),

/***/ "./src/js/services/dropdowns/dropdown-service.js":
/*!*******************************************************!*\
  !*** ./src/js/services/dropdowns/dropdown-service.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleDropdowns\": () => (/* binding */ toggleDropdowns)\n/* harmony export */ });\n/* harmony import */ var _reset_dropdown_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-dropdown-state-service */ \"./src/js/services/dropdowns/reset-dropdown-state-service.js\");\n\r\n\r\nconst toggleDropdowns = (dropdownComponents) => {\r\n    dropdownComponents.forEach((dropdownComponent) => {\r\n        const toggleDropdownElement = document.getElementById(dropdownComponent.state.toggleDropdownHtmlId);\r\n\r\n        toggleDropdownElement.addEventListener(\"click\", (e) => {\r\n            // Cancels the propagation of the event so that the click event set on the body is not triggered\r\n            e.preventDefault();\r\n            e.stopImmediatePropagation();\r\n\r\n            // Get the parent of the dropdown element\r\n            const container = document.getElementById(dropdownComponent.state.containerHtmlId);\r\n            \r\n            // Get the current dropdown element\r\n            const dropdownElement = document.getElementById(dropdownComponent.state.dropdownHtmlId);\r\n\r\n            // Get the current input\r\n            const input = document.getElementById(dropdownComponent.state.inputHtmlId);\r\n            const icon = document.getElementById(dropdownComponent.state.iconHtmlId);\r\n            \r\n            // Keeps in memory the visible state of the dropdown\r\n            const isDropdownNotVisible = !dropdownElement.classList.contains(\"dropdown-fadeIn\");\r\n\r\n            (0,_reset_dropdown_state_service__WEBPACK_IMPORTED_MODULE_0__.resetDropdownsState)(dropdownComponents);\r\n\r\n            if (isDropdownNotVisible) {\r\n                updatePlaceholder(dropdownComponent.state.inputHtmlId, input);\r\n\r\n                dropdownElement.classList.add(\"dropdown-fadeIn\");\r\n                dropdownElement.classList.add(\"p-4\");\r\n\r\n                icon.classList.toggle(\"icon-rotation\");\r\n\r\n                input.classList.remove(\"rounded\");\r\n                input.classList.add(\"rounded-t\");\r\n                input.focus();\r\n\r\n                container.classList.add(\"lg:w-3/4\");\r\n            }\r\n        });\r\n    });\r\n\r\n    document.body.addEventListener('click', () => {\r\n        (0,_reset_dropdown_state_service__WEBPACK_IMPORTED_MODULE_0__.resetDropdownsState)(dropdownComponents);        \r\n    });\r\n}\r\n\r\n// Updates the placeholder for a visible dropdown\r\nconst updatePlaceholder = (inputId, input) => {\r\n    switch(inputId) {\r\n        case \"ingredients-input\":\r\n            input.placeholder = \"Rechercher un ingrédient\";\r\n            break;\r\n        case \"machine-input\":\r\n            input.placeholder = \"Rechercher un appareil\";\r\n            break;\r\n        case \"ustensils-input\":\r\n            input.placeholder = \"Rechercher un ustensile\";\r\n            break;\r\n        default:\r\n            break;\r\n    }\r\n}\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/services/dropdowns/dropdown-service.js?");

/***/ }),

/***/ "./src/js/services/dropdowns/reset-dropdown-state-service.js":
/*!*******************************************************************!*\
  !*** ./src/js/services/dropdowns/reset-dropdown-state-service.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resetDropdownsState\": () => (/* binding */ resetDropdownsState)\n/* harmony export */ });\n// Collapses all the dropdowns and sets them all to their initial state (dropdown, icon, placeholder and css)\r\nconst resetDropdownsState = (dropdownComponents) => {\r\n    dropdownComponents.forEach((dropdownComponent) => {\r\n        // Get the parent of the dropdown element\r\n        const container = document.getElementById(dropdownComponent.state.containerHtmlId);\r\n        \r\n        // Get the current dropdown element\r\n        const dropdownElement = document.getElementById(dropdownComponent.state.dropdownHtmlId);\r\n\r\n        // Get the current input\r\n        const input = document.getElementById(dropdownComponent.state.inputHtmlId);\r\n        const icon = document.getElementById(dropdownComponent.state.iconHtmlId);\r\n\r\n        if (dropdownElement.classList.contains(\"dropdown-fadeIn\")) {\r\n            icon.classList.toggle(\"icon-rotation\");\r\n        }\r\n\r\n        dropdownElement.classList.remove(\"dropdown-fadeIn\");\r\n        dropdownElement.classList.remove(\"p-4\");\r\n\r\n        input.classList.add(\"rounded\");\r\n        input.classList.remove(\"rounded-t\");\r\n        \r\n        container.classList.remove(\"lg:w-3/4\");\r\n    });\r\n\r\n    document.getElementById(\"ingredients-input\").placeholder = \"Ingrédients\";\r\n    document.getElementById(\"machines-input\").placeholder = \"Appareil\";\r\n    document.getElementById(\"ustensils-input\").placeholder = \"Ustensiles\";\r\n}\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/services/dropdowns/reset-dropdown-state-service.js?");

/***/ }),

/***/ "./src/js/services/filter-elements/display-filter-elements-service.js":
/*!****************************************************************************!*\
  !*** ./src/js/services/filter-elements/display-filter-elements-service.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayFilterElements\": () => (/* binding */ displayFilterElements)\n/* harmony export */ });\nconst displayFilterElements = (dropdownComponent) => {\r\n    const dropdownListHtmlElement = document.getElementById(dropdownComponent.state.dropdownHtmlId);\r\n\r\n    dropdownListHtmlElement.innerHTML = \"\";\r\n\r\n    dropdownComponent.state.filterComponents.forEach((filterComponent) => {\r\n        if (filterComponent.state.displayed && filterComponent.state.isInDisplayedRecipe) {\r\n            dropdownListHtmlElement.insertAdjacentHTML(\"beforeend\", `<button id=\"${filterComponent.state.uuid}\" class=\"${filterComponent.getCssClass()} text-left\">${filterComponent.state.title}</button>`);\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/services/filter-elements/display-filter-elements-service.js?");

/***/ }),

/***/ "./src/js/services/filter-elements/event-filter-element-service.js":
/*!*************************************************************************!*\
  !*** ./src/js/services/filter-elements/event-filter-element-service.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventFilterElement\": () => (/* binding */ eventFilterElement)\n/* harmony export */ });\n/* harmony import */ var _tags_display_tag_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tags/display-tag-service */ \"./src/js/services/tags/display-tag-service.js\");\n/* harmony import */ var _tags_event_tag_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tags/event-tag-service */ \"./src/js/services/tags/event-tag-service.js\");\n/* harmony import */ var _components_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/store */ \"./src/js/components/store.js\");\n/* harmony import */ var _recipes_filter_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recipes/filter-recipe-service */ \"./src/js/services/recipes/filter-recipe-service.js\");\n\r\n\r\n\r\n\r\n\r\nconst eventFilterElement = (dropdownComponent) => {\r\n    dropdownComponent.state.filterComponents.forEach((filterComponent) => {\r\n        let store = new _components_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\r\n        if (filterComponent.state.displayed && filterComponent.state.isInDisplayedRecipe) {\r\n            const filterHtmlElement = document.getElementById(filterComponent.state.uuid);\r\n\r\n            filterHtmlElement.addEventListener(\"click\", (e) => {\r\n                e.preventDefault();\r\n                e.stopImmediatePropagation();\r\n\r\n                if (filterComponent.state.disabled) {\r\n                    return;\r\n                }\r\n\r\n                filterComponent.state.disabled = true;\r\n                filterHtmlElement.disabled = true;\r\n                filterHtmlElement.classList.add(filterComponent.getCssSelectedClass());\r\n                \r\n                store.filtersList.push({\r\n                    type: filterComponent.state.type,\r\n                    title: filterComponent.state.titleMatch\r\n                });\r\n\r\n                (0,_recipes_filter_recipe_service__WEBPACK_IMPORTED_MODULE_3__.filterRecipes)();\r\n\r\n                (0,_tags_display_tag_service__WEBPACK_IMPORTED_MODULE_0__.displayTag)(filterComponent);\r\n                (0,_tags_event_tag_service__WEBPACK_IMPORTED_MODULE_1__.eventTag)(filterComponent);\r\n            });\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/services/filter-elements/event-filter-element-service.js?");

/***/ }),

/***/ "./src/js/services/ingredients/get-ingredients-list-service.js":
/*!*********************************************************************!*\
  !*** ./src/js/services/ingredients/get-ingredients-list-service.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDistinctIngredientsList\": () => (/* binding */ getDistinctIngredientsList)\n/* harmony export */ });\nconst getDistinctIngredientsList = (recipes) => {\r\n    const ingredientsArrays = [];\r\n\r\n    recipes.forEach((recipe) => {\r\n        recipe.ingredients.map((ingredient) => ingredientsArrays.push(ingredient.ingredient));\r\n    });\r\n\r\n    const ingredientsArray = Array.prototype.concat.apply([], ingredientsArrays);\r\n\r\n    const ingredientsSet = [...new Set(ingredientsArray)];\r\n\r\n    return removeDuplicates(ingredientsSet);\r\n}\r\n\r\nconst removeDuplicates = (ingredientsSet) => {\r\n    let distinctIngredients = [];\r\n\r\n    for (let currentIndex = 0; currentIndex < ingredientsSet.length; currentIndex++) {\r\n        let currentValue = ingredientsSet[currentIndex].toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\");\r\n\r\n        if (currentValue[currentValue.length - 1] === \"s\" || currentValue[currentValue.length - 1] === \"x\") {\r\n            const pluralCharacter = currentValue[currentValue.length - 1];\r\n\r\n            // On enlève la dernière lettre (marque du pluriel, \"s\" ou \"x\")\r\n            currentValue = currentValue.substring(0, currentValue.length - 1);\r\n\r\n            // On vérifie si la valeur à l'itérateur currentIndex n'existe pas sans le \"s\" ou le \"x\" à la fin\r\n            if (ingredientsSet.findIndex((item) => item.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\") === currentValue) === -1) {\r\n                currentValue += pluralCharacter;\r\n            }\r\n        }\r\n\r\n        const duplicateIndex = ingredientsSet.findIndex((item) => item.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\") === currentValue);\r\n\r\n        if (duplicateIndex === currentIndex || duplicateIndex === -1) {\r\n            distinctIngredients.push(ingredientsSet[currentIndex]);\r\n        }\r\n    }\r\n\r\n    return distinctIngredients;\r\n}\r\n\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/services/ingredients/get-ingredients-list-service.js?");

/***/ }),

/***/ "./src/js/services/machines/get-machines-list-service.js":
/*!***************************************************************!*\
  !*** ./src/js/services/machines/get-machines-list-service.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDistinctMachineList\": () => (/* binding */ getDistinctMachineList)\n/* harmony export */ });\nconst getDistinctMachineList = (recipes) => {\r\n    const machinesArray = [];\r\n\r\n    recipes.forEach((recipe) => {\r\n        machinesArray.push(recipe.appliance);\r\n    });\r\n\r\n    const machinesSet = [...new Set(machinesArray)];\r\n\r\n    return removeDuplicates(machinesSet);\r\n}\r\n\r\nconst removeDuplicates = (machinesSet) => {\r\n    let distinctMachines = [];\r\n\r\n    for (let currentIndex = 0; currentIndex < machinesSet.length; currentIndex++) {\r\n        let currentValue = machinesSet[currentIndex].toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\");\r\n\r\n        if (currentValue[currentValue.length - 1] === \"s\" || currentValue[currentValue.length - 1] === \"x\") {\r\n            const pluralCharacter = currentValue[currentValue.length - 1];\r\n\r\n            // On enlève la dernière lettre (marque du pluriel, \"s\" ou \"x\")\r\n            currentValue = currentValue.substring(0, currentValue.length - 1);\r\n\r\n            // On vérifie si la valeur à l'itérateur currentIndex n'existe pas sans le \"s\" ou le \"x\" à la fin\r\n            if (machinesSet.findIndex((item) => item.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\") === currentValue) === -1) {\r\n                currentValue += pluralCharacter;\r\n            }\r\n        }\r\n\r\n        const duplicateIndex = machinesSet.findIndex((item) => item.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\") === currentValue);\r\n\r\n        if (duplicateIndex === currentIndex || duplicateIndex === -1) {\r\n            distinctMachines.push(machinesSet[currentIndex]);\r\n        }\r\n    }\r\n\r\n    return distinctMachines;\r\n}\r\n\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/services/machines/get-machines-list-service.js?");

/***/ }),

/***/ "./src/js/services/main-input/main-input-search-service.js":
/*!*****************************************************************!*\
  !*** ./src/js/services/main-input/main-input-search-service.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainInputSearch\": () => (/* binding */ mainInputSearch)\n/* harmony export */ });\n/* harmony import */ var _components_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/store */ \"./src/js/components/store.js\");\n/* harmony import */ var _recipes_filter_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipes/filter-recipe-service */ \"./src/js/services/recipes/filter-recipe-service.js\");\n\r\n\r\n\r\nconst mainInputSearch = () => {\r\n    let store = new _components_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n    const mainInput = document.getElementById(\"input-search\");\r\n\r\n    mainInput.addEventListener(\"input\", (e) => {\r\n        const inputValue = e.target.value;\r\n\r\n        if (inputValue.length >= 3) {\r\n            store.mainInputValue = inputValue.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\");\r\n        } else {\r\n            store.mainInputValue = \"\";\r\n        }\r\n\r\n        (0,_recipes_filter_recipe_service__WEBPACK_IMPORTED_MODULE_1__.filterRecipes)();\r\n    });\r\n}\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/services/main-input/main-input-search-service.js?");

/***/ }),

/***/ "./src/js/services/recipes/display-recipe-service.js":
/*!***********************************************************!*\
  !*** ./src/js/services/recipes/display-recipe-service.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayAllRecipes\": () => (/* binding */ displayAllRecipes)\n/* harmony export */ });\n/* harmony import */ var _components_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/store */ \"./src/js/components/store.js\");\n\r\n\r\nconst displayAllRecipes = () => {\r\n    let store = new _components_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    const recipesContainer = document.getElementById(\"recipes-container\");\r\n\r\n    recipesContainer.innerHTML = \"\";\r\n\r\n    store.recipeComponents.forEach((recipeComponent) => {\r\n        if (recipeComponent.state.displayed) {\r\n            recipesContainer.insertAdjacentHTML(\"beforeend\", displayRecipe(recipeComponent));\r\n        }\r\n    });\r\n}\r\n\r\nconst displayRecipe = (recipeComponent) => {\r\n    if (!recipeComponent.state.displayed) {\r\n        return \"\";\r\n    }\r\n    \r\n    const recipeHtml = `<div>\r\n                        <div class=\"recipe-container bg-silver dark:bg-jet rounded\">\r\n                            <div class=\"img-bg-replacement w-full h-3/6 rounded-t\"></div>\r\n                            <div class=\"recipe-info bg-platinum dark:bg-onyx w-full h-3/6 rounded-b px-6 py-4 flex flex-col items-stretch\">\r\n                                <div class=\"title-time flex justify-between items-center mb-4 dark:text-darkWhite w-full\">\r\n                                    <h3 class=\"font-semibold w-8/12 pr-5\">${recipeComponent.state.name}</h3>\r\n                                    <div class=\"flex items-center\">\r\n                                        <i class=\"far fa-clock mr-1.5\"></i>\r\n                                        <p class=\"font-bold\">${recipeComponent.state.time} min</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"ingredients-description text-xs flex justify-between dark:text-darkWhite\">\r\n                                    <div class=\"ingredients w-2/4 pr-1\">\r\n                                        <ul>\r\n                                            ${getIngredientsHtml(recipeComponent.state.ingredients)}\r\n                                        </ul>\r\n                                    </div>\r\n                                    <div class=\"description w-2/4\">\r\n                                        <p>${recipeComponent.state.description}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>`;\r\n\r\n    return recipeHtml;\r\n}\r\n\r\nconst getIngredientsHtml = (ingredients) => {\r\n    let ingredientsHtml = \"\";\r\n\r\n    ingredients.forEach((ingredient) => {\r\n        let quantityAndUnit = \"\";\r\n        const keys = Object.keys(ingredient);\r\n\r\n        if (keys.length > 1) {\r\n            quantityAndUnit = \": \";\r\n\r\n            for (let i = 1; i < keys.length; i++) {\r\n                quantityAndUnit += ingredient[keys[i]];\r\n\r\n                if (i < keys.length - 1) {\r\n                    quantityAndUnit += \" \";\r\n                }\r\n            }\r\n        }\r\n\r\n        ingredientsHtml += `<li>\r\n                                <p><strong>${ingredient.ingredient}</strong>${quantityAndUnit}</p>\r\n                            </li>`;\r\n    });\r\n\r\n    return ingredientsHtml;\r\n};\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/services/recipes/display-recipe-service.js?");

/***/ }),

/***/ "./src/js/services/recipes/filter-recipe-service.js":
/*!**********************************************************!*\
  !*** ./src/js/services/recipes/filter-recipe-service.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterRecipes\": () => (/* binding */ filterRecipes)\n/* harmony export */ });\n/* harmony import */ var _components_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/store */ \"./src/js/components/store.js\");\n/* harmony import */ var _filter_elements_display_filter_elements_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-elements/display-filter-elements-service */ \"./src/js/services/filter-elements/display-filter-elements-service.js\");\n/* harmony import */ var _filter_elements_event_filter_element_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter-elements/event-filter-element-service */ \"./src/js/services/filter-elements/event-filter-element-service.js\");\n/* harmony import */ var _display_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-recipe-service */ \"./src/js/services/recipes/display-recipe-service.js\");\n\r\n\r\n\r\n\r\n\r\nconst filterRecipes = () => {\r\n    let store = new _components_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n    store.recipeComponents.map((recipeComponent) => {\r\n        let displayRecipe = true;\r\n\r\n        if (store.mainInputValue.length) {\r\n            if (!recipeComponent.state.ingredientsMatch.some((ingredient) => ingredient.includes(store.mainInputValue)) &&\r\n                !recipeComponent.state.descriptionMatch.includes(store.mainInputValue) &&\r\n                !recipeComponent.state.nameMatch.includes(store.mainInputValue)) {\r\n                    displayRecipe = false;\r\n            }\r\n        }\r\n\r\n        store.filtersList.forEach((filter) => {\r\n            switch (filter.type) {\r\n                case \"ingredients\":\r\n                    if (!recipeComponent.state.ingredientsMatch.includes(filter.title)) {\r\n                        displayRecipe = false;\r\n                    }\r\n                    break;\r\n                case \"machines\":\r\n                    if (recipeComponent.state.applianceMatch !== filter.title) {\r\n                        displayRecipe = false;\r\n                    }\r\n                    break;\r\n                case \"ustensils\":\r\n                    if (!recipeComponent.state.ustensilsMatch.includes(filter.title)) {\r\n                        displayRecipe = false;\r\n                    }\r\n                    break;\r\n                default:\r\n                    break;\r\n            }\r\n        });\r\n\r\n        recipeComponent.state.displayed = displayRecipe;\r\n    });\r\n\r\n    (0,_display_recipe_service__WEBPACK_IMPORTED_MODULE_3__.displayAllRecipes)();\r\n    updateFiltersLists();\r\n}\r\n\r\nconst updateFiltersLists = () => {\r\n    let store = new _components_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n    store.ingredientDropdown.state.filterComponents.forEach((filterComponent) => {\r\n        filterComponent.state.isInDisplayedRecipe = store.recipeComponents.some((recipeComponent) => recipeComponent.state.displayed && recipeComponent.state.ingredientsMatch.includes(filterComponent.state.titleMatch));\r\n    });\r\n\r\n    (0,_filter_elements_display_filter_elements_service__WEBPACK_IMPORTED_MODULE_1__.displayFilterElements)(store.ingredientDropdown);\r\n    (0,_filter_elements_event_filter_element_service__WEBPACK_IMPORTED_MODULE_2__.eventFilterElement)(store.ingredientDropdown);\r\n\r\n    store.machineDropdown.state.filterComponents.forEach((filterComponent) => {\r\n        filterComponent.state.isInDisplayedRecipe = store.recipeComponents.some((recipeComponent) => recipeComponent.state.displayed && recipeComponent.state.applianceMatch === filterComponent.state.titleMatch);\r\n    });\r\n\r\n    (0,_filter_elements_display_filter_elements_service__WEBPACK_IMPORTED_MODULE_1__.displayFilterElements)(store.machineDropdown);\r\n    (0,_filter_elements_event_filter_element_service__WEBPACK_IMPORTED_MODULE_2__.eventFilterElement)(store.machineDropdown);\r\n\r\n    store.ustensilDropdown.state.filterComponents.forEach((filterComponent) => {\r\n        filterComponent.state.isInDisplayedRecipe = store.recipeComponents.some((recipeComponent) => recipeComponent.state.displayed && recipeComponent.state.ustensilsMatch.includes(filterComponent.state.titleMatch));\r\n    });\r\n\r\n    (0,_filter_elements_display_filter_elements_service__WEBPACK_IMPORTED_MODULE_1__.displayFilterElements)(store.ustensilDropdown);\r\n    (0,_filter_elements_event_filter_element_service__WEBPACK_IMPORTED_MODULE_2__.eventFilterElement)(store.ustensilDropdown);\r\n}\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/services/recipes/filter-recipe-service.js?");

/***/ }),

/***/ "./src/js/services/tags/display-tag-service.js":
/*!*****************************************************!*\
  !*** ./src/js/services/tags/display-tag-service.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTag\": () => (/* binding */ displayTag)\n/* harmony export */ });\nconst displayTag = (filterComponent) => {\r\n    let tagComponent = filterComponent.state.tagComponent;\r\n\r\n    const tagsContainer = document.getElementById(\"tags-section\");\r\n\r\n    const tagHtml = `<span id=\"${tagComponent.state.tagHtmlId}\" class=\"${tagComponent.getBgColor()} py-2 px-4 mr-3 mb-3 rounded text-white flex items-center\">\r\n                        <p class=\"text-sm mr-2\">${tagComponent.state.title}</p>\r\n                        <button id=\"${tagComponent.state.tagCloseHtmlId}\" class=\"close-tag\">\r\n                            <i class=\"far fa-times-circle text-lg\"></i>\r\n                        </button>\r\n                    </span>`;\r\n\r\n    tagsContainer.insertAdjacentHTML(\"beforeend\", tagHtml);\r\n}\r\n\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/services/tags/display-tag-service.js?");

/***/ }),

/***/ "./src/js/services/tags/event-tag-service.js":
/*!***************************************************!*\
  !*** ./src/js/services/tags/event-tag-service.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventTag\": () => (/* binding */ eventTag)\n/* harmony export */ });\n/* harmony import */ var _components_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/store */ \"./src/js/components/store.js\");\n/* harmony import */ var _recipes_filter_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipes/filter-recipe-service */ \"./src/js/services/recipes/filter-recipe-service.js\");\n\r\n\r\n\r\nconst eventTag = (filterComponent) => {\r\n    let tagComponent = filterComponent.state.tagComponent;\r\n    const tagHtmlElement = document.getElementById(tagComponent.state.tagHtmlId);\r\n    const tagCloseHtmlElement = document.getElementById(tagComponent.state.tagCloseHtmlId);\r\n    let store = new _components_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n    tagCloseHtmlElement.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n        e.stopImmediatePropagation();\r\n\r\n        filterComponent.state.disabled = false;\r\n\r\n        if (filterComponent.state.displayed && filterComponent.state.isInDisplayedRecipe) {\r\n            const filterHtmlElement = document.getElementById(filterComponent.state.uuid);\r\n\r\n            filterHtmlElement.disabled = false;\r\n            filterHtmlElement.classList.remove(filterComponent.getCssSelectedClass());\r\n        }\r\n\r\n        store.filtersList.forEach((element) => {\r\n            if (element.type === filterComponent.state.type && element.title === filterComponent.state.titleMatch) {\r\n                let index = store.filtersList.indexOf(element);\r\n\r\n                store.filtersList.splice(index, 1);\r\n            }\r\n        });\r\n\r\n        (0,_recipes_filter_recipe_service__WEBPACK_IMPORTED_MODULE_1__.filterRecipes)();\r\n\r\n        tagHtmlElement.remove();\r\n    });\r\n}\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/services/tags/event-tag-service.js?");

/***/ }),

/***/ "./src/js/services/top-button/top-button-service.js":
/*!**********************************************************!*\
  !*** ./src/js/services/top-button/top-button-service.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"topButton\": () => (/* binding */ topButton)\n/* harmony export */ });\nconst topButton = () => {\r\n    $(window).scroll(() => {\r\n        const height = $(window).scrollTop();\r\n        \r\n        if (height > 150) {\r\n            $(\"#toTopButton\").fadeIn();\r\n        } else {\r\n            $(\"#toTopButton\").fadeOut();\r\n        }\r\n    });\r\n        \r\n    $(document).ready(() => {\r\n        $(\"#toTopButton\").click((event) => {\r\n            event.preventDefault();\r\n            $(\"html, body\").animate({ scrollTop: 0 }, \"slow\");\r\n            return false;\r\n        });\r\n    });\r\n}\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/services/top-button/top-button-service.js?");

/***/ }),

/***/ "./src/js/services/ustensils/get-ustensils-list-service.js":
/*!*****************************************************************!*\
  !*** ./src/js/services/ustensils/get-ustensils-list-service.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDistinctUstensilsList\": () => (/* binding */ getDistinctUstensilsList)\n/* harmony export */ });\nconst getDistinctUstensilsList = (recipes) => {\r\n    const ustensilsArray = [];\r\n\r\n    recipes.forEach((recipe) => {\r\n        recipe.ustensils.map((ustensil) => ustensilsArray.push(ustensil));\r\n    });\r\n\r\n    const ustensilsSet = [...new Set(ustensilsArray)];\r\n\r\n    return removeDuplicates(ustensilsSet);\r\n}\r\n\r\nconst removeDuplicates = (ustensilsSet) => {\r\n    let distinctUstensils = [];\r\n\r\n    for (let currentIndex = 0; currentIndex < ustensilsSet.length; currentIndex++) {\r\n        let currentValue = ustensilsSet[currentIndex].toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\");\r\n\r\n        if (currentValue[currentValue.length - 1] === \"s\" || currentValue[currentValue.length - 1] === \"x\") {\r\n            const pluralCharacter = currentValue[currentValue.length - 1];\r\n\r\n            // On enlève la dernière lettre (marque du pluriel, \"s\" ou \"x\")\r\n            currentValue = currentValue.substring(0, currentValue.length - 1);\r\n\r\n            // On vérifie si la valeur à l'itérateur currentIndex n'existe pas sans le \"s\" ou le \"x\" à la fin\r\n            if (ustensilsSet.findIndex((item) => item.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\") === currentValue) === -1) {\r\n                currentValue += pluralCharacter;\r\n            }\r\n        }\r\n\r\n        const duplicateIndex = ustensilsSet.findIndex((item) => item.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\") === currentValue);\r\n\r\n        if (duplicateIndex === currentIndex || duplicateIndex === -1) {\r\n            distinctUstensils.push(ustensilsSet[currentIndex]);\r\n        }\r\n    }\r\n\r\n    return distinctUstensils;\r\n}\r\n\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/services/ustensils/get-ustensils-list-service.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;