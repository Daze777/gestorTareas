import { renderTasks } from "./ui";
import { addTask } from "./task";

document.addEventListener("DOMContentLoaded", () => {
// Hacemos visible la lista de tareas 
    renderTasks();

// Agregar el evento para la función para agregar tareas
document.getElementById("task-form").addEventListener("submit", (e) => {
        e.preventDefault();        // La (e) es el elemento que hace por predeterminado = reiniciar la página
    // Le indico que NO lo haga

const taskInput = document.getElementById("task-input");
    if(taskInput.value !== "") { // el ! quiere decir, si es diferente 

        // agregamos la tarea                
        addTask(taskInput.value);    

        // volvemos a cargar la lista de tareas
        renderTasks();

        // limpiar el input
document.getElementById("task-input").value = "";

        } 
    });           
});

