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
    .help().argv;

module.exports = {
    argv
}