
//de esta manera me conecto con el archivo multiplicar
const { crearArchivo} = require('./helpers/multiplicar');

// importo los colores, para colorear de diferentes tonos el código en la terminal git bash de lineas de comando
require('colors');

// de esta manera importo el archivo yargs
const argv = require('./config/yargs');


console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    //👇esto indica que crearArchivo está trabajando en base a una promesa
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
