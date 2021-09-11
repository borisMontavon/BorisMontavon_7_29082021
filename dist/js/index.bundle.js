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

/***/ "./src/js/components/dark-mode.js":
/*!****************************************!*\
  !*** ./src/js/components/dark-mode.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleDarkMode\": () => (/* binding */ toggleDarkMode)\n/* harmony export */ });\nconst toggleDarkMode = () => {\r\n    const switchMode = document.getElementById(\"modeToggle\");\r\n\r\n    if (localStorage.theme === \"dark\" || (!(\"theme\" in localStorage) && window.matchMedia(\"(prefers-color-scheme: dark)\").matches)) {\r\n        document.documentElement.classList.add(\"dark\");\r\n        switchMode.checked = true;\r\n    } else {\r\n        document.documentElement.classList.remove(\"dark\");\r\n        switchMode.checked = false;\r\n    }\r\n\r\n    switchMode.addEventListener(\"change\", (e) => {\r\n        e.preventDefault();\r\n        e.stopImmediatePropagation();\r\n\r\n        if (switchMode.checked) {\r\n            localStorage.theme = \"dark\";\r\n            document.documentElement.classList.add(\"dark\");\r\n        } else {\r\n            localStorage.theme = \"light\";\r\n            document.documentElement.classList.remove(\"dark\");\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/components/dark-mode.js?");

/***/ }),

/***/ "./src/js/components/filter-button.js":
/*!********************************************!*\
  !*** ./src/js/components/filter-button.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleDropdown\": () => (/* binding */ handleDropdown)\n/* harmony export */ });\nconst handleDropdown = () => {\r\n    const dropdowns = document.getElementsByClassName(\"toggle-dropdown\");\r\n\r\n    Array.from(dropdowns).forEach((dropdown) => {\r\n        dropdown.addEventListener(\"click\", (e) => {\r\n            // Cancels the propagation of the event so that the click event set on the body is not triggered\r\n            e.preventDefault();\r\n            e.stopImmediatePropagation();\r\n\r\n            // Get the parent of the element we are focusing\r\n            const container = dropdown.closest(\".imu-container\");\r\n\r\n            // Get the current dropdown element\r\n            const dropdownId = e.currentTarget.dataset.dropdown;\r\n            const dropdownElement = document.getElementById(dropdownId);\r\n            \r\n            // Keeps in memory the visible state of the dropdown\r\n            const isDropdownNotVisible = !dropdownElement.classList.contains(\"dropdown-fadeIn\");\r\n            \r\n            // Get the current input\r\n            const inputId = e.currentTarget.dataset.input;\r\n            const input = document.getElementById(inputId);\r\n            const icon = dropdown.querySelector(\"i\");\r\n\r\n            resetDropdownsState(dropdowns);\r\n\r\n            if (isDropdownNotVisible) {\r\n                updatePlaceholder(inputId, input);\r\n\r\n                dropdownElement.classList.add(\"dropdown-fadeIn\");\r\n                dropdownElement.classList.add(\"p-4\");\r\n                icon.classList.toggle(\"icon-rotation\");\r\n                input.classList.remove(\"rounded\");\r\n                input.classList.add(\"rounded-t\");\r\n                input.focus();\r\n                container.classList.add(\"lg:w-3/4\");\r\n            }\r\n        });\r\n    });\r\n\r\n    // dropdown-list addEventListener() click  preventDefault & stopIm.pro\r\n\r\n    document.body.addEventListener('click', () => {\r\n        resetDropdownsState(dropdowns);        \r\n    });\r\n}\r\n\r\n// Collapses all the dropdowns and sets them all to their initial state (dropdown, icon, placeholder and css)\r\nconst resetDropdownsState = (dropdowns) => {\r\n    Array.from(dropdowns).forEach((dropdown) => {\r\n        // Get the parent of the dropdown element\r\n        const container = dropdown.closest(\".imu-container\");\r\n        // Get the current dropdown element\r\n        const dropdownId = dropdown.dataset.dropdown;\r\n        const dropdownElement = document.getElementById(dropdownId);\r\n        // Get the current input\r\n        const inputId = dropdown.dataset.input;\r\n        const input = document.getElementById(inputId);\r\n        const icon = dropdown.querySelector(\"i\");\r\n\r\n        if (dropdownElement.classList.contains(\"dropdown-fadeIn\")) {\r\n            icon.classList.toggle(\"icon-rotation\");\r\n        }\r\n\r\n        dropdownElement.classList.remove(\"dropdown-fadeIn\");\r\n        dropdownElement.classList.remove(\"p-4\");\r\n        input.classList.add(\"rounded\");\r\n        input.classList.remove(\"rounded-t\");\r\n        container.classList.remove(\"lg:w-3/4\");\r\n    });\r\n\r\n    document.getElementById(\"ingredients-input\").placeholder = \"Ingrédients\";\r\n    document.getElementById(\"machine-input\").placeholder = \"Appareil\";\r\n    document.getElementById(\"ustensils-input\").placeholder = \"Ustensiles\";\r\n}\r\n\r\n// Updates the placeholder for a visible dropdown\r\nconst updatePlaceholder = (inputId, input) => {\r\n    switch(inputId) {\r\n        case \"ingredients-input\":\r\n            input.placeholder = \"Rechercher un ingrédient\";\r\n            break;\r\n        case \"machine-input\":\r\n            input.placeholder = \"Rechercher un appareil\";\r\n            break;\r\n        case \"ustensils-input\":\r\n            input.placeholder = \"Rechercher un ustensile\";\r\n            break;\r\n        default:\r\n            break;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/components/filter-button.js?");

/***/ }),

