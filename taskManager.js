// Lista de tareas
const tasks = [];
const showOptions = require('./userInterface.js')
// Función para añadir una tarea
function addTask(rl) {
  return new Promise((resolve) => {
    rl.question('Indicador de la tarea: '.inverse.yellow, (indicator) => {
      rl.question('Descripción de la tarea: '.inverse.magenta, (description) => {
        tasks.push({ indicator, description, completed: false });
        console.log('Tarea añadida con éxito.'.inverse.green);
        resolve();
      });
    })
  });
}

// Función para eliminar una tarea
function deleteTask(rl) {
  return new Promise((resolve) => {
    rl.question('Indicador de la tarea a eliminar: '.inverse.blue, (indicator) => {
      const index = tasks.findIndex(task => task.indicator === indicator);
      if (index !== -1) {
        tasks.splice(index, 1);
        console.log(`Tarea con el indicador ${indicator} eliminada con éxito.`.inverse.green);
      } else {
        console.log(`No se encontró ninguna tarea con el indicador ${indicator}.`.inverse.red);
      }
      resolve();
    });
  });
}

// Función para marcar una tarea como completada
function completeTask(rl) {
  return new Promise((resolve) => {
    rl.question('Indicador de la tarea completada: '.inverse.blue, (indicator) => {
      const task = tasks.find(task => task.indicator === indicator);
      if (task) {
        task.completed = true;
        console.log(`Tarea con el indicador ${indicator} marcada como completada.`.underline.green);
      } else {
        console.log(`No se encontró ninguna tarea con el indicador ${indicator}.`.underline.red);
      }
      resolve();
    });
  });
}

// Función para mostrar todas las tareas
function showTasks() {
  console.log('Lista de tareas:'.inverse.cyan);
  tasks.forEach(task => {
    const status = task.completed ? 'Completada'.inverse.green : 'No completada'.inverse.red;
    console.log(`Indicador: ${task.indicator}, Descripción: ${task.description}, Estado: ${status}`);
  });
}

module.exports = { addTask, deleteTask, completeTask, showTasks };
