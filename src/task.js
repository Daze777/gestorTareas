// ¿Qué es localStorage?: Es el almacenamiento de los navegadores de la computadora !NO es una base de datos
                                                      // Los || significan o 
let tasks = JSON.parse(localStorage.getItem('tasks')) || {}; 
          // guarda lo que está en localStorage en formato JSON  
                                                // forma en la que podemos tomar y mostrar datos (ej: package.json) a través de un objeto

// Función para agregar tareas 

// exportar la función ¿Por qué? Para permitir que el index pueda importar la función y usarla (otros archivos de Js)
export const addTask = (task) => {
                // (tasks) = un parámetro, lo que necesita la función para realizarse
       const newTask = {
            id: Date.now(), // el id es el identificador 
            text: task, 
            completed: false
        };
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Función para poder traer la lista de tareas

export const getTasks = () => tasks;