/***/ "./src/js/components/recipe-display.js":
/*!*********************************************!*\
  !*** ./src/js/components/recipe-display.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"recipeDisplay\": () => (/* binding */ recipeDisplay)\n/* harmony export */ });\nconst recipeDisplay = (recipe) => {\r\n    const recipeHtml = `<div>\r\n                        <div class=\"recipe-container bg-silver dark:bg-jet rounded\">\r\n                            <div class=\"img-bg-replacement w-full h-3/6 rounded-t\"></div>\r\n                            <div class=\"recipe-info bg-platinum dark:bg-onyx w-full h-3/6 rounded-b px-6 py-4 flex flex-col items-stretch\">\r\n                                <div class=\"title-time flex justify-between items-center mb-4 dark:text-darkWhite w-full\">\r\n                                    <h3 class=\"font-semibold w-8/12 pr-5\">${recipe.name}</h3>\r\n                                    <div class=\"flex items-center\">\r\n                                        <i class=\"far fa-clock mr-1.5\"></i>\r\n                                        <p class=\"font-bold\">${recipe.time} min</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"ingredients-description text-xs flex justify-between dark:text-darkWhite\">\r\n                                    <div class=\"ingredients w-2/4 pr-1\">\r\n                                        <ul>\r\n                                            ${getIngredientsHtml(recipe.ingredients)}\r\n                                        </ul>\r\n                                    </div>\r\n                                    <div class=\"description w-2/4\">\r\n                                        <p>${recipe.description}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>`;\r\n\r\n    return recipeHtml;\r\n}\r\n\r\nconst getIngredientsHtml = (ingredients) => {\r\n    let ingredientsHtml = \"\";\r\n\r\n    ingredients.forEach((ingredient) => {\r\n        let quantityAndUnit = \"\";\r\n        const keys = Object.keys(ingredient);\r\n\r\n        if (keys.length > 1) {\r\n            quantityAndUnit = \": \";\r\n\r\n            for (let i = 1; i < keys.length; i++) {\r\n                quantityAndUnit += ingredient[keys[i]];\r\n\r\n                if (i < keys.length - 1) {\r\n                    quantityAndUnit += \" \";\r\n                }\r\n            }\r\n        }\r\n\r\n        ingredientsHtml += `<li>\r\n                                <p><strong>${ingredient.ingredient}</strong>${quantityAndUnit}</p>\r\n                            </li>`;\r\n    });\r\n\r\n    return ingredientsHtml;\r\n};\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/components/recipe-display.js?");

/***/ }),

