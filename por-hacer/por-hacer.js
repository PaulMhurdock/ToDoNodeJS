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

module.exports = {
    crearNuevaTarea,
    obtenerDB
};