const _ = require('lodash');
const argv = require('yargs').argv;

/* parametros node .\app.js usuario MitoCode
let comando = process.argv[2];
console.log(comando);
*/


console.log(argv);

/*
if(comando === 'usuario')
{
    if(process.argv[3] === 'MitoCode'){

        let x = { "nombre": "Jaime" }
        let y = { "apodo": "MitoCode" }
        let z = [
            { nombre: "Jaime", apellido: "Medina", edad: 26 },
            { nombre: "Mito", apellido: "Code", edad: 26 }
        ]
        let resultado = _.assign(x,y);
        console.log(resultado);
    }else{
        console.log('Usuario no vàlido');
    }
}
*/

// Utilizando Yargs  node .\app.js --usuario=MitoCode
if(argv.usuario === 'MitoCode')
{
        let x = { "nombre": "Jaime" }
        let y = { "apodo": "MitoCode" }
        let z = [
            { nombre: "Jaime", apellido: "Medina", edad: 26 },
            { nombre: "Mito", apellido: "Code", edad: 26 }
        ]
        let resultado = _.assign(x,y);
        console.log(resultado);
}
else
{
    console.log('Usuario no vàlido');
}


//Bucles
//_.times(3, () => console.log('test'));

//Busqueda
/*let res = _.find(z, {nombre:'Jaime',apellido:'Medina'})
console.log(res);*/