/***/ "./src/js/components/top-button.js":
/*!*****************************************!*\
  !*** ./src/js/components/top-button.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ topButton)\n/* harmony export */ });\nfunction topButton() {\r\n    $(window).scroll(() => {\r\n        const height = $(window).scrollTop();\r\n        \r\n        if (height > 150) {\r\n            $(\"#toTopButton\").fadeIn();\r\n        } else {\r\n            $(\"#toTopButton\").fadeOut();\r\n        }\r\n    });\r\n        \r\n    $(document).ready(() => {\r\n        $(\"#toTopButton\").click((event) => {\r\n            event.preventDefault();\r\n            $(\"html, body\").animate({ scrollTop: 0 }, \"slow\");\r\n            return false;\r\n        });\r\n    });\r\n}\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/components/top-button.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_display_lists_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/display-lists-service */ \"./src/js/services/display-lists-service.js\");\n/* harmony import */ var _services_filter_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/filter-list */ \"./src/js/services/filter-list.js\");\n/* harmony import */ var _services_ingredients_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/ingredients-list */ \"./src/js/services/ingredients-list.js\");\n/* harmony import */ var _services_machine_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/machine-list */ \"./src/js/services/machine-list.js\");\n/* harmony import */ var _services_ustensils_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/ustensils-list */ \"./src/js/services/ustensils-list.js\");\n/* harmony import */ var _components_filter_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/filter-button */ \"./src/js/components/filter-button.js\");\n/* harmony import */ var _components_recipe_display__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/recipe-display */ \"./src/js/components/recipe-display.js\");\n/* harmony import */ var _services_static_list_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/static-list-container */ \"./src/js/services/static-list-container.js\");\n/* harmony import */ var _components_dark_mode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dark-mode */ \"./src/js/components/dark-mode.js\");\n/* harmony import */ var _components_top_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/top-button */ \"./src/js/components/top-button.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Recipes' data fetch from json\r\nconst getData = async (url) => {\r\n    const response = await fetch(url);\r\n\r\n    return response.json();\r\n};\r\n\r\n// Home page initialization with json's data\r\nconst initializeData = async () => {\r\n    const data = await getData(\"assets/data.json\");\r\n\r\n    // Handle the way the dropdown displays itself\r\n    (0,_components_filter_button__WEBPACK_IMPORTED_MODULE_5__.handleDropdown)();\r\n\r\n    // Render the list of ingredients, machines and ustensils in their respectives inputs\r\n    let singleton = new _services_static_list_container__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\r\n\r\n    singleton.ingredientsList = (0,_services_ingredients_list__WEBPACK_IMPORTED_MODULE_2__.getDistinctIngredientsList)(data);\r\n    singleton.machinesList = (0,_services_machine_list__WEBPACK_IMPORTED_MODULE_3__.getDistinctMachineList)(data);\r\n    singleton.ustensilsList = (0,_services_ustensils_list__WEBPACK_IMPORTED_MODULE_4__.getDistinctUstensilsList)(data);\r\n\r\n    (0,_services_display_lists_service__WEBPACK_IMPORTED_MODULE_0__.displayList)();\r\n    (0,_services_filter_list__WEBPACK_IMPORTED_MODULE_1__.filterList)();\r\n\r\n    // Render all the recipes in its container\r\n    const recipesContainer = document.getElementById(\"recipes-container\");\r\n\r\n    data.forEach((recipe) => {\r\n        recipesContainer.insertAdjacentHTML(\"beforeend\", (0,_components_recipe_display__WEBPACK_IMPORTED_MODULE_6__.recipeDisplay)(recipe));\r\n    });\r\n};\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n    initializeData();\r\n    (0,_components_dark_mode__WEBPACK_IMPORTED_MODULE_8__.toggleDarkMode)();\r\n    (0,_components_top_button__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n});\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/index.js?");

/***/ }),

/***/ "./src/js/services/display-lists-service.js":
/*!**************************************************!*\
  !*** ./src/js/services/display-lists-service.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayList\": () => (/* binding */ displayList)\n/* harmony export */ });\n/* harmony import */ var _static_list_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static-list-container */ \"./src/js/services/static-list-container.js\");\n\r\n\r\nconst displayList = () => {\r\n    let singleton = new _static_list_container__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n    const ingredientsHtmlElement = document.getElementById(\"ingredients-list\");\r\n    const machinesHtmlElement = document.getElementById(\"machines-list\");\r\n    const ustensilsHtmlElement = document.getElementById(\"ustensils-list\");\r\n\r\n    singleton.ingredientsList.forEach((element) => {\r\n        ingredientsHtmlElement.insertAdjacentHTML(\"beforeend\", `<p>${element}</p>`);\r\n    });\r\n\r\n    singleton.machinesList.forEach((element) => {\r\n        machinesHtmlElement.insertAdjacentHTML(\"beforeend\", `<p>${element}</p>`);\r\n    });\r\n\r\n    singleton.ustensilsList.forEach((element) => {\r\n        ustensilsHtmlElement.insertAdjacentHTML(\"beforeend\", `<p>${element}</p>`);\r\n    });\r\n}\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/services/display-lists-service.js?");

