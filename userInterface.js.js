const colors = require('colors');
const { addTask, deleteTask, completeTask, showTasks } = require('./taskManager.js');

// Función para mostrar las opciones disponibles
function showOptions(rl) {
  console.log(`
    1. Añadir tarea.
    2. Eliminar tarea
    3. Completar tarea
    4. Mostrar tareas
    5. Salir
  `.blue);
  rl.question('Seleccione una opción: '.inverse.blue, (choice) => {
    handleChoice(choice, rl);
  });
}

// Función para manejar la opción seleccionada
async function handleChoice(choice, rl) {
  switch (choice) {
    case '1':
      await addTask(rl);
      break;
    case '2':
      await deleteTask(rl);
      break;
    case '3':
      await completeTask(rl);
      break;
    case '4':
      showTasks();
      break;
    case '5':
      rl.close();
      break;
    default:
      console.log('Opción no válida. Intente de nuevo.'.inverse.red);
  }
  if (choice !== '5') {
    showOptions(rl);
  }

}

module.exports = { showOptions };