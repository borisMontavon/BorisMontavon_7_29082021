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

/***/ "./src/js/dark-mode.js":
/*!*****************************!*\
  !*** ./src/js/dark-mode.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleDarkMode\": () => (/* binding */ toggleDarkMode)\n/* harmony export */ });\nconst toggleDarkMode = () => {\r\n    const switchMode = document.getElementById(\"modeToggle\");\r\n\r\n    if (localStorage.theme === \"dark\" || (!(\"theme\" in localStorage) && window.matchMedia(\"(prefers-color-scheme: dark)\").matches)) {\r\n        document.documentElement.classList.add(\"dark\");\r\n        switchMode.checked = true;\r\n    } else {\r\n        document.documentElement.classList.remove(\"dark\");\r\n        switchMode.checked = false;\r\n    }\r\n\r\n    switchMode.addEventListener(\"change\", (e) => {\r\n        e.preventDefault();\r\n        e.stopImmediatePropagation();\r\n\r\n        if (switchMode.checked) {\r\n            localStorage.theme = \"dark\";\r\n            document.documentElement.classList.add(\"dark\");\r\n        } else {\r\n            localStorage.theme = \"light\";\r\n            document.documentElement.classList.remove(\"dark\");\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/dark-mode.js?");

/***/ }),

/***/ "./src/js/filter-button.js":
/*!*********************************!*\
  !*** ./src/js/filter-button.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleDropdown\": () => (/* binding */ handleDropdown)\n/* harmony export */ });\nconst handleDropdown = () => {\r\n    const dropdowns = document.getElementsByClassName(\"toggle-dropdown\");\r\n\r\n    Array.from(dropdowns).forEach((dropdown) => {\r\n        dropdown.addEventListener(\"click\", (e) => {\r\n            // Cancels the propagation of the event so that the click event set on the body is not triggered\r\n            e.preventDefault();\r\n            e.stopImmediatePropagation();\r\n\r\n            // Get the parent of the element we are focusing\r\n            const container = dropdown.closest(\".imu-container\");\r\n\r\n            // Get the current dropdown element\r\n            const dropdownId = e.currentTarget.dataset.dropdown;\r\n            const dropdownElement = document.getElementById(dropdownId);\r\n            \r\n            // Keeps in memory the visible state of the dropdown\r\n            const isDropdownNotVisible = !dropdownElement.classList.contains(\"dropdown-fadeIn\");\r\n            \r\n            // Get the current input\r\n            const inputId = e.currentTarget.dataset.input;\r\n            const input = document.getElementById(inputId);\r\n            const icon = dropdown.querySelector(\"i\");\r\n\r\n            resetDropdownsState(dropdowns);\r\n\r\n            if (isDropdownNotVisible) {\r\n                updatePlaceholder(inputId, input);\r\n\r\n                dropdownElement.classList.add(\"dropdown-fadeIn\");\r\n                dropdownElement.classList.add(\"p-4\");\r\n                icon.classList.toggle(\"icon-rotation\");\r\n                input.classList.remove(\"rounded\");\r\n                input.classList.add(\"rounded-t\");\r\n                input.focus();\r\n                container.classList.add(\"lg:w-3/4\");\r\n            }\r\n        });\r\n    });\r\n\r\n    document.body.addEventListener('click', () => {\r\n        resetDropdownsState(dropdowns);        \r\n    });\r\n}\r\n\r\n// Collapses all the dropdowns and sets them all to their initial state (dropdown, icon, placeholder and css)\r\nconst resetDropdownsState = (dropdowns) => {\r\n    Array.from(dropdowns).forEach((dropdown) => {\r\n        // Get the parent of the dropdown element\r\n        const container = dropdown.closest(\".imu-container\");\r\n        // Get the current dropdown element\r\n        const dropdownId = dropdown.dataset.dropdown;\r\n        const dropdownElement = document.getElementById(dropdownId);\r\n        // Get the current input\r\n        const inputId = dropdown.dataset.input;\r\n        const input = document.getElementById(inputId);\r\n        const icon = dropdown.querySelector(\"i\");\r\n\r\n        if (dropdownElement.classList.contains(\"dropdown-fadeIn\")) {\r\n            icon.classList.toggle(\"icon-rotation\");\r\n        }\r\n\r\n        dropdownElement.classList.remove(\"dropdown-fadeIn\");\r\n        dropdownElement.classList.remove(\"p-4\");\r\n        input.classList.add(\"rounded\");\r\n        input.classList.remove(\"rounded-t\");\r\n        container.classList.remove(\"lg:w-3/4\");\r\n    });\r\n\r\n    document.getElementById(\"ingredients-input\").placeholder = \"Ingrédients\";\r\n    document.getElementById(\"machine-input\").placeholder = \"Appareil\";\r\n    document.getElementById(\"ustensils-input\").placeholder = \"Ustensiles\";\r\n}\r\n\r\n// Updates the placeholder for a visible dropdown\r\nconst updatePlaceholder = (inputId, input) => {\r\n    switch(inputId) {\r\n        case \"ingredients-input\":\r\n            input.placeholder = \"Rechercher un ingrédient\";\r\n            break;\r\n        case \"machine-input\":\r\n            input.placeholder = \"Rechercher un appareil\";\r\n            break;\r\n        case \"ustensils-input\":\r\n            input.placeholder = \"Rechercher un ustensile\";\r\n            break;\r\n        default:\r\n            break;\r\n    }\r\n}\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/filter-button.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _filter_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-button */ \"./src/js/filter-button.js\");\n/* harmony import */ var _dark_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dark-mode */ \"./src/js/dark-mode.js\");\n\r\n\r\n\r\n// Recipes' data fetch from json\r\n// const getData = async (url) => {\r\n//     const response = await fetch(url);\r\n\r\n//     return response.json();\r\n// };\r\n\r\n// // Home page initialization with json's data\r\n// const initializeHomepage = async () => {\r\n//     const data = await getData(\"assets/data.json\");\r\n// };\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n    // initializeHomepage();\r\n    (0,_filter_button__WEBPACK_IMPORTED_MODULE_0__.handleDropdown)();\r\n    (0,_dark_mode__WEBPACK_IMPORTED_MODULE_1__.toggleDarkMode)();\r\n});\n\n//# sourceURL=webpack://borismontavon_7_29082021/./src/js/index.js?");

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