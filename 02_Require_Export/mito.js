console.log('Mito.js');

let suscriptores = 1000;
//module.exports.suscriptores = suscriptores;
/*
module.exports.suscriptores = 2000;

function saludar(){
    console.log('Holaaaa!!!');
}

module.exports.saludar = function(){
    console.log('Holaaaa!!!');
}

module.exports.subs = suscriptores;
*/
module.exports = {
    subs2 : suscriptores,
    saludar2: function(){
        console.log('Holaaaa!!!');
    }
}