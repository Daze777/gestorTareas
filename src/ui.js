import { getTasks} from './task';

// Para mostrar la lista de tareas
export const renderTasks = () => {
            // renderizar: mostrarle al usuario lo que se hace
       const taskList = document.getElementById("task-list");
       taskList.inner.HTML = ""; // 

       const tasks = getTasks();
       tasks.forEach((task) => {  // forEach, por cada elemento hace la función
          const li = document.createElement("li");    // createElement con los paréntesis salen cosas de HTML
          li.setAttribute("data-id", task.id);

          // Añadir clase sólo si la tarea está completada
          if(task.completed === true){
               li.classList.add("completed");
          
          }
     // los ´' se ocupan para variables en HTML
          li.innerHTML = ` 
               ${task.text}
               <button class="delete"> Eliminar </button>   
               <button class="toggle"> ${ task.completed === false ? "Completar" : "Deshacer" }  </button>     
          `;                                                                 // Los : son el else        
          
          taskList.appendChild(li);
     });
};