/***/ }),

/***/ "./src/js/services/filter-list.js":
/*!****************************************!*\
  !*** ./src/js/services/filter-list.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterList\": () => (/* binding */ filterList)\n/* harmony export */ });\n/* harmony import */ var _static_list_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static-list-container */ \"./src/js/services/static-list-container.js\");\n\r\n\r\nconst filterList = () => {\r\n    const inputs = document.getElementsByClassName(\"dropdown-input\");\r\n\r\n    Array.from(inputs).forEach((input) => {\r\n        const listId = input.dataset.dropdown;\r\n        const listElement = document.getElementById(listId);\r\n\r\n        input.addEventListener(\"input\", (e) => {\r\n            let singleton = new _static_list_container__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n            let listToFilter;\r\n\r\n            switch (listId) {\r\n                case \"ingredients-list\":\r\n                    listToFilter = singleton.ingredientsList;\r\n                    break;\r\n                case \"machines-list\":\r\n                    listToFilter = singleton.machinesList;\r\n                    break;\r\n                case \"ustensils-list\":\r\n                    listToFilter = singleton.ustensilsList;\r\n                    break;\r\n                default:\r\n                    break;\r\n            }\r\n\r\n            let inputValue = e.target.value.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\");\r\n\r\n            if (inputValue === \"\") {\r\n                listElement.innerHTML = \"\";\r\n\r\n                return listToFilter.forEach((element) => {\r\n                    listElement.insertAdjacentHTML(\"beforeend\", `<p>${element}</p>`);\r\n                });\r\n            } else {\r\n                listElement.innerHTML = \"\";\r\n\r\n                let filteredList = listToFilter.filter((element) => element.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\").includes(inputValue));\r\n\r\n                return filteredList.forEach((element) => {\r\n                    listElement.insertAdjacentHTML(\"beforeend\", `<p>${element}</p>`);\r\n                });\r\n            }\r\n        });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/services/filter-list.js?");

/***/ }),

/***/ "./src/js/services/ingredients-list.js":
/*!*********************************************!*\
  !*** ./src/js/services/ingredients-list.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDistinctIngredientsList\": () => (/* binding */ getDistinctIngredientsList)\n/* harmony export */ });\nconst getDistinctIngredientsList = (recipes) => {\r\n    const ingredientsArrays = [];\r\n\r\n    recipes.forEach((recipe) => {\r\n        recipe.ingredients.map((ingredient) => ingredientsArrays.push(ingredient.ingredient));\r\n    });\r\n\r\n    const ingredientsArray = Array.prototype.concat.apply([], ingredientsArrays);\r\n\r\n    const ingredientsSet = [...new Set(ingredientsArray)];\r\n\r\n    return removeDuplicates(ingredientsSet);\r\n}\r\n\r\nconst removeDuplicates = (ingredientsSet) => {\r\n    let distinctIngredients = [];\r\n\r\n    for (let currentIndex = 0; currentIndex < ingredientsSet.length; currentIndex++) {\r\n        let currentValue = ingredientsSet[currentIndex].toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\");\r\n\r\n        if (currentValue[currentValue.length - 1] === \"s\" || currentValue[currentValue.length - 1] === \"x\") {\r\n            const pluralCharacter = currentValue[currentValue.length - 1];\r\n\r\n            // On enlève la dernière lettre (marque du pluriel, \"s\" ou \"x\")\r\n            currentValue = currentValue.substring(0, currentValue.length - 1);\r\n\r\n            // On vérifie si la valeur à l'itérateur currentIndex n'existe pas sans le \"s\" ou le \"x\" à la fin\r\n            if (ingredientsSet.findIndex((item) => item.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\") === currentValue) === -1) {\r\n                currentValue += pluralCharacter;\r\n            }\r\n        }\r\n\r\n        const duplicateIndex = ingredientsSet.findIndex((item) => item.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\") === currentValue);\r\n\r\n        if (duplicateIndex === currentIndex || duplicateIndex === -1) {\r\n            distinctIngredients.push(ingredientsSet[currentIndex]);\r\n        }\r\n    }\r\n\r\n    return distinctIngredients;\r\n}\r\n\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/services/ingredients-list.js?");

/***/ }),

