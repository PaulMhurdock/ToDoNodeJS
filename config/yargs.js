const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crear una nueva tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina un elemento de la lista de actividades', {
        descripcion
    })
    .command('listar', 'Lista todas las actividades de la lista de tareas')
    .help().argv;

module.exports = {
    argv
}