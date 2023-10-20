const readline = require('readline');
const colors = require('colors');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Lista de tareas
const tasks = [];

// Función para añadir una tarea
function addTask() {
  rl.question('Indicador de la tarea: '.inverse.yellow, (indicator) => {
    rl.question('Descripción de la tarea: '.inverse.magenta, (description) => {
      tasks.push({ indicator, description, completed: false });
      console.log('Tarea añadida con éxito.'.inverse.green);
      showOptions();
    });
  });
}

// Función para eliminar una tarea
function deleteTask() {
  rl.question('Indicador de la tarea a eliminar: '.inverse.blue, (indicator) => {
    const index = tasks.findIndex(task => task.indicator === indicator);
    if (index !== -1) {
      tasks.splice(index, 1);
      console.log(`Tarea con el indicador ${indicator} eliminada con éxito.`.inverse.green);
    } else {
      console.log(`No se encontró ninguna tarea con el indicador ${indicator}.`.inverse.red);
    }
    showOptions();
  });
}

// Función para marcar una tarea como completada
function completeTask() {
  rl.question('Indicador de la tarea completada: '.inverse.blue, (indicator) => {
    const task = tasks.find(task => task.indicator === indicator);
    if (task) {
      task.completed = true;
      console.log(`Tarea con el indicador ${indicator} marcada como completada.`.underline.green);
    } else {
      console.log(`No se encontró ninguna tarea con el indicador ${indicator}.`.underline.red);
    }
    showOptions();
  });
}

// Función para mostrar todas las tareas
function showTasks() {
  console.log('Lista de tareas:'.inverse.cyan);
  tasks.forEach(task => {
    const status = task.completed ? 'Completada'.inverse.green: 'No completada'.inverse.red;
    console.log(`Indicador: ${task.indicator}, Descripción: ${task.description}, Estado: ${status}`);
  });
  showOptions();
}

// Función para mostrar las opciones disponibles
function showOptions() {
  console.log(`
    1. Añadir tarea.
    2. Eliminar tarea
    3. Completar tarea
    4. Mostrar tareas
    5. Salir
  `.blue);
  rl.question('Seleccione una opción: '.inverse.blue, (choice) => {
    handleChoice(choice);
  });
}

// Función para manejar la opción seleccionada
function handleChoice(choice) {
  switch (choice) {
    case '1':
      addTask();
      break;
    case '2':
      deleteTask();
      break;
    case '3':
      completeTask();
      break;
    case '4':
      showTasks();
      break;
    case '5':
      rl.close();
      break;
    default:
      console.log('Opción no válida. Intente de nuevo.'.inverse.red);
      showOptions();
  }
}

// Iniciar el programa
showOptions();