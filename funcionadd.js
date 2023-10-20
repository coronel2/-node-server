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

  module.exports= addTask;