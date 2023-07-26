
const yargs = require('yargs');
const {
    createConfig,
    deleteConfig,
    updateConfig,
} = require('./helpers/config');

const funcionCreate = require('./controllers/funcionCreate');
const funcionRead = require('./controllers/funcionRead');

const args = yargs
    .command('create','Crear una nueva tarea', createConfig , (argv) => funcionCreate(argv))
    .command('read','Mostrar todas las tareas',{}, (argv) => funcionRead())
    .command('update','Actualizar o modificar una tarea',updateConfig)
    .command('delete','Eliminar una tarea',deleteConfig)
    .help()
    .argv

//node app.js create --titulo="nueva tarea" --contenido="Esta es una nueva tarea"
//node app.js create -t="otra tarea" -c="Esta es otra tarea"