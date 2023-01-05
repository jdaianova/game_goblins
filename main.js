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

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_goblin_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/goblin.png */ \"./src/img/goblin.png\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\nvar target = document.querySelector(\".target\");\nvar score = document.querySelector(\".score span\");\nvar fail = document.querySelector(\".fail span\");\nvar holes = _toConsumableArray(document.querySelectorAll(\".hole\"));\nvar startNewGame = document.querySelector(\".start-new-game\");\nvar popup = document.querySelector(\".popup\");\nvar result = document.querySelector(\".result span\");\nvar scorePoints = 0;\nvar failPoints = 0;\nwindow.addEventListener(\"mousemove\", function (e) {\n  target.style.top = e.pageY + \"px\";\n  target.style.left = e.pageX + \"px\";\n});\nwindow.addEventListener(\"mousedown\", function (e) {\n  console.log(e.target);\n  if (!e.target.closest(\".goblin\")) {\n    failPoints++;\n    fail.textContent = failPoints;\n    if (failPoints === 5) {\n      //alert('game over!');\n      result.textContent = scorePoints;\n      popup.classList.remove(\"inactive\");\n    }\n  }\n  target.classList.add(\"target-boom\");\n});\nwindow.addEventListener(\"mouseup\", function () {\n  target.classList.remove(\"target-boom\");\n});\nvar previousHole = 1;\nvar img = new Image();\nimg.src = _img_goblin_png__WEBPACK_IMPORTED_MODULE_0__;\nimg.classList.add(\"goblin\");\nimg.addEventListener(\"click\", function () {\n  scorePoints++;\n  score.textContent = scorePoints;\n  holes.forEach(function (hole) {\n    hole.innerHTML = \"\";\n  });\n});\nfunction run() {\n  holes.forEach(function (hole) {\n    hole.innerHTML = \"\";\n  });\n  var currentHole = Math.floor(Math.random() * holes.length);\n  if (previousHole === currentHole) {\n    currentHole = currentHole + 1;\n  }\n  holes[currentHole].appendChild(img);\n  previousHole = currentHole;\n}\nsetInterval(run, 1000);\nstartNewGame.addEventListener(\"click\", function () {\n  popup.classList.add(\"inactive\");\n  location.reload();\n});\n\n//# sourceURL=webpack://game_goblins/./src/components/App.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.js\");\n\n\n\n\n//# sourceURL=webpack://game_goblins/./src/index.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>Document</title>\\n</head>\\n\\n<body>\\n    <h1 class=\\\"score\\\">SCORE: <span>0</span></h1>\\n    <h2 class=\\\"fail\\\">Fail: <span>0</span></h2>\\n    <div class=\\\"game\\\">\\n        <div class=\\\"hole\\\">\\n            <!--<img src=\\\"img/goblin.png\\\" alt=\\\"\\\" class=\\\"goblin\\\">-->\\n        </div>\\n        <div class=\\\"hole\\\"></div>\\n        <div class=\\\"hole\\\"></div>\\n        <div class=\\\"hole\\\"></div>\\n        <div class=\\\"hole\\\"></div>\\n        <div class=\\\"hole\\\"></div>\\n        <div class=\\\"hole\\\"></div>\\n        <div class=\\\"hole\\\"></div>\\n        <div class=\\\"hole\\\"></div>\\n        <div class=\\\"hole\\\"></div>\\n        <div class=\\\"hole\\\"></div>\\n        <div class=\\\"hole\\\"></div>\\n        <div class=\\\"hole\\\"></div>\\n        <div class=\\\"hole\\\"></div>\\n        <div class=\\\"hole\\\"></div>\\n        <div class=\\\"hole\\\"></div>\\n    </div>\\n    <div class=\\\"target\\\"></div>\\n    <div class=\\\"popup inactive\\\">\\n        <p>Game over!</p>\\n        <p class=\\\"result\\\">Your score: <span>0</span> </p>\\n        <div class=\\\"start-new-game\\\">Start new game</div>\\n    </div>\\n\\n</body>\\n\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://game_goblins/./src/index.html?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://game_goblins/./src/index.css?");

/***/ }),

/***/ "./src/img/goblin.png":
/*!****************************!*\
  !*** ./src/img/goblin.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/goblin.png\";\n\n//# sourceURL=webpack://game_goblins/./src/img/goblin.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;