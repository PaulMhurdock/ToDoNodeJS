const argv = require('yargs')
    .command('crear', 'Crear una nueva tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            alias: 'c',
            default: true
        }
    })
    .command('borrar', 'Elimina un elemento de la lista de actividades', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('listar', 'Lista todas las actividades de la lista de tareas')
    .help().argv;

module.exports = {
    argv
}