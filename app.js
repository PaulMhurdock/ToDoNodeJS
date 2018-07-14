const argv = require('./config/yargs').argv;
const { crearNuevaTarea, obtenerDB } = require('./por-hacer/por-hacer');
const colors = require('colors');
let comando = argv._[0];
switch (comando) {
    case 'crear':
        console.log('Crear por hacer');
        let nuevaTarea = crearNuevaTarea(argv.descripcion);
        console.log(nuevaTarea);
        break;
    case 'listar':
        console.log('Listar tareas');
        let actividades = obtenerDB();
        for (let actividad of actividades) {
            console.log('=========== Por Hacer =========='.green);
            console.log(colors.blue(actividad.descripcion));
            console.log(colors.red('Completo ? : ', actividad.completado));
            console.log('================================'.green);
        }
        break;
    case 'actualizar':
        console.log('Actualizar tarea');
        break;
    default:
        console.log('Comando no reconocido');
        break;
}