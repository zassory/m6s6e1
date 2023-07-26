//const { v4: uuidv4 } = require('crypto');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs/promises');

const funcionCreate = async({titulo,contenido}) => {

    console.log('Pasa por el create');
    try{

        const id = uuidv4().slice(0,8);
        const nuevaTarea = { id: id , titulo: titulo,contenido : contenido };

        const tareas = await fs.readFile('./datos/tareas.txt');
        const arrayTareas = JSON.parse(tareas);

        arrayTareas.push(nuevaTarea);

        await fs.writeFile('./datos/tareas.txt',JSON.stringify(arrayTareas, null, 2));
        console.log('Nueva tarea agregada');

    }catch(error){
        console.log(error);
    }
}

module.exports = funcionCreate;