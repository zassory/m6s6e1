const fs = require('fs/promises');

const funcionDelete = async({id}) => {
    
    try{
        const tareasArchivo = await fs.readFile('./datos/tareas.txt');
        const arrayTareas = await JSON.parse(tareasArchivo);

        const nuevasTareas = arrayTareas.filter(tareas => tareas.id !== id);

        await fs.writeFile('./datos/tareas.txt',JSON.stringify(nuevasTareas,null, 2));
        console.log('La tarea ha sido eliminada exitosamente');
    }catch(error){
        console.log(error);
    }
}

module.exports = funcionDelete;