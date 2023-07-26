const fs = require('fs/promises');

const funcionRead = async() => {
    const tareaArchivo = await fs.readFile('./datos/tareas.txt');    
    const arrayTareas = await JSON.parse(tareaArchivo);

    let contador = 0;

    for(tareas of arrayTareas) {
        const { titulo , contenido , id } = tareas;
        contador++;
        console.log("-----------------------------");
        console.log(`Tarea numero ${contador}:`);
        console.log(`- Titulo: ${titulo}`);
        console.log(`- Contenido: ${contenido}`);
        console.log(`- Id: ${id}`);
        console.log("-----------------------------");
    }
    
}

module.exports = funcionRead;