/***/ "./src/js/services/machine-list.js":
/*!*****************************************!*\
  !*** ./src/js/services/machine-list.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDistinctMachineList\": () => (/* binding */ getDistinctMachineList)\n/* harmony export */ });\nconst getDistinctMachineList = (recipes) => {\r\n    const machinesArray = [];\r\n\r\n    recipes.forEach((recipe) => {\r\n        machinesArray.push(recipe.appliance);\r\n    });\r\n\r\n    const machinesSet = [...new Set(machinesArray)];\r\n\r\n    return removeDuplicates(machinesSet);\r\n}\r\n\r\nconst removeDuplicates = (machinesSet) => {\r\n    let distinctMachines = [];\r\n\r\n    for (let currentIndex = 0; currentIndex < machinesSet.length; currentIndex++) {\r\n        let currentValue = machinesSet[currentIndex].toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\");\r\n\r\n        if (currentValue[currentValue.length - 1] === \"s\" || currentValue[currentValue.length - 1] === \"x\") {\r\n            const pluralCharacter = currentValue[currentValue.length - 1];\r\n\r\n            // On enlève la dernière lettre (marque du pluriel, \"s\" ou \"x\")\r\n            currentValue = currentValue.substring(0, currentValue.length - 1);\r\n\r\n            // On vérifie si la valeur à l'itérateur currentIndex n'existe pas sans le \"s\" ou le \"x\" à la fin\r\n            if (machinesSet.findIndex((item) => item.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\") === currentValue) === -1) {\r\n                currentValue += pluralCharacter;\r\n            }\r\n        }\r\n\r\n        const duplicateIndex = machinesSet.findIndex((item) => item.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\") === currentValue);\r\n\r\n        if (duplicateIndex === currentIndex || duplicateIndex === -1) {\r\n            distinctMachines.push(machinesSet[currentIndex]);\r\n        }\r\n    }\r\n\r\n    return distinctMachines;\r\n}\r\n\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/services/machine-list.js?");

/***/ }),

/***/ "./src/js/services/static-list-container.js":
/*!**************************************************!*\
  !*** ./src/js/services/static-list-container.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Singleton)\n/* harmony export */ });\nclass Singleton {\r\n    constructor() {\r\n        if (!Singleton._instance) {\r\n            Singleton._instance = this;\r\n        }\r\n\r\n        return Singleton._instance;\r\n    }\r\n}\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/services/static-list-container.js?");

/***/ }),

/***/ "./src/js/services/ustensils-list.js":
/*!*******************************************!*\
  !*** ./src/js/services/ustensils-list.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDistinctUstensilsList\": () => (/* binding */ getDistinctUstensilsList)\n/* harmony export */ });\nconst getDistinctUstensilsList = (recipes) => {\r\n    const ustensilsArray = [];\r\n\r\n    recipes.forEach((recipe) => {\r\n        recipe.ustensils.map((ustensil) => ustensilsArray.push(ustensil));\r\n    });\r\n\r\n    const ustensilsSet = [...new Set(ustensilsArray)];\r\n\r\n    return removeDuplicates(ustensilsSet);\r\n}\r\n\r\nconst removeDuplicates = (ustensilsSet) => {\r\n    let distinctUstensils = [];\r\n\r\n    for (let currentIndex = 0; currentIndex < ustensilsSet.length; currentIndex++) {\r\n        let currentValue = ustensilsSet[currentIndex].toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\");\r\n\r\n        if (currentValue[currentValue.length - 1] === \"s\" || currentValue[currentValue.length - 1] === \"x\") {\r\n            const pluralCharacter = currentValue[currentValue.length - 1];\r\n\r\n            // On enlève la dernière lettre (marque du pluriel, \"s\" ou \"x\")\r\n            currentValue = currentValue.substring(0, currentValue.length - 1);\r\n\r\n            // On vérifie si la valeur à l'itérateur currentIndex n'existe pas sans le \"s\" ou le \"x\" à la fin\r\n            if (ustensilsSet.findIndex((item) => item.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\") === currentValue) === -1) {\r\n                currentValue += pluralCharacter;\r\n            }\r\n        }\r\n\r\n        const duplicateIndex = ustensilsSet.findIndex((item) => item.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\") === currentValue);\r\n\r\n        if (duplicateIndex === currentIndex || duplicateIndex === -1) {\r\n            distinctUstensils.push(ustensilsSet[currentIndex]);\r\n        }\r\n    }\r\n\r\n    return distinctUstensils;\r\n}\r\n\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/services/ustensils-list.js?");

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