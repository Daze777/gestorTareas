/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   getTasks: () => (/* binding */ getTasks)
/* harmony export */ });
// ¿Qué es localStorage?: Es el almacenamiento de los navegadores de la computadora !NO es una base de datos
// Los || significan o 
var tasks = JSON.parse(localStorage.getItem('tasks')) || {};
// guarda lo que está en localStorage en formato JSON  
// forma en la que podemos tomar y mostrar datos (ej: package.json) a través de un objeto

// Función para agregar tareas 

// exportar la función ¿Por qué? Para permitir que el index pueda importar la función y usarla (otros archivos de Js)
var addTask = function addTask(task) {
  // (tasks) = un parámetro, lo que necesita la función para realizarse
  var newTask = {
    id: Date.now(),
    // el id es el identificador 
    text: task,
    completed: false
  };
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Función para poder traer la lista de tareas

var getTasks = function getTasks() {
  return tasks;
};

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTasks: () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


// Para mostrar la lista de tareas
var renderTasks = function renderTasks() {
  // renderizar: mostrarle al usuario lo que se hace
  var taskList = document.getElementById("task-list");
  taskList.inner.HTML = ""; // 

  var tasks = (0,_task__WEBPACK_IMPORTED_MODULE_0__.getTasks)();
  tasks.forEach(function (task) {
    // forEach, por cada elemento hace la función
    var li = document.createElement("li"); // createElement con los paréntesis salen cosas de HTML
    li.setAttribute("data-id", task.id);

    // Añadir clase sólo si la tarea está completada
    if (task.completed === true) {
      li.classList.add("completed");
    }
    // los ´' se ocupan para variables en HTML
    li.innerHTML = " \n               ".concat(task.text, "\n               <button class=\"delete\"> Eliminar </button>   \n               <button class=\"toggle\"> ").concat(task.completed === false ? "Completar" : "Deshacer", "  </button>     \n          "); // Los : son el else        

    taskList.appendChild(li);
  });
};

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
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");


document.addEventListener("DOMContentLoaded", function () {
  // Hacemos visible la lista de tareas 
  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();

  // Agregar el evento para la función para agregar tareas
  document.getElementById("task-form").addEventListener("submit", function (e) {
    e.preventDefault(); // La (e) es el elemento que hace por predeterminado = reiniciar la página
    // Le indico que NO lo haga

    var taskInput = document.getElementById("task-input");
    if (taskInput.value !== "") {
      // el ! quiere decir, si es diferente 

      // agregamos la tarea                
      (0,_task__WEBPACK_IMPORTED_MODULE_1__.addTask)(taskInput.value);

      // volvemos a cargar la lista de tareas
      (0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();

      // limpiar el input
      document.getElementById("task-input").value = "";
    }
  });
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map