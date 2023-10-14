//aqui vamos a manejar el código para hacer la multiplicación para dejar el archivo app más limpio

// Para grabar las iteraciones de la multiplicación que está guardada en salida necsitamos instalar el paquete fs, que me permite graba, este paquete es para el manejo de archivos de node; en el fs tengo todo lo que necesito para grabar un archivo; parece que hay una nueva actualización para este paquete en la página de documentación https://nodejs.org/dist/latest-v18.x/docs/api/fs.html

const fs = require('fs');
const colors = require('colors');
/*
const crearArchivo = (base) => {
//convertir la función crearArchivo en new Promise o en una función async

// 👇 en new Promise
const crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
            
            console.log('===================');
            console.log('Tabla del:', base);
            console.log('===================');

            let salida = '';

            for (let i = 1; i <= 10; i++) {
                salida += `${base} X ${i} = ${base * i}\n`;
            }

            console.log(salida);
            //una sintaxis más sencilla que podemos usar es el writeFileSync
                //fs.writeFile(`tabla-${base}.txt`, salida, (err) =>{
                    //if(err) throw err;

                    //console.log(`tabla-${base}.txt creado`);
                //}
            fs.writeFileSync(`tabla-${base}.txt`, salida);
            //con cualquiera de estas funciones ☝ se crea un archivo .txt que queda grabado en disco

            //reemplazamos el console que había primero con el resolve
            resolve(`tabla-${base}.txt`);
            //falta hacer el reject, no fui capaz de hacer la validación con base === !null
        })
}
*/

//👇 Con una función async, por defecto ya está regresenado una promesa
const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    
            //para manejar los errores metemos todo dentro de try y cash
        try {
            
            let salida = ''; 
            let consola = '';

            for (let i = 1; i <= hasta; i++) {
                salida += `${base} X ${i} = ${base * i}\n`;
                consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`;
            }
            if(listar) {
                console.log('==================='.green);
                console.log('Tabla del:', colors.blue (base));
                console.log('==================='.green);

                console.log(consola);
            }

            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            //en vez de resolve, usamos retur
            return `tabla-${base}.txt`;

        } catch (err) {
            throw err;
        }
            

}
    //para conectar este archivo con el de app usamos la siguiente sintaxis
module.exports = {
    crearArchivo
    // crearArchivo: crearArchivo 👈esta sintaxis es redundante y ya no se usa
}