
const fs = require('fs/promises');

const funcionUpdate = async({id, titulo , contenido}) => {
    try{

        const tareasArchivo = await fs.readFile('./datos/tareas.txt');
        const arrayTareas = await JSON.parse(tareasArchivo);
        const tareaActual = arrayTareas.findIndex(tarea => tarea.id === id);

        const tituloNuevo = titulo ?  titulo : tareaActual.titulo;
        const contenidoNuevo = contenido ? contenido : tareaActual.contenido;

        arrayTareas[tareaActual].titulo = tituloNuevo;
        arrayTareas[tareaActual].contenido = contenidoNuevo;

        await fs.writeFile('./datos/tareas.txt', JSON.stringify(arrayTareas, null , 2));
        console.log('Tarea actualizada satisfactoriamente');

    }catch(error){
        console.log(error);
    }
}

module.exports = funcionUpdate;