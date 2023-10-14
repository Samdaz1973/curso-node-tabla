const argv = require('yargs')                
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Este es el número hasta donde quieres la tabla'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra la tabla'
    })
    .check( (argv, options) => {
        if(isNaN( argv.b) ){
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;

    // para conectarlo con el archivo app lo tenemos que exportar; aunque es un objeto, se exporta con la palabra clave argv y no con llaves

    module.exports = argv;