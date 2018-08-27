const fs = require('fs');

console.log('Iniciado')

/* Leer Asincrono
fs.readFile('data.txt','utf-8',(error,data)=>{
    if(error)
    {
        console.log(`Error: ${error}`);
    }
    else{
        console.log(data);
    }
})
*/

/* Leer Sincrono
let data = fs.readFileSync('data.txt','utf-8');

console.log(data)
*/


/* Renombrar
fs.rename('data.txt','data_ren.txt',(error) =>{
    if(error) throw error;
    console.log('Renombreado!');
})
*/

/* Agregar Texto
fs.appendFile('data.txt',' \ngracias',(error) =>{
    if(error) console.log(`Error: ${error}`);;
})
*/

/* Eliminar
fs.unlink('data2.txt',(error) =>{
    if(error) console.log(`Error: ${error}`);
    console.log('Eliminado!');

})
*/

/* Copiar Archivo
fs.createReadStream('data.txt').pipe(fs.createWriteStream('data3.txt'));
*/

/* Leer directorio Asincrono
fs.readdir('../../Node_MitoCode/',(error,files) => {
    files.forEach(file => {
        console.log(file);
    });
});
*/

fs.readdirSync('../../Node_MitoCode/').forEach(file => {
        console.log(file);
});

console.log('Finalizado')