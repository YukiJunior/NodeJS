
// modo Assíncrona

function soma(x,callback){
    return setTimeout(() => {
        return callback(null, x + 5000);
    }, 3000); // tempo de intervalo do timeout
};

// Criando uma função callback
// primeiro parametro sempre o erro, 
// segundo parametro resultado ou dados

function resolveSoma(err, resultado){
    if (err) throw err;
    console.log(resultado);
};

soma(200, resolveSoma);




