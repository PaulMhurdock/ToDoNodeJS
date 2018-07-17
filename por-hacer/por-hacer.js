const fs = require('fs');
let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err)
            throw new Error('No se pudo guardar de forma persistente', err);
    });
}
const cargarDB = () => {
    try {
        listadoPorHacer = obtenerDB();
    } catch (error) {
        listadoPorHacer = [];
    }
}
const obtenerDB = () => {
    return require('../db/data.json');
}
const crearNuevaTarea = (descripcion) => {
    cargarDB();
    // nuevo elemento
    let nuevaTarea = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(nuevaTarea);
    guardarDB();
    return nuevaTarea;
}
const actualizarTarea = (descripcion, completado) => {
    cargarDB();
    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else
        return false;
}
const borrarTarea = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else
        return false;
}


module.exports = {
    crearNuevaTarea,
    obtenerDB,
    actualizarTarea,
    borrarTarea